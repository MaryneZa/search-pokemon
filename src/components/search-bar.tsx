import Image from "next/image";
import Search from "@/assets/pokeball-search.png"

interface props {
    onSubmit: (e: any) => void
}

export default function SearchBar({ onSubmit }: props) {
    return (
        <div>
            <form action="" onSubmit={(e) => onSubmit(e)} className="flex space-x-2">
                <input type="text" name="name" placeholder="Enter pokemon name ..." required className="tetx-xs bg-white px-4 rounded-full border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:outline-none text-gray-400" />
                <button type="submit" className="bg-red-100 text-white p-2 shadow-md hover:border-red-500 hover:shadow-md transform transition-all duration-200 hover:scale-105 rounded-full border-2 border-red-200 cursor-pointer">
                    <div className="relative w-5 h-5 rounded-full overflow-hidden">
                        <Image
                            src={Search}
                            alt="search button"
                        />
                    </div>
                </button>
            </form>
        </div>
    );
}
