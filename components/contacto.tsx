import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contáctame</h2>
        <p className="mb-6 text-lg">
          ¡Estoy disponible para nuevos proyectos y colaboraciones! Puedes
          contactarme a través de los siguientes medios:
        </p>
        <div className="flex justify-center space-x-8">
          <a
            href="mailto:juankmilo9902@gmail.com"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition"
            aria-label="Correo Electrónico"
          >
            <FaEnvelope className="text-4xl" />
          </a>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition"
            aria-label="GitHub"
          >
            <FaGithub className="text-4xl" />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-4xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
