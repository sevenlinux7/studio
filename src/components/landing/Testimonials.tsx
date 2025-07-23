import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah J.",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "woman smiling",
    rating: 5,
    testimonial: "This course completely changed my perspective on trading. The lessons are clear, concise, and incredibly effective. I made back the course fee in my first week!"
  },
  {
    name: "Mike T.",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "man professional",
    rating: 5,
    testimonial: "I was a complete beginner, and now I feel confident navigating the markets. The mentorship from the Pro package is worth every penny. Highly recommended!"
  },
  {
    name: "Chen L.",
    avatar: "https://placehold.co/40x40.png",
    avatarHint: "person glasses",
    rating: 4,
    testimonial: "A very solid course with a lot of valuable information. The community is supportive, and the weekly webinars helped clarify a lot of complex topics for me."
  }
];

const getInitials = (name: string) => {
  const names = name.split(' ');
  return names.length > 1 ? `${names[0][0]}${names[1][0]}` : name.substring(0, 2);
}

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Students Say</h2>
          <p className="text-muted-foreground">Real stories from traders who transformed their skills with us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card p-6 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage asChild src={testimonial.avatar} alt={testimonial.name}>
                       <Image src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} width={40} height={40} />
                    </AvatarImage>
                    <AvatarFallback>{getInitials(testimonial.name)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.testimonial}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
