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

export function ValidateDescription(description: string) {
  if (description.length < 10) {
    return "A descrição deve ter pelo menos 10 caracteres.";
  }
  if (description.length > 200) {
    return "A descrição deve ter no máximo 200 caracteres.";
  }
  return null;
}
