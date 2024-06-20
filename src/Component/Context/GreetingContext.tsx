import React, { createContext } from "react";
import { backgroundColor } from "./Greeting";

type GreetingContextProviderProp = {
    children: React.ReactNode
}


export const GreetingContext = createContext(backgroundColor);

export const GreetingContextProvider = ({children}: GreetingContextProviderProp) => {
    return (
        <GreetingContext.Provider value={backgroundColor}>
            {children}
        </GreetingContext.Provider>
    )
}