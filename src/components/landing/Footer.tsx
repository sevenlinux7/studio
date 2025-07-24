
import { BookOpen, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CryptoEdu</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Провідна платформа для навчання крипто-трейдингу, яка допомагає освоїти торгівлю 
              криптовалютами та побудувати успішну кар'єру в фінансах.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-700 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-pink-600 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Швидкі посилання</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Про нас</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Курси</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Викладачі</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Кар'єра</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                info@cryptoedu.ua
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                +38 (044) 123-45-67
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                Київ, Україна
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 CryptoEdu. Всі права захищені.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Політика конфіденційності</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Умови використання</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Підтримка</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
