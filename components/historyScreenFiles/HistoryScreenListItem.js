import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'


const HistoryScreenListItem = ({item,navigation})=> {

    const handleLongPress = (id)=> {
        navigation.navigate('HistoryScreenOnSelect', {
            id
        })
    }

    return (
        <TouchableHighlight
           style={styles.itemView}
           onLongPress={()=>handleLongPress(item.id)}
        >
            <View>
                <Text style={styles.text}>{item.data}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    itemView : {
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'#28282B',
        margin:20,
        padding:15
    },
    text : {
        color:'white'
    }
})

export default HistoryScreenListItem
