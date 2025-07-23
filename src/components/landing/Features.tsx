import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Zap, Scale, Cpu } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "EVM Compatibility",
    description: "Proven security, established stack, tools, standards and enterprise adoption.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Scalability",
    description: "Proven security, established stack, tools, standards and enterprise adoption.",
  },
  {
    icon: <Scale className="h-8 w-8 text-primary" />,
    title: "Security",
    description: "Proven security, established stack, tools, standards and enterprise adoption.",
  },
   {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "EVM Compatibility",
    description: "Proven security, established stack, tools, standards and enterprise adoption.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Features</h2>
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
