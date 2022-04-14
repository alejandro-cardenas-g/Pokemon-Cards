import { createContext, useState } from "react"

export const UiContext = createContext<IUiContext>({
    active: null,
    isOpen: false,
    setPokemonActive: (id: null | number):void => {},
    openModal: ():void => {},
    closeModal: ():void => {}
});


export const UiContextProvider = ({children}: IUiContextoProvider) => {

  const [active, setActive] = useState<null | number>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const setPokemonActive = (id: number | null) => {
    setActive(id);
  }

  return (
    <UiContext.Provider value={{
      active,
      isOpen,
      openModal,
      setPokemonActive,
      closeModal
    }}>
      {children}
    </UiContext.Provider>
  )
}

interface IUiContext{
    active: number | null;
    isOpen: boolean;
    setPokemonActive: (id: number | null) => void;
    openModal: () => void ;
    closeModal: () => void;
}

interface IUiContextoProvider{
  children: React.ReactNode;
}