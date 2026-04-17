import { motion } from "motion/react";
import { Brain, Activity, Layers, Zap } from "lucide-react";

const expertiseItems = [
  {
    icon: Brain,
    title: "Brain Tumors",
    subtitle: "Minimally Invasive",
    description:
      "Advanced resection techniques for all types of brain tumors—from meningiomas to glioblastomas—with maximum tumor removal and minimal impact on healthy tissue.",
    color: "sky",
  },
  {
    icon: Activity,
    title: "Stroke & Aneurysm",
    subtitle: "Neurovascular Care",
    description:
      "Comprehensive treatment for cerebrovascular diseases including ischemic stroke, hemorrhagic stroke, and complex intracranial aneurysms using endovascular techniques.",
    color: "blue",
  },
  {
    icon: Layers,
    title: "Skull Base Surgery",
    subtitle: "Complex Resections",
    description:
      "Highly specialized skull base approaches for tumors involving the skull base, cranial nerves, and surrounding critical structures with international fellowship training.",
    color: "indigo",
  },
  {
    icon: Zap,
    title: "Stereotactic Radiosurgery",
    subtitle: "Zap-X Technology",
    description:
      "Non-invasive, highly precise radiation delivery using the Zap-X gyroscopic radiosurgery system—ideal for brain tumors, AVMs, and functional disorders.",
    color: "cyan",
  },
];

const colorMap: Record<string, string> = {
  sky: "bg-sky-50 border-sky-100 group-hover:bg-sky-500",
  blue: "bg-blue-50 border-blue-100 group-hover:bg-blue-500",
  indigo: "bg-indigo-50 border-indigo-100 group-hover:bg-indigo-500",
  cyan: "bg-cyan-50 border-cyan-100 group-hover:bg-cyan-500",
};
const iconColorMap: Record<string, string> = {
  sky: "text-sky-500 group-hover:text-white",
  blue: "text-blue-500 group-hover:text-white",
  indigo: "text-indigo-500 group-hover:text-white",
  cyan: "text-cyan-500 group-hover:text-white",
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sky-600 text-sm font-semibold tracking-widest uppercase">
            Key Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-foreground mt-2">
            Specialized in What Matters
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Every condition requires a unique approach. Dr. Tyagi brings specialized training
            and cutting-edge tools to deliver the best outcomes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-xl hover:shadow-sky-900/8 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-all duration-300 ${colorMap[item.color]}`}
              >
                <item.icon className={`w-6 h-6 transition-colors duration-300 ${iconColorMap[item.color]}`} />
              </div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                {item.subtitle}
              </p>
              <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
