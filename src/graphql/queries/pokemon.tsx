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
            weight {
                minimum
                maximum
            }
            height {
                minimum
                maximum
            }
            evolutions {
                id
                name
                image
            }
            attacks {
                fast {
                    name
                    type
                    damage
                }
                special {
                    name
                    type
                    damage
                }
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

export const TEST_POKEMON_TYPE = gql`
    query Test($name: String!) {
        pokemon(name: $name) {
            types
        }
    }
`

