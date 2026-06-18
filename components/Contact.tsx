export default function Contact() {
  return (
    <section id="contact" className="text-center py-10 space-y-4 max-w-md mx-auto">
      <h3 className="text-teal-400 font-mono text-sm uppercase">What's Next?</h3>
      <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
      <p className="text-slate-400 text-sm leading-relaxed">
        Whether you have a question, looking for a team lead, or just want to say hi, my inbox is always open.
      </p>
      <div className="pt-4">
        <a 
          href="mailto:bharatjangir511@gmail.com" 
          className="inline-block px-6 py-3 font-mono text-sm text-teal-400 border border-teal-400 rounded hover:bg-teal-400/10 transition-colors"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}