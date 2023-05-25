import React,{useContext,useState} from 'react'
import { Alert,ToastAndroid } from 'react-native'

const AppContext = React.createContext()


// sets a global context to out application
export const AppProvider = ({children})=> {


    // state variable to handle flashlight 
    const [isFlashLightOn,setIsFlashLightOn] = useState(false)


    // history list state variable
    const [historyList,setHistoryList] = useState([])


    // scanned state variable to check if camera has scanned a code or not
    const [scanned, setScanned] = useState(false);


    // delete a particular item
    const deleteItem = (id)=> {
        setHistoryList(historyList.filter((item)=> item.id !== id))
    }

    // show toast msg and clear the history list state variable
    const showToastAndClearHistory = ()=> {
        setHistoryList([])
        ToastAndroid.show('Cleared History', ToastAndroid.SHORT)
    }
    

    // ask user to confirm clear history list
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

    const clearHistoryItem = (id)=> {
        setHistoryList(historyList.filter((item)=>item.id !== id))
    }
    // toggle flashlight
    const toggleFlashLight = ()=> {
        setIsFlashLightOn(!isFlashLightOn)
    }


    const [longPressItem,setLongPressItem] = useState(false)

    const [selectedHistoryItemId,setSelectedHistoryItemId] = useState(0)

    const [dataLinkOrOther,setDataLinkOrOther] = useState('link')

    const [linkData,setLinkData] = useState('')

    return (

        // context provider for global usage 
        <AppContext.Provider
            value={{
                isFlashLightOn,
                toggleFlashLight,
                historyList,
                setHistoryList,
                clearHistoryList,
                scanned,
                setScanned,
                deleteItem,
                longPressItem,
                setLongPressItem,
                selectedHistoryItemId,
                setSelectedHistoryItemId,
                clearHistoryItem,
                dataLinkOrOther,
                setDataLinkOrOther,
                linkData,setLinkData
            }}
        >
            {/* to render all other chil components */}
            {children} 
        </AppContext.Provider>
    )
}



// custom hook for global context
export const useGlobalContext = ()=> {
    return useContext(AppContext)
}

