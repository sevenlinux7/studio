
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, User, Settings } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">EduPlatform</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-300 hover:text-white transition-colors">Курсы</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">О нас</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Цены</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Контакты</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              <User className="w-4 h-4 mr-2" />
              Войти
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full">
              Регистрация
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <a href="#courses" className="text-gray-300 hover:text-white transition-colors">Курсы</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">О нас</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Цены</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Контакты</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-300 hover:text-white justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Войти
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Регистрация
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
