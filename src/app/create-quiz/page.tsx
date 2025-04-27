'use client'

import { useState } from "react";
import { Time } from "@internationalized/date";
import { useRouter } from 'next/navigation';
import StepQuizName from "./FormSteps/StepQuizName";
import StepQuizDescription from "./FormSteps/StepQuizDescription";
import StepQuizTime from "./FormSteps/StepQuizTime";
import StepQuestionForm from "./FormSteps/StepQuestionForm";
import StepNavigation from "./StepNavigation";
import { QuizInfo, Question } from "./types/quiz";

export default function QuizForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const [quizInfo, setQuizInfo] = useState<QuizInfo>({
    name: '',
    description: '',
    timePerQuestion: new Time(0, 30),
    questions: [],
  });

  const [tempQuestion, setTempQuestion] = useState<Question>({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
  });

  const handleNext = () => {
    if (currentStep >= 3) {
      setQuizInfo(prev => ({
        ...prev,
        questions: [...prev.questions, tempQuestion],
      }));
      setTempQuestion({ 
        question: '', 
        options: ['', '', '', ''], 
        correctAnswer: 0 
        });
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleSubmit = () => {
    console.log("Quiz Finalizado", quizInfo);
    router.push('/sucesso');
  };

  return (
    <section className="w-full h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md">
        {currentStep === 0 && (
          <StepQuizName 
            value={quizInfo.name} 
            onChange={(name) => setQuizInfo({ ...quizInfo, name })} />
        )}
        {currentStep === 1 && (
          <StepQuizDescription 
            value={quizInfo.description} 
            onChange={(description) => setQuizInfo({ ...quizInfo, description })} />
        )}
        {currentStep === 2 && (
          <StepQuizTime 
            onChange={(time) => setQuizInfo({ ...quizInfo, timePerQuestion: time })} />
        )}
        {currentStep >= 3 && (
          <StepQuestionForm
            question={tempQuestion}
            setQuestion={setTempQuestion}
          />
        )}

        <StepNavigation
          currentStep={currentStep}
          totalSteps={53}
          onNext={handleNext}
          onSubmit={handleSubmit}
        />
      </div>
    </section>
  );
}
