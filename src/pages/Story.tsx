import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7 },
};

export default function Story() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/photos/IMG_4150.JPEG"
            alt="Kayky standing with a curved staircase frame in his workshop"
            className="w-full h-full object-cover img-cinematic"
            style={{ objectPosition: "center 20%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
          <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
        </div>
        <div className="relative z-10 px-5 sm:px-8 lg:px-16 pb-12 sm:pb-16 max-w-3xl">
          <motion.div {...fadeUp}>
            <div className="line-accent mb-5" />
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-3">The Story</p>
            <h1 className="text-display text-3xl sm:text-4xl md:text-5xl text-white leading-snug">
              A boy from Brazil who
              <br />
              <em className="not-italic text-accent">dreamed in iron</em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          {/* Chapter 1 */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24">
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-4">Chapter I</p>
            <h2 className="text-display text-2xl sm:text-3xl text-white mb-6">The Dream</h2>
            <div className="text-white/50 leading-[1.8] space-y-4 text-base sm:text-lg font-light">
              <p>
                In 2003, Kayky Dykyman arrived in the United States from Brazil with a suitcase,
                a handful of dollars, and a vision that burned brighter than any forge.
              </p>
              <p>
                He didn't speak the language. He didn't have connections. But he had something
                no amount of money can buy — an artist's eye and a craftsman's hands. He knew
                that one day, he would own his own iron shop. That one day, the designs living
                inside his mind would take physical form.
              </p>
              <p>
                That day wasn't tomorrow. It took years of grinding, learning, failing, and
                getting back up. But that's what iron does — it bends, it doesn't break.
              </p>
            </div>
          </motion.div>

          {/* Image break */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24 -mx-5 sm:mx-0">
            <div className="relative img-warm-overlay">
              <img
                src="/photos/e422d81e-e80d-4a60-883a-00d4c59b9522.jpg"
                alt="Kayky sitting on his finished curved staircase masterpiece"
                className="w-full aspect-[16/10] object-cover img-cinematic"
                style={{ objectPosition: "center 30%" }}
              />
              <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
            </div>
            <p className="text-white/30 text-xs mt-3 italic text-center">
              Kayky with his signature curved staircase — hand-forged scrollwork with copper accents
            </p>
          </motion.div>

          {/* Chapter 2 */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24">
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-4">Chapter II</p>
            <h2 className="text-display text-2xl sm:text-3xl text-white mb-6">The Craft</h2>
            <div className="text-white/50 leading-[1.8] space-y-4 text-base sm:text-lg font-light">
              <p>
                Kayky didn't learn ironwork from a textbook. He learned it from the metal itself —
                by heating it, hammering it, making mistakes, and finding beauty in the unexpected.
              </p>
              <p>
                Over 20 years, he mastered what very few can do: make steel curve. Not just bend —
                <em className="text-white/70"> truly curve</em>. The kind of flowing, organic curves
                you see in nature. The kind that make a staircase look like it's dancing.
              </p>
              <p>
                Today, Kayky is one of the only ironworkers in New England who can create curved
                staircases. Each one is a signature piece — no templates, no shortcuts, no
                two alike.
              </p>
            </div>
          </motion.div>

          {/* Image grid */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24 grid grid-cols-2 gap-3">
            <div className="relative img-warm-overlay">
              <img src="/photos/IMG_3925.jpg" alt="Steampunk dolphin sculpture" className="w-full aspect-square object-cover img-cinematic" />
              <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
            </div>
            <div className="relative img-warm-overlay">
              <img src="/photos/IMG_6942.JPEG" alt="Steel guitar sculpture" className="w-full aspect-square object-cover img-cinematic" style={{ objectPosition: "center 30%" }} />
              <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
            </div>
          </motion.div>

          {/* Chapter 3 */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24">
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-4">Chapter III</p>
            <h2 className="text-display text-2xl sm:text-3xl text-white mb-6">The Art</h2>
            <div className="text-white/50 leading-[1.8] space-y-4 text-base sm:text-lg font-light">
              <p>
                But Kayky's talent goes far beyond staircases. His passion for creation led him
                to explore the boundaries of what metal can become.
              </p>
              <p>
                A dolphin leaping from an ocean of gears and springs. A full-scale guitar sculpted
                from sheet metal. Tables suspended by chains. Fire pits that become the heart of
                a backyard. Church signs finished in gold that welcome thousands every Sunday.
              </p>
              <p>
                For Kayky, every custom piece starts the same way — a conversation. "Tell me what you
                see in your mind," he says. "And I'll make it real."
              </p>
            </div>
          </motion.div>

          {/* Pull quote */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24 py-10 border-y border-accent/20">
            <blockquote className="text-display text-2xl sm:text-3xl md:text-4xl text-white text-center leading-snug italic">
              "I don't just work with metal.
              <br />
              <span className="text-accent not-italic">I have conversations with it.</span>"
            </blockquote>
            <p className="text-center text-white/30 text-sm mt-4">
              &mdash; Kayky Dykyman
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeUp} className="text-center">
            <h2 className="text-display text-2xl sm:text-3xl text-white mb-4">
              Ready to start your own story?
            </h2>
            <p className="text-white/40 mb-8 max-w-md mx-auto">
              Every masterpiece begins with a vision. Share yours, and Kayky will bring it to life.
            </p>
            <Link href="/contact">
              <button className="bg-accent text-primary px-8 py-3.5 text-sm font-body font-semibold tracking-wider uppercase hover:bg-accent-light transition-colors">
                Order Your Custom Piece
                <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
