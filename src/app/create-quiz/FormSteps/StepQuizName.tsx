'use client'

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function StepQuizName({ value, onChange }: Props) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">Nome do Quizz</h1>
      <input
        type="text"
        className="w-full p-4 border rounded-lg"
        placeholder="Ex: Conhecimentos Gerais"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
