import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { useGlobalContext } from '../../context'
import HistoryScreenListItem from './HistoryScreenListItem'


// main content page when history item is selected
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
        </View>
    )
}


const styles = StyleSheet.create({
    mainContent : {
        flex:6,
        backgroundColor:'black',
    },
    text : {
        color:'white',
        fontSize:20
    },
})
export default HistoryScreenContent
