import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import doctorImg from "@/assets/about/dr_gaurav.jpeg";

const DOCTOR_IMG =
  doctorImg;

const credentials = [
  "MBBS & MS – NIMHANS, Bengaluru",
  "Fellowship in Skull Base Surgery – Zurich, Switzerland",
  "International Training – Osaka, Japan",
  "Senior Consultant – Indraprastha Apollo Hospital, New Delhi",
  "Member, Neurological Society of India",
  "45+ peer-reviewed research publications",
];

const badges = [
  { label: "NIMHANS", sub: "Trained" },
  { label: "Apollo", sub: "Hospital" },
  { label: "Zurich &\nJapan", sub: "Fellowship" },
];

export default function DoctorProfile() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sky-600 text-sm font-semibold tracking-widest uppercase">
            Meet the Doctor
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-foreground mt-2">
            World-Class Expertise,<br />Patient-First Approach
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sky-900/10">
              <img
                src={DOCTOR_IMG}
                alt="Dr. Gaurav Tyagi"
                className="w-full h-[400px] md:h-[560px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Name card */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="text-lg font-bold text-foreground">Dr. Gaurav Tyagi</p>
                <p className="text-sky-600 text-sm font-medium">Senior Consultant Neurosurgeon</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Skull Base · Cerebrovascular · Radiosurgery
                </p>
              </div>
            </div>

            {/* Floating badges - Hidden on mobile */}
            <div className="hidden md:flex absolute -right-6 top-12 flex-col gap-3">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="bg-background rounded-xl p-3 shadow-lg border border-border text-center w-20"
                >
                  <p className="text-xs font-bold text-sky-700 leading-tight whitespace-pre-line">{b.label}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{b.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-serif text-foreground mb-2">Dr. Gaurav Tyagi</h3>
            <p className="text-sky-600 font-semibold mb-6">
              Indraprastha Apollo Hospital, New Delhi
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              Dr. Gaurav Tyagi is a highly skilled neurosurgeon known for combining precision
              with a deeply patient-first approach. Trained at{" "}
              <strong className="text-foreground">NIMHANS</strong> and internationally in{" "}
              <strong className="text-foreground">Japan and Zurich</strong>, he specializes in
              brain tumors, stroke, and advanced radiosurgery.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              With strong academic credentials and global exposure, he focuses on safer,
              minimally invasive treatments and better recovery outcomes—ensuring every patient
              receives world-class care with compassion.
            </p>

            {/* Credentials */}
            <div className="space-y-3">
              {credentials.map((c) => (
                <div key={c} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{c}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 bg-sky-50 border border-sky-100 rounded-full px-5 py-2.5">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-sky-700 text-sm font-medium">
                Currently accepting new patients
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
