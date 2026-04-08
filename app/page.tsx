import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0c0b0b] text-[#f0ead8] min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-14 h-16 md:h-20 bg-[#0c0b0b]/88 backdrop-blur-md border-b border-[#c4a265]/12">
        <Image src="/images/logo.svg" alt="Pall Mall Barbers" width={150} height={42} priority className="brightness-0 invert w-[105px] sm:w-[130px] md:w-[150px]" />
        <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[11px] tracking-[0.3em] uppercase text-[#f0ead8]/55">
          <a href="#services" className="hover:text-[#c4a265] transition-colors">Services</a>
          <a href="#gallery"  className="hover:text-[#c4a265] transition-colors">Gallery</a>
          <a href="#about"    className="hover:text-[#c4a265] transition-colors">About</a>
          <a href="#contact"  className="hover:text-[#c4a265] transition-colors">Contact</a>
        </div>
        <a href="https://www.pallmallbarbers.nyc/" target="_blank" rel="noopener noreferrer"
          className="btn-shine relative overflow-hidden px-4 py-2.5 md:px-7 md:py-3 border border-[#c4a265] text-[#c4a265] text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.35em] uppercase font-semibold hover:bg-[#c4a265] hover:text-[#0c0b0b] transition-colors duration-300 whitespace-nowrap">
          Book Now
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/NYC-10.png" alt="Pall Mall Barbers New York" fill priority className="object-cover object-[65%_center] md:object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0b] via-[#0c0b0b]/70 to-[#0c0b0b]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0b0b]/80 to-[#0c0b0b]/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-14 w-full pt-28 md:pt-0 pb-10 sm:pb-20 md:pb-32">
          <p className="animate-rise-in text-[#c4a265] text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.55em] uppercase mb-5 md:mb-7">
            Est. 1896 · Rockefeller Center, New York City
          </p>
          <h1 className="animate-rise-in-2 font-[family-name:var(--font-cormorant)] text-[13vw] sm:text-[10vw] md:text-8xl xl:text-[6.5rem] font-light italic leading-[1.05] max-w-4xl mb-8 md:mb-10">
            The Finest Cut.<br />The Perfect Shave.<br />
            <span className="text-[#c4a265] not-italic font-medium">New York&apos;s Best.</span>
          </h1>
          <div className="animate-rise-in-3 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-16">
            <a href="https://www.pallmallbarbers.nyc/" target="_blank" rel="noopener noreferrer"
              className="btn-shine relative overflow-hidden inline-flex items-center justify-center px-8 sm:px-12 py-4 bg-[#c4a265] text-[#0c0b0b] text-[9px] sm:text-[10px] tracking-[0.35em] sm:tracking-[0.4em] uppercase font-bold hover:bg-[#d4b478] transition-colors">
              Book Appointment
            </a>
            <a href="#services"
              className="inline-flex items-center justify-center px-8 sm:px-12 py-4 border border-[#f0ead8]/20 text-[#f0ead8]/65 text-[9px] sm:text-[10px] tracking-[0.35em] sm:tracking-[0.4em] uppercase hover:border-[#c4a265] hover:text-[#c4a265] transition-all duration-300">
              Our Services
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-white/10 pt-8 md:pt-10 gap-x-0 gap-y-6 sm:gap-y-0 max-w-md sm:max-w-none">
            {heroStats.map((s) => (
              <div key={s.label} className="sm:border-r border-white/8 last:border-r-0 sm:pr-8 sm:mr-8">
                <p className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl md:text-5xl font-light text-[#c4a265]">{s.value}</p>
                <p className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#f0ead8]/35 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 right-6 md:right-10 hidden sm:flex flex-col items-center gap-2 z-10">
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#f0ead8]/25" style={{ writingMode: "vertical-rl" }}>Scroll</p>
          <div className="w-px h-14 bg-gradient-to-b from-[#c4a265]/40 to-transparent" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-[#c4a265] py-4 overflow-hidden">
        <div className="marquee-track">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-[#0c0b0b] text-[10px] font-bold tracking-[0.45em] uppercase whitespace-nowrap pr-8">
              VOTED #1 BARBERSHOP NYC &nbsp;·&nbsp; EST. 1896 LONDON &nbsp;·&nbsp; ROCKEFELLER CENTER &nbsp;·&nbsp; AWARD-WINNING &nbsp;·&nbsp; 5-STAR GROOMING &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* HERITAGE SPLIT */}
      <section id="about" className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[640px] overflow-hidden">
          <Image src="/images/nyc-barbershop-1024x682.jpeg" alt="Pall Mall Barbers interior" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
        </div>
        <div className="bg-[#111110] flex items-center px-10 md:px-16 xl:px-24 py-24">
          <div className="max-w-md">
            <span className="text-[#c4a265] text-[10px] tracking-[0.5em] uppercase">Our Heritage</span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light italic mt-5 mb-8 leading-tight">
              A Century of<br />Craft &amp; Precision
            </h2>
            <p className="text-[#f0ead8]/50 text-sm leading-8 mb-6">
              Since 1896, Pall Mall Barbers has been the destination for discerning gentlemen. Our master barbers unite old-world technique with contemporary style.
            </p>
            <p className="text-[#f0ead8]/50 text-sm leading-8 mb-12">
              Now at Rockefeller Center — the same uncompromising standards that defined our London heritage live on at the world&apos;s most iconic address.
            </p>
            <a href="https://www.pallmallbarbers.nyc/" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-5 text-[10px] tracking-[0.4em] uppercase text-[#c4a265]">
              Discover Our Story
              <span className="block h-px w-10 bg-[#c4a265] group-hover:w-24 transition-all duration-500" />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-8 md:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6 border-b border-white/6 pb-10">
            <div>
              <span className="text-[#c4a265] text-[10px] tracking-[0.5em] uppercase">What We Offer</span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light italic mt-4">Our Services</h2>
            </div>
            <a href="https://www.pallmallbarbers.nyc/" target="_blank" rel="noopener noreferrer"
              className="text-[10px] tracking-[0.35em] uppercase text-[#f0ead8]/35 hover:text-[#c4a265] transition-colors border-b border-transparent hover:border-[#c4a265] pb-1">
              Full Menu →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-white/5">
            {services.map((s, i) => (
              <div key={i} className="group relative p-10 hover:bg-[#111110] transition-colors duration-300 overflow-hidden cursor-pointer">
                <span className="font-[family-name:var(--font-cormorant)] text-7xl font-light text-[#c4a265]/12 absolute -top-1 right-5 select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium italic mb-3">{s.name}</h3>
                  <p className="text-[#f0ead8]/40 text-xs leading-7 mb-10">{s.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#c4a265] text-sm font-semibold">{s.price}</span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#f0ead8]/25 group-hover:text-[#c4a265] transition-colors">Book →</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#c4a265] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AS SEEN IN */}
      <section className="bg-[#111110] py-16 px-8 md:px-14">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#f0ead8]/25 text-[9px] tracking-[0.6em] uppercase mb-10">As Seen In</p>
          <Image src="/images/AS-SEEN-IN-1200-x-600.png" alt="As seen in press" width={1200} height={600}
            className="w-full h-auto object-contain opacity-60 hover:opacity-90 transition-opacity duration-500" />
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-8 md:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#c4a265] text-[10px] tracking-[0.5em] uppercase">Our Work</span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light italic mt-4">The Pall Mall Effect</h2>
            <div className="w-10 h-px bg-[#c4a265] mx-auto mt-7" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 auto-rows-[280px]">
            {/* Portrait tall — row-span-2 */}
            <div className="relative row-span-2 group overflow-hidden">
              <Image src="/images/Shaves-683x1024.jpg.jpeg" alt="Hot towel shave" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0b]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* Wide — col-span-2 */}
            <div className="relative col-span-2 group overflow-hidden">
              <Image src="/images/NYC-3.png" alt="Pall Mall Barbers NYC" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0b]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {[
              { src: "/images/barbershop-3-640x640.jpg.jpeg",                  alt: "Barbershop" },
              { src: "/images/NYC-6.png",                                       alt: "NYC barbers" },
              { src: "/images/rockefeller-centre-640x640.jpg.jpeg",             alt: "Rockefeller Center" },
              { src: "/images/NYC-13.png",                                      alt: "NYC session" },
              { src: "/images/barbershop-interior-with-Award-640x640.jpg.jpeg", alt: "Award-winning interior" },
              { src: "/images/barbers-london-1024x683.jpg.jpeg",                alt: "Pall Mall London" },
            ].map((img, i) => (
              <div key={i} className="relative group overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0b]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS + VIP */}
      <section className="bg-[#111110] py-28 px-8 md:px-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[#c4a265] text-[10px] tracking-[0.5em] uppercase">World-Class Excellence</span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-light italic mt-5 mb-12 leading-tight">
              Award-Winning<br />Barbershop
            </h2>
            <div className="grid grid-cols-2 gap-3 mb-10">
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/barber-shop-awards-640x640.png" alt="Barbershop awards" fill className="object-contain bg-[#0c0b0b] p-4" />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/barbershop-interior-with-Award-1-640x640.jpg.jpeg" alt="Award interior" fill className="object-cover" />
              </div>
            </div>
            <p className="text-[#f0ead8]/40 text-xs leading-8 max-w-md">
              Recognised by the industry&apos;s most prestigious institutions — continuing the legacy of excellence that has made Pall Mall Barbers a global icon.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <Image src="/images/Prince-William-640x640.png" alt="Prince William" width={640} height={640} className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0b]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-[#c4a265] text-[10px] tracking-[0.45em] uppercase mb-2">Notable Clientele</p>
              <p className="font-[family-name:var(--font-cormorant)] text-3xl font-light italic">Prince William</p>
              <p className="text-[#f0ead8]/45 text-xs mt-1">The Prince of Wales</p>
            </div>
            <div className="absolute top-4 right-4 border-t border-r border-[#c4a265]/40 w-10 h-10" />
            <div className="absolute bottom-4 left-4 border-b border-l border-[#c4a265]/40 w-10 h-10" />
          </div>
        </div>
      </section>

      {/* THREE PILLARS OVER IMAGE */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nyc-barbers-1024x576.png" alt="NYC barbers" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0c0b0b]/82" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-14 grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((p, i) => (
            <div key={i} className="group border-l-2 border-[#c4a265]/20 pl-8 hover:border-[#c4a265] transition-colors duration-300">
              <span className="text-[#c4a265] text-[10px] tracking-[0.45em] uppercase">{p.label}</span>
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light italic mt-4 mb-5 leading-snug">{p.title}</h3>
              <p className="text-[#f0ead8]/40 text-xs leading-7">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-8 md:px-14 bg-[#111110]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#c4a265] text-[10px] tracking-[0.5em] uppercase">Client Voices</span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light italic mt-4">What They Say</h2>
            <div className="w-10 h-px bg-[#c4a265] mx-auto mt-7" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-y divide-white/5">
            {testimonials.map((t, i) => (
              <div key={i} className="group relative p-10 hover:bg-[#0c0b0b] transition-colors duration-300 overflow-hidden">
                <div className="font-[family-name:var(--font-cormorant)] text-7xl font-light text-[#c4a265]/20 leading-none mb-3 select-none">&ldquo;</div>
                <p className="text-[#f0ead8]/45 text-sm leading-8 italic mb-10">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1e1c18] border border-[#c4a265]/25 flex items-center justify-center font-[family-name:var(--font-cormorant)] text-lg text-[#c4a265]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase font-semibold">{t.name}</p>
                    <div className="flex gap-0.5 mt-1">{[...Array(5)].map((_, s) => <span key={s} className="text-[#c4a265] text-[11px]">★</span>)}</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#c4a265] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-44 px-8 md:px-14 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0b0b] via-[#14110a] to-[#0c0b0b]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,162,101,0.09),transparent_65%)]" />
        <div className="absolute top-10 left-10 w-16 h-16 border-t border-l border-[#c4a265]/20" />
        <div className="absolute top-10 right-10 w-16 h-16 border-t border-r border-[#c4a265]/20" />
        <div className="absolute bottom-10 left-10 w-16 h-16 border-b border-l border-[#c4a265]/20" />
        <div className="absolute bottom-10 right-10 w-16 h-16 border-b border-r border-[#c4a265]/20" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-[#c4a265] text-[10px] tracking-[0.55em] uppercase">Your transformation awaits</span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl xl:text-[7.5rem] font-light italic mt-6 mb-6 leading-[1.05]">
            Book Your<br /><span className="text-[#c4a265]">Appointment</span>
          </h2>
          <p className="text-[#f0ead8]/40 text-sm max-w-md mx-auto leading-8 mb-14">
            Rockefeller Center, New York City. Monday to Sunday. Walk-ins welcome — appointments preferred.
          </p>
          <a href="https://www.pallmallbarbers.nyc/" target="_blank" rel="noopener noreferrer"
            className="btn-shine relative overflow-hidden inline-flex items-center px-14 py-5 bg-[#c4a265] text-[#0c0b0b] text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-[#d4b478] transition-colors">
            Book at pallmallbarbers.nyc
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#080807] border-t border-white/5 pt-20 pb-10 px-8 md:px-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Image src="/images/logo.svg" alt="Pall Mall Barbers" width={160} height={45} className="brightness-0 invert mb-7 opacity-70" />
            <p className="text-[#f0ead8]/28 text-xs leading-7 max-w-xs mb-10">The world&apos;s most acclaimed barbershop. Heritage, precision, and style since 1896.</p>
            <div className="flex gap-2">
              {["IG","FB","X","YT"].map((s) => (
                <div key={s} className="w-9 h-9 border border-white/8 flex items-center justify-center text-[9px] text-[#f0ead8]/30 hover:border-[#c4a265] hover:text-[#c4a265] transition-all tracking-wider cursor-pointer">{s}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[9px] tracking-[0.45em] uppercase text-[#f0ead8]/25 mb-7">Services</h4>
            <ul className="space-y-3">
              {["Haircut & Style","Hot Towel Shave","Beard Sculpt","Colour","Grand Package"].map((s) => (
                <li key={s} className="text-xs text-[#f0ead8]/40 hover:text-[#c4a265] transition-colors cursor-pointer">{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[9px] tracking-[0.45em] uppercase text-[#f0ead8]/25 mb-7">Visit</h4>
            <div className="space-y-2 text-xs text-[#f0ead8]/40">
              <p>45 Rockefeller Plaza</p>
              <p>New York, NY 10111</p>
              <div className="pt-3 space-y-1">
                <p>Mon–Fri: 8am – 8pm</p>
                <p>Sat: 9am – 6pm</p>
                <p>Sun: 10am – 5pm</p>
              </div>
              <a href="https://www.pallmallbarbers.nyc/" target="_blank" rel="noopener noreferrer" className="block pt-5 text-[#c4a265] hover:underline">pallmallbarbers.nyc →</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between gap-3">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#f0ead8]/18">© 2026 Pall Mall Barbers NYC. All Rights Reserved.</p>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#f0ead8]/18">Est. 1896 · London · New York City</p>
        </div>
      </footer>
    </div>
  );
}

const heroStats = [
  { value: "128+", label: "Years Heritage" },
  { value: "50k+", label: "Happy Clients" },
  { value: "15+",  label: "Awards Won" },
  { value: "5 ★",  label: "Rated NYC" },
];

const services = [
  { name: "Signature Haircut",  description: "A precise, bespoke cut tailored to your face shape and hair type by a master barber.", price: "From $65" },
  { name: "Hot Towel Shave",    description: "Pre-shave oils, steaming towel wrap, premium lather and a straight razor — the pinnacle of wet shaving.", price: "From $75" },
  { name: "Beard Sculpt",       description: "Expert shaping and detailing to keep your beard looking intentional and impeccably groomed.", price: "From $45" },
  { name: "Cut & Shave Combo",  description: "The complete gentleman's package — a precision cut followed by a full luxury hot towel shave.", price: "From $120" },
  { name: "Colour & Texture",   description: "From subtle grey blending to bold all-over colour, applied with Pall Mall precision.", price: "From $85" },
  { name: "The Grand Package",  description: "Haircut, beard sculpt, hot towel shave, scalp massage and premium styling. The full experience.", price: "From $175" },
];

const pillars = [
  { label: "Location",     title: "Heart of Manhattan",  description: "45 Rockefeller Plaza — steps from Fifth Avenue and Central Park, at the most iconic address in New York City." },
  { label: "The Craft",    title: "Master Barbers",      description: "Each barber undergoes rigorous training to deliver the Pall Mall standard — the best in precision grooming." },
  { label: "The Heritage", title: "Est. 1896, London",   description: "Over a century of expertise brought to New York. The timeless artistry that made Pall Mall Barbers famous worldwide." },
];

const testimonials = [
  { text: "The hot towel shave was unlike anything I have experienced. Meticulous, relaxing, extraordinary results. This is the only place I will ever visit.", name: "James W." },
  { text: "Impeccable attention to detail. The barbers genuinely listen and deliver something personalised and perfect every single time.", name: "Marcus T." },
  { text: "Walking into Pall Mall Barbers is an experience in itself. The skill of their team and the heritage of the brand is felt in every visit.", name: "Daniel R." },
];
