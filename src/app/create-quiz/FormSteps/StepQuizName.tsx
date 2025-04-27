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

export function ValidateName(name: string) {
  if (name.length < 3) {
    return "O nome deve ter pelo menos 3 caracteres.";
  }
  if (name.length > 50) {
    return "O nome deve ter no máximo 50 caracteres.";
  }
  return null;
}
