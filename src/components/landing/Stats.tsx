
export default function Stats() {
  const stats = [
    { number: "10,000+", label: "Активных студентов", description: "Обучаются прямо сейчас" },
    { number: "500+", label: "Экспертных курсов", description: "По всем направлениям" },
    { number: "95%", label: "Трудоустройство", description: "Наших выпускников" },
    { number: "4.9/5", label: "Средний рейтинг", description: "От студентов" }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Цифры говорят сами за себя
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам студентов, которые уже изменили свою жизнь
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
