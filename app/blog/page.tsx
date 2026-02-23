import { blogPosts } from "@/lib/blog-posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Voltura Insights
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              Strategic thinking on digital asset acquisition, SEO, and domain portfolio management.
            </p>
          </div>

          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <a 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="block p-8 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h2 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-zinc-500 text-sm whitespace-nowrap">{post.date}</span>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="text-emerald-500 text-sm font-medium flex items-center gap-2">
                  Read Article →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
