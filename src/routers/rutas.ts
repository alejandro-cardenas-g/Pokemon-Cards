import { Main } from "../Layout/Main";
import { Categorias, Categoria, Home } from "../pages";


const rutas:IRutas[] = [
    {
        path: '',
        element: Home,
        layout: Main
    },
    {
        path: 'types',
        element: Categorias,
        layout: Main
    },
    {
        path: 'types/:id',
        element: Categoria,
        layout: Main
    }
];

export default rutas;

interface IRutas{
    path: string;
    element: () => JSX.Element;
    layout: ({children}: any) => JSX.Element;
}