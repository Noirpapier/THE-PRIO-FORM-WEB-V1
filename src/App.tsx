import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Mail, ArrowRight, ArrowLeft, Instagram, Linkedin } from 'lucide-react';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

function Navigation({ hidden }: { hidden?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (hidden) return null;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 flex justify-center items-center p-6 transition-colors duration-300 ${scrolled ? 'bg-[#F5F5F0]/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="flex gap-5 md:gap-6 text-[9px] md:text-[10px] uppercase tracking-widest font-archivo font-light">
        <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
        <a href="#about" className="hover:opacity-50 transition-opacity">Profile</a>
        <a href="#services" className="hover:opacity-50 transition-opacity">Services</a>
        <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
      </div>
    </nav>
  );
}

const rotatingWords = ["REAL", "HAPPEN", "BETTER", "LAST", "MATTER", "UNIQUE"];

function Hero({ introPhase, hidden }: { introPhase: number, hidden?: boolean }) {
  const [wordIndex, setWordIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Faster fade out: fully gone by 350px scroll
  const gradientOpacity = useTransform(scrollY, [0, 350], [1, 0]);

  useEffect(() => {
    if (introPhase < 2) return;
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [introPhase]);

  if (hidden) return null;

  return (
    <section ref={sectionRef} className="relative px-6 md:px-12 flex flex-col items-center justify-center gap-12 md:gap-16 min-h-screen overflow-hidden">
      {/* Animated Gradient Background - Reference Matched */}
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        {/* Main Red/Orange Glow (Center) */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[55vw] h-[55vw] max-w-[560px] max-h-[560px] rounded-full blur-[80px] md:blur-[100px] bg-gradient-to-br from-[#ff3300] via-[#ff6600] to-transparent opacity-80 mix-blend-normal"
        />

        {/* Secondary Vibrant Blobs */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute ml-[10%] w-[40vw] h-[40vw] max-w-[420px] max-h-[420px] rounded-full blur-[100px] bg-[#ff2200] opacity-30"
        />

        {/* White Highlight (Bottom center) */}
        <motion.div
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute mt-[15%] -ml-[10%] w-[35vw] h-[35vw] max-w-[350px] max-h-[350px] rounded-full blur-[60px] bg-white opacity-50"
        />

        {/* Blend Mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5F5F0] z-10" />
      </motion.div>

      <motion.div
        layout
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          opacity: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
          y: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
          filter: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
          layout: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
        }}
        className={`relative z-10 flex flex-row items-center justify-center w-full ${introPhase >= 1 ? 'gap-3 md:gap-8' : 'gap-2 md:gap-5'}`}
      >
        <motion.h1
          layout
          transition={{ layout: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } }}
          className="font-mersad font-black tracking-[0.1em] md:tracking-[0.3em] text-lg sm:text-2xl md:text-4xl lg:text-5xl whitespace-nowrap text-black/90"
        >
          THE
        </motion.h1>

        <motion.h1
          layout
          transition={{ layout: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } }}
          className="font-mersad font-black tracking-[0.1em] md:tracking-[0.3em] text-lg sm:text-2xl md:text-4xl lg:text-5xl whitespace-nowrap text-black/90"
        >
          PRIO
        </motion.h1>

        <motion.h1
          layout
          transition={{ layout: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } }}
          className="font-mersad font-black tracking-[0.1em] md:tracking-[0.3em] text-lg sm:text-2xl md:text-4xl lg:text-5xl whitespace-nowrap text-black/90"
        >
          FORM
        </motion.h1>
      </motion.div>

      <AnimatePresence>
        {introPhase >= 2 && (
          <motion.h2
            layout
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              opacity: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
              y: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
              filter: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
              layout: { type: "tween", duration: 0.15, ease: "easeOut" }
            }}
            className="relative z-10 text-base md:text-xl lg:text-2xl text-center max-w-4xl leading-tight font-archivo font-bold uppercase flex items-baseline justify-center flex-wrap gap-x-2 text-black/90"
          >
            <motion.span layout transition={{ layout: { type: "tween", duration: 0.15, ease: "easeOut" } }}>THE WAY TO MAKE THINGS</motion.span>
            <motion.span layout transition={{ layout: { type: "tween", duration: 0.15, ease: "easeOut" } }} className="relative inline-grid overflow-hidden text-black">
              <AnimatePresence mode="popLayout">
                <motion.span
                  layout
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    opacity: { duration: 0.3 },
                    y: { duration: 0.3 },
                    layout: { type: "tween", duration: 0.15, ease: "easeOut" }
                  }}
                  className="whitespace-nowrap col-start-1 row-start-1"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.span>
          </motion.h2>
        )}
      </AnimatePresence>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
      <h1 className="text-xl md:text-3xl lg:text-[34px] leading-tight mb-24 md:mb-40 font-archivo font-normal max-w-5xl">
        Prio is guided by <span className="font-mersad font-bold hover:opacity-50 cursor-pointer transition-opacity">Tomás Pagnotta</span>, <span className="font-mersad font-bold hover:opacity-50 cursor-pointer transition-opacity">Franco Donofrio</span>, and a core conviction that any idea can evolve into something authentic, purposeful, and truly good.
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-start gap-16">
        <p className="text-sm md:text-xl max-w-2xl font-archivo font-normal leading-relaxed">
          At The Prio Form, we merge the limits of human ingenuity with cutting-edge tools to bring authenticity to life. By fusing strategy with creativity, we forge an unshakable foundation to elevate every idea. We partner with visionaries who are ready to build something genuinely real.
        </p>
        <div className="flex gap-4 w-full md:w-auto">
          <img src="/TOMI.png" alt="Tomás" className="w-1/2 md:w-48 aspect-[3/4] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="/FRAN.png" alt="Franco" className="w-1/2 md:w-48 aspect-[3/4] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-40 px-6 md:px-12 bg-gradient-to-br from-[#ff5e00] via-[#cc0000] to-[#990000] text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-[42px] leading-tight mb-24 md:mb-40 font-mersad font-bold uppercase max-w-4xl">
          THE<br />SERVICES
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-7 w-full md:w-[70%] ml-auto">
          <div>
            <h2 className="text-2xl font-mersad font-bold mb-8 border-b border-white/20 pb-4">Brand Strategy</h2>
            <ul className="space-y-4 text-sm md:text-base tracking-wide opacity-80 font-archivo font-normal">
              <li>Brand Audit</li>
              <li>Research</li>
              <li>Audience</li>
              <li>Competitive Analysis</li>
              <li>Positioning</li>
              <li>Tone of Voice</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-mersad font-bold mb-8 border-b border-white/20 pb-4">Brand System</h2>
            <ul className="space-y-4 text-sm md:text-base tracking-wide opacity-80 font-archivo font-normal">
              <li>Naming</li>
              <li>Messaging Toolkit</li>
              <li>Logo</li>
              <li>Photography Style</li>
              <li>Icon & Illustration</li>
              <li>Motion</li>
              <li>Brand Standards</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-mersad font-bold mb-8 border-b border-white/20 pb-4">Brand Experience</h2>
            <ul className="space-y-4 text-sm md:text-base tracking-wide opacity-80 font-archivo font-normal">
              <li>Signage / Wayfinding</li>
              <li>Social Media Toolkit</li>
              <li>Brand Campaign</li>
              <li>Website</li>
              <li>Business Collateral & Templates</li>
              <li>Packaging</li>
              <li>Print</li>
              <li>Apparel</li>
              <li>Copywriting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    id: 1,
    title: 'STENOX',
    description: 'Investigación técnica y desarrollo formal. El equilibrio entre el peso y la estructura.',
    img: '/STENOX_PORTADA.jpg',
  },
  {
    id: 2,
    title: 'STENOX',
    description: 'Medición exacta. El encastre perfecto entre estrategia y ejecución.',
    img: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'STENOX',
    description: 'Acción sobre la materia. Manos manchadas y resultados tangibles.',
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'STENOX',
    description: 'La ingeniería detrás del diseño. Uniones perfectas que resisten el peso.',
    img: 'https://images.unsplash.com/photo-1565515268481-0ea341e3a6a9?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'STENOX',
    description: Lo que perdura. Bloques monolíticos que no siguen tendencias.',
    img: 'https://images.unsplash.com/photo-1588615419958-8121f151ce1e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'STENOX',
    description: 'Reducción a lo esencial. La forma sigue a la función sin adornos.',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'STENOX',
    description: 'Equilibrio asimétrico. Fuerzas en oposición que generan movimiento.',
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'PRECISIÓN ABSOLUTA',
    description: 'Cálculo milimétrico. Cada elemento en su lugar exacto.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
  }
];

function ProjectBreakdown({ project, onClose }: { project: any, onClose: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Ensure we start at the top
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const stenoxImages = [
    '/STENOX_WEB-01.jpg',
    '/STENOX_WEB-02.jpg',
    '/STENOX_WEB-03.jpg',
    '/STENOX_WEB-04.jpg',
    '/STENOX_WEB-05.jpg',
    '/STENOX_WEB-06.jpg',
    '/STENOX_WEB-07.jpg',
    '/STENOX_WEB-08.jpg',
    '/STENOX_WEB-09.jpg',
    '/STENOX_WEB-10.jpg',
    '/STENOX_WEB-11.jpg',
    '/STENOX_WEB-12.jpg',
    '/STENOX_WEB-13.jpg',
    '/STENOX_WEB-14.jpg',
  ];

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-[#000000] overflow-y-auto overflow-x-hidden text-black/90 cursor-default scroll-smooth"
    >
      {/* Scroll Progress Bar */}
      <div className="fixed right-0 top-0 bottom-0 w-1.5 bg-white/10 z-[110] pointer-events-none">
        <motion.div
          className="w-full bg-[#fdd835] origin-top"
          style={{ scaleY: scrollYProgress, height: '100%' }}
        />
      </div>

      <div className="fixed top-0 left-0 right-0 z-[120] flex justify-end items-center p-6 md:p-12 mix-blend-difference text-white pointer-events-none">
        <button onClick={onClose} className="text-sm uppercase tracking-widest hover:opacity-50 transition-opacity pointer-events-auto">
          Close
        </button>
      </div>

      {/* Custom Project Breakdown for STENOX */}
      {project.title === 'STENOX' ? (
        <div className="w-full flex flex-col min-h-screen bg-black">
          {stenoxImages.map((src, index) => (
            <img
              key={index}
              src={src}
              className="w-full h-auto block select-none"
              alt={`STENOX Detail ${index + 1}`}
              onDragStart={(e) => e.preventDefault()}
              loading="lazy"
            />
          ))}
        </div>
      ) : (
        <>
          {/* Default Project Breakdown (W+ placeholder) */}
          <div className="w-full h-[60vh] md:h-screen relative -mt-[88px] md:-mt-[120px]">
            <video
              src="https://stream.mux.com/dU9uds7I01xjrU1DxEXCZ3qX2PV02wzyeaKcJ7U53w6as/high.mp4"
              autoPlay muted loop playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="md:w-1/3">
              <h1 className="text-4xl md:text-6xl font-serif mb-4">{project.title}</h1>
              <p className="text-xl md:text-2xl font-light text-black/60">{project.description}</p>
            </div>
            <div className="md:w-2/3 space-y-6">
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}

function PrioGallery({ 
  onProjectSelect, 
  selectedProject 
}: { 
  onProjectSelect: (project: any | null) => void,
  selectedProject: any | null
}) {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const isMobile = useIsMobile();
  
  // Exactly 6 projects as requested
  const galleryProjects = projects.slice(0, 6);

  return (
    <div id="work" className="relative w-full min-h-screen flex items-center justify-center bg-brand-bg px-4 md:px-12 py-20">
      <div className="w-full h-auto md:h-[70vh] flex flex-col md:flex-row gap-1 md:gap-2 overflow-hidden">
        {galleryProjects.map((project, index) => {
          const isActive = activeCard === index;

          return (
            <motion.div
              key={project.id}
              onClick={() => onProjectSelect(project)}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              animate={{
                flex: isActive ? (isMobile ? 12 : 4) : 1,
                minHeight: isMobile ? (isActive ? '350px' : '60px') : 'auto'
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                mass: 1
              }}
              className="relative w-full md:w-auto h-full overflow-hidden bg-neutral-800 cursor-pointer first:rounded-t-sm last:rounded-b-sm md:first:rounded-l-sm md:last:rounded-r-sm md:first:rounded-t-none md:last:rounded-b-none"
            >
              <motion.img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{
                  scale: isActive ? 1.05 : 1.1,
                  filter: isActive ? "blur(0px)" : "blur(6px)"
                }}
                transition={{ duration: 0.8 }}
              />

              {/* Overlay for inactive cards */}
              <motion.div 
                className="absolute inset-0 bg-black/10 pointer-events-none" 
                animate={{ opacity: isActive ? 0 : 1 }}
              />

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                  >
                    <motion.h2 
                      layoutId={`title-${project.id}`}
                      className="text-white text-base md:text-xl font-archivo font-bold uppercase tracking-tighter"
                    >
                      {project.title}
                    </motion.h2>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="w-full max-w-4xl mb-16 md:mb-24">
        <img src="https://cdn.prod.website-files.com/664251ee839742dbb04b527b/66b6e460d8d7622b929e6212_jekyll_screen.webp" alt="The Prio Form Project" className="w-full h-auto rounded-sm" />
      </div>
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-archivo font-normal leading-tight mb-12">
        Let’s build something real together. If you have a project in mind, <span className="font-mersad font-bold">we’d love to hear about it.</span>
      </h2>
      <a href="mailto:hello@theprioform.com" className="inline-flex items-center gap-4 text-xl md:text-3xl hover:opacity-50 transition-opacity font-light">
        <Mail className="w-6 h-6 md:w-8 md:h-8" />
        hello@theprioform.com
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-text text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-mersad font-bold tracking-[0.2em] text-xl md:text-2xl mb-8">THE PRIO FORM</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm opacity-80 font-light">
          <div>
            <p className="mb-4 opacity-50 uppercase tracking-widest text-xs font-medium">General Inquiries</p>
            <a href="mailto:hello@theprioform.com" className="hover:text-white transition-colors">hello@theprioform.com</a>
          </div>
          <div>
            <p className="mb-4 opacity-50 uppercase tracking-widest text-xs font-medium">Follow</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
          <div className="flex items-end">
            <p className="opacity-50">THE PRIO FORM 2025, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [introPhase, setIntroPhase] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setIntroPhase(1), 800); // Show dots
    const t2 = setTimeout(() => setIntroPhase(2), 1600); // Show rotating text
    const t3 = setTimeout(() => setIntroPhase(3), 2400); // Show rest of page
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="bg-[#F5F5F0] text-black/90 min-h-screen font-sans selection:bg-[oklch(57.7%_0.245_27.325)] selection:text-[#F5F5F0]">
      <Navigation hidden={!!selectedProject} />

      <main>
        <Hero introPhase={introPhase} hidden={!!selectedProject} />

        {introPhase >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <PrioGallery
              selectedProject={selectedProject}
              onProjectSelect={(p) => setSelectedProject(p)}
            />
            <About />
            <Services />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </main>

      <AnimatePresence>
        {selectedProject && (
          <ProjectBreakdown
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
