"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">CMJ</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl text-gray-800">CMJ Aguachica 2025</h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#hero"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group font-medium"
            >
              Candidatos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#propuestas"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group font-medium"
            >
              Propuestas
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#por-que-cmj"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group font-medium"
            >
              ¿Por qué CMJ?
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#countdown"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group font-medium"
            >
              Elecciones
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg border border-gray-300 hover:border-blue-600 transition-all duration-300 hover:bg-blue-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 border-t border-gray-200 pt-6 bg-white/90 rounded-lg backdrop-blur-sm shadow-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("candidatos")}
                className="text-left text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-50 font-medium"
              >
                Candidatos
              </button>
              <button
                onClick={() => scrollToSection("propuestas")}
                className="text-left text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-50 font-medium"
              >
                Propuestas
              </button>
              <button
                onClick={() => scrollToSection("por-que-cmj")}
                className="text-left text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-50 font-medium"
              >
                ¿Por qué CMJ?
              </button>
              <button
                onClick={() => scrollToSection("countdown")}
                className="text-left text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-50 font-medium"
              >
                Elecciones
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
