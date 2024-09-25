import { useContext } from "react";

export const Context = useContext()

const ContextProvider = ({children}) =>{
    return( 
        <Context.Provider value={cart}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider