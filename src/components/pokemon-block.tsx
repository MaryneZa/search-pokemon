import NotFoundImg from "@/assets/file-not-found.jpg"
import { Pokemon } from "@/types/pokemon"
import Image from "next/image"
import Link from "next/link"


export default function PokemonBlock({pokemon} : {pokemon: Pokemon}) {
    return (
        <Link
            href={`/pokemons/${pokemon.name.trim()}`}
            className="flex flex-col bg-white p-4 rounded shadow text-gray-700 justify-center items-center hover:shadow-md transform transition-all duration-200 hover:scale-105 hover:border-red-300 hover:border-2"
        >
            <div className="relative w-full h-20">
                <Image
                    src={pokemon.image || NotFoundImg}
                    alt={pokemon.name}
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>

            <h2 className="text-lg font-semibold">{pokemon.name}</h2>
            <p className="text-sm">{pokemon.classification}</p>
        </Link>
    )
}