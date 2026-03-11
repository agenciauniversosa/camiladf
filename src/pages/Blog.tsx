import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { blogPosts, categories } from "@/lib/blogData";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !activeCategory || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-28 md:pt-36 pb-24 md:pb-36">
        <div className="section-container">
          <Reveal>
            <p className="label-sm mb-3">Publicações</p>
            <h1 className="heading-xl text-foreground mb-16">Blog</h1>
          </Reveal>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:w-[220px] lg:flex-shrink-0 lg:sticky lg:top-28 lg:self-start">
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" size={15} />
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-muted/50 rounded-lg pl-9 pr-8 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
                />
                {search && (
                  <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    <X size={14} />
                  </button>
                )}
              </div>

              <p className="label-sm mb-3">Categorias</p>
              <div className="flex flex-wrap lg:flex-col gap-1">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`text-left font-body text-sm py-1.5 px-2 rounded-md transition-colors ${
                    !activeCategory ? "bg-muted text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Todas
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left font-body text-sm py-1.5 px-2 rounded-md transition-colors ${
                      activeCategory === cat ? "bg-muted text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </aside>

            {/* Grid */}
            <main className="flex-1 min-w-0">
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {filtered.map((post, i) => (
                    <BlogCard key={post.id} post={post} index={i} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="body-md text-muted-foreground">Nenhum artigo encontrado.</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
