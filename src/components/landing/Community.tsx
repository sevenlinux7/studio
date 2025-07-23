import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessagesSquare, Twitter, BookText } from "lucide-react";

const communityLinks = [
  {
    icon: <MessagesSquare className="h-8 w-8 text-primary" />,
    title: "Student Chat",
    description: "Ask questions and chat with fellow learners and instructors on Telegram.",
  },
  {
    icon: <Twitter className="h-8 w-8 text-primary" />,
    title: "Twitter",
    description: "Follow us on Twitter to get the latest news about new courses and updates.",
  },
  {
    icon: <BookText className="h-8 w-8 text-primary" />,
    title: "Forum",
    description: "Want to discuss course topics or share your projects? Join our community forum.",
  },
];

export default function Community() {
  return (
    <section id="community" className="py-12 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Join our community</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Be a part of a global community of learners and educators to lead the future of online education.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityLinks.map((link) => (
            <Card key={link.title} className="bg-card/50 border-border/30 hover:bg-card/80 transition-colors hover:border-primary text-center">
              <CardHeader className="items-center">
                 <div className="p-4 bg-primary/10 rounded-lg w-fit mb-4">{link.icon}</div>
                <CardTitle>{link.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{link.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
