import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Sparkles, Hammer } from "lucide-react";

const featuredWorks = [
  { image: "/photos/IMG_9418.JPEG", title: "Butterfly Swing", category: "Public Art", description: "A monumental painted butterfly perched on curving stems \u2014 with a swing underneath" },
  { image: "/photos/IMG_6967.JPEG", title: "Guitar Fire Pit", category: "Sculpture", description: "A full-scale guitar that comes alive at night \u2014 fire blazing through steel" },
  { image: "/photos/IMG_1845.JPEG", title: "Sculptural Table", category: "Furniture", description: "An organic flowing metal base that turns a conference table into gallery art" },
  { image: "/photos/IMG_3925.jpg", title: "Steampunk Dolphin", category: "Sculpture", description: "Gears, springs, and raw steel forged into a leaping dolphin" },
  { image: "/photos/IMG_1897.JPEG", title: "Forged Bird Bowl", category: "Art", description: "A hand-forged iron bird cradling fruit \u2014 artistry at the smallest scale" },
  { image: "/photos/IMG_8184.JPEG", title: "Floating Chair", category: "Furniture", description: "Suspended by chains, defying gravity \u2014 a seat that's also a sculpture" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7 },
};

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/photos/IMG_7036.jpg"
            alt="Kayky Dykyman standing before his grand two-story curved staircase masterpiece"
            className="w-full h-full object-cover img-cinematic"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
          {/* Warm cinematic tint */}
          <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
        </div>

        <div className="relative z-10 px-5 sm:px-8 lg:px-16 pb-12 sm:pb-20 max-w-4xl">
          <motion.div {...fadeUp}>
            <div className="line-accent mb-6" />
            <p className="text-accent text-xs sm:text-sm tracking-[0.3em] uppercase font-body mb-4">
              Metal Artist &bull; Master Ironworker
            </p>
            <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-5">
              Where Raw Steel
              <br />
              Becomes <em className="text-accent not-italic">Living Art</em>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-lg leading-relaxed mb-8 font-light">
              From a dream in Brazil to a forge in Boston. Kayky Dykyman transforms
              cold metal into pieces that breathe, curve, and tell stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/gallery">
                <button className="bg-accent text-primary px-6 py-3.5 text-sm font-body font-semibold tracking-wider uppercase hover:bg-accent-light transition-colors flex items-center gap-2">
                  Explore the Gallery
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="border border-white/20 text-white/80 px-6 py-3.5 text-sm font-body tracking-wider uppercase hover:border-accent hover:text-accent transition-colors">
                  Commission a Piece
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="line-accent mb-6" />
              <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-4">The Philosophy</p>
              <h2 className="text-display text-3xl sm:text-4xl text-white leading-snug mb-6">
                Steel has a soul.<br />
                <span className="text-white/40">You just need to know how to find it.</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-4">
                Every piece of metal carries a potential. A straight bar can become a sweeping curve.
                A pile of gears can become a dolphin leaping from the ocean. A sheet of steel can
                become a guitar that seems to hum.
              </p>
              <p className="text-white/50 leading-relaxed">
                Kayky doesn't just fabricate iron — he listens to it, bends it, convinces it
                to become something it was always meant to be.
              </p>
            </div>
            <div className="relative img-warm-overlay">
              <img
                src="/photos/IMG_4150.JPEG"
                alt="Kayky in his workshop with a curved staircase frame"
                className="w-full object-cover img-cinematic rounded-sm"
                style={{ aspectRatio: "3/4" }}
              />
              <div className="absolute inset-0 border border-accent/20 rounded-sm" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT HE CREATES ── */}
      <section className="py-16 sm:py-24 bg-warm-gray/30">
        <div className="px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="line-accent mx-auto mb-6" />
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-3">Creations</p>
            <h2 className="text-display text-3xl sm:text-4xl text-white">
              From Imagination to Iron
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {featuredWorks.map((work, i) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href="/gallery">
                  <div className="relative overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full aspect-[4/5] object-cover img-cinematic transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Cinematic warm overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-accent/5 mix-blend-normal" />
                    <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <p className="text-accent text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-1">{work.category}</p>
                      <h3 className="text-display text-xl sm:text-2xl text-white mb-1">{work.title}</h3>
                      <p className="text-white/40 text-xs sm:text-sm">{work.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-10">
            <Link href="/gallery">
              <button className="border border-accent/30 text-accent px-8 py-3 text-sm font-body tracking-wider uppercase hover:bg-accent hover:text-primary transition-all">
                View Full Gallery
                <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CRAFT BADGES ── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
          {[
            { icon: Flame, title: "Forged by Hand", desc: "Every curve, every scroll, every weld — done by hand in his workshop" },
            { icon: Sparkles, title: "One of a Kind", desc: "No two pieces are alike. Each creation is born from a unique conversation" },
            { icon: Hammer, title: "20+ Years", desc: "Two decades of mastering the art of turning steel into something alive" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <item.icon className="w-8 h-8 text-accent mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="text-display text-xl text-white mb-2">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── STORY TEASER ── */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/photos/IMG_4150.JPEG"
            alt="Kayky in his workshop"
            className="w-full h-full object-cover img-cinematic opacity-30"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 px-5 sm:px-8 lg:px-16 max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="line-accent mx-auto mb-6" />
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-4">The Journey</p>
            <h2 className="text-display text-3xl sm:text-4xl md:text-5xl text-white leading-snug mb-6">
              From Brazil to Boston.
              <br />
              <span className="text-white/40">One dream. One forge. Infinite creations.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 max-w-xl mx-auto">
              In 2003, a young man from Brazil arrived in America with nothing but a vision —
              to one day own his own iron shop and bring his designs to life. This is that story.
            </p>
            <Link href="/story">
              <button className="bg-accent text-primary px-8 py-3.5 text-sm font-body font-semibold tracking-wider uppercase hover:bg-accent-light transition-colors">
                Read His Story
                <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-16 text-center">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto">
          <h2 className="text-display text-2xl sm:text-3xl text-white mb-4">
            Have a vision? Let's bring it to life.
          </h2>
          <p className="text-white/40 text-sm sm:text-base mb-8 leading-relaxed">
            Whether it's a sculpture for your garden, a curved staircase for your home,
            or something nobody's ever seen before — Kayky can make it real.
          </p>
          <Link href="/contact">
            <button className="bg-accent text-primary px-8 py-4 text-sm font-body font-semibold tracking-wider uppercase hover:bg-accent-light transition-colors">
              Start Your Commission
              <ArrowRight className="inline-block w-4 h-4 ml-2" />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
