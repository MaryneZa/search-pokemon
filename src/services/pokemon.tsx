import { apolloClient } from "@/lib/apolloClient";
import { GET_POKEMON_DETAIL, GET_POKEMONS } from "@/graphql/queries/pokemon";


export const fetchPokemons = async (amount : number) => {
    try {
        const {data}  = await apolloClient.query({
            query: GET_POKEMONS,
            variables: {
                first: amount
            }
        })
        return data
    } catch (err) {
        console.error(err)
        throw err
    }
}

export const fetchPokemonDetail = async (name : string) => {
    try {
        const {data}  = await apolloClient.query({
            query: GET_POKEMON_DETAIL,
            variables: {
                name: name
            }
        })
        return data
    } catch (err) {
        console.error(err)
        throw err
    }
}
