import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Learning Ecosystem</h2>
                <p className="text-muted-foreground text-lg">
                Our ecosystem is a collection of tools and resources that work together to provide a powerful and user-friendly learning infrastructure.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <Card className="bg-card/50 border-border/30 hover:border-primary transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <span>Explore Tools</span>
                            <ArrowRight className="h-5 w-5 text-primary" />
                        </CardTitle>
                    </CardHeader>
                </Card>
                 <Card className="bg-card/50 border-border/30 hover:border-primary transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <span>Become an Instructor</span>
                            <ArrowRight className="h-5 w-5 text-primary" />
                        </CardTitle>
                    </CardHeader>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
