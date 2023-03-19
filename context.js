import React,{useContext,useState} from 'react'
import { Alert,ToastAndroid } from 'react-native'

const AppContext = React.createContext()


// sets a global context to out application
export const AppProvider = ({children})=> {


    // state variable to handle flashlight 
    const [isFlashLightOn,setIsFlashLightOn] = useState(false)

    const [historyList,setHistoryList] = useState([])


    const [scanned, setScanned] = useState(false);

    const [showDeleteItemButtonOnLongPress,setShowDeleteItemButtonOnLongPress] = useState(false)

    const showToastAndClearHistory = ()=> {
        setHistoryList([])
        ToastAndroid.show('Cleared History', ToastAndroid.SHORT)
    }
    
    const clearHistoryList = ()=> {
        Alert.alert('Clear history?', 'All scan history would be cleared',
            [
                {
                    text:'No',
                    style:'cancel'
                },
                {
                    text:'Yes',
                    onPress:()=>showToastAndClearHistory()
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
                setScanned,
                showDeleteItemButtonOnLongPress,
                setShowDeleteItemButtonOnLongPress,
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

