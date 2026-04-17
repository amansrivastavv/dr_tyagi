import { motion } from "motion/react";
import { Button } from "@/components/ui/button.tsx";
import { Calendar, Play, ChevronDown } from "lucide-react";

const HERO_BG = "src/assets/hero/hero.jpeg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Neurology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a40]/90 via-[#002a6e]/75 to-[#0ea5e9]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001a40]/60 via-transparent to-transparent" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-400/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Apollo Hospital, New Delhi</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white leading-[1.1] mb-6 text-balance"
          >
            When It&apos;s Your Brain,{" "}
            <span className="text-sky-300">Expertise</span>{" "}
            Matters Most.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg text-white/85 max-w-2xl mb-10 leading-relaxed"
          >
            Advanced minimally invasive care for brain tumors, stroke, and complex neurovascular
            conditions—powered by global expertise and cutting-edge technologies like{" "}
            <span className="text-sky-300 font-medium">Zap-X radiosurgery</span> for precise,
            non-invasive treatment.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold bg-sky-500 hover:bg-sky-400 text-white shadow-xl shadow-sky-900/40 cursor-pointer gap-2 transition-all hover:scale-[1.02]"
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
              className="rounded-full px-8 py-6 text-base font-semibold text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm cursor-pointer gap-2 transition-all"
              asChild
            >
              <a href="#videos">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                </div>
                Watch Patient Stories
              </a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 flex flex-wrap items-center gap-8"
          >
            {["NIMHANS Trained", "Apollo Hospital", "International Fellowship"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
