"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, Vote } from "lucide-react"

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Election date: October 19, 2025
    const electionDate = new Date("2025-10-19T08:00:00-05:00") // 8 AM Colombia time

    const updateCountdown = () => {
      const now = new Date()
      const difference = electionDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="countdown" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Elecciones CMJ 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">¡Faltan Solo...!</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cuenta regresiva para las elecciones del Consejo Municipal de Juventud de Aguachica
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            {[
              { label: "Días", value: timeLeft.days, color: "bg-blue-600" },
              { label: "Horas", value: timeLeft.hours, color: "bg-green-600" },
              { label: "Minutos", value: timeLeft.minutes, color: "bg-yellow-600" },
              { label: "Segundos", value: timeLeft.seconds, color: "bg-red-600" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className={`${item.color} text-white rounded-2xl p-6 md:p-8 shadow-lg transform hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-3xl md:text-5xl font-bold mb-2">{item.value.toString().padStart(2, "0")}</div>
                  <div className="text-sm md:text-base font-medium opacity-90">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <Vote className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">19 de Octubre de 2025</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    Información Electoral
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>Horario:</strong> 8:00 AM - 4:00 PM
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>Lugar:</strong> Puestos de votación habilitados
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>Documento:</strong> Cédula de ciudadanía
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Vote className="w-5 h-5 text-green-600" />
                    Cómo Votar
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Busca la casilla <strong>10 - MIRA</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Marca con una <strong>X</strong> clara
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>¡Tu voto cuenta para el futuro!</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200">
                <p className="text-lg font-semibold text-gray-900 mb-2">¡Cada voto construye el futuro de Aguachica!</p>
                <p className="text-gray-700">
                  Participa en las elecciones del CMJ y sé parte del cambio que nuestra juventud necesita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
