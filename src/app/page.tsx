import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Ecosystem from '@/components/landing/Ecosystem';
import Community from '@/components/landing/Community';
import Newsletter from '@/components/landing/Newsletter';
import Footer from '@/components/landing/Footer';
import Partners from '@/components/landing/Partners';
import Courses from '@/components/landing/Courses';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <div id="home">
          <Hero />
        </div>
        <Partners />
        <div id="features">
          <Features />
        </div>
        <div id="courses">
          <Courses />
        </div>
        <div id="ecosystem">
          <Ecosystem />
        </div>
        <div id="community">
          <Community />
        </div>
        <div id="newsletter">
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
}
