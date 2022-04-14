import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { TypesCard } from "../../components/Categorias";
import { Spinner } from "../../components/utils";

export const Categorias = () => {

  const [types, setTypes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if(types.length === 0 && loading){
      setLoading(true);
      setError(false);
      axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}type`
      })
      .then((res: AxiosResponse) => {
        setLoading(false);
        setTypes(res.data.results);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
    }
  },[types, loading]);

  return (
    <div className="categorias">

      <div className="row categorias__content">

        <h2 className='categorias__heading'>Choose a Pokemon Type</h2>

        { 
          (error) 
          ? 
              null
          :
              types.map((type, index) => (
                  <TypesCard type={type} key={`${index}-${type.name}`}/>
              ))

        }

        <Spinner loading={loading}/>

      </div>

    </div>
  )
}
