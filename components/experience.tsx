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
          <h3 className="text-2xl font-semibold mb-2">Desarrollador fullstack</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Skepsify | Enero 2024 - Enero 2025
          </p>
          <p className="text-lg leading-relaxed">
            Implementación y soporte de aplicaciones web en Angular.js, utilizando spring framework webflux bases de datos relacionales. Gestión de versiones en Docker y Git, integrando copilot como herramienta de apoyo al desarrollo, con énfasis en escalabilidad y buenas prácticas.
          </p>
        </div>
      </MotionTransition>

      {/* Segunda experiencia */}
      <MotionTransition>
        <div className="max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-2">Desarrollador fullstack</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Raddar Studios | mayo 2025 - septiembre 2025
          </p>
          <p className="text-lg leading-relaxed">
            Implementación y soporte de aplicaciones web en Angular.js y .Net framework (procedimientos almacenados y programación reactiva) SQLserver bases de datos Gestión de versiones en Docker y Git, integrando copilot como herramienta de apoyo al desarrollo, con énfasis en escalabilidad y buenas prácticas.
          </p>
        </div>
      </MotionTransition>

      {/* Tercera experiencia */}
      <MotionTransition>
        <div className="max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-2">Desarrollador fullstack</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Tpi empresarial | enero 2026 - presente
          </p>
          <p className="text-lg leading-relaxed">
            Implementación y soporte de Microservicios en Java Spring webflux, Oracle, usando Angular y AWS EC2, Docker, git, creando soluciones para el cliente.
          </p>
        </div>
      </MotionTransition>

     
    </section>
  );
}
