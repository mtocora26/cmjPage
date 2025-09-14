import Image from "next/image"

export function BallotSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Así es que se vota por CMJ</h2>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            El 19 de octubre de 2025, marca la casilla del Partido MIRA (número 10) para elegir a nuestros candidatos al
            Consejo Municipal de Juventud
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-tarjeton-8CKJ87ZDv8E9j3H0LSd4WUY8gzYDym.png"
              alt="Tarjetón electoral - Vota por CMJ Aguachica en la casilla 10 del Partido MIRA"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-4 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
              <span className="text-2xl">✓</span>
              <span>Marca la casilla 10 - Partido MIRA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
