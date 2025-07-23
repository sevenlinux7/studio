import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border/20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-muted-foreground text-sm">&copy; Copyright 2024. All Rights Reserved.</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a href="#home"><Button variant="link" className="text-muted-foreground">Home</Button></a>
          <a href="#courses"><Button variant="link" className="text-muted-foreground">Courses</Button></a>
          <a href="#features"><Button variant="link" className="text-muted-foreground">Features</Button></a>
          <a href="#community"><Button variant="link" className="text-muted-foreground">Community</Button></a>
          <a href="#"><Button variant="link" className="text-muted-foreground">Terms of Service</Button></a>
          <a href="#"><Button variant="link" className="text-muted-foreground">Privacy Policy</Button></a>
        </div>
      </div>
    </footer>
  );
}
