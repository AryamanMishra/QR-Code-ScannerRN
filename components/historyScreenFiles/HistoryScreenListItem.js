import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const HistoryScreenListItem = ({item})=> {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{item.data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item : {
        borderWidth:1,
        borderColor:'white'
    },
    text : {
        color:'white'
    }
})

export default HistoryScreenListItem
