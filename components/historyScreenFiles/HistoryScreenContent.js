import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import HistoryScreenListItem from './HistoryScreenListItem'


const HistoryScreenContent = ({ historyList })=> {
    return (
        <View style={styles.mainContent}>
            {
                historyList.length !== 0 ? (
                    <FlatList
                    data={historyList}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({item}) => <HistoryScreenListItem item={item}/>}
                    />
                )
                : (
                    <View style={{flex:1,alignItems:'center',marginTop:100}}>
                        <Text style={styles.text}>No Recent Scans</Text>
                    </View>
                )
            }
            
        </View>
    )
}


const styles = StyleSheet.create({
    mainContent : {
        flex:6,
        backgroundColor:'black'
    },
    text : {
        color:'white',
        fontSize:20
    }
})
export default HistoryScreenContent
