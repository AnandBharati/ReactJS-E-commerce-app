import React, { useContext } from 'react'
import { ModelContext } from './ModelContext'

export function MODEL(){
    const model = useContext(ModelContext);
    return model;
}

function ModelProvider({ children }) {
    const [isSignupOpen, setIsSignupOpen] = React.useState(false);
    const [isLoginOpen, setIsLoginOpen] = React.useState(false);

    return (
        <ModelContext.Provider value={{ isSignupOpen, isLoginOpen, setIsSignupOpen, setIsLoginOpen }}>
            {children}
        </ModelContext.Provider>
    )
}

export default ModelProvider