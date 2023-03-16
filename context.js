import React,{useContext,useState} from 'react'

const AppContext = React.createContext()


// sets a global context to out application
export const AppProvider = ({children})=> {


    // state variable to handle flashlight 
    const [isFlashLightOn,setIsFlashLightOn] = useState(false)

    const [historyList,setHistoryList] = useState([])


    const [scanned, setScanned] = useState(false);

    const clearHistoryList = ()=> {
        setHistoryList([])
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
                historyList,
                setHistoryList,
                clearHistoryList,
                scanned,
                setScanned
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

