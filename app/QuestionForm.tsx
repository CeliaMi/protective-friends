'use client';

import { useState } from 'react';

interface QuestionFormProps {
  question: string;
  options: [string, string];
  onAnswer: () => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ question, options, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    console.log('Respuesta seleccionada:', option);
    onAnswer();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="p-4 max-w-md w-full text-center">{question}</h2>
      <div className="flex gap-9 m-4 w-1/2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            className={`p-4 w-1/2 rounded ${selectedOption === option ? 'bg-blue-400 text-white' : 'bg-gray-700'}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionForm;