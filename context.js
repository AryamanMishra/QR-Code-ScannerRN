import React,{useContext,useState} from 'react'

const AppContext = React.createContext()


// sets a global context to out application
export const AppProvider = ({children})=> {


    // state variable to handle flashlight 
    const [isFlashLightOn,setIsFlashLightOn] = useState(false)

    const [showSidebar,setShowSidebar] = useState(false)

    const closeSidebar = ()=> {
        setShowSidebar(false)
    }

    const openSidebar = ()=> {
        setShowSidebar(true)
    }
    // toggle flashlight
    const toggleFlashLight = ()=> {
        setIsFlashLightOn(!isFlashLightOn)
    }
    return (

        <AppContext.Provider
            value={{
                isFlashLightOn,
                toggleFlashLight,
                showSidebar,
                openSidebar,
                closeSidebar
            }}
        >
            {children}
        </AppContext.Provider>
    )
}


// custom hook for global context
export const useGlobalContext = ()=> {
    return useContext(AppContext)
}

