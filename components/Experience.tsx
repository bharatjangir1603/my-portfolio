export default function Experience() {
  return (
    <section id="experience" className="space-y-12">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-teal-400 font-mono text-xl">02.</span> Experience
        </h3>
        <div className="border-l-2 border-slate-800 pl-6 ml-2 space-y-8">
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-teal-400" />
            <h4 className="text-lg font-bold text-white">Full Stack Developer & Team Lead</h4>
            <p className="text-slate-400 text-sm font-mono">Comfygen Technologies • Oct 2024 — Present</p>
            <p className="text-slate-400 mt-2 max-w-2xl">
              Leading developer teams to architecture and deploy scalable REST APIs, real-time web layers, and robust system components using MERN and Laravel.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-teal-400 font-mono text-xl">03.</span> Education
        </h3>
        <div className="border-l-2 border-slate-800 pl-6 ml-2">
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-700" />
            <h4 className="text-lg font-bold text-white">Bachelor of Computer Applications (BCA)</h4>
            <p className="text-slate-400 text-sm font-mono">Seth Gyaniram Bansidhar Podar College • Graduated 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}