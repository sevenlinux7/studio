
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Courses from '@/components/landing/Courses';
import Stats from '@/components/landing/Stats';
import Testimonials from '@/components/landing/Testimonials';
import Pricing from '@/components/landing/Pricing';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <Courses />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
