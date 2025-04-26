import { FaHeart } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { MdEmojiEvents } from "react-icons/md";
export default function Reactions() {
    return(
        <div className="absolute -bottom-7 right-2">
            <div className="flex justify-center items-center text-2xl">
                <FaHeart className="reaction-icon text-red-500 mr-1 cursor-pointer"/>
                <IoChatbox className="reaction-icon text-blue-500 mr-1 cursor-pointer"/>
                <MdEmojiEvents className="reaction-icon text-yellow-500 cursor-pointer"/>
            </div>
        </div>
    )
}
