import { UiContextProvider } from "./context/UiContext";
import { RouterApp } from "./routers";
import './styles/index.scss';

function PokemonApp() {
  return (
    <UiContextProvider>

      <div className="App">

        <RouterApp/>

      </div>

    </UiContextProvider>

  );
}

export default PokemonApp;
