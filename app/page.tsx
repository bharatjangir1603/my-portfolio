import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-teal-500 selection:text-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-32">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}