"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === post.imageId);

  return (
    <Card className="group flex h-full cursor-pointer flex-col overflow-hidden text-left transition-all duration-300 ease-in-out hover:shadow-xl">
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl leading-tight text-foreground">
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{post.description}</p>
      </CardContent>
      <div className="flex items-center p-6 pt-0 text-sm font-semibold text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Read More <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </Card>
  );
}
