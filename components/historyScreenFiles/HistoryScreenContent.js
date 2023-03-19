import React from 'react'
import { StyleSheet, View, FlatList, Text,Pressable } from 'react-native'
import { useGlobalContext } from '../../context'
import HistoryScreenListItem from './HistoryScreenListItem'
import TrashIcon from 'react-native-vector-icons/Feather'


const HistoryScreenContent = ({ navigation })=> {

    const {historyList} = useGlobalContext()
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
                    renderItem={({item}) => <HistoryScreenListItem item={item} navigation={navigation}/>}
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
