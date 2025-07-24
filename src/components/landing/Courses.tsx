
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, TrendingUp } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      title: "React + TypeScript",
      description: "Создание современных веб-приложений с использованием React и TypeScript",
      price: "15,999₽",
      originalPrice: "25,999₽",
      rating: 4.9,
      students: 2547,
      duration: "12 недель",
      level: "Средний",
      category: "Frontend",
      image: "🚀",
      badge: "Хит продаж"
    },
    {
      title: "Python для Data Science",
      description: "Полный курс по анализу данных и машинному обучению на Python",
      price: "18,999₽",
      originalPrice: "29,999₽",
      rating: 4.8,
      students: 1834,
      duration: "16 недель",
      level: "Начинающий",
      category: "Data Science",
      image: "🐍",
      badge: "Новый курс"
    },
    {
      title: "Mobile App Development",
      description: "Разработка мобильных приложений на React Native для iOS и Android",
      price: "22,999₽",
      originalPrice: "35,999₽",
      rating: 4.9,
      students: 987,
      duration: "20 недель",
      level: "Продвинутый",
      category: "Mobile",
      image: "📱",
      badge: "Премиум"
    }
  ];

  return (
    <section id="courses" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Популярные курсы
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Изучайте самые востребованные технологии с ведущими экспертами индустрии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group overflow-hidden">
              <CardHeader className="relative">
                <div className="absolute top-4 right-4">
                  <Badge className={`${
                    course.badge === 'Хит продаж' ? 'bg-red-500' :
                    course.badge === 'Новый курс' ? 'bg-green-500' :
                    'bg-purple-500'
                  } text-white`}>
                    {course.badge}
                  </Badge>
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-4">
                  {course.image}
                </div>
                
                <CardTitle className="text-xl font-bold text-white mb-2">
                  {course.title}
                </CardTitle>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
                    {course.rating}
                  </div>
                  <Badge variant="outline" className="text-purple-400 border-purple-400/50">
                    {course.level}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-white">{course.price}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">{course.originalPrice}</span>
                  </div>
                  <div className="flex items-center text-green-400 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    Скидка 40%
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                  Записаться на курс
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-3">
            Посмотреть все курсы
          </Button>
        </div>
      </div>
    </section>
  );
}
