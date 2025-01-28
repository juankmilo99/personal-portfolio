import React from "react";

export function Footer() {
  return (
    <footer className="bg-white-200 dark:bg-gray-800 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Juan Camilo Rodriguez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}