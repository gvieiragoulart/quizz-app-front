import { Time } from "@internationalized/date";

export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizInfo {
  name: string;
  description: string;
  timePerQuestion: Time;
  questions: Question[];
}
