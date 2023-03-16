import React from 'react'
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native'
import { useGlobalContext } from '../../context'
import HistoryScreenListItem from './HistoryScreenListItem'


const HistoryScreenContent = ({ })=> {

    const {historyList} = useGlobalContext()
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
                    <View style={{flex:1,alignItems:'center',marginTop:40}}>
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
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center'
    },
    text : {
        color:'white',
        fontSize:20
    },
    
})
export default HistoryScreenContent
