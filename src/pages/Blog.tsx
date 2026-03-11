import { useState, useMemo } from "react";
import { Search } from "lucide-react";
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

      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <h1 className="heading-display text-3xl md:text-5xl text-foreground mb-16">
            Blog
          </h1>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <aside className="lg:w-1/4 lg:sticky lg:top-24 lg:self-start">
              {/* Search */}
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-card border border-border pl-10 pr-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground mb-4">
                  Categorias
                </h3>
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => setActiveCategory(null)}
                      className={`w-full text-left font-body text-sm py-2 px-3 transition-colors ${
                        !activeCategory
                          ? "bg-card text-accent font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Todas
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`w-full text-left font-body text-sm py-2 px-3 transition-colors ${
                          activeCategory === cat
                            ? "bg-card text-accent font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Posts grid */}
            <main className="lg:w-3/4">
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
                  {filtered.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="font-body text-muted-foreground">
                    Nenhum artigo encontrado.
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
