import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { X, ChevronLeft, ChevronRight, ShoppingBag, ArrowRight } from "lucide-react";

interface Piece {
  src: string;
  title: string;
  category: string;
  description: string;
  available?: boolean;
}

const categories = ["All", "Sculptures", "Furniture", "Staircases", "Outdoor", "Commercial", "Custom"];

const pieces: Piece[] = [
  // Sculptures
  { src: "/photos/IMG_9418.JPEG", title: "Butterfly Swing", category: "Sculptures", description: "Monumental painted butterfly on curving steel stems with a swing seat \u2014 public art that invites play", available: false },
  { src: "/photos/IMG_6967.JPEG", title: "Guitar Fire Pit", category: "Sculptures", description: "A steel guitar that blazes to life at night \u2014 fire pouring through the sound hole", available: true },
  { src: "/photos/IMG_3925.jpg", title: "Steampunk Dolphin", category: "Sculptures", description: "A leaping dolphin forged from gears, springs, and reclaimed metal parts", available: true },
  { src: "/photos/IMG_6942.JPEG", title: "Steel Guitar Sculpture", category: "Sculptures", description: "Full-scale guitar sculpted from sheet metal with ornamental scrollwork base", available: true },
  { src: "/photos/IMG_1897.JPEG", title: "Forged Bird Bowl", category: "Sculptures", description: "A hand-forged iron bird cradling fruit \u2014 photographed on an anvil where it was born", available: true },
  { src: "/photos/IMG_8804.JPEG", title: "Geometric Wolf", category: "Sculptures", description: "Wireframe wolf head wall art \u2014 modern geometric design in raw steel", available: true },
  { src: "/photos/IMG_8600.JPEG", title: "Metal Warriors", category: "Sculptures", description: "Miniature warrior figurines with shields and spears \u2014 whimsical tabletop art", available: true },
  { src: "/photos/IMG_3125.JPEG", title: "Minion Fire Pit", category: "Sculptures", description: "A playful Minion-shaped wood burner \u2014 fire glowing through the mouth", available: true },
  { src: "/photos/IMG_0984.JPEG", title: "Custom Star Logo", category: "Sculptures", description: "Fabricated metal star with embedded letter \u2014 sports fan art", available: true },

  // Furniture
  { src: "/photos/IMG_1845.JPEG", title: "Sculptural Conference Table", category: "Furniture", description: "Glossy organic-form flowing metal base with glass top \u2014 gallery-level furniture design", available: false },
  { src: "/photos/IMG_7650.JPEG", title: "Chain Suspension Table", category: "Furniture", description: "Wood top suspended by steel chains from a pyramid center \u2014 conversation starter", available: true },
  { src: "/photos/IMG_8184.JPEG", title: "Floating Chain Chair", category: "Furniture", description: "Steel frame with chain suspension and wood seat panels \u2014 a chair that's also a sculpture", available: true },
  { src: "/photos/IMG_6319.JPEG", title: "Cantilevered Z-Chair", category: "Furniture", description: "Black steel Z-frame with multi-tone wood seat \u2014 architectural seating", available: true },
  { src: "/photos/IMG_5357.JPEG", title: "Industrial Dining Table", category: "Furniture", description: "Dark wood top with heavy trapezoidal steel legs \u2014 commanding presence in any room", available: true },
  { src: "/photos/IMG_5298.JPEG", title: "Swing Dining Table", category: "Furniture", description: "Rope-hung seats around a central steel table \u2014 luxury backyard dining reimagined", available: false },
  { src: "/photos/IMG_7612.JPEG", title: "Faceted Side Tables", category: "Furniture", description: "Geometric folded-steel forms \u2014 diamond-cut faceted pair", available: true },
  { src: "/photos/IMG_5267.JPEG", title: "A-Frame Garden Swing", category: "Furniture", description: "Double steel swing set with wood seats \u2014 built for generations", available: true },
  { src: "/photos/IMG_2641.JPEG", title: "Gold Baby Crib", category: "Furniture", description: "Ornate gold wrought-iron crib \u2014 a family heirloom forged with love", available: false },
  { src: "/photos/IMG_5168.JPEG", title: "Chrome X-Trestle Table", category: "Furniture", description: "Large dining table with polished chrome X-trestle steel base", available: true },
  { src: "/photos/IMG_1582.JPEG", title: "Farmhouse Bar Stools", category: "Furniture", description: "Custom industrial wood-and-metal bar stools in a modern farmhouse kitchen", available: true },
  { src: "/photos/IMG_8023.JPEG", title: "I-Beam Bench", category: "Furniture", description: "Walnut top with I-beam steel legs \u2014 industrial simplicity", available: true },
  { src: "/photos/IMG_1067.JPEG", title: "Church Podium", category: "Furniture", description: "Custom curved stainless podium with flame emblem \u2014 for a house of worship", available: false },

  // Staircases
  { src: "/photos/IMG_7036.jpg", title: "Grand Curved Staircase", category: "Staircases", description: "Two-story curved staircase with ornate wrought-iron scrollwork in a luxury marble foyer", available: false },
  { src: "/photos/e422d81e-e80d-4a60-883a-00d4c59b9522.jpg", title: "Peacock Scrollwork Staircase", category: "Staircases", description: "Grand curved staircase with hand-forged peacock fan scrollwork and copper leaf accents", available: false },
  { src: "/photos/IMG_2312.JPEG", title: "Modern Geometric Railing", category: "Staircases", description: "Angular intersecting bars with LED-lit wooden treads \u2014 contemporary architectural iron", available: false },
  { src: "/photos/IMG_4150.JPEG", title: "Curved Frame in Workshop", category: "Staircases", description: "Raw curved staircase stringer \u2014 the steel skeleton before the art begins", available: false },
  { src: "/photos/IMG_3086.JPEG", title: "Fireplace Screen", category: "Staircases", description: "Elaborate scrollwork fireplace screen on brick surround \u2014 traditional ironwork mastery", available: true },
  { src: "/photos/IMG_1533.JPEG", title: "Scrollwork Detail", category: "Staircases", description: "Close-up of brass and steel scrollwork on a fireplace door \u2014 craftsmanship you can feel", available: false },

  // Outdoor
  { src: "/photos/IMG_8895.JPEG", title: "A-Frame Fireplace", category: "Outdoor", description: "Tall steel outdoor fireplace at golden hour \u2014 the centerpiece of evening gatherings", available: true },
  { src: "/photos/IMG_8134.JPEG", title: "Custom Pizza Oven", category: "Outdoor", description: "Handcrafted steel pizza oven with side grill \u2014 from workshop to backyard", available: true },
  { src: "/photos/IMG_2507.JPG", title: "Hexagon Fire Pit", category: "Outdoor", description: "Hexagonal steel fire pit with adjustable grill grate \u2014 industrial warmth", available: true },
  { src: "/photos/IMG_7788.jpg", title: "Deck Swing Table", category: "Outdoor", description: "Swing dining setup on a wooden deck overlooking a yard \u2014 outdoor luxury", available: false },
  { src: "/photos/IMG_5229.jpg", title: "Patio Furniture Set", category: "Outdoor", description: "Modern steel and wood bench, chairs, and coffee table for the patio", available: true },

  // Commercial
  { src: "/photos/IMG_0208.JPG", title: "Mr. Crepe Sign", category: "Commercial", description: "Cursive metal script signage with track lighting \u2014 restaurant branding in steel", available: false },
  { src: "/photos/IMG_9920.JPEG", title: "TDM Church Installation", category: "Commercial", description: "Gold-finished circular sign and Star of David console table for TDM Church", available: false },
  { src: "/photos/IMG_2468.JPG", title: "TDM Students Sign", category: "Commercial", description: "Large metal lettering on reclaimed wood pallet wall \u2014 modern ministry branding", available: false },
  { src: "/photos/IMG_9210.JPEG", title: "Custom Mailbox Post", category: "Commercial", description: "Curved steel mailbox post with house number \u2014 curb appeal in iron", available: true },
];

