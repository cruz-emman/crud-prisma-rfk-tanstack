import PostCard from "@/components/PostCard";
import { db } from "@/lib/db";
import Image from "next/image";

async function getPosts(){
  const res = await db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      Tag: true,
      
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  return res
}

export default async function Home() {
  const posts = await getPosts()
  return (
    <main className="flex flex-row flex-wrap gap-2">
      {posts.map((item) => (
        <PostCard key={item.id} post={item} />
      ))}
    </main>
  );
}
