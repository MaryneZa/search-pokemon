"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { EvolutionsBlocks } from "@/components/evolution-block";
import NotFoundImg from "@/assets/file-not-found.jpg"
import { useEffect, useState } from "react";
import { fetchPokemonDetail } from "@/services/pokemon";
import { Pokemon } from "@/types/pokemon";

interface DetailBlockProps {
    label: string;
    value?: string[] | string | number;
}


const DetailBlock = ({ label, value }: DetailBlockProps) => {
    return (
        <div className="flex">
            <h2 className="flex-1 font-semibold text-lg">{label}</h2>
            <div className="flex-1">
                {Array.isArray(value) ? (
                    <p>{value.length ? value.join(", ") : "-"}</p>
                ) : (
                    <p>{value || "-"}</p>
                )}
            </div>
        </div>
    )
};


export default function PokemonPage() {
    const { name } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [notFound, setNotFound] = useState<boolean>(false);
    const [pokemon, setPokemon] = useState<Pokemon | null>(null)


    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);
            setNotFound(false);

            try {
                const result = await fetchPokemonDetail(name?.toString() || "");
                if (!result.pokemon) {
                    setNotFound(true);
                } else {
                    setPokemon(result.pokemon);
                }
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Something went wrong");
                }
            } finally {
                setLoading(false);
            }
        }

        if (name) fetchData();
    }, [name]);

    if (loading) return <p className="text-center py-8 text-gray-400">Loading...</p>;
    if (error) return <p className="text-center text-red-500 py-8">{error}</p>;
    if (notFound) return <p className="text-center py-8 text-gray-400">No &quot;{name}&quot; Pokémon found</p>;


    return (
        <div className="py-16 px-8 max-w-5xl mx-auto">
            {pokemon &&
                <div className="flex flex-col md:flex-row justify-center gap-6 bg-white rounded-lg shadow p-12">
                    <div className="flex-1">
                        <div className="relative w-full h-64 sm:h-80 md:h-96">
                            <Image
                                src={pokemon.image || NotFoundImg}
                                alt={pokemon.name || "Pokemon"}
                                fill
                                priority
                                sizes="100%"
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </div>
                    <div className="flex-1 text-gray-700 space-y-4 p-5">
                        <h1 className="text-4xl font-bold">{pokemon.name}</h1>

                        <DetailBlock label="Type" value={pokemon.types} />
                        <DetailBlock label="Classification" value={pokemon.classification} />

                        <DetailBlock label="Resistant" value={pokemon.resistant} />
                        <DetailBlock label="Weaknesses" value={pokemon.weaknesses} />

                        <DetailBlock label="Max CP" value={pokemon.maxCP} />
                        <DetailBlock label="Max HP" value={pokemon.maxHP} />
                        <DetailBlock label="Flee Rate" value={pokemon.fleeRate} />

                        <div className="flex flex-col space-y-4">
                            <h2 className="font-semibold text-lg">Sizes</h2>
                            <div className="flex">
                                <p className="flex-1 font-semibold text-md underline">Weight</p>
                                <p className="flex-1">{pokemon.weight?.minimum} - {pokemon.weight?.maximum}</p>
                            </div>
                            <div className="flex">
                                <p className="flex-1 font-semibold text-md underline">Height</p>
                                <p className="flex-1">{pokemon.height?.minimum} - {pokemon.height?.maximum}</p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <h2 className="font-semibold text-lg">Attacks</h2>
                            <div className="flex">
                                <p className="flex-1 font-semibold text-md underline">Fast</p>
                                <ul className="flex-1 space-y-2">
                                    {pokemon.attacks?.fast?.map((atk, i) => (
                                        <li key={i}>
                                            <span>
                                                {atk.name} ({atk.type}, {atk.damage} dmg)
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex">
                                <p className="flex-1 font-semibold text-md underline">Special</p>
                                <ul className="flex-1 space-y-2">
                                    {pokemon.attacks?.special?.map((atk, i) => (
                                        <li key={i}>
                                            <span>
                                                {atk.name} ({atk.type}, {atk.damage} dmg)
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {pokemon.evolutions && pokemon.evolutions?.length > 0 && (
                            <div>
                                <h2 className="font-semibold text-lg">Evolutions</h2>
                                <div className="mt-2 flex gap-4 flex-wrap">
                                    {pokemon.evolutions.map((evo) => (
                                        <EvolutionsBlocks key={evo.id} evo={evo} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    );
}