function GalleryImage({ piece, index, onClick }: { piece: Piece; index: number; onClick: () => void }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      className="cursor-pointer group mb-4"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-sm">
        <img
          src={piece.src}
          alt={piece.title}
          loading={index < 6 ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
          className={`w-full block img-cinematic transition-transform duration-700 group-hover:scale-105 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
        {/* Hover content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {piece.available && (
            <span className="inline-flex items-center gap-1 text-[10px] text-accent uppercase tracking-widest mb-1">
              <ShoppingBag className="w-3 h-3" /> Available
            </span>
          )}
          <p className="text-white text-sm font-display">{piece.title}</p>
        </div>
      </div>
      {/* Caption below */}
      <div className="mt-2 px-0.5">
        <p className="text-sm font-display text-white/80">{piece.title}</p>
        <p className="text-[11px] text-white/30 mt-0.5">{piece.category}</p>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? pieces : pieces.filter((p) => p.category === active);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  // Distribute into 2 columns round-robin
  const cols: Piece[][] = [[], []];
  filtered.forEach((p, i) => cols[i % 2].push(p));

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="px-5 sm:px-8 lg:px-16 pt-10 sm:pt-14 pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="line-accent mb-5" />
          <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-3">Gallery</p>
          <h1 className="text-display text-3xl sm:text-4xl text-white mb-2">The Collection</h1>
          <p className="text-white/40 text-sm max-w-lg">
            Browse Kayky's creations. Available pieces can be purchased. Every item is also available as a custom order.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="px-5 sm:px-8 lg:px-16 pb-6 overflow-x-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 px-4 py-2 text-sm font-body tracking-wider transition-all rounded-none border ${
                active === cat
                  ? "bg-accent text-primary border-accent"
                  : "bg-transparent text-white/40 border-white/10 hover:border-accent/40 hover:text-white/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="px-4 sm:px-8 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto flex gap-3 sm:gap-4">
          {cols.map((col, colIdx) => (
            <div key={colIdx} className="flex-1 min-w-0">
              {colIdx === 1 && (
                <div className="mb-4 p-4 border border-accent/20 bg-accent/5">
                  <p className="text-accent text-xs tracking-[0.2em] uppercase mb-2">Custom Orders</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-3">
                    Don't see exactly what you want? Kayky creates one-of-a-kind pieces from your vision.
                  </p>
                  <Link href="/contact">
                    <button className="w-full bg-accent text-primary py-2.5 text-xs font-body font-semibold tracking-wider uppercase hover:bg-accent-light transition-colors flex items-center justify-center gap-1">
                      Start Your Custom Order <ArrowRight className="w-3 h-3" />
                    </button>
                  </Link>
                </div>
              )}
              {col.map((piece, idx) => {
                const globalIdx = filtered.indexOf(piece);
                return (
                  <GalleryImage
                    key={piece.src}
                    piece={piece}
                    index={idx}
                    onClick={() => setLightbox(globalIdx)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <Lightbox
            pieces={filtered}
            index={lightbox}
            onClose={closeLightbox}
            onPrev={() => setLightbox((i) => (i === 0 ? filtered.length - 1 : (i ?? 0) - 1))}
            onNext={() => setLightbox((i) => (i === filtered.length - 1 ? 0 : (i ?? 0) + 1))}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function Lightbox({ pieces, index, onClose, onPrev, onNext }: {
  pieces: Piece[]; index: number; onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  const piece = pieces[index];

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-primary/98 flex flex-col"
    >
      <div className="flex items-center justify-between px-4 py-3 shrink-0">
        <span className="text-white/30 text-sm font-body">{index + 1} / {pieces.length}</span>
        <button onClick={onClose} className="text-white/50 hover:text-white p-1"><X className="w-6 h-6" /></button>
      </div>
      <div className="flex-1 flex items-center justify-center relative px-4">
        <button onClick={onPrev} className="hidden sm:block absolute left-4 text-white/20 hover:text-white p-2">
          <ChevronLeft className="w-8 h-8" />
        </button>
        <img src={piece.src} alt={piece.title} className="max-h-[70vh] max-w-[90vw] object-contain img-cinematic" />
        <button onClick={onNext} className="hidden sm:block absolute right-4 text-white/20 hover:text-white p-2">
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
      <div className="shrink-0 px-5 sm:px-8 py-4 sm:py-6 border-t border-white/5 max-w-2xl mx-auto w-full">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-accent text-xs tracking-[0.2em] uppercase mb-1">{piece.category}</p>
            <h3 className="text-display text-xl sm:text-2xl text-white mb-1">{piece.title}</h3>
            <p className="text-white/40 text-sm">{piece.description}</p>
          </div>
          <Link href="/contact">
            <button className="shrink-0 bg-accent text-primary px-4 py-2.5 text-xs font-body font-semibold tracking-wider uppercase hover:bg-accent-light transition-colors">
              {piece.available ? "Inquire" : "Similar Piece"}
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
