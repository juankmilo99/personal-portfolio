import React from "react";

export function Inicio() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-12"
    >
      <div className="flex-shrink-0">
        <img
          src="/profile.jpg" // Reemplaza con la URL de tu foto
          alt="Tu Foto"
          className="rounded-full w-48 h-48 md:w-60 md:h-60 object-cover border-4 border-gray-300 dark:border-gray-700"
        />
      </div>
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Juan Camilo Rodriguez
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
          Ingeniero de Sistemas | Desarrollador Full Stack
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-300">
          Con experiencia en desarrollo de aplicaciones web utilizando React y Angular, y conocimientos en tecnologías backend como java Spring Boot y NodeJs Express. Apasionado por crear soluciones innovadoras y escalables.
        </p>
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <a
            href="https://github.com/juankmilo99" // Reemplaza con tu perfil de GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.793-.26.793-.577 0-.285-.011-1.243-.016-2.243-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.774.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.526.117-3.176 0 0 1.007-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.292-1.552 3.297-1.23 3.297-1.23.653 1.65.241 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.624-5.476 5.921.43.372.815 1.103.815 2.222 0 1.606-.014 2.896-.014 3.292 0 .319.192.694.799.576C20.565 21.798 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/juan-camilo-rodriguez-salamanca-5186b6227/" // Reemplaza con tu perfil de LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 20h-3v-10h3v10zm-1.5-11.431c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.431h-3v-5.604c0-1.337-.027-3.062-1.867-3.062-1.867 0-2.153 1.46-2.153 2.967v5.699h-3v-10h2.881v1.367h.041c.401-.757 1.381-1.557 2.845-1.557 3.04 0 3.604 2.001 3.604 4.6v5.59z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
