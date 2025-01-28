import React from "react";
import { Info } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-24 py-16 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      <div className="flex items-center mb-6">
        <Info className="w-8 h-8 text-blue-500 dark:text-blue-400 mr-2" />
        <h2 className="text-4xl md:text-5xl font-bold">Sobre Mí</h2>
      </div>
      <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
        Soy un profesional en <span className="font-semibold">Ingeniería de Sistemas</span> con experiencia en desarrollo front-end y back-end. Me especializo en el desarrollo de componentes web , control de versiones y el uso de tecnologías como <span className="font-semibold">Java, JavaScript, y sus frameworks Springboot, React, y Angular.js</span>.
      </p>
      <p className="text-lg md:text-xl leading-relaxed max-w-3xl mt-4">
        Mi formación y experiencia me han permitido desarrollar habilidades técnicas sólidas y colaborar eficazmente en equipos de desarrollo. Estoy comprometido con aprender continuamente y contribuir al éxito de proyectos tecnológicos innovadores.
      </p>
      <p className="text-lg md:text-xl leading-relaxed max-w-3xl mt-4">
        Además, tengo experiencia en análisis de datos con <span className="font-semibold">Python</span> y <span className="font-semibold">SQL</span>, así como en la implementación de metodologías ágiles como <span className="font-semibold">Scrum</span> para la gestión eficiente de proyectos.
      </p>
    </section>
  );
}
