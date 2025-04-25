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
          <div onClick={handleClick} className="flex items-center justify-center absolute left-6 top-6 geist cursor-pointer">
            <FaArrowLeft />
            <p className="ml-2">Voltar para o portfólio</p>
          </div>
          <div>
          <ListBlog />
          </div>
        </div>
    )
}