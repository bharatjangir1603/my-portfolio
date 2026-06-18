import { Gift, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 space-y-6">
      <div className="space-y-2">
        <span className="text-teal-400 font-mono tracking-wider text-sm uppercase">Hi, my name is</span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
          Bharat Jangir.
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-400">
          Full Stack Developer & Team Lead.
        </h2>
      </div>
      <p className="max-w-2xl text-slate-400 text-lg leading-relaxed">
        I specialize in building scalable web applications using the MERN stack, Node.js, and PHP Laravel. As a Team Lead, I bridge the gap between robust backend architecture and seamless frontend experiences.
      </p>
      <div className="flex items-center gap-6 pt-4">
        <a href="https://github.com/bharatjangir1603" target="_blank" className="hover:text-teal-400 transition-colors"><Gift size={24} /></a>
        <a href="https://www.linkedin.com/in/bharat-jangir-719309267/" target="_blank" className="hover:text-teal-400 transition-colors"><Gift size={24} /></a>
        <a href="mailto:bharatjangir511@email.com" className="hover:text-teal-400 transition-colors"><Mail size={24} /></a>
      </div>
    </section>
  );
}