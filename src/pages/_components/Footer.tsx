import { Brain, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Dr. Tyagi", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Patient Stories", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Book Appointment", href: "#contact" },
];

const treatments = [
  "Brain Tumor Surgery",
  "Stroke Treatment",
  "Skull Base Surgery",
  "Zap-X Radiosurgery",
  "Cerebral Aneurysm",
  "Minimally Invasive Surgery",
];

const socials = [
  { icon: ExternalLink, href: "#", label: "Facebook" },
  { icon: ExternalLink, href: "#", label: "Twitter" },
  { icon: ExternalLink, href: "#", label: "YouTube" },
  { icon: ExternalLink, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white">Dr. Gaurav Tyagi</p>
                <p className="text-sky-400 text-xs">Senior Neurosurgeon</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Advanced neurosurgical care combining precision, innovation, and a deeply
              patient-first approach at Apollo Hospital, New Delhi.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-sky-500 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <s.icon className="w-4 h-4 text-white/60 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/50 text-sm hover:text-sky-400 transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Treatments
            </h4>
            <ul className="space-y-3">
              {treatments.map((t) => (
                <li key={t}>
                  <span className="text-white/50 text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/50 text-sm leading-relaxed">
                  Indraprastha Apollo Hospital,<br />
                  Sarita Vihar, Mathura Road,<br />
                  New Delhi – 110076
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-white/50 text-sm hover:text-sky-400 transition-colors cursor-pointer">
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:dr.tyagi@apollo.com" className="text-white/50 text-sm hover:text-sky-400 transition-colors cursor-pointer">
                  dr.tyagi@apollo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col items-center j">
          <p className="text-white/30 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Dr. Gaurav Tyagi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
