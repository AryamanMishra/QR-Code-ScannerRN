import AsyncStorage from '@react-native-async-storage/async-storage';


// methods to handle async storage
export const setData = async(historyList)=> {

    // is the historylist is emoty
    if (historyList.length === 0) {
        try {
            // store empty list so that items can be added to it later
            await AsyncStorage.setItem('@historyList', JSON.stringify([])).then((value)=> {
                // console.log('empty list')
            })
        } 
        catch (error) {
            console.log('Error in saving empty array to async storage', error)
        }
    }
    else {
        try {
            // store the list itself using setItem method of asyncStorage
            // stpre list as string
            await AsyncStorage.setItem('@historyList',JSON.stringify(historyList)).then((value)=> {
                // console.log('set me non zero',historyList)
            })
        } 
        catch (error) {
            console.log('Error in saving list to storage', error)
        }
    }
}





export const getData = async(historyList,setHistoryList)=> {

    try {
        // get data from aysnc storage
        await AsyncStorage.getItem('@historyList').then((value)=> {
            // console.log('val',value)

            // if list is non empty
            if (value !== null) {

                // change state variable based on value in async storage
                setHistoryList(JSON.parse(value))
            }

            // if list is empty
            else {
                setHistoryList([])
            }
        })
    }
    catch(err){
        console.log('Error in getItem',err)
    }
}