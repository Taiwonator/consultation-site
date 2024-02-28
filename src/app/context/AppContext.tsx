'use client';
import { ReactNode, createContext, useState, useEffect } from 'react'
import fetchQuestions from '../lib/fetch-questions';

export type Answer = 'yes' | 'no';

interface Stage {
  key: string,
  index: number,
  complete?: boolean,
  questionId?: string,
  label?: string,
  answer?: Answer
}


export interface Fixture {
  stages: Stage[];
}
export const fixture: Fixture = {
  stages: [
    { key: 'pre', label: 'Click the button to start', index: 0 }
  ],
}

export interface Value {
  loading: boolean;
  currentStage: number;
  stages: Stage[];
  start: () => void;
  isComplete: () => boolean;
  getCurrentStage: () => (Stage[])[number];
  answerCurrentStage: (answer: Answer) => void;
  nextStage: () => void;
  previousStage: () => void;
  reset: () => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<Value | undefined>(undefined);

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentStage, setCurrentStage] = useState(0);
  const [stages, setStages] = useState(fixture.stages);
  const nextStage = () => setCurrentStage((prevStage) => Math.min(prevStage + 1, stages.length));
  const previousStage = () => setCurrentStage((prevStage) => Math.max(0, prevStage - 1));

  const start = () => {
    setCurrentStage(1)
    const updatedStages = stages.map((stage) => {
      if (stage.index === 0) return { ...stage, complete: true }
      return stage
    })
    setStages(updatedStages)
  }

  const reset = () => {
    setCurrentStage(0)
    const updatedStages = stages.map((stage) => ({ ...stage, complete: false }))
    setStages(updatedStages)
  }

  const isComplete = () => {
    const notComplete = stages.filter(stage => !stage.complete)
    if(notComplete.length === 0) {
      console.log('data: ', stages.slice(1))
      return true
    }
    else return false
  }

  const getCurrentStage = () => {
    return stages[currentStage]
  }

  const answerCurrentStage = (answer: Answer) => {
    const updatedStages = stages.map((stage, index) => {
      if (index === currentStage) return {...stage, complete: true, answer, }
      return stage
    })
    setStages(updatedStages)
    nextStage()
  }

  useEffect(() => {
    async function fetchData() {
      const questions = await fetchQuestions();
      const newStages = questions.map((question, index) => ({
        key: question.questionId,
        index: index + 1,
        questionId: question.questionId,
        label: question.label,
      }));
      setStages([
        ...fixture.stages,
        ...newStages,
      ]);
      setLoading(false)
    }
    fetchData();
  }, []); 

  return (
    <AppContext.Provider value={{ 
      loading,
      currentStage,
      stages,
      start,
      reset,
      isComplete,
      getCurrentStage,
      answerCurrentStage,
      nextStage, 
      previousStage 
    }}>
      {children}
    </AppContext.Provider>
)
}

const AppContextConsumer = AppContext.Consumer

export { 
    AppContext,
    AppContextProvider,
    AppContextConsumer,
 }