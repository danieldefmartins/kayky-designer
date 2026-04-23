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
  { src: "/photos/IMG_3925.jpg", title: "Steampunk Dolphin", category: "Sculptures", description: "A leaping dolphin forged from gears, springs, and reclaimed metal parts", available: true },
  { src: "/photos/IMG_6942.JPEG", title: "Steel Guitar", category: "Sculptures", description: "Full-scale guitar sculpted from sheet metal with ornamental scrollwork base", available: true },
  { src: "/photos/IMG_0984.JPEG", title: "Metal Art Piece", category: "Sculptures", description: "Custom metal sculpture \u2014 raw steel shaped into form", available: true },

  // Furniture
  { src: "/photos/IMG_7650.JPEG", title: "Chain Suspension Table", category: "Furniture", description: "Side table with wood top suspended by steel chains from a pyramid center", available: true },
  { src: "/photos/IMG_5267.JPEG", title: "A-Frame Garden Swing", category: "Furniture", description: "Double steel swing set with wood seats \u2014 built for generations", available: true },
  { src: "/photos/IMG_9920.JPEG", title: "Star of David Console", category: "Furniture", description: "Gold-finished console table with Star of David base for TDM Church", available: false },

  // Staircases
  { src: "/photos/e422d81e-e80d-4a60-883a-00d4c59b9522.jpg", title: "Peacock Scrollwork Staircase", category: "Staircases", description: "Grand curved staircase with hand-forged peacock fan scrollwork and copper leaf accents", available: false },
  { src: "/photos/IMG_4150.JPEG", title: "Curved Staircase Frame", category: "Staircases", description: "Raw curved staircase stringer in the workshop \u2014 the skeleton before the art", available: false },
  { src: "/photos/IMG_0023.JPEG", title: "Ornamental Railing", category: "Staircases", description: "Curved staircase with hand-forged ornamental iron scrollwork", available: false },

  // Outdoor
  { src: "/photos/IMG_8134.JPEG", title: "Custom Pizza Oven", category: "Outdoor", description: "Handcrafted steel pizza oven with side grill \u2014 the heart of the backyard", available: true },
  { src: "/photos/IMG_2641.JPEG", title: "Hexagon Fire Pit", category: "Outdoor", description: "Hexagonal steel fire pit with adjustable grill grate", available: true },

  // Commercial
  { src: "/photos/IMG_6319.JPEG", title: "Custom Metal Signage", category: "Commercial", description: "Gold-finished custom business signage and decorative metalwork" },
  { src: "/photos/IMG_6445.JPEG", title: "Architectural Metalwork", category: "Commercial", description: "Custom commercial iron installations and structural art" },
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
            Browse Kayky's creations. Available pieces can be purchased. Every item is also available as a custom commission.
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
                      Start a Commission <ArrowRight className="w-3 h-3" />
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
