
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, Trophy, Zap, Shield, Globe } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "ИИ-ассистент",
      description: "Персональный помощник для изучения материала и ответов на вопросы",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Живое сообщество",
      description: "Общайтесь с единомышленниками и экспертами в реальном времени",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Сертификаты",
      description: "Получайте признанные индустрией сертификаты после прохождения курсов",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Быстрый старт",
      description: "Начните обучение за 5 минут с нашей упрощенной системой",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Гарантия качества",
      description: "100% возврат средств в течение 30 дней, если не понравится",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Доступ везде",
      description: "Учитесь с любого устройства в любой точке мира",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мы создали платформу будущего для обучения. Современные технологии встречаются с проверенными методиками.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-white/20 group">
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
