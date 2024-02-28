interface Question {
    questionId: string;
    label: string;
}

const questions = [
    { questionId: 'isAbove18', label: 'Are you above 18?' },
    { questionId: 'hasAllergies', label: 'Do you have any known allergies?' },
    { questionId: 'takesMedication', label: 'Are you currently taking any medication?' },
    { questionId: 'hasChronicConditions', label: 'Do you have any chronic conditions?' },
    { questionId: 'hadSurgery', label: 'Have you had any surgeries in the past?' },
]

const addedDelay = 0

const fetchQuestions = async (): Promise<Question[]> => 
  new Promise((resolve) => 
  setTimeout(() => resolve(questions), addedDelay))

export default fetchQuestions