import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { useGlobalContext } from '../../context'
import HistoryScreenListItem from './HistoryScreenListItem'


const HistoryScreenContent = ({ route })=> {

    const { historyList } = useGlobalContext()
    return (
        <View style={styles.mainContent}>
            {
                historyList.length !== 0 ? (
                    <FlatList
                    style={styles.list}
                    data={historyList}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({item}) => <HistoryScreenListItem item={item} route={route}/>}
                    />
                )
                : (
                    <View style={{flex:1,alignItems:'center',marginTop:40}}>
                        <Text style={styles.text}>No Recent Scans</Text>
                    </View>
                )
            }  
            <View 
                style={styles.clearHistoryButton}>
            </View>
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
    clearHistoryButton : {
        width:'35%',
        height:'10%'
    },
})
export default HistoryScreenContent
