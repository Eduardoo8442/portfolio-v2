import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import ListBlog from "./list.blog";
export default function BlogMain() {
    const route = useRouter();
    function handleClick() {
        route.push('/');
    }
    return (
        <div>
          <div 
  onClick={handleClick}
  className="fixed z-50 flex items-center justify-center cursor-pointer geist
             bottom-4 right-4 bg-green-500 p-2 rounded-md
             md:bottom-auto md:right-auto md:top-6 md:left-6 md:bg-opacity-0
             transition-all duration-300" 
>
<FaArrowLeft />
            <p className="ml-2">Voltar para o portfólio</p>
          </div>
          <div>
          <ListBlog />
</div>
        </div>
    )
}