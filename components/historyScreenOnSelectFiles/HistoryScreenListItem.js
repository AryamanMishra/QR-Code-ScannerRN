import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'


const HistoryScreenListItem = ({item,route})=> {

    const itemProps = {
        style:route.params.id === item.id ? styles.selectItemView : styles.itemView
    }
    return (
        <TouchableHighlight
           {...itemProps}
        >
            <View>
                <Text style={styles.text}>{item.data}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    selectItemView : {
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'rgba(255,255,255,0.6)',
        margin:20,
        padding:15
    },
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
