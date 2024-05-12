import PostCard from "@/components/PostCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap gap-2">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </main>
  );
}
