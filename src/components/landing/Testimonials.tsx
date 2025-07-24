
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Frontend Developer",
      company: "Яндекс",
      content: "Благодаря курсам платформы я смогла перейти в IT из совершенно другой сферы. Материал подается очень доступно и структурированно.",
      rating: 5,
      avatar: "🧑‍💻"
    },
    {
      name: "Михаил Сидоров",
      role: "Data Scientist",
      company: "Сбербанк",
      content: "Курсы по машинному обучению превзошли все ожидания. Теперь я работаю в одной из ведущих IT-компаний страны.",
      rating: 5,
      avatar: "👨‍🔬"
    },
    {
      name: "Елена Козлова",
      role: "UX/UI Designer",
      company: "ВКонтакте",
      content: "Преподаватели - настоящие профессионалы своего дела. Каждый урок был наполнен практическими знаниями.",
      rating: 5,
      avatar: "🎨"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Истории успеха
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Узнайте, как наши студенты изменили свою карьеру и жизнь
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-purple-400 mb-4 opacity-50" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-purple-400">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
