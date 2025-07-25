"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface InstagramPost {
  id: string;
  media_url: string;
  media_type: string;
  caption?: string;
  permalink: string;
  timestamp: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/instagram");
        if (!response.ok) {
          throw new Error("Failed to fetch Instagram posts");
        }
        const data = await response.json();
        setPosts(data.posts.slice(0, 6)); // Show only first 6 posts
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="relative aspect-square animate-pulse rounded-2xl bg-gray-200"
          />
        ))}
      </div>
    );
  }

  if (error) {
    // Fallback to static images if Instagram API fails
    const fallbackImages = [
      {
        src: "/images/gallery1.jpeg",
        alt: "Outdoor succulent and cactus arrangement in weathered stone planters",
      },
      {
        src: "/images/gallery4.jpeg",
        alt: "Elegant interior plant arrangement with snake plants and fiddle leaf figs",
      },
      {
        src: "/images/gallery5.jpeg",
        alt: "Statement plant installation in geometric brass planter for commercial lobby",
      },
      {
        src: "/images/gallery3.jpeg",
        alt: "Office balcony with sleek black planters containing agave and rosemary",
      },
      {
        src: "/images/gallery7.jpeg",
        alt: "Hanging plants in white ceramic planters with rope suspension",
      },
      {
        src: "/images/gallery8.jpeg",
        alt: "Minimalist plant arrangement in cream ceramic planters",
      },
    ];

    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {fallbackImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-square">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-2xl"
        >
          <div className="relative aspect-square">
            <Image
              src={post.media_url}
              alt={post.caption || "Instagram post"}
              fill
              className="object-cover"
              unoptimized // Instagram images are external
            />
            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20"></div>
            <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="line-clamp-2 text-sm text-white">
                {post.caption || "View on Instagram"}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}