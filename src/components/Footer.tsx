import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="col-span-2 md:col-span-1">
            <p className="text-display text-2xl mb-2">
              <span className="text-accent">K</span>ayky <span className="text-white/40">Dykyman</span>
            </p>
            <p className="text-sm text-white/40 leading-relaxed">
              Metal artist & master ironworker.
              <br />
              Turning raw steel into living art since 2003.
            </p>
          </div>
          <div>
            <p className="text-xs text-accent uppercase tracking-widest mb-3">Navigate</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/story", label: "My Story" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Custom Order" },
              ].map((l) => (
                <Link key={l.href} href={l.href}>
                  <span className="text-sm text-white/40 hover:text-accent transition-colors cursor-pointer">
                    {l.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-accent uppercase tracking-widest mb-3">Connect</p>
            <div className="flex flex-col gap-2 text-sm text-white/40">
              <p>Boston, Massachusetts</p>
              <p>By appointment</p>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-white/20">
          &copy; {new Date().getFullYear()} Kayky Dykyman. All creations are one of a kind.
        </div>
      </div>
    </footer>
  );
}
