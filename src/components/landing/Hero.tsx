import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-12 md:py-24 bg-secondary/50">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Master the Markets with Our Expert-Led Trading Course</h2>
          <p className="text-lg text-muted-foreground">
            Unlock your trading potential. Learn proven strategies from industry professionals and start your journey to financial freedom.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-xl transition-shadow">
            Enroll Now
          </Button>
        </div>
        <div className="relative group aspect-video">
          <Card className="overflow-hidden w-full h-full rounded-lg shadow-xl">
            <Image 
              src="https://placehold.co/1280x720.png" 
              alt="Course Trailer Thumbnail" 
              data-ai-hint="trading finance chart"
              width={1280}
              height={720}
              className="w-full h-full object-cover" 
            />
          </Card>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg cursor-pointer">
            <PlayCircle className="h-20 w-20 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
