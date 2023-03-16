import AsyncStorage from '@react-native-async-storage/async-storage';


export const setData = async(historyList)=> {
    if (historyList.length === 0) {
        try {
            await AsyncStorage.setItem('@historyList', JSON.stringify([])).then((value)=> {
                // console.log(historyList)
            })
        } 
        catch (error) {
            console.log('Error in saving empty array to async storage', error)
        }
    }
    else {
        try {
            await AsyncStorage.setItem('@historyList',JSON.stringify(historyList)).then((value)=> {
                // console.log(historyList)
            })
        } 
        catch (error) {
            console.log('Error in saving list to storage', error)
        }
    }
}





export const getData = async(historyList,setHistoryList)=> {
    try {
        await AsyncStorage.getItem('@historyList').then((value)=> {
            if (value !== null) {
                setHistoryList(JSON.parse(value))
            }
            else {
                setHistoryList([])
            }
        })
        console.log(historyList)
    }
    catch(err){
        console.log('Error in getItem',err)
    }
}