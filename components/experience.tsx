import React from "react";
import { Briefcase } from "lucide-react";
import { MotionTransition } from "./MotionTransition";

export function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-24 py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="flex items-center mb-6">
        <Briefcase className="w-8 h-8 text-green-500 dark:text-green-400 mr-2" />
        <h2 className="text-4xl md:text-5xl font-bold">Experiencia</h2>
      </div>

      {/* Primera experiencia */}

      <MotionTransition>
      <div className="max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-2xl font-semibold mb-2">Desarrollador Fullstack Junior</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Skepsify | Junio 2021 - Septiembre 2023</p>
        <p className="text-lg leading-relaxed">
          Implementación y soporte de Microservicios en <span className="font-semibold">Java Spring</span>, 
          <span className="font-semibold">Oracle</span>, utilizando <span className="font-semibold">Angular</span> y 
          <span className="font-semibold">AWS EC2</span>. Gestión con <span className="font-semibold">Docker</span> y 
          <span className="font-semibold">Git</span>, creando soluciones innovadoras para el cliente.
        </p>
      </div>
      </MotionTransition>

      {/* Segunda experiencia */}
      <MotionTransition>
      <div className="max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-2xl font-semibold mb-2">Desarrollador Fullstack</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Tpi empresarial | Enero 2024 - Enero 2025</p>
        <p className="text-lg leading-relaxed">
          Implementación y soporte de aplicaciones web en <span className="font-semibold">React.js </span> y  
          <span className="font-semibold">  Angular.js</span>, utilizando <span className="font-semibold">Java SpringBoot</span>. 
          Gestión de versiones en <span className="font-semibold">Docker</span> y 
          <span className="font-semibold">  Git</span>, con énfasis en escalabilidad y buenas prácticas.
        </p>
      </div>
      </MotionTransition>

     
    </section>
  );
}
