import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const projectTypes = [
  "Sculpture / Art Piece",
  "Furniture",
  "Curved Staircase",
  "Railing / Gate",
  "Outdoor (Fire Pit, Oven, etc.)",
  "Commercial / Signage",
  "Something Else",
];

export default function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (t: string) =>
    setSelected((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/photos/IMG_3925.jpg"
            alt="Steampunk dolphin sculpture"
            className="w-full h-full object-cover img-cinematic"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
          <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
        </div>
        <div className="relative z-10 px-5 sm:px-8 lg:px-16 pb-10 sm:pb-14 max-w-3xl">
          <motion.div {...fadeUp}>
            <div className="line-accent mb-5" />
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-3">Commission</p>
            <h1 className="text-display text-3xl sm:text-4xl md:text-5xl text-white leading-snug">
              Tell me what you see.
              <br />
              <span className="text-white/40">I'll make it real.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div {...fadeUp} className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-display text-2xl text-white mb-3">Message Sent</h2>
              <p className="text-white/40">
                Kayky will review your vision and get back to you soon.
                Every great piece starts with a conversation.
              </p>
            </motion.div>
          ) : (
            <motion.form {...fadeUp} onSubmit={handleSubmit} className="space-y-8">
              {/* Project type */}
              <div>
                <label className="text-accent text-xs tracking-[0.2em] uppercase font-body block mb-3">
                  What are you looking for?
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => toggle(t)}
                      className={`px-3 py-2 text-sm font-body border transition-all ${
                        selected.includes(t)
                          ? "bg-accent text-primary border-accent"
                          : "bg-transparent text-white/50 border-white/10 hover:border-accent/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="text-accent text-xs tracking-[0.2em] uppercase font-body block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border border-white/10 text-white px-4 py-3 text-sm font-body focus:border-accent focus:outline-none transition-colors"
                  placeholder="Full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-accent text-xs tracking-[0.2em] uppercase font-body block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border border-white/10 text-white px-4 py-3 text-sm font-body focus:border-accent focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-accent text-xs tracking-[0.2em] uppercase font-body block mb-2">
                  Phone <span className="text-white/20">(optional)</span>
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border border-white/10 text-white px-4 py-3 text-sm font-body focus:border-accent focus:outline-none transition-colors"
                  placeholder="(555) 000-0000"
                />
              </div>

              {/* Vision */}
              <div>
                <label className="text-accent text-xs tracking-[0.2em] uppercase font-body block mb-2">
                  Describe Your Vision
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full bg-transparent border border-white/10 text-white px-4 py-3 text-sm font-body focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell Kayky about the piece you're imagining. Size, style, where it will live, what it means to you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-primary py-4 text-sm font-body font-semibold tracking-wider uppercase hover:bg-accent-light transition-colors flex items-center justify-center gap-2"
              >
                Send Your Vision
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-white/20 text-xs text-center">
                No commitment. Every conversation is free. Every vision is welcome.
              </p>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}
