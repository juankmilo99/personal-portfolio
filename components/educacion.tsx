import React from "react";
import { GraduationCap } from "lucide-react";
import { FaBook } from "react-icons/fa";
import { MotionTransition } from "./MotionTransition";

export function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-24 py-16 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      <div className="flex items-center mb-6">
        <GraduationCap className="w-8 h-8 text-purple-500 dark:text-purple-400 mr-2" />
        <h2 className="text-4xl md:text-5xl font-bold">Educación</h2>
      </div>
    <MotionTransition>

      <div className="space-y-8 max-w-3xl">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">            
          <h3 className="text-2xl font-semibold">Universidad Santo Tomás Seccional Tunja</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Ingeniería de Sistemas | 2019 - 2023</p>
          <p className="text-lg leading-relaxed">
            Estudios centrados en el desarrollo de software, bases de datos, y tecnologías emergentes como inteligencia artificial y machine learning.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex items-start">
          <FaBook className="w-8 h-8 text-blue-500 dark:text-blue-400 mr-4" />
          <div>
            <h3 className="text-2xl font-semibold">Curso de Spring Boot</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Certificado en Desarrollo Backend con Spring Boot | 2023</p>
            <p className="text-lg leading-relaxed">
              Especialización en creación de aplicaciones Backend, Java, Junit y mockito, con énfasis en escalabilidad y buenas prácticas.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex items-start">
          <FaBook className="w-8 h-8 text-blue-500 dark:text-blue-400 mr-4" />
          <div>
            <h3 className="text-2xl font-semibold">Curso de Angular.js</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Certificado en Desarrollo Frontend con Angular.js | 2023</p>
            <p className="text-lg leading-relaxed">
              Especialización en creación de aplicaciones reactivas(SPA), typescript, y Node.js.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex items-start">
          <FaBook className="w-8 h-8 text-blue-500 dark:text-blue-400 mr-4" />
          <div>
            <h3 className="text-2xl font-semibold">Curso de Next.js</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Certificado en Desarrollo Frontend con Next.js | 2024</p>
            <p className="text-lg leading-relaxed">
              Especialización en creación de aplicaciones modernas utilizando Next.js, React.js, y Node.js.
            </p>
          </div>
        </div>

        
      </div>
      </MotionTransition>
    </section>
  );
}
