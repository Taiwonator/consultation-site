'use client';

import { useState, useContext } from 'react'
import Image from "next/image";
import cx from 'classnames'
import Button from "@/app/components/Primitive/Button";
import { Answer, AppContext } from '@/app/context/AppContext'


export default function Home() {
    const context = useContext(AppContext)

  if (!context) return <p>Loading...</p>

  const { 
    currentStage,
    start,
    reset,
    isComplete,
    answerCurrentStage,
    previousStage,
    getCurrentStage 
  } = context;

  const { label, answer } = getCurrentStage() || {};

  if(isComplete()) return (
    <section className={cx(
      'flex max-w-6xl px-8 items-center justify-center min-h-80 mx-auto',
      "md:min-h-96"
    )}>
      <div className="flex flex-col items-center space-y-8 text-center">
        <h2>Consultation Complete, check the logs for your results :)</h2>
        <Button onClick={() => reset()}>Restart Consultation</Button>
      </div>
    </section>
  )

  return (
    <section className={cx(
      'flex max-w-6xl px-8 items-center justify-center min-h-80 mx-auto',
      "md:min-h-96"
    )}>
      <div className="flex flex-col items-center space-y-8">
        <h1>{label}</h1>
        {(currentStage === 0) 
          ? <Button onClick={() => start()}>Start Consultation</Button>
          : (
          <QuestionArea 
            answer={answer} 
            answerCurrentStage={answerCurrentStage} 
            previousStage={previousStage}
          />
        )}
      </div>
    </section>
  )
}

interface QuestionAreaProps {
  answer?: string;
  answerCurrentStage: (answer: Answer) => void;
  previousStage: () => void;
}

const QuestionArea: React.FC<QuestionAreaProps> = ({ answer, answerCurrentStage, previousStage }) => {
  return (
   <div className="flex flex-col space-y-8 items-center">
      <div className="flex flex-row space-x-4">
        <Button size="large" active={answer === 'yes'} onClick={() => answerCurrentStage('yes')}>Yes</Button>
        <Button size="large" active={answer === 'no'} onClick={() => answerCurrentStage('no')}>No</Button>
      </div>
      <Button size="small" onClick={() => previousStage()}>Back</Button>
    </div>
  )
}