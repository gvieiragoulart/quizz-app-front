'use client'

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function StepQuizDescription({ value, onChange }: Props) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">Descrição do Quizz</h1>
      <textarea
        className="w-full p-4 border rounded-lg"
        placeholder="Dê uma descrição breve para o seu quizz"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
