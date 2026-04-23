import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7 },
};

const timeline = [
  { year: "2003", title: "The Arrival", desc: "Leaves Brazil for the United States with nothing but a dream and calloused hands" },
  { year: "2004", title: "First Welding Job", desc: "Takes any ironwork job he can find, learning the American trade from the ground up" },
  { year: "2008", title: "The Breakthrough", desc: "Masters the curved staircase \u2014 a skill so rare it sets him apart from every shop in the region" },
  { year: "2012", title: "The Betrayal", desc: "Partners attempt to push him out of his own craft. He walks away and starts over" },
  { year: "2014", title: "King Iron Works", desc: "Founds King Iron Works in Everett, MA \u2014 his own shop, his own rules, his own legacy" },
  { year: "2018", title: "The Expansion", desc: "Opens multiple locations across New England and Florida, serving luxury clients coast to coast" },
  { year: "2020", title: "The Artist Emerges", desc: "Begins creating sculptures, furniture, and metal art \u2014 the work that feeds his soul" },
  { year: "2024", title: "20+ Years", desc: "Two decades of mastery. Hundreds of projects. One vision that never changed." },
  { year: "Now", title: "Kayky Designer", desc: "Launches his personal brand \u2014 a platform to share his art with the world" },
];

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
              They tried to make him
              <br />
              <em className="not-italic text-accent">an employee.</em>
              <br />
              <span className="text-white/40">He became an empire.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">

          {/* Chapter 1 — The Dream */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24">
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-4">Chapter I</p>
            <h2 className="text-display text-2xl sm:text-3xl text-white mb-6">The Dream</h2>
            <div className="text-white/50 leading-[1.8] space-y-4 text-base sm:text-lg font-light">
              <p>
                In 2003, a young man from Brazil stepped off a plane in Boston with a suitcase,
                a handful of dollars, and a vision that burned brighter than any forge. He didn't
                speak English. He didn't have connections. He didn't have a plan B.
              </p>
              <p>
                But Kayky Dykyman had something that no amount of money can buy and no
                one can take away — an artist's eye, a craftsman's hands, and the kind of
                stubborn belief that turns impossible things into reality.
              </p>
              <p>
                He knew, with the quiet certainty of a man who has already seen his future,
                that one day he would own his own iron shop. That one day, the designs
                living inside his mind would take physical form. That the world would see
                what he could see in a piece of raw steel.
              </p>
            </div>
          </motion.div>

          {/* Image break — portrait on staircase */}
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

          {/* Chapter 2 — The Grind */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24">
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-4">Chapter II</p>
            <h2 className="text-display text-2xl sm:text-3xl text-white mb-6">The Grind</h2>
            <div className="text-white/50 leading-[1.8] space-y-4 text-base sm:text-lg font-light">
              <p>
                The first years were brutal. Kayky took every welding job he could find —
                fire escapes, simple railings, repairs. Work that paid the bills but didn't
                feed his soul. He watched other ironworkers cut corners, use templates,
                produce the same generic pieces over and over.
              </p>
              <p>
                He refused. Even on the simplest job, he brought craftsmanship. Even on a
                basic railing, he added a curve where others would leave a straight line.
                Clients started to notice. <em className="text-white/70">"Who did this work?"</em>
                they'd ask. The answer was always the same quiet Brazilian who stayed late
                at the forge.
              </p>
              <p>
                But the people who employed him didn't value what they had. To them,
                Kayky was cheap labor — a pair of hands, not an artist. They charged
                premium prices for his work and paid him a fraction. They took credit
                for his designs. They built their businesses on his talent while treating
                him like he was replaceable.
              </p>
              <p className="text-white/70 font-normal">
                He wasn't replaceable. They just didn't know it yet.
              </p>
            </div>
          </motion.div>

          {/* Pull quote — the betrayal */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24 py-10 border-y border-accent/20">
            <blockquote className="text-display text-xl sm:text-2xl md:text-3xl text-white text-center leading-snug italic">
              "They wanted my hands,
              <br />but not my name on the door.
              <br />
              <span className="text-accent not-italic">That was their mistake.</span>"
            </blockquote>
            <p className="text-center text-white/30 text-sm mt-4">
              &mdash; Kayky Dykyman
            </p>
          </motion.div>

          {/* Chapter 3 — The Betrayal */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24">
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-4">Chapter III</p>
            <h2 className="text-display text-2xl sm:text-3xl text-white mb-6">The Betrayal</h2>
            <div className="text-white/50 leading-[1.8] space-y-4 text-base sm:text-lg font-light">
              <p>
                When Kayky finally found partners who promised to build something together,
                he poured everything into the work. His designs. His technique. His
                reputation. He taught them what he knew. He trusted them.
              </p>
              <p>
                But partnerships built on exploitation don't last. They wanted a partner
                on paper and an employee in practice. They wanted his rare ability to curve
                steel — the technique that no one else in the region could replicate — but
                they didn't want him at the table where decisions were made.
              </p>
              <p>
                When they tried to push him into a corner, Kayky did what iron does
                when the pressure gets too high.
              </p>
              <p className="text-white/70 font-normal text-xl sm:text-2xl text-display">
                He didn't break. He walked away and built his own forge.
              </p>
            </div>
          </motion.div>

          {/* Image — grand staircase with Kayky */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24 -mx-5 sm:mx-0">
            <div className="relative img-warm-overlay">
              <img
                src="/photos/IMG_7036.jpg"
                alt="Kayky standing at the base of his grand two-story curved staircase"
                className="w-full aspect-[16/10] object-cover img-cinematic"
                style={{ objectPosition: "center 40%" }}
              />
              <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
            </div>
            <p className="text-white/30 text-xs mt-3 italic text-center">
              The man they underestimated, standing before the staircase that proved them wrong
            </p>
          </motion.div>

          {/* Chapter 4 — The Rise */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24">
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-4">Chapter IV</p>
            <h2 className="text-display text-2xl sm:text-3xl text-white mb-6">The Rise</h2>
            <div className="text-white/50 leading-[1.8] space-y-4 text-base sm:text-lg font-light">
              <p>
                In 2014, Kayky founded <strong className="text-white/70">King Iron Works</strong> in
                Everett, Massachusetts. His own shop. His own name. His own terms.
              </p>
              <p>
                The clients who knew his work followed him. Word spread. The same people
                who had undervalued him watched as he built what they never could — a
                company known not just for ironwork, but for artistry. For the kind of
                craftsmanship you can't template, can't outsource, can't fake.
              </p>
              <p>
                King Iron Works grew into a multi-location operation spanning New England
                and Florida. Fire escapes, structural steel, historic restoration, custom
                railings — the bread and butter that built the empire. But the staircases
                were always the crown jewels. The curved staircases that nobody else
                could make.
              </p>
              <p>
                Today, King Iron Works is one of the most respected ironwork companies
                in the Northeast. But for Kayky, the business was never the destination.
              </p>
              <p className="text-white/70 font-normal">
                It was the foundation for something deeper.
              </p>
            </div>
          </motion.div>

          {/* Image grid — art pieces */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24 grid grid-cols-2 gap-3">
            <div className="relative img-warm-overlay">
              <img src="/photos/IMG_3925.jpg" alt="Steampunk dolphin sculpture" className="w-full aspect-square object-cover img-cinematic" />
              <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
            </div>
            <div className="relative img-warm-overlay">
              <img src="/photos/IMG_6967.JPEG" alt="Guitar fire pit at night" className="w-full aspect-square object-cover img-cinematic" style={{ objectPosition: "center 50%" }} />
              <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
            </div>
          </motion.div>

          {/* Chapter 5 — The Art */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24">
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-4">Chapter V</p>
            <h2 className="text-display text-2xl sm:text-3xl text-white mb-6">The Art</h2>
            <div className="text-white/50 leading-[1.8] space-y-4 text-base sm:text-lg font-light">
              <p>
                Building a company taught Kayky how to run a business. But what kept him
                awake at night wasn't invoices or schedules — it was ideas. Images in his
                mind that demanded to exist.
              </p>
              <p>
                A dolphin made entirely from gears and springs, frozen mid-leap. A guitar
                that blazes with real fire at night. Tables that float on chains. A butterfly
                the size of a car, painted in colors and mounted as public art.
              </p>
              <p>
                This is where Kayky's soul lives. Not in the business meetings or the
                contracts — in the workshop, alone with his torch and a piece of steel
                that's about to become something nobody expected.
              </p>
              <p>
                He doesn't work from blueprints. He works from feeling. He listens to
                what the metal wants to become and guides it there.
              </p>
            </div>
          </motion.div>

          {/* Big pull quote */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24 py-10 border-y border-accent/20">
            <blockquote className="text-display text-xl sm:text-2xl md:text-3xl text-white text-center leading-snug italic">
              "I don't just work with metal.
              <br />
              <span className="text-accent not-italic">I have conversations with it.</span>"
              <br />
              <span className="text-white/40 text-lg sm:text-xl">"Tell me what you see, and I'll make it real."</span>
            </blockquote>
            <p className="text-center text-white/30 text-sm mt-4">
              &mdash; Kayky Dykyman
            </p>
          </motion.div>

          {/* Full-width butterfly image */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24 -mx-5 sm:mx-0">
            <div className="relative img-warm-overlay">
              <img
                src="/photos/IMG_9418.JPEG"
                alt="Monumental butterfly swing sculpture — public art installation"
                className="w-full aspect-[4/3] object-cover img-cinematic"
              />
              <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
            </div>
            <p className="text-white/30 text-xs mt-3 italic text-center">
              The Butterfly — a monumental public art sculpture that doubles as a swing
            </p>
          </motion.div>

          {/* ── TIMELINE ── */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24">
            <div className="text-center mb-10">
              <div className="line-accent mx-auto mb-5" />
              <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-3">Timeline</p>
              <h2 className="text-display text-2xl sm:text-3xl text-white">The Journey</h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-accent/20 sm:-translate-x-px" />

              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative mb-8 sm:mb-10 pl-12 sm:pl-0 ${
                    i % 2 === 0 ? "sm:pr-[calc(50%+2rem)] sm:text-right" : "sm:pl-[calc(50%+2rem)]"
                  }`}
                >
                  {/* Dot */}
                  <div className={`absolute top-1 w-3 h-3 rounded-full bg-accent border-2 border-primary left-[10px] sm:left-1/2 sm:-translate-x-1.5`} />

                  <p className="text-accent text-sm font-body font-semibold tracking-wider mb-1">{item.year}</p>
                  <h3 className="text-display text-lg text-white mb-1">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── WHAT HE'S BUILT ── */}
          <motion.div {...fadeUp} className="mb-16 sm:mb-24">
            <div className="line-accent mb-5" />
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-4">The Empire</p>
            <h2 className="text-display text-2xl sm:text-3xl text-white mb-6">More Than Iron</h2>
            <div className="text-white/50 leading-[1.8] space-y-4 text-base sm:text-lg font-light">
              <p>
                Kayky doesn't just create art. He builds businesses. Today he is the
                founder and owner of <strong className="text-white/70">King Iron Works</strong> — one
                of the most respected ironwork companies in the Northeast, with multiple
                locations across New England and Florida.
              </p>
              <p>
                But his entrepreneurial spirit doesn't stop there. Kayky has invested in
                multiple business ventures, always guided by the same principle that
                shaped his craft: <em className="text-white/70">build something that matters,
                build it right, and never let anyone tell you it can't be done.</em>
              </p>
              <p>
                Through all of it — the businesses, the growth, the success — his passion
                has never shifted. When the meetings end and the office lights go off,
                Kayky goes back to his forge. Back to the metal. Back to the art that
                makes him feel alive.
              </p>
            </div>
          </motion.div>

          {/* ── CTA ── */}
          <motion.div {...fadeUp} className="text-center pt-8 pb-4">
            <h2 className="text-display text-2xl sm:text-3xl text-white mb-4">
              Your vision deserves this level of craft.
            </h2>
            <p className="text-white/40 mb-8 max-w-md mx-auto">
              Whether it's a sculpture, a staircase, or something nobody's ever made before —
              Kayky will pour the same passion into your piece that he puts into his art.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/gallery">
                <button className="border border-accent/30 text-accent px-6 py-3.5 text-sm font-body tracking-wider uppercase hover:bg-accent hover:text-primary transition-all">
                  Browse the Gallery
                  <ArrowRight className="inline-block w-4 h-4 ml-2" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-accent text-primary px-6 py-3.5 text-sm font-body font-semibold tracking-wider uppercase hover:bg-accent-light transition-colors">
                  Order Your Custom Piece
                  <ArrowRight className="inline-block w-4 h-4 ml-2" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
