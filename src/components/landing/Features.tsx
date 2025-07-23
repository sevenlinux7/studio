import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Video, Users, Award } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with real-world experience and insights.",
  },
  {
    icon: <Video className="h-8 w-8 text-primary" />,
    title: "Interactive Learning",
    description: "Engage with hands-on projects, quizzes, and a supportive community.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Community Support",
    description: "Connect with peers and mentors in our active learning community.",
  },
   {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Career Growth",
    description: "Gain certificates and skills to advance your career and achieve your goals.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card/50 border-border/30 hover:bg-card/80 transition-colors hover:border-primary">
              <CardHeader>
                <div className="p-4 bg-primary/10 rounded-lg w-fit mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
