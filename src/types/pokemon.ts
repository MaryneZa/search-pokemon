export interface Pokemon {
  id: string;
  number?: string;
  name: string;
  classification?: string;
  types?: string[];
  resistant?: string[];
  weaknesses?: string[];
  fleeRate?: number;
  maxCP?: number;
  maxHP?: number;
  image: string;
  weight?: {
    minimum?: string;
    maximum?: string;
  };
  height?: {
    minimum?: string;
    maximum?: string;
  };
  attacks?: {
    fast?: Attack[];
    special?: Attack[];
  };
  evolutions?: Pokemon[];
}

export interface Attack {
  name?: string;
  type?: string;
  damage?: number;
}

export interface PokemonData {
  pokemon: Pokemon | null;
}

export interface PokemonData {
  pokemons: Pokemon | null;
}