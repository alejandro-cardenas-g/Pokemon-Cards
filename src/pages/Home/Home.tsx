import { useState } from "react";

import { HomeForm } from "../../components/Home";
import { PokemonGridSearch } from "../../components/pokemons";
import { ScrollButton } from "../../components/utils";

export const Home = () => {

  const [query, setQuery] = useState<string>('');
  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <div className="home">

      <HomeForm searchInput={searchInput} setQuery={setQuery} setSearchInput={setSearchInput}/>

      <PokemonGridSearch query={query} />

      <ScrollButton/>

    </div>
  )
}
