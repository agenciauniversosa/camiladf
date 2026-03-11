import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { blogPosts, categories } from "@/lib/blogData";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

      <div className="pt-28 md:pt-36 section-padding !pt-28 md:!pt-36">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Publicações
            </p>
            <h1 className="heading-display text-4xl md:text-6xl text-foreground">
              Blog
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:w-[260px] lg:flex-shrink-0 lg:sticky lg:top-28 lg:self-start">
              {/* Search */}
              <div className="relative mb-8">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground" size={15} />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent border-b border-border pl-7 pr-8 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Categorias
                </h3>
                <div className="flex flex-row flex-wrap lg:flex-col gap-1">
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={`text-left font-body text-sm py-1.5 px-3 lg:px-2 transition-colors duration-200 ${
                      !activeCategory
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Todas
                    {!activeCategory && <div className="h-px w-full bg-accent mt-1" />}
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left font-body text-sm py-1.5 px-3 lg:px-2 transition-colors duration-200 ${
                        activeCategory === cat
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {cat}
                      {activeCategory === cat && <div className="h-px w-full bg-accent mt-1" />}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Posts */}
            <main className="flex-1 min-w-0">
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
                  {filtered.map((post, i) => (
                    <div key={post.id} className="bg-background">
                      <BlogCard post={post} index={i} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="font-body text-muted-foreground">
                    Nenhum artigo encontrado para sua busca.
                  </p>
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
