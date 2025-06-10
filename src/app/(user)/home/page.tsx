"use client";

import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "@/graphql/queries/pokemon";
import SearchBar from "@/components/search-bar";
import { useEffect, useState } from "react";
import { SEARCH_POKEMON } from "@/graphql/queries/pokemon";
import { useRouter } from "next/navigation";
import { Pokemon } from "@/types/pokemon";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {

    const { data, loading, error } = useQuery(GET_POKEMONS, {
        variables: {
            first: 151
        }
    });

    if (loading) return <p className="text-center py-8 text-gray-400">Loading...</p>;
    if (error) return <p className="text-center text-red-500 py-8">{error.message}</p>;

    return (
        <div className="p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
                {data?.pokemons?.map((pokemon: Pokemon) => (
                    <Link
                        key={pokemon.id}
                        href={`/pokemons/${pokemon.name.trim()}`}
                        className="flex flex-col bg-white p-4 rounded shadow text-gray-700 justify-center items-center hover:shadow-md transform transition-all duration-200 hover:scale-105 hover:border-red-300 hover:border-2"
                    >
                        <div className="relative w-full h-20">
                            <Image
                                src={pokemon.image}
                                alt={pokemon.name}
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                        <h2 className="text-lg font-semibold">{pokemon.name}</h2>
                        <p className="text-sm">{pokemon.classification}</p>
                    </Link>
                ))}
            </div>


        </div>
    );
}
