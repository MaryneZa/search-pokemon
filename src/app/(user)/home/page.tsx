"use client";

import { Pokemon, PokemonsData } from "@/types/pokemon";
import PokemonBlock from "@/components/pokemon-block";
import { useEffect, useState } from "react";
import { fetchPokemons } from "@/services/pokemon";

export default function HomePage() {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [pokemons, setPokemons] = useState<PokemonsData | null>(null)
    const AMOUNT = 151;

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);

            try {
                const result = await fetchPokemons(AMOUNT);
                setPokemons(result);
            } catch (err: any) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [])

    if (loading) return <p className="text-center py-8 text-gray-400">Loading...</p>;
    if (error) return <p className="text-center text-red-500 py-8">{error}</p>;

    return (
        <div className="p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
                {pokemons?.pokemons?.map((pokemon: Pokemon) => (
                    <PokemonBlock key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}
