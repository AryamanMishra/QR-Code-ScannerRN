import React from 'react'
import { StyleSheet,View } from 'react-native'
import HistoryScreenContent from '../components/historyScreenFiles/HistoryScreenContent'
import HistoryScreenNav from '../components/historyScreenFiles/HistoryScreenNav'
import { useGlobalContext } from '../context'


// main history screen
const HistoryScreen = ({ navigation })=> {

    // history list state variable taken from global context
    const { historyList } = useGlobalContext()

    return (
        <View style={styles.historyScreen}>
            <HistoryScreenNav navigation={navigation}/>
            <HistoryScreenContent historyList={historyList} navigation={navigation} /> 
        </View>
    )
}


// styles
const styles = StyleSheet.create({
    historyScreen : {
        flex:1,
        backgroundColor:'black',
    },
    text : {
        color:'white',
        fontSize:15
    }
})

export default HistoryScreen
