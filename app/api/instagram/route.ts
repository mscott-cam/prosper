import { NextResponse } from "next/server";

// Instagram Basic Display API endpoint
const INSTAGRAM_API_URL = "https://graph.instagram.com/me/media";

export async function GET() {
  try {
    // You'll need to get an Instagram Access Token
    // Follow the Instagram Basic Display API setup:
    // https://developers.facebook.com/docs/instagram-basic-display-api/getting-started
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!accessToken) {
      // Return mock data for development
      return NextResponse.json({
        posts: [
          {
            id: "1",
            media_url: "/images/gallery1.jpeg",
            media_type: "IMAGE",
            caption: "Outdoor succulent arrangement",
            permalink: "https://instagram.com/prosperplantscapes",
            timestamp: new Date().toISOString(),
          },
          {
            id: "2",
            media_url: "/images/gallery4.jpeg",
            media_type: "IMAGE",
            caption: "Elegant interior plant arrangement",
            permalink: "https://instagram.com/prosperplantscapes",
            timestamp: new Date().toISOString(),
          },
          {
            id: "3",
            media_url: "/images/gallery5.jpeg",
            media_type: "IMAGE",
            caption: "Statement plant installation",
            permalink: "https://instagram.com/prosperplantscapes",
            timestamp: new Date().toISOString(),
          },
          {
            id: "4",
            media_url: "/images/gallery3.jpeg",
            media_type: "IMAGE",
            caption: "Office balcony design",
            permalink: "https://instagram.com/prosperplantscapes",
            timestamp: new Date().toISOString(),
          },
          {
            id: "5",
            media_url: "/images/gallery7.jpeg",
            media_type: "IMAGE",
            caption: "Hanging plants display",
            permalink: "https://instagram.com/prosperplantscapes",
            timestamp: new Date().toISOString(),
          },
          {
            id: "6",
            media_url: "/images/gallery8.jpeg",
            media_type: "IMAGE",
            caption: "Minimalist plant arrangement",
            permalink: "https://instagram.com/prosperplantscapes",
            timestamp: new Date().toISOString(),
          },
        ],
      });
    }

    const response = await fetch(
      `${INSTAGRAM_API_URL}?fields=id,media_type,media_url,caption,permalink,timestamp&access_token=${accessToken}&limit=12`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Instagram posts");
    }

    const data = await response.json();

    // Filter only images and videos (exclude carousel albums without direct media_url)
    const filteredPosts = data.data.filter(
      (post: any) =>
        post.media_type === "IMAGE" ||
        post.media_type === "VIDEO" ||
        post.media_type === "CAROUSEL_ALBUM"
    );

    return NextResponse.json({ posts: filteredPosts });
  } catch (error) {
    console.error("Instagram API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch Instagram posts" },
      { status: 500 }
    );
  }
}