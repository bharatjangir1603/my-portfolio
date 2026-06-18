export default function Skills() {
  const skillCategories = [
    { title: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript/TypeScript"] },
    { title: "Backend & DB", skills: ["Node.js", "Express.js", "PHP Laravel", "MongoDB", "MySQL", "Redis"] },
    { title: "Specialties & Tools", skills: ["REST APIs", "Real-time Apps (WebSockets)", "Git/GitHub", "Team Leadership"] }
  ];

  return (
    <section id="skills" className="space-y-8">
      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
        <span className="text-teal-400 font-mono text-xl">01.</span> Tech Stack
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <div key={i} className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 transition-all">
            <h4 className="text-teal-400 font-semibold mb-4">{cat.title}</h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span key={j} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}