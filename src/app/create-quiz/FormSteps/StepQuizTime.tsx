'use client'

import { Time } from "@internationalized/date";

type Props = {
  onChange: (value: Time) => void;
};

export default function StepQuizTime({ onChange }: Props) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">Tempo por Pergunta</h1>
      <input
        type="number"
        className="w-full p-4 border rounded-lg"
        placeholder="Tempo em segundos (ex: 30)"
        min={5}
        max={300}
        defaultValue={30}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!isNaN(value)) {
            onChange(new Time(Math.floor(value / 60), value % 60));
          }
        }}
      />
      <p className="text-sm text-gray-500 mt-2 text-center">
        Defina quanto tempo cada pergunta terá (entre 5s e 5min).
      </p>
    </>
  );
}
