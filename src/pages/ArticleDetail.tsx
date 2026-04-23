import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import Navbar from "./_components/Navbar.tsx";
import Footer from "./_components/Footer.tsx";
import { articles } from "@/data/articles.ts";
import NotFound from "./NotFound.tsx";
import DrImage from "@/assets/about/dr_gaurav.jpeg"

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-[#fcfcfb] font-sans selection:bg-sky-100 selection:text-sky-900 border-x-hidden text-slate-900">
      <Navbar />

      {/* Breadcrumb / Back Navigation */}
      <div className="pt-32 pb-4 max-w-7xl mx-auto px-6">
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 hover:text-sky-700 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          Back to Insights
        </Link>
      </div>

      {/* Article Hero */}
      <header className="pb-16 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 bg-sky-50 text-sky-700 text-[10px] font-bold uppercase tracking-wider rounded">
              {article.category}
            </span>
            <div className="h-px w-8 bg-slate-200" />
            <div className="flex items-center gap-4 text-slate-400 text-[10px] uppercase tracking-widest font-medium">
              <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {article.publishedDate}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {article.readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-slate-900 mb-10">
            {article.title}
          </h1>

          <div className="flex items-center justify-between py-8 border-y border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white shadow-md">
                <img
                  src={DrImage}
                  alt="Dr. Gaurav Tyagi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Dr. Gaurav Tyagi</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Neurosurgeon</p>
              </div>
            </div>

            <button className="p-3 rounded-full hover:bg-slate-50 border border-slate-100 text-slate-400 hover:text-sky-600 transition-all shadow-sm">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Main Image */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl relative"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply" />
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Body */}
          <div className="lg:col-span-8">
            <div className="prose prose-slate prose-lg max-w-none">
              {article.content.map((paragraph, idx) => (
                <p key={idx} className="text-xl text-slate-600 leading-relaxed font-light mb-8">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quote Block Placeholder */}
            <div className="my-16 p-10 bg-slate-50 rounded-2xl border-l-4 border-sky-600 relative">
              <span className="absolute -top-6 -left-2 text-8xl font-serif text-sky-200/50 pointer-events-none">"</span>
              <p className="text-2xl font-serif italic text-slate-800 leading-snug">
                Clinical precision is not just about the technical execution of surgery, but about the deep understanding of human neurological resilience.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-8 bg-sky-200" />
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Dr. Gaurav Tyagi</p>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
            <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-sky-600 mb-8 pb-4 border-b border-slate-50">Related Topics</h4>
              <div className="space-y-6">
                {["Neurosurgery", "Brain Health", "Precision Medicine", "Patient Care"].map(topic => (
                  <div key={topic} className="flex items-center justify-between group cursor-pointer">
                    <span className="text-sm font-medium text-slate-600 group-hover:text-sky-700 transition-colors">{topic}</span>
                    <ArrowLeft className="w-3.5 h-3.5 rotate-180 text-slate-300 group-hover:text-sky-600 transition-all group-hover:translate-x-1" />
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-50">
                <p className="text-xs text-slate-500 leading-relaxed mb-6">Expert medical insights focused on restorative neurology and precise clinical outcomes.</p>
                <Link to="/#contact" className="w-full py-4 bg-slate-900 hover:bg-sky-700 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest text-center block transition-all shadow-lg active:scale-95">
                  Book Consultation
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
