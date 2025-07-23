import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border/20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-muted-foreground text-sm">&copy; Copyright 2024. All Rights Reserved.</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Button variant="link" className="text-muted-foreground">Home</Button>
          <Button variant="link" className="text-muted-foreground">FAQ</Button>
          <Button variant="link" className="text-muted-foreground">Blog</Button>
          <Button variant="link" className="text-muted-foreground">Forum</Button>
          <Button variant="link" className="text-muted-foreground">Terms of Service</Button>
          <Button variant="link" className="text-muted-foreground">Privacy Policy</Button>
        </div>
      </div>
    </footer>
  );
}
