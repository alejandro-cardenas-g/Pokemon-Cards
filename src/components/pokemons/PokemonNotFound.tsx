const pokeball = require('./pokeball.png');

export const PokemonNotFound = () => {

    return (
        
        <div className="col-12 col-sm-6 col-lg-4 mb-4 animate__animated animate__zoomIn">
            <div className="card home__card" style={{background: 'linear-gradient(35deg, #ccbebe 20%, #ff452b 90%)'}}>
                <img src={pokeball} className="card-img-top" alt={'Pokemon Not found'}/>
                <div className="card-body">
                    <h3 className="card-title">Pokemon Not Found</h3>
                    <p><span>Type: </span>Unknown</p>
                </div>
            </div>
        </div>
    )

}
