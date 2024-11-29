import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";  

export default function MoveUpAndDown() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 100;
      setIsAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="fixed right-6 bottom-6 cursor-pointer p-4 bg-green-300 text-white rounded-full shadow-xl hover:bg-green-400 transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-2xl active:scale-95 transform"
      style={{
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
      }}
    >
      {isAtBottom ? (
        <FaArrowUp size={28} />
      ) : (
        <FaArrowDown size={28} />
      )}
    </div>
  );
}
