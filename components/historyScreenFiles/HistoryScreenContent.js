import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import HistoryScreenListItem from './HistoryScreenListItem'


const HistoryScreenContent = ({ historyList })=> {
    return (
        <View style={styles.mainContent}>
            <FlatList
                
                data={historyList}
                keyExtractor={item => item.id}
                renderItem={({item}) => <HistoryScreenListItem item={item}/>}
            >
            </FlatList>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContent : {
        flex:6,
        backgroundColor:'black'
    },
    historyList : {

    },
    historyItem : {

    }
})
export default HistoryScreenContent
