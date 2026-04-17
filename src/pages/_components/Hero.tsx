import { motion } from "motion/react";
import { Button } from "@/components/ui/button.tsx";
import { Calendar, Play, ChevronDown } from "lucide-react";
import HERO_BG from "@/assets/hero/hero.jpeg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-background py-20 lg:py-32">
      {/* Background Image & Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="Dr. Gaurav Tyagi Neurosurgical Expertise"
          className="w-full h-full object-cover"
        />
        {/*  Gradient Layering */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a40] via-[#001a40]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001a40]/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Light Elements */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-[5%] w-[30%] h-[30%] rounded-full bg-blue-400/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="text-white/80 text-[11px] font-semibold tracking-wider uppercase">
              Indraprastha Apollo Hospital, New Delhi
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.15] mb-6 text-balance"
          >
            When It&apos;s Your Brain, <br />
            <span className="text-sky-400">Expertise</span> Matters Most.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base md:text-lg text-white/75 max-w-2xl mb-10 leading-relaxed"
          >
            Advanced minimally invasive care for brain tumors, stroke, and complex 
            neurovascular conditions—powered by global expertise and cutting-edge 
            technologies like <span className="text-sky-300 font-medium">Zap-X radiosurgery</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-semibold bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-900/20 cursor-pointer gap-2 transition-all"
              asChild
            >
              <a href="#contact">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-semibold text-white border border-white/20 hover:bg-white/5 backdrop-blur-sm cursor-pointer gap-2 transition-all justify-center"
              asChild
            >
              <a href="#videos">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                </div>
                Watch Patient Stories
              </a>
            </Button>
          </motion.div>

          {/* Trust indicators - Optimized for Tab/Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hidden sm:flex flex-wrap items-center gap-6 lg:gap-8 pb-32 mt-12 lg:mt-16"
          >
            {[
              "NIMHANS Trained", 
              "Apollo Hospital", 
              "International Fellowship"
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-sky-400 rounded-sm" />
                <span className="text-white/80 text-sm font-medium tracking-wide whitespace-nowrap">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Bottom Anchored */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-white/30 text-[9px] tracking-widest uppercase font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
