
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Базовый",
      price: "999",
      period: "/месяц",
      description: "Идеально для начинающих",
      features: [
        "Доступ к 50+ курсам",
        "Базовая поддержка",
        "Сертификаты о прохождении",
        "Мобильное приложение"
      ],
      buttonText: "Начать бесплатно",
      popular: false
    },
    {
      name: "Профессиональный",
      price: "1999",
      period: "/месяц",
      description: "Для серьезного развития",
      features: [
        "Доступ ко всем курсам",
        "Приоритетная поддержка",
        "Все сертификаты",
        "Живые вебинары",
        "1-на-1 менторство",
        "Проектное портфолио"
      ],
      buttonText: "Выбрать план",
      popular: true
    },
    {
      name: "Корпоративный",
      price: "9999",
      period: "/месяц",
      description: "Для команд и компаний",
      features: [
        "Все возможности Pro",
        "До 50 пользователей",
        "Корпоративные курсы",
        "Аналитика прогресса",
        "Персональный менеджер",
        "Кастомизация платформы"
      ],
      buttonText: "Связаться с нами",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Выберите свой план
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Начните с бесплатного тарифа или выберите план, который подходит именно вам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative bg-white/5 backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
              plan.popular 
                ? 'border-purple-500 bg-white/10' 
                : 'border-white/10 hover:border-white/20'
            }`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
                  <Star className="w-4 h-4 mr-1" />
                  Популярный
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                      : 'bg-white/10 hover:bg-white/20 border border-white/20'
                  } text-white font-semibold py-3 rounded-full transition-all duration-300`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            💳 30 дней возврата средств • 🎯 Без скрытых платежей • ⚡ Мгновенный доступ
          </p>
        </div>
      </div>
    </section>
  );
}
