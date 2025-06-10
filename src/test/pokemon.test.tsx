import { fetchPokemonDetail } from "@/services/pokemon";

describe('Test Pokemon Type', () => {

    const test_data = [
        { name: "Bulbasaur", expect_result: ["Grass", "Poison"] },
        { name: "Charmander", expect_result: ["Fire"] },
        { name: "Squirtle", expect_result: ["Water"] }
    ]

    test_data.forEach(({ name, expect_result }) => {
        test(`${name} should have types ${expect_result.join(", ")}`, async () => {
            const data = await fetchPokemonDetail(name);

            const result = data?.pokemon?.types;
            expect(result).toEqual(expect_result);
        });
    });

})