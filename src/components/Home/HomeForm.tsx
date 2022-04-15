export const HomeForm = ({setQuery, searchInput, setSearchInput}: IHomeForm) => {

    const handleChange = ({target}:React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(target.value);
        if(target.value === '') setQuery('');
    }
    
      const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setQuery(searchInput);
    };

    const clearInput = () => {
        setSearchInput('');
        setQuery('');
    }

    return (
        
        <form className="form" onSubmit={handleSubmit}>
            <div className="mb-3 home__buscador">
            <label htmlFor="busqueda" className="form-label">Search for a <span>Pokémon</span></label>
            <input type="text" className="form-control" id="busqueda"  value={searchInput} placeholder='Ex. Pikachu' onChange={handleChange}/>
            <button type="submit" className="btn btn__search">Search</button>
            <button type="button" className="btn btn__back"
                onClick={clearInput}
            >Reset Search</button>
            </div>
        </form>

    )
}

interface IHomeForm{
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    searchInput: string;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}
