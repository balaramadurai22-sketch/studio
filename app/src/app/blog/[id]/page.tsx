import { notFound } from "next/navigation";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { blogPosts, type BlogPost } from "@/lib/blog-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === post.imageId);

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <article className="container mx-auto max-w-4xl">
          <header className="mb-8 text-center">
            <p className="text-sm text-muted-foreground">
              Published on {new Date(post.publicationDate).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <h1 className="mt-2 font-headline text-4xl font-bold md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-muted-foreground">
              By {post.author}
            </p>
          </header>

          {image && (
            <div className="my-8 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={image.imageUrl}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full object-cover"
                data-ai-hint={image.imageHint}
              />
            </div>
          )}
          
          <div className="prose prose-lg max-w-none mx-auto text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground">
            <p className="lead text-xl italic text-foreground">
              {post.description}
            </p>
            <Separator className="my-8" />
            
            <h2 className="font-headline">Introduction</h2>
            <p>{post.content.introduction}</p>
            
            <h2 className="font-headline mt-8">Key Concepts</h2>
            <p>{post.content.keyConcepts}</p>

            <h2 className="font-headline mt-8">Conclusion</h2>
            <p>{post.content.conclusion}</p>

          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
      id: post.id,
    }));
}
