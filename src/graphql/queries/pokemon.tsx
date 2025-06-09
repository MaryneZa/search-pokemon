import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
    query Pokemons($first: Int!) {
        pokemons(first: $first) {
            id
            name
            classification
            image
    }
    }
`

export const GET_POKEMON_DETAIL = gql`
    query PokemonDetail($name: String!) {
        pokemon(name: $name) {
            id
            number
            name
            classification
            types
            resistant
            weaknesses
            fleeRate
            maxCP
            maxHP
            image
            evolutions {
                id
                name
                image
            }
        }
}
`

export const SEARCH_POKEMON = gql`
    query SearchPokemon($name: String!) {
        pokemon(name: $name) {
            name
            classification
            image
    }
    }
`

