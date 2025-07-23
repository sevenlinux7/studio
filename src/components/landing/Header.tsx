import { Button } from '../ui/button';

const OmchainLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="url(#paint0_linear_header)"/>
    <path d="M16.0002 18.0002L8.00016 13.3335L16.0002 8.66683L24.0002 13.3335L16.0002 18.0002Z" fill="white" fillOpacity="0.5"/>
    <path d="M8 15.3332V17.9998L16 22.6665L24 17.9998V15.3332L16 19.9998L8 15.3332Z" fill="white"/>
    <defs>
      <linearGradient id="paint0_linear_header" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00F0FF"/>
        <stop offset="1" stopColor="#00A3FF"/>
      </linearGradient>
    </defs>
  </svg>
);


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3">
          <OmchainLogo />
          <h1 className="text-2xl font-bold text-foreground">Learnify</h1>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#courses"><Button variant="link" className="text-foreground">Courses</Button></a>
          <a href="#features"><Button variant="link" className="text-foreground">Features</Button></a>
          <a href="#newsletter"><Button variant="link" className="text-foreground">Newsletter</Button></a>
          <a href="#community"><Button variant="link" className="text-foreground">Community</Button></a>
        </div>
        <Button className="bg-primary hover:bg-accent text-primary-foreground rounded-full px-6 shadow-lg">
          Sign Up
        </Button>
      </div>
    </header>
  );
}

