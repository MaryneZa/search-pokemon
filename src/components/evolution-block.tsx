import { Pokemon } from "@/types/pokemon"
import Image from "next/image"
import Link from "next/link"

export const EvolutionsBlocks = ({ evo }: { evo: Pokemon }) => {
    return (
        <Link
            href={`/pokemons/${evo.name}`}
            className="text-black hover:underline text-sm text-center border-2 border-gray-200 px-6 py-3 rounded-md shadow-md transform transition-all duration-200 hover:scale-105"
        >
            <div className="flex justify-center items-center gap-4">
                <div className="w-14 h-14 relative">
                    <Image
                        src={evo.image}
                        alt={evo.name || "Pokemon"}
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <p className="text-center font-medium">{evo.name}</p>
            </div>

        </Link>
    )
}


