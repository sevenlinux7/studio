import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Packages from '@/components/landing/Packages';
import Testimonials from '@/components/landing/Testimonials';
import Schedule from '@/components/landing/Schedule';
import SignUp from '@/components/landing/SignUp';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Packages />
        <Testimonials />
        <Schedule />
        <SignUp />
      </main>
      <Footer />
    </div>
  );
}
