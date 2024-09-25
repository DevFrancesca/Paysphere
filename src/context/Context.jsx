import { createContext, useReducer } from "react"
const initialState =[]

const reducer =(state, action) =>{
    switch(action.type){
        case "add to cart": {
            const checking = state.findIndex((e)=>e.id === action.payload.id)
            if(checking >= 0){
                state[checking].qty+=1
                return[...state]
            }else{
                return[...state, {...action.payload, qty:1}]
            }
        }
        default: return state
    }
}

export const Context = createContext()

const ContextProvider = ({children}) =>{
  const [cart, dispatch] = useReducer(reducer, initialState)

    return( 
        <Context.Provider value={{cart, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider