'use client';
import { useState } from "react";
import QuestionForm from "./QuestionForm";

interface Question {
  question: string;
  options: [string, string];
}

const questions: Question[] = [
  { question: "¿Eres más de planes de..?", options: ["Día", "Noche"] },
  { question: "¿Qué te mola más?", options: ["Pizza", "Hamburguesa"] },
  { question: "¿Dónde imaginas tu vejez?", options: ["Pisazo en la ciudad", "casita de pueblo"] },
  { question: "¿Cine?", options: ["Con palomitas, obvio", "Sin palomitas, el cine es un lugar sagrado"] },
  { question: "¿Eres más de...?", options: ["Hablar, tengo mucho que contar", "Escuchar, tengo mucho que aprender"] },
  { question: "Hace un frío que pela, tienes una deliciosa galleta con pepitas de choco. ¿Con qué la acompañas?", options: ["Café", "Té"] },
  { question: "En una discusión, ¿Qué crees que haces más?", options: ["Tener la razón", "Convencer al otro"] },
  { question: "Siesta ¿Dónde?", options: ["Cama", "Sofá"] },
  { question: "Tienes un año sabático, ¿a dónde te largas?", options: ["Playa", "Montaña"] },
  { question: "¿Qué prefieres?", options: ["Trompeta", "violín"] },
  { question: "Has perdido las llaves de tu casa", options: ["Me voy a casa de otra persona, ya se solucionará más tarde", "Esto se tiene que solucionar ya, hago lo que sea para conseguir las llaves"] },
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
