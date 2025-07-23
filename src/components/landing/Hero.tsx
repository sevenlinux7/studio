import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/50 to-primary/10 z-0"></div>
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6 relative z-10">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">Unlock Your Potential</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
            Explore a world of knowledge with our expert-led online courses. Start your learning journey today and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground rounded-full shadow-lg text-base px-8 py-6">
              Browse Courses
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-foreground/30 hover:bg-foreground/5 text-foreground rounded-full shadow-lg text-base px-8 py-6">
              Become a Member
            </Button>
          </div>
        </div>
        <div className="relative group aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl opacity-50"></div>
          <Image 
            src="https://placehold.co/800x800.png" 
            alt="Person learning at a computer" 
            data-ai-hint="person learning computer"
            width={800}
            height={800}
            className="w-full h-full object-contain relative z-10" 
          />
        </div>
      </div>
    </section>
  );
}
