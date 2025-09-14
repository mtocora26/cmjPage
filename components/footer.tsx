import { Separator } from "@/components/ui/separator"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CMJ</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-blue-600">CMJ Aguachica</h3>
                <p className="text-xs text-gray-600">Juventud que decide</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Trabajando por un futuro mejor para todos los jóvenes de Aguachica. Juntos construimos el cambio que
              nuestra ciudad necesita.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-gray-800">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail size={16} />
                <span className="text-sm">manuel0726tocora@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone size={16} />
                <span className="text-sm">+57 302 678 1363 </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin size={16} />
                <span className="text-sm">Aguachica, Cesar, Colombia</span>
              </div>
            </div>
          </div>

          {/* Social Media and Election Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-gray-800">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/m_tocora26/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/Mtocora.mrclover" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.tiktok.com/@mtocora26" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="TikTok">
                <svg fill="#4a5565" width="20" height="20" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#4a5565">
                  <g id="SVGRepo_iconCarrier"> 
                    <title>tiktok</title> 
                    <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"/> 
                  </g>
                </svg>
              </a>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mt-6 border border-blue-100">
              <h5 className="font-semibold text-blue-800 mb-2">Recordatorio Electoral</h5>
              <p className="text-sm text-blue-700">
                Las elecciones del CMJ se realizarán el 19 de octubre de 2025. Mantente informado a través de nuestras
                redes sociales.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-200" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-sm">© 2025 CMJ Aguachica. Todos los derechos reservados.</p>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Términos de Uso
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Transparencia
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
