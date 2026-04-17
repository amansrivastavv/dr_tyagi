import { motion } from "motion/react";
import { Button } from "@/components/ui/button.tsx";
import { Calendar, MessageCircle, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-[80px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sky-200 text-sm font-semibold tracking-widest uppercase mb-4">
            Take the First Step
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight text-balance">
            Toward Expert <br />
            <span className="text-sky-300">Neurological Care</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Don&apos;t wait when it comes to your brain health. Schedule a consultation with
            Dr. Gaurav Tyagi and take the first step toward recovery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="rounded-full px-10 py-6 text-base font-semibold bg-white text-sky-700 hover:bg-sky-50 shadow-2xl shadow-black/30 cursor-pointer gap-2 transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Button>
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-10 py-4 text-base font-semibold text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm cursor-pointer transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>

          {/* Contact info */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <a href="tel:+911234567890" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 12345 67890</span>
            </a>
            <div className="flex items-center gap-2 text-white/70">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Mon–Sat: 9AM – 6PM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
