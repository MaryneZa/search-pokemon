import { TEST_POKEMON_TYPE } from "@/graphql/queries/pokemon";
import { PokemonData } from "@/types/pokemon";
import { useQuery } from "@apollo/client";
import { client } from "@/lib/apolloClient";

describe('Test Pokemon Type', () => {

    const test_data = [
        { name: "Bulbasaur", expect_result: ["Grass", "Poison"] },
        { name: "Charmander", expect_result: ["Fire"] },
        { name: "Squirtle", expect_result: ["Water"] }
    ]

    test_data.forEach(({ name, expect_result }) => {
        test(`${name} should have types ${expect_result.join(", ")}`, async () => {
            const { data, errors } = await client.query<PokemonData>({
                query: TEST_POKEMON_TYPE,
                variables: { name },
            })

            expect(errors).toBeUndefined();
            const result = data?.pokemon?.types;
            expect(result).toEqual(expect_result);
        });
    });

})