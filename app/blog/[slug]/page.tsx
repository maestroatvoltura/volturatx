import { blogPosts, getPostBySlug } from "@/lib/blog-posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: `${post.title} | Voltura Insights`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Post Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              {post.date}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              {post.excerpt}
            </p>
          </div>

          {/* Post Content */}
          <div className="prose prose-invert prose-emerald max-w-none prose-lg">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Back Button */}
          <div className="mt-16 text-center">
            <a href="/blog" className="inline-block px-6 py-3 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 hover:text-white transition-colors">
              ← Back to Insights
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
