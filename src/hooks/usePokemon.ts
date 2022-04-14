import { useEffect, useState } from "react"
import axios, { AxiosResponse } from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export const usePokemonSearch = (query: string, offset: number) => {

    const [loading, setLoading] = useState<boolean>(true);

    const [error, setError] = useState<boolean>(false);

    const [pokemons, setPokemons] = useState<any[]>([]);

    const [hasMore, setHasMore] = useState<boolean>(false);

    useEffect(() => {

        setLoading(true);
        setError(false);

        let cancel: any;

        const params = (query!== '') ? {}
        :{
            limit: 10,
            offset
        }; 

        axios({
            method: 'GET',
            url: `${BASE_URL}pokemon/${query.toLowerCase()}`,
            params,
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
        .then((res:AxiosResponse) => {
            
            if(res.status !== 200){
                
                setPokemons([]);

            }else{
                if(query!== ''){
                
                    const poke = res.data;
                    setPokemons((prev) => [...prev, poke]);
                    setHasMore(false);
    
                }else{
    
                    const poke = res.data.results;
                    poke.forEach(async(pokeunit:any) => {
                        
                        try{
                            const resultDetail = await axios({method: 'GET',url: `${BASE_URL}pokemon/${pokeunit.name}`});
    
                            setPokemons((prev) => [...prev, resultDetail.data]);
                            setHasMore(res.data.results.length >= 10);
                        }catch(error){
                            setError(true);
                        }
    
                    });
                }
    
            }

            setLoading(false);

        }).catch(e => {
            if(axios.isCancel(e)) return;
            setLoading(false);
            setError(true);
        });

        return () => cancel();

    }, [offset, query]);

    useEffect(() => {
        setPokemons([]);
    }, [query])

    return {
        loading,
        hasMore,
        pokemons,
        error
    };

}
