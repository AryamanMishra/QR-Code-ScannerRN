import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { useGlobalContext } from '../../context'
import HistoryScreenListItem from './HistoryScreenListItem'


// history screen storing all recent scans performed by user
const HistoryScreenContent = ({ navigation })=> {


    // state variable storing all list items
    const {historyList} = useGlobalContext()


    return (
        <View style={styles.mainContent}>

            {/* if history list is non empty */}
            {
                historyList.length !== 0 ? (

                    // react native flatlist
                    <FlatList
                        style={styles.list}
                        data={historyList}
                        keyExtractor={(item) => {
                            return item.id;
                        }}

                        // individual list item component
                        renderItem={({item}) => <HistoryScreenListItem item={item} navigation={navigation}/>}
                    />
                )

                // if list is empty
                : (
                    <View style={{flex:1,alignItems:'center',marginTop:40}}>
                        <Text style={styles.text}>No Recent Scans</Text>
                    </View>
                )
            }   
        </View>
    )
}


// styles
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
