"use client";

import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "@/graphql/queries/pokemon";
import SearchBar from "@/components/search-bar";
import { useEffect, useState } from "react";
import { SEARCH_POKEMON } from "@/graphql/queries/pokemon";

export default function HomePage() {
    const [searchName, setSearchName] = useState("")
    const [notFound, setNotFound] = useState<boolean>(false)
    // useEffect(() => {        
    // }, []);
    const { data: listData, loading: listLoading, error: listError } = useQuery(GET_POKEMONS, {
        variables: {
            first: 10
        }
    });

    const { data: searchData, loading: searchLoading, error: searchError } = useQuery(SEARCH_POKEMON, {
        variables: {
            name: searchName,
            skip: !searchName
        },
        onCompleted: (data) => {
            if (!data.pokemon) {
                setNotFound(true)
                return
            }
            setNotFound(false)
            return
        }
    })
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name')?.toString() || "";
        setSearchName(name)
    }



    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />

            {searchName ? (
                notFound ? (
                    <div className="text-red-500 font-semibold mt-4">Not found</div>
                ) : (
                    searchData?.pokemon && (
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold">{searchData.pokemon.name}</h2>
                            <img src={searchData.pokemon.image} alt={searchData.pokemon.name} className="w-24 h-24" />
                            <p>{searchData.pokemon.classification}</p>
                        </div>
                    )
                )
            ) : (
                <div className="grid grid-cols-8 gap-4 mt-4">
                    {listData?.pokemons?.map((pokemon: any) => (
                        <div
                            key={pokemon.id}
                            className="flex flex-col bg-white p-4 rounded shadow text-gray-700 justify-center items-center"
                        >
                            <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24" />
                            <h2 className="text-lg font-semibold">{pokemon.name}</h2>
                            <p className="text-sm">{pokemon.classification}</p>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}
