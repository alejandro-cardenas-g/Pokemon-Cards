import { useNavigate } from "react-router-dom";
import { pokemonTypes } from "../../data/pokemon_types";
import { capitalizeFirstLetter } from "../../helpers/capitalize";

import { setColor } from "../../helpers/setColor";

const setTypeIcon = (type:string):string => {
    const iconClass = pokemonTypes.find(ptype => ptype.name.toString() === type)?.icon || 'fa-solid fa-circle-dot';
    return iconClass;
}

export const TypesCard = ({type}:any) => {

    const navigate = useNavigate();

    const handleClick = () => {
        const { url } = type;
        const id = url.split('/')[6];
        navigate(`/types/${id}`);
    }

    return (

        <div className='col-12 col-sm-6 col-lg-3 categorias__col'>

            <div className='categorias__card animate__animated animate__heartBeat animate__flipInY' style={{background: setColor(type.name, '208deg', '0%')}}
                onClick={handleClick}
            >

                <h3 className='categorias__card-title'>{capitalizeFirstLetter(type.name)}</h3>
                <div className='categorias__icon'>
                    <i className={setTypeIcon(type.name)}></i>
                </div>

            </div>

        </div>
    )
}