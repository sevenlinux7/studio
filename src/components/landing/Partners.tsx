import { Code, Codepen, Gitlab, Twitter, Youtube } from "lucide-react"

export default function Partners() {
  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="flex justify-around items-center gap-8 flex-wrap">
          <Code className="h-8 w-auto text-muted-foreground hover:text-foreground transition-colors" />
          <Codepen className="h-8 w-auto text-muted-foreground hover:text-foreground transition-colors" />
          <Gitlab className="h-8 w-auto text-muted-foreground hover:text-foreground transition-colors" />
          <Twitter className="h-8 w-auto text-muted-foreground hover:text-foreground transition-colors" />
          <Youtube className="h-8 w-auto text-muted-foreground hover:text-foreground transition-colors" />
        </div>
      </div>
    </section>
  )
}
