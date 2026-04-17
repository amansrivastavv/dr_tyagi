import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Sharma",
    condition: "Brain Tumor (Meningioma)",
    text: "Dr. Tyagi performed my surgery with incredible precision. I was back on my feet within 2 weeks. His patient-first approach gave our entire family immense confidence during a very difficult time.",
    rating: 5,
    location: "Delhi",
  },
  {
    name: "Priya Mehta",
    condition: "Cerebral Aneurysm",
    text: "I had a complex aneurysm that other doctors said was inoperable. Dr. Tyagi not only operated successfully but explained every step in simple terms. He's a true expert and a wonderful human being.",
    rating: 5,
    location: "Mumbai",
  },
  {
    name: "Arjun Kapoor",
    condition: "Stroke Treatment",
    text: "After my stroke, I thought my life was over. Dr. Tyagi's team provided exceptional care and his rehabilitation guidance changed everything. Today I'm living normally thanks to his expertise.",
    rating: 5,
    location: "Noida",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sky-600 text-sm font-semibold tracking-widest uppercase">
            Patient Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-foreground mt-2">
            Lives Transformed
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Hear from patients who trusted Dr. Tyagi with their most complex neurological
            conditions.
          </p>
        </motion.div>

        {/* Video testimonials placeholder */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              thumb: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=480&q=80",
              name: "Mrs. Sunita Agarwal",
              note: "Brain Tumor Recovery",
            },
            {
              thumb: "https://images.unsplash.com/photo-1627093143401-2ade923be6c2?w=480&q=80",
              name: "Mr. Deepak Joshi",
              note: "Aneurysm Survivor",
            },
            {
              thumb: "https://images.unsplash.com/photo-1756699279298-c89cdef354ab?w=480&q=80",
              name: "Mr. Vikram Nair",
              note: "Stroke Rehabilitation",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img src={v.thumb} alt={v.name} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                  <svg className="w-6 h-6 text-sky-600 fill-sky-600 ml-1" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold text-sm">{v.name}</p>
                <p className="text-white/70 text-xs">{v.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Written testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-sky-100" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-sky-600 mt-0.5">{t.condition}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
