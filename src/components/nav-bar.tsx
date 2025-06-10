"use client"
import { useRouter } from "next/navigation";
import SearchBar from "./search-bar";
import Logo from "@/assets/pokemon_logo.png"
import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name')?.toString().trim() || "";
        router.push(`/pokemons/${name}`);
    }
    return (
        <div className="w-full flex flex-col p-2 bg-white space-y-3 border-b-2 border-red-100 shadow-red-300 shadow-md">
            <div className="flex space-x-2 justify-center items-center border-b-2 border-red-300 p-3 font-semibold text-lg text-gray-600">
                <p className="">
                    Search
                </p>
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                        src={Logo}
                        alt="logo"
                    />

                </div>
                <p className="">
                    Pokemon
                </p>
            </div>
            <div className="flex justify-between items-center px-20 py-1">
                <div>
                    <Link href="/home" className="font-semibold text-red-600 text-sm hover:bg-red-100 rounded-full p-2">Home</Link>
                </div>
                <SearchBar onSubmit={handleSubmit} />
            </div>
        </div>
    )
}