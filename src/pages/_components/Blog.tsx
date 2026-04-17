import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1674027215016-0a4abfdbf1cc?w=600&q=80",
    category: "Brain Tumors",
    title: "Brain Tumor Awareness: Early Signs You Shouldn't Ignore",
    excerpt:
      "Understanding early warning signs of brain tumors can be life-saving. Dr. Tyagi explains what symptoms should prompt an immediate neurological evaluation.",
    readTime: "5 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?w=600&q=80",
    category: "Stroke Prevention",
    title: "FAST Protocol: Recognizing and Responding to Stroke",
    excerpt:
      "Every minute counts in a stroke. Learn about the FAST protocol—Face, Arms, Speech, Time—and how rapid response improves recovery outcomes dramatically.",
    readTime: "4 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1726162613793-e42ea98993ef?w=600&q=80",
    category: "Innovation",
    title: "Zap-X Radiosurgery: The Future of Non-Invasive Brain Treatment",
    excerpt:
      "Explore how Zap-X gyroscopic radiosurgery is revolutionizing the treatment of brain tumors and AVMs with unprecedented precision and minimal side effects.",
    readTime: "7 min read",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-sky-600 text-sm font-semibold tracking-widest uppercase">
              Knowledge Hub
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-foreground mt-2">
              From the Doctor&apos;s Desk
            </h2>
          </div>
          <a
            href="#blog"
            className="flex items-center gap-1.5 text-sky-600 text-sm font-semibold hover:gap-2.5 transition-all cursor-pointer"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-background rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:shadow-sky-900/8 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-sky-600 bg-sky-500/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="font-bold text-foreground text-base leading-snug mb-3 group-hover:text-sky-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="flex items-center gap-1.5 text-sky-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
