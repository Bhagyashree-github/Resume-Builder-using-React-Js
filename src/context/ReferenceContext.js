import { createContext, useContext } from "react";


const ReferenceContext = createContext(null)


const useGlobalReducerContext = ()=>{
    return useContext(ReferenceContext);
}

export { ReferenceContext,useGlobalReducerContext}