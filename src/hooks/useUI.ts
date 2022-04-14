import { useContext } from "react"

import { UiContext } from "../context/UiContext"

export const useUI = () => {

    const context = useContext(UiContext);

    return {
        ...context
    };

}
