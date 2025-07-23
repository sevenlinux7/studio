
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section id="newsletter" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Subscribe to our Newsletter</h2>
          <p className="mt-2 mb-8 text-muted-foreground text-lg">
            Get the latest news about new courses, special offers, and learning tips.
          </p>
          <div className="flex max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="rounded-l-full rounded-r-none h-12 text-base bg-card/50 border-border/30 focus:border-primary" />
            <Button type="submit" className="rounded-r-full rounded-l-none h-12 bg-primary hover:bg-accent text-primary-foreground px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
