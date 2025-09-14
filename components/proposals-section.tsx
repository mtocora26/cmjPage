"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, BookOpen, Laptop, Users, Smartphone, ChevronDown, ChevronUp } from "lucide-react"

const proposals = [
  {
    id: 1,
    title: "Que tu voz cuente, que tu voz pese 🗣️",
    icon: MessageCircle,
    summary: "Porque Aguachica necesita jóvenes que participen y decidan",
    details:
      "Vamos a ser el puente entre tus ideas y la administración municipal para que realmente se escuchen. Crearemos espacios de diálogo directo, plataformas digitales de participación y consejos juveniles donde tu opinión tenga peso real en las decisiones que afectan a nuestra ciudad.",
    color: "text-blue-600",
  },
  {
    id: 2,
    title: "Aprender, crecer y compartir 📚✨",
    icon: BookOpen,
    summary: "Talleres, campañas y experiencias formativas para el crecimiento juvenil",
    details:
      "Impulsaremos talleres, campañas y experiencias formativas para que los jóvenes tengan más oportunidades de crecimiento, basadas en valores y ciudadanía. Programas de liderazgo, formación en derechos humanos, y espacios de intercambio de conocimientos entre jóvenes.",
    color: "text-green-600",
  },
  {
    id: 3,
    title: "Más oportunidades, menos barreras 💻🚀",
    icon: Laptop,
    summary: "Capacitaciones en tecnología, emprendimiento y habilidades digitales",
    details:
      "Capacitaciones en tecnología, emprendimiento y habilidades digitales para que los jóvenes puedan acceder a mejores empleos y creen sus propios proyectos. Conectamos con el Eje 3: Empleo, emprendimiento y tecnología para generar oportunidades reales de crecimiento económico.",
    color: "text-purple-600",
  },
  {
    id: 4,
    title: "Juventud que mueve Aguachica 🌱🤝",
    icon: Users,
    summary: "Jornadas de ornato, deporte, cultura y alfabetización digital",
    details:
      "Desde jornadas de ornato, deporte y cultura, hasta alfabetización digital: ser joven es hacer parte de la RENOVACIÓN y vamos a generar los espacios para que pase. Organizaremos eventos comunitarios, festivales culturales y actividades deportivas que unan a la juventud aguachiquense.",
    color: "text-orange-500",
  },
  {
    id: 5,
    title: "Tecnología para crecer, no para excluir 📲⚡",
    icon: Smartphone,
    summary: "Mejor acceso a internet, herramientas digitales y uso responsable de la IA",
    details:
      "Vamos a gestionar mejor acceso a internet, herramientas digitales y uso responsable de la IA para que ningún joven se quede atrás en esta nueva era. Implementaremos puntos de acceso gratuito a internet, capacitaciones en inteligencia artificial y programas de inclusión digital.",
    color: "text-cyan-600",
  },
]

export function ProposalsSection() {
  const [expandedProposal, setExpandedProposal] = useState<number | null>(null)

  const toggleProposal = (id: number) => {
    setExpandedProposal(expandedProposal === id ? null : id)
  }

  return (
    <section id="propuestas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-blue-800 mb-4">
            5 IDEAS PARA TRANSFORMAR LA JUVENTUD Y NO MORIR EN EL INTENTO</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Propuestas concretas y dinámicas para que los jóvenes de Aguachica sean protagonistas de la renovación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {proposals.map((proposal) => {
            const IconComponent = proposal.icon
            const isExpanded = expandedProposal === proposal.id

            return (
              <Card
                key={proposal.id}
                className="group hover:shadow-lg transition-all duration-300 bg-white border-gray-200 cursor-pointer hover:border-blue-300"
                onClick={() => toggleProposal(proposal.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gray-100 ${proposal.color}`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-montserrat font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                        {proposal.title}
                      </CardTitle>
                    </div>
                    <div className="text-gray-500">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4">{proposal.summary}</p>

                  {isExpanded && (
                    <div className="border-t border-gray-200 pt-4 animate-fade-in-up">
                      <p className="text-gray-700 leading-relaxed">{proposal.details}</p>
                    </div>
                  )}

                  <Button variant="ghost" size="sm" className="mt-4 text-blue-600 hover:text-white hover:bg-blue-600">
                    {isExpanded ? "Ver menos" : "Leer más"}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
