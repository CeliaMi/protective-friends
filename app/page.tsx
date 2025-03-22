'use client';
import { useState } from "react";
import QuestionForm from "./QuestionForm";

interface Question {
  question: string;
  options: [string, string];
}

const questions: Question[] = [
  { question: "¿Eres más de?", options: ["Día", "Noche"] },
  { question: "¿Qué te mola más?", options: ["Pizza", "Hamburguesa"] },
  { question: "¿Dónde imaginas que pasarás tu jubilación?", options: ["Ciudad", "Pueblo"] },
  { question: "¿Cine?", options: ["Con palomitas, obvio", "Sin palomitas, el cine es un lugar sagrado"] },
  { question: "Si hicieras un resumen de todas tus conversaciones, ¿eres más de...?", options: ["Hablar, tengo mucho que contar", "Escuchar, tengo mucho que aprender"] },
  { question: "Hace un frío que pela, tienes una deliciosa galleta con pepitas de choco. ¿Con qué la acompañas?", options: ["Café", "Té"] },
  { question: "En un debate, ¿Qué crees que haces más?", options: ["Observar y pensar", "Compartir y preguntar"] },
  { question: "Tienes un año sabático, ¿a dónde te largas?", options: ["Playa", "Montaña"] },
];

export default function Home() {
  const [answeredCount, setAnsweredCount] = useState(0);

  const handleAnswer = () => {
    setAnsweredCount((prev) => prev + 1);
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">
      {/* Barra de progreso */}
      <div className="w-full h-4 bg-gray-700">
        <div
          className="h-full bg-blue-400 transition-all"
          style={{ width: `${(answeredCount / questions.length) * 100}%` }}
        />
      </div>

      {answeredCount < questions.length ? (
        <QuestionForm
          question={questions[answeredCount].question}
          options={questions[answeredCount].options}
          onAnswer={handleAnswer}
        />
      ) : (
        <div className="h-screen flex flex-col items-center justify-center">
          <h2 className="p-4 max-w-md w-full text-center"> Danos unos segundos, estamos consultando nuestras bases de datos de conexiones místicas entre especies. </h2>
        </div>
      )}
    </section>
  );
}
