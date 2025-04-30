import { useEffect, useState } from "react";
import Reactions from "./reactions";
import { FiMoreHorizontal, FiBookmark, FiShare2 } from "react-icons/fi";

type Post = {
  message: string;
  image: string;
  date: string;
};

export default function ListBlog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: 'Confira este post',
        text: 'Veja este post interessante no blog...',
        url: window.location.href,
      })
      .then(() => console.log('Compartilhado com sucesso'))
      .catch((error) => console.log('Erro ao compartilhar', error));
    } else {
      alert('Copie o link para compartilhar: ' + window.location.href);
    }
  }

  function sendRequest() {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => {
          throw new Error(`Erro ${response.status}: ${text}`);
        });
      }
      return response.json();
    })
    .then(data => {
      setPosts(data.list);
      setLoading(false);
    })
    .catch(error => {
      console.error('Erro:', error);
      setLoading(false);
    });
  }

  useEffect(() => {
    sendRequest();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-12 p-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="w-full max-w-2xl bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-sm animate-pulse">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-3 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/5"></div>
            </div>
            <div className="mt-4 h-48 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-24 p-4 md:p-8">
      {posts.slice().reverse().map((post, index) => (
        <article
          key={index}
          className="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 relative"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4">
              <img
                src="/images/fotodev.png"
                alt="Foto do Dev"
                className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm"
              />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">eduardoo8442</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <FiMoreHorizontal size={20} />
            </button>
          </div>
          
          <div className="mb-4">
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line">
              {post.message}
            </p>
          </div>
          
          {post.image && (
            <div className="mb-6 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
             <img
                src={post.image}
                  alt="Imagem do post"
                      className="w-full max-h-[600px] object-contain"
                    loading="lazy"
                  />
            </div>
          )}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
            <Reactions />
          </div>
          
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              <FiBookmark size={18} />
              <span className="text-sm">Salvar</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              <FiShare2 size={18} />
              <span onClick={handleShare} className="text-sm">Compartilhar</span>
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}