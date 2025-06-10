"use client";

import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "@/graphql/queries/pokemon";
import { Pokemon, PokemonData } from "@/types/pokemon";
import PokemonBlock from "@/components/pokemon-block";

export default function HomePage() {

    const { data, loading, error } = useQuery<PokemonData>(GET_POKEMONS, {
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
                    <PokemonBlock key={pokemon.id}  pokemon={pokemon}/>
                ))}
            </div>
        </div>
    );
}
