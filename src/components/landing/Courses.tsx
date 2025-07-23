import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star, User, Clock } from "lucide-react";

const courses = [
  {
    title: "Introduction to Web Development",
    author: "John Doe",
    duration: "8 hours",
    rating: 4.5,
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "web development code"
  },
  {
    title: "Advanced JavaScript Concepts",
    author: "Jane Smith",
    duration: "12 hours",
    rating: 4.8,
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "javascript code abstract"
  },
  {
    title: "React for Beginners",
    author: "Peter Jones",
    duration: "10 hours",
    rating: 4.7,
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "react logo code"
  },
   {
    title: "Data Science with Python",
    author: "Emily White",
    duration: "20 hours",
    rating: 4.9,
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "python data science"
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Courses</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Explore our most popular courses to start learning something new today.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <Card key={course.title} className="bg-card/50 border-border/30 hover:bg-card/80 transition-all hover:border-primary flex flex-col">
              <CardHeader className="p-0">
                <Image 
                  src={course.imageUrl} 
                  alt={course.title} 
                  data-ai-hint={course.aiHint}
                  width={600}
                  height={400}
                  className="rounded-t-2xl object-cover" 
                />
              </CardHeader>
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="mb-2 text-lg">{course.title}</CardTitle>
                <CardDescription className="flex items-center text-sm text-muted-foreground mb-4">
                    <User className="h-4 w-4 mr-2" />
                    {course.author}
                </CardDescription>
                <div className="flex justify-between items-center text-sm text-muted-foreground mt-auto">
                   <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1.5" />
                    <span>{course.duration}</span>
                   </div>
                   <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1.5 text-yellow-400 fill-yellow-400" />
                    <span>{course.rating}</span>
                   </div>
                </div>
              </div>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-primary/90 hover:bg-primary text-primary-foreground rounded-full shadow-lg">Enroll Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
