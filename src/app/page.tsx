import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Ecosystem from '@/components/landing/Ecosystem';
import Community from '@/components/landing/Community';
import Newsletter from '@/components/landing/Newsletter';
import Footer from '@/components/landing/Footer';
import Partners from '@/components/landing/Partners';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Features />
        <Ecosystem />
        <Community />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
