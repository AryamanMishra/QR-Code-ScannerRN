import React,{useContext,useState} from 'react'
import { Alert } from 'react-native'

const AppContext = React.createContext()


// sets a global context to out application
export const AppProvider = ({children})=> {


    // state variable to handle flashlight 
    const [isFlashLightOn,setIsFlashLightOn] = useState(false)

    const [historyList,setHistoryList] = useState([])


    const [scanned, setScanned] = useState(false);

    const clearHistoryList = ()=> {
        Alert.alert('Clear history?', 'All scan history would be cleared',
            [
                {
                    text:'Yes',
                    onPress:()=>setHistoryList([])
                },
                {
                    text:'No',
                    style:'cancel'
                }
            ],
            {
                cancelable: true
            }
        )  
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

