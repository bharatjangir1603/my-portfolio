import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Streamo: Live Streaming Platform",
      desc: "A high-concurrency real-time live streaming web application built using web-sockets and scalable node.js streams.",
      tech: ["Node.js", "Next.js", "WebSockets", "MongoDB", "Redis", "ZEGOCLOUD", "Google Pay"]
    },
    {
      title: "Thermo: Construction ERP Portal",
      desc: "An enterprise-grade resource planning system designed to monitor logistics, payroll, and materials for large projects.",
      tech: ["React.js", "Redux", "MongoDB", "Tailwind CSS", "Node.js"]
    },
    {
      title: "Telgross: Online Learning System",
      desc: "A full-featured EdTech platform containing course rollouts, progression trackers, and payment gateways.",
      tech: ["React.js", "Node.js", "Redux", "MongoDB", "REST APIs", "Stripe"]
    }
  ];

  return (
    <section id="projects" className="space-y-8">
      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
        <span className="text-teal-400 font-mono text-xl">04.</span> Featured Work
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-xl flex flex-col justify-between hover:-translate-y-1 transition-all group">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">{proj.title}</h4>
                <ExternalLink size={18} className="text-slate-500 hover:text-white cursor-pointer" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{proj.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((t, j) => (
                <span key={j} className="text-xs font-mono text-teal-400/80">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}