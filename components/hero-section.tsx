"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Users, Vote, Heart } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
  <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-candidatos-6tFhA8lX2reVsp25RY2YNHPdOhuPFB.png"
                alt="Candidatos CMJ Aguachica - Banner Principal"
                className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="text-center space-y-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Candidatos Avalados por el Partido MIRA
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-light">
                La nueva generación de líderes que transformará Aguachica con innovación, participación juvenil y visión
                de futuro.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-blue-600">
              <div className="flex items-center space-x-2">
                <Users size={20} />
                <span className="font-medium">Equipo Unido</span>
              </div>
              <div className="flex items-center space-x-2">
                <Vote size={20} />
                <span className="font-medium">Una Visión</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart size={20} />
                <span className="font-medium">Aguachica</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("propuestas")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                CONOCE NUESTRAS PROPUESTAS
              </Button>

              <div className="text-center">
                <p className="text-blue-800 font-bold text-lg">🗳️ Apóyanos este 19 de octubre marcando así: MIRA</p>
              </div>
            </div>

            <div className="animate-bounce">
              <ArrowDown
                size={28}
                className="mx-auto text-blue-400 cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => scrollToSection("candidatos")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
