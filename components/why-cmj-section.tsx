import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Vote, Users, Megaphone, Target } from "lucide-react"

const benefits = [
  {
    icon: Vote,
    title: "Representación Juvenil",
    description:
      "El CMJ es la voz oficial de los jóvenes ante las autoridades municipales, garantizando que nuestras necesidades sean escuchadas y atendidas.",
  },
  {
    icon: Users,
    title: "Participación Activa",
    description:
      "Permite que los jóvenes participen directamente en la toma de decisiones que afectan su futuro y el desarrollo de la comunidad.",
  },
  {
    icon: Megaphone,
    title: "Promoción de Derechos",
    description:
      "Defiende y promueve los derechos de los jóvenes, asegurando igualdad de oportunidades en educación, empleo y desarrollo personal.",
  },
  {
    icon: Target,
    title: "Proyectos Concretos",
    description:
      "Desarrolla e implementa proyectos específicos para mejorar la calidad de vida de los jóvenes en áreas como educación, empleo y recreación.",
  },
]

export function WhyCMJSection() {
  return (
    <section id="por-que-cmj" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">
            ¿Por qué es importante?
          </Badge>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">
            El Consejo Municipal de Juventud
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            El CMJ es el órgano de participación ciudadana que representa los intereses de los jóvenes entre 14 y 28
            años ante la administración municipal. Es tu oportunidad de ser parte del cambio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-montserrat font-bold text-xl text-card-foreground mb-3 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Stats */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-montserrat font-bold text-primary mb-2">14-28</div>
              <p className="text-muted-foreground">Años de edad para participar</p>
            </div>
            <div>
              <div className="text-3xl font-montserrat font-bold text-secondary mb-2">4</div>
              <p className="text-muted-foreground">Años de mandato</p>
            </div>
            <div>
              <div className="text-3xl font-montserrat font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground">Compromiso con la juventud</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
