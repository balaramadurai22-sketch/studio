"use client";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blogPosts } from "@/lib/blog-data";
import BlogCard from "./blog-card";

export default function BlogCarousel() {
    const scrollablePosts = blogPosts.slice(3, 6);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {scrollablePosts.map((post) => (
          <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
            <Link href={`/blog/${post.id}`} className="block h-full">
              <div className="p-1 h-full">
                  <BlogCard post={post} />
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
