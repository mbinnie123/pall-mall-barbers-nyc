import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">

      {/* ══ NAVIGATION ══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="text-xl font-black tracking-[0.35em] uppercase text-[#C9A84C]">
          BLEND
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.25em] uppercase text-zinc-400">
          <a href="#services" className="hover:text-[#C9A84C] transition-colors duration-200">Services</a>
          <a href="#about"    className="hover:text-[#C9A84C] transition-colors duration-200">About</a>
          <a href="#gallery"  className="hover:text-[#C9A84C] transition-colors duration-200">Gallery</a>
          <a href="#contact"  className="hover:text-[#C9A84C] transition-colors duration-200">Contact</a>
        </div>
        <a
          href="https://www.blendmensgrooming.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer relative px-6 py-2.5 bg-[#C9A84C] text-black text-xs font-black tracking-[0.25em] uppercase overflow-hidden hover:bg-[#e0bc6e] transition-colors duration-200"
        >
          Book Now
        </a>
      </nav>

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1408]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.12),transparent_60%)]" />

        {/* Animated vertical light rays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hero-line hero-line-1" />
          <div className="hero-line hero-line-2" />
          <div className="hero-line hero-line-3" />
        </div>

        {/* Diagonal gold bar */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent translate-x-0" style={{left: '62%'}} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center gap-12 pt-24 pb-16">
          {/* ── Left: copy ── */}
          <div className="flex-1 text-center lg:text-left">
            <p className="animate-fade-in text-[#C9A84C] text-xs tracking-[0.5em] uppercase mb-5">
              Premium Men&apos;s Grooming
            </p>
            <h1 className="animate-slide-up text-7xl md:text-[7rem] xl:text-[9rem] font-black uppercase leading-[0.9] tracking-tight mb-8">
              Look<br />
              <span className="text-stroke">Sharp.</span><br />
              Feel<br />
              <span className="text-[#C9A84C]">Sharp.</span>
            </h1>
            <p className="animate-fade-in-delay text-zinc-500 text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed">
              Where precision meets confidence. Expert barbers crafting the perfect cut, every single time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://www.blendmensgrooming.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer relative group px-10 py-4 bg-[#C9A84C] text-black font-black tracking-[0.2em] uppercase text-xs overflow-hidden hover:bg-[#e0bc6e] transition-colors duration-200"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="px-10 py-4 border border-white/15 text-white font-bold tracking-[0.2em] uppercase text-xs hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
              >
                Our Services
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 mt-14 justify-center lg:justify-start">
              {heroStats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="text-[#C9A84C] text-3xl font-black leading-none">{s.value}</p>
                  <p className="text-zinc-600 text-xs tracking-[0.2em] uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: hero photo ── */}
          <div className="flex-shrink-0 relative w-72 md:w-80 lg:w-96">
            {/* Decorative offset border */}
            <div className="absolute inset-0 border border-[#C9A84C]/35 translate-x-4 translate-y-4" />
            <div className="relative z-10 w-full overflow-hidden">
              <Image
                src="/images/IMG_3342_1768338918.webp"
                alt="Blend Men's Grooming — expert barber"
                width={2048}
                height={2048}
                priority
                className="w-full h-auto object-cover"
              />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20" />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-700">
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-700 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ══ MARQUEE TICKER ══ */}
      <div className="overflow-hidden border-y border-white/5 bg-[#C9A84C] py-3">
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="flex items-center gap-6 pr-6 text-black text-xs font-black tracking-[0.3em] uppercase whitespace-nowrap">
              PRECISION CUTS&nbsp;✦&nbsp;BEARD SCULPTS&nbsp;✦&nbsp;HOT TOWEL SHAVES&nbsp;✦&nbsp;FADES &amp; TAPERS&nbsp;✦&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ══ SERVICES ══ */}
      <section id="services" className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">What We Offer</p>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight leading-none">
                Our<br />Services
              </h2>
              <a
                href="https://www.blendmensgrooming.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.3em] uppercase text-zinc-500 hover:text-[#C9A84C] transition-colors border-b border-transparent hover:border-[#C9A84C] pb-0.5"
              >
                View Full Menu →
              </a>
            </div>
            <div className="w-14 h-0.5 bg-[#C9A84C] mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative bg-[#0a0a0a] p-10 hover:bg-[#0f0f0f] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-lg font-black uppercase tracking-wider mb-3">{service.name}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-8">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#C9A84C] font-black text-lg">{service.price}</span>
                    <span className="text-zinc-700 text-xs tracking-[0.3em] uppercase group-hover:text-[#C9A84C] transition-colors duration-200">
                      Book →
                    </span>
                  </div>
                </div>
                {/* Bottom slide-in gold bar */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GOLD FEATURE STRIP ══ */}
      <section id="about" className="py-24 bg-[#C9A84C] text-black px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <span className="text-2xl font-black">{f.icon}</span>
              <h3 className="text-xl font-black uppercase tracking-[0.2em]">{f.title}</h3>
              <p className="text-black/65 text-sm leading-relaxed max-w-xs">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ GALLERY ══ */}
      <section id="gallery" className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">Our Work</p>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
              The Blend Effect
            </h2>
            <div className="w-14 h-0.5 bg-[#C9A84C] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`relative group bg-zinc-900 overflow-hidden cursor-pointer ${item.tall ? 'row-span-2' : ''}`}
              >
                {item.src ? (
                  <div className={`relative ${item.tall ? 'aspect-[1/1]' : 'aspect-square'} overflow-hidden`}>
                    <Image
                      src={item.src}
                      alt={item.alt ?? "Blend Men's Grooming"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#C9A84C]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ) : (
                  <div className={`${item.tall ? 'aspect-[3/4]' : 'aspect-square'} bg-gradient-to-br from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 transition-all duration-300 flex items-center justify-center`}>
                    <div className="text-center opacity-30 group-hover:opacity-50 transition-opacity">
                      <div className="text-3xl mb-2">📷</div>
                      <p className="text-zinc-600 text-xs tracking-widest">{item.label}</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#C9A84C]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-32 bg-[#0d0d0d] px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">Client Love</p>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">What They Say</h2>
            <div className="w-14 h-0.5 bg-[#C9A84C] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group relative bg-[#0d0d0d] p-10 hover:bg-[#111] transition-all duration-300 overflow-hidden"
              >
                <div className="text-[#C9A84C] text-6xl font-serif leading-none opacity-25 mb-2 select-none">&ldquo;</div>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 italic">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-zinc-800 border border-[#C9A84C]/25 flex items-center justify-center text-base font-black text-[#C9A84C] flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-xs uppercase tracking-[0.2em]">{t.name}</p>
                    <div className="flex gap-0.5 mt-1.5">
                      {[...Array(5)].map((_, s) => (
                        <span key={s} className="text-[#C9A84C] text-xs">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOOKING CTA ══ */}
      <section className="relative py-40 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1408] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.1),transparent_65%)]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs tracking-[0.5em] uppercase mb-6">Ready for a change?</p>
          <h2 className="text-6xl md:text-8xl xl:text-[9rem] font-black uppercase leading-[0.9] tracking-tight mb-8">
            Book Your<br />
            <span className="text-[#C9A84C]">Session</span>
          </h2>
          <p className="text-zinc-600 text-base md:text-lg mb-14 max-w-lg mx-auto leading-relaxed">
            Join hundreds of satisfied clients. Your best look is one appointment away.
          </p>
          <a
            href="https://www.blendmensgrooming.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer relative inline-block px-16 py-5 bg-[#C9A84C] text-black font-black text-xs tracking-[0.35em] uppercase overflow-hidden hover:bg-[#e0bc6e] transition-colors duration-200 hover:scale-105 transition-transform"
          >
            Book Now at BlendMensGrooming.com
          </a>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer id="contact" className="bg-[#050505] border-t border-white/5 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/410850cbfc5e311b8e0d6e413c490fc8.jpeg"
                alt="Blend Men's Grooming"
                width={148}
                height={75}
                className="object-contain"
              />
            </div>
            <p className="text-zinc-700 text-sm leading-relaxed max-w-xs mb-8">
              Premium men&apos;s grooming where every cut tells a story. Precision, style, and confidence — all in one chair.
            </p>
            <div className="flex gap-3">
              {['IG', 'FB', 'TW'].map((s) => (
                <div
                  key={s}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-[10px] font-black text-zinc-600 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all cursor-pointer tracking-wider"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] uppercase text-zinc-600 mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-zinc-700">
              {['Haircut', 'Beard Trim', 'Hot Towel Shave', 'Colour', 'Kids Cut', 'VIP Package'].map((s) => (
                <li key={s} className="hover:text-[#C9A84C] transition-colors cursor-pointer">{s}</li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] uppercase text-zinc-600 mb-6">Visit Us</h4>
            <div className="space-y-3 text-sm text-zinc-700">
              <p>Mon – Sat: 9am – 7pm</p>
              <p>Sunday: 10am – 5pm</p>
              <div className="pt-4">
                <a
                  href="https://www.blendmensgrooming.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9A84C] hover:underline text-sm"
                >
                  blendmensgrooming.com →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-800 text-[10px] tracking-[0.3em] uppercase">
            © 2026 BLEND MEN&apos;S GROOMING. ALL RIGHTS RESERVED.
          </p>
          <p className="text-zinc-800 text-[10px] tracking-[0.3em] uppercase">CRAFTED WITH PRECISION</p>
        </div>
      </footer>
    </div>
  );
}

/* ── Data ── */

const heroStats = [
  { value: "500+", label: "Happy Clients" },
  { value: "10+",  label: "Yrs Experience" },
  { value: "5★",   label: "Rated" },
];

const services = [
  {
    icon: "✂️",
    name: "Classic Cut",
    description: "A timeless precision haircut tailored to your face shape and style preferences.",
    price: "From £25",
  },
  {
    icon: "🪒",
    name: "Hot Towel Shave",
    description: "The ultimate wet shave experience with hot towel prep and straight razor finish.",
    price: "From £30",
  },
  {
    icon: "🧔",
    name: "Beard Sculpt",
    description: "Expert beard shaping, trimming, and styling to keep you looking sharp every day.",
    price: "From £15",
  },
  {
    icon: "💈",
    name: "Fade & Taper",
    description: "Seamless skin fades and clean tapers with surgical precision at every level.",
    price: "From £28",
  },
  {
    icon: "🎨",
    name: "Colour & Highlights",
    description: "Premium colouring services from subtle grey blending to bold transformations.",
    price: "From £45",
  },
  {
    icon: "👑",
    name: "VIP Package",
    description: "The full Blend experience — cut, beard, hot towel shave, and premium styling.",
    price: "From £65",
  },
];

const features = [
  {
    icon: "✦",
    title: "Expert Barbers",
    description: "Highly trained specialists with years of experience in modern and classic men's cuts.",
  },
  {
    icon: "✦",
    title: "Premium Products",
    description: "We only use top-tier grooming products for the best results and salon experience.",
  },
  {
    icon: "✦",
    title: "Easy Booking",
    description: "Book your slot online in seconds at blendmensgrooming.com. No waiting, no hassle.",
  },
];

const galleryItems = [
  { label: "gallery-1", tall: true,  src: "/images/IMG_3342_1768338918.webp", alt: "Blend barber at work" },
  { label: "gallery-2", tall: false, src: "/images/IMG_3342_1768338918.webp", alt: "Precision fade" },
  { label: "gallery-3", tall: false, src: "/images/IMG_3342_1768338918.webp", alt: "Sharp cut" },
  { label: "gallery-4", tall: false, src: "/images/IMG_3342_1768338918.webp", alt: "Beard sculpt" },
  { label: "gallery-5", tall: false, src: "/images/IMG_3342_1768338918.webp", alt: "Clean taper" },
  { label: "gallery-6", tall: true,  src: "/images/IMG_3342_1768338918.webp", alt: "Hot towel shave" },
  { label: "gallery-7", tall: false, src: "/images/IMG_3342_1768338918.webp", alt: "Style finish" },
  { label: "gallery-8", tall: false, src: "/images/IMG_3342_1768338918.webp", alt: "The blend effect" },
];

const testimonials = [
  {
    text: "Best barbershop experience I've ever had. The fade was perfect and the hot towel shave was next level. Won't go anywhere else.",
    name: "James K.",
  },
  {
    text: "The attention to detail here is insane. They really listen to what you want and deliver every single time. Highly recommend.",
    name: "Marcus T.",
  },
  {
    text: "Incredible atmosphere, incredibly skilled barbers. I always leave feeling like a completely different person — in the best way.",
    name: "Daniel R.",
  },
];
