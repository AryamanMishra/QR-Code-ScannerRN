import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HistoryScreenContent from '../components/historyScreenFiles/HistoryScreenContent'
import HistoryScreenNav from '../components/historyScreenFiles/HistoryScreenNav'
import { useGlobalContext } from '../context'

const HistoryScreen = ({ navigation })=> {

    const { historyList,clearHistoryList } = useGlobalContext()
    return (
        <View style={styles.historyScreen}>
            <HistoryScreenNav navigation={navigation}/>
            <HistoryScreenContent historyList={historyList}/>
            {
                historyList.length !== 0 && (
                    <TouchableOpacity
                        activeOpacity={0.3}
                        style={styles.clearHistoryView}
                        onPress={clearHistoryList}
                        disabled={historyList.length === 0 ? true : false}
                    >
                        <View>
                            <Text style={styles.text}>Clear History</Text>        
                        </View>
                    </TouchableOpacity>
                )   
            }
            
        </View>
    )
}


const styles = StyleSheet.create({
    historyScreen : {
        flex:1
    },
    clearHistoryView : {
        position:'absolute',
        top:'80%',
        left:'33%',
        borderWidth:0.5,
        borderRadius:40,
        borderColor:'white',
        paddingVertical:12,
        paddingHorizontal:15,
    },
    text : {
        color:'white',
        fontSize:15
    }
})

export default HistoryScreen
