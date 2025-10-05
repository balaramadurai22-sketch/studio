"use client";

import * as React from "react";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { blogPosts, type BlogPost } from "@/lib/blog-data";
import BlogCard from "@/components/blog/blog-card";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto py-20 text-center">
          <h1 className="font-headline text-5xl font-bold">Insights & Innovations</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Explore our latest articles, tutorials, and thought pieces on the future of AI.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <BlogCard post={post} />
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
