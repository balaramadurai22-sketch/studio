import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-data";
import BlogCard from "@/components/blog/blog-card";
import BlogCarousel from "@/components/blog/blog-carousel";

export default function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="w-full bg-card py-20 md:py-32">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="mx-auto mb-16 max-w-2xl">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            From the AI Frontier
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explore our latest blog posts, tutorials, and thought pieces on the future of artificial intelligence.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="block h-full">
              <BlogCard post={post} />
            </Link>
          ))}
        </div>

        {/* Scrollable Posts */}
        <div className="w-full max-w-6xl">
            <BlogCarousel />
        </div>

        <div className="mt-16">
          <Button variant="outline" asChild>
            <Link href="/blog">View All Blogs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
