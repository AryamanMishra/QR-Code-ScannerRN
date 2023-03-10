import React,{useContext,useState} from 'react'

const AppContext = React.createContext()

export const AppProvider = ({children})=> {

    const [isFlashLightOn,setIsFlashLightOn] = useState(false)

    const toggleFlashLight = ()=> {
        setIsFlashLightOn(!isFlashLightOn)
    }
    return (

        
        <AppContext.Provider
            value={{
                isFlashLightOn,
                toggleFlashLight
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=> {
    return useContext(AppContext)
}

