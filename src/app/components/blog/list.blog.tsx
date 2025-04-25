import { useEffect, useState } from "react";

type Post = {
  message: string;
  image: string;
  date: string;
};

export default function ListBlog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulação de "requisição" de posts
    const fakePosts: Post[] = [
      {
        message: "auauauau",
        image: "",
        date: "24 de Abril de 2025",
      },
      {
        message: "miau miau miau",
        image: "images/fotodev.png",
        date: "25 de Abril de 2025",
      },
    ];
    setPosts(fakePosts);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-8">
      {posts.slice().reverse().map((post, index) => (
        <div
          key={index}
          className="bg-[#1e293b] text-white w-full max-w-xl rounded-2xl p-6 shadow-lg relative"
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/images/fotodev.png"
              alt="Foto do Dev"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">eduardoo8442</p>
              <p className="text-sm text-gray-400">{post.date}</p>
            </div>
          </div>
  
          <p className="text-gray-200 mb-4">{post.message}</p>
  
          {post.image !== "" && (
            <img
              src={post.image}
              alt="Imagem do post"
              className="w-full rounded-lg mt-2"
            />
          )}
        </div>
      ))}
    </div>
  );
  
}
