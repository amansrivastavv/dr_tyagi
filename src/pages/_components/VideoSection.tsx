import { motion } from "motion/react";
import { Play } from "lucide-react";


const videos = [
  {
    id: "1h0depqwJ9g",
    title: "Understanding Brain Tumors: A Patient's Guide",
    duration: "3:21",
  },
  {
    id: "u8stuPMzTgk",
    title: "Zap-X Radiosurgery: Non-Invasive Brain Treatment",
    duration: "2:07",
  },
  {
    id: "vYbblDAk31w",
    title: "Minimally Invasive Neurosurgery Explained",
    duration: "1:01",
  },
  {
    id: "FHB6bPnT0sw",
    title: "Understanding skull based tumours",
    duration: "5:48",
  },
];

const thumbnails = [
  "https://images.unsplash.com/photo-1726162613793-e42ea98993ef?w=480&q=80",
  "https://images.unsplash.com/photo-1748194449456-a6a59f63dcc8?w=480&q=80",
  "https://images.unsplash.com/photo-1674027215016-0a4abfdbf1cc?w=480&q=80",
  "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=480&q=80",
];

export default function VideoSection() {
  return (
    <section id="videos" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-sky-600 text-sm font-semibold tracking-widest uppercase">
            Video Library
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-foreground mt-2">
            Insights from Dr. Gaurav Tyagi
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg">
            Watch educational videos on neurosurgery, treatment options, and patient guidance
            directly from the doctor.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, i) => (
            <motion.a
              key={i}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:shadow-sky-900/8 transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-background"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={thumbnails[i]}
                  alt={video.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-background/90 group-hover:bg-background flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 text-sky-600 fill-sky-600 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>
              {/* Content */}
              <div className="p-4">
                <p className="text-sm font-semibold text-foreground leading-snug group-hover:text-sky-600 transition-colors">
                  {video.title}
                </p>
                <p className="text-xs text-muted-foreground mt-2">Dr. Gaurav Tyagi</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
