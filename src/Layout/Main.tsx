import { NavLink } from 'react-router-dom';
import { PokemonModal } from '../components/pokemons';

export const Main = ({children}:IMain) => {
    return (
        <>

            <PokemonModal/>

            <nav className="layout">
                <div className="layout__container">

                    <h3 className="layout__heading"><span className="layout__heading--span">Pokémon</span>.Cards</h3>

                    <div className="layout__navigation">

                        <NavLink className={({isActive}) => isActive ? 'layout__link active' : 'layout__link'} to='/'>Home</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'layout__link active' : 'layout__link'} to='/types'>Types</NavLink>

                    </div>

                </div>
            </nav>

            {children}

        </>


  )
}

interface IMain{
    children: React.ReactNode;
}