import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import rutas from './rutas';


export const RouterApp = () => {
    return (
        <BrowserRouter>
            
            <Routes>

                <Route path = "/">

                    {
                        rutas.map(({path, element:Component, layout:Layout}, index) => (

                            <Route
                                key={`${index}.${path}`}
                                path={path}
                                element={
                                    <Layout>
                                        <Component/>
                                    </Layout>
                                }
                            />

                        )) 
                    }
                    
                    <Route
                        path='*'
                        element={<Navigate to='/'/>}
                    />

                </Route>

            </Routes>

        </BrowserRouter>
    )
}
