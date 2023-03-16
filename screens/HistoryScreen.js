import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import HistoryScreenContent from '../components/historyScreenFiles/HistoryScreenContent'
import HistoryScreenNav from '../components/historyScreenFiles/HistoryScreenNav'
import { useGlobalContext } from '../context'

const HistoryScreen = ({ navigation })=> {

    const { historyList,clearHistoryList } = useGlobalContext()
    return (
        <View style={styles.historyScreen}>
            <HistoryScreenNav navigation={navigation}/>
            <HistoryScreenContent historyList={historyList}/>
            <View style={styles.clearHistoryView}>
                <Pressable 
                    onPress={clearHistoryList}
                >
                    <Text style={styles.text}>Clear History</Text>
                </Pressable>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    historyScreen : {
        flex:1
    },
    clearHistoryView : {

    },
    text : {
        color:'white'
    }
})

export default HistoryScreen
