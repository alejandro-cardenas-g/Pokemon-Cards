import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { UiContextProvider } from "./context/UiContext";
import { RouterApp } from "./routers";

import './styles/index.scss';

function PokemonApp() {
  return (
    <UiContextProvider>

      <div className="App">

        <RouterApp/>

        <ToastContainer />

      </div>

      

    </UiContextProvider>

  );
}

export default PokemonApp;
