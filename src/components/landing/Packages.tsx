import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "$99",
    duration: "1 Month",
    modules: 4,
    features: ["Basics of Trading", "Technical Analysis Intro", "Community Access", "Email Support"],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$249",
    duration: "3 Months",
    modules: 12,
    features: ["All Starter Features", "Advanced Chart Patterns", "Risk Management", "Weekly Webinars", "Priority Support"],
    popular: true,
    cta: "Choose Pro",
  },
  {
    name: "Master",
    price: "$499",
    duration: "6 Months",
    modules: 24,
    features: ["All Pro Features", "Algorithmic Trading", "Personal Mentorship", "Live Trading Sessions", "24/7 Support"],
    popular: false,
    cta: "Become a Master",
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-12 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Choose Your Plan</h2>
          <p className="text-muted-foreground">We have a plan for every level of trader.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <Card key={pkg.name} className={`flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl ${pkg.popular ? 'border-2 border-green-500 shadow-xl relative' : 'shadow-lg'}`}>
              {pkg.popular && <Badge className="absolute -top-3.5 right-5 bg-green-500 text-primary-foreground border-green-500">Most Popular</Badge>}
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.duration} Access / {pkg.modules} Modules</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div className="text-4xl font-bold">{pkg.price}</div>
                <ul className="space-y-2 text-sm">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                 <Button className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md' : pkg.name === 'Master' ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md' : 'bg-primary text-primary-foreground'}`}>
                    {pkg.cta}
                  </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
