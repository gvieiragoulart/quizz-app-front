'use client'

import { Question } from "../types/quiz";

type Props = {
  question: Question;
  setQuestion: (q: Question) => void;
};

export default function StepQuestionForm({ question, setQuestion }: Props) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">Cadastrar Pergunta</h1>
      <input
        type="text"
        className="w-full p-4 border rounded-lg mb-4"
        placeholder="Digite a pergunta"
        value={question.question}
        onChange={(e) => setQuestion({ ...question, question: e.target.value })}
      />

      {question.options.map((opt, idx) => (
        <input
          key={idx}
          type="text"
          className="w-full p-3 mb-2 border rounded-lg"
          placeholder={`Alternativa ${idx + 1}`}
          value={opt}
          onChange={(e) => {
            const newOptions = [...question.options];
            newOptions[idx] = e.target.value;
            setQuestion({ ...question, options: newOptions });
          }}
        />
      ))}

      <select
        className="w-full p-3 mt-4 border rounded-lg"
        value={question.correctAnswer}
        onChange={(e) => setQuestion({ ...question, correctAnswer: parseInt(e.target.value) })}
      >
        {question.options.map((_, idx) => (
          <option key={idx} value={idx}>
            Resposta correta: Alternativa {idx + 1}
          </option>
        ))}
      </select>
    </>
  );
}
