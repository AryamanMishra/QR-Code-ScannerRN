import React, { useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { useGlobalContext } from '../../context'


const HistoryScreenListItem = ({item})=> {

    const [isPressed,setIsPressed] = useState(false)

    const {setShowDeleteItemButtonOnLongPress} = useGlobalContext()
    const handleLongPress = (id)=> {
        setIsPressed(true)
        setShowDeleteItemButtonOnLongPress(true)
    }

    const touchableProps = {
        activeOpacity:0.5,
        onLongPress:()=>handleLongPress(item.id),
        style:isPressed ? styles.viewPressed : styles.viewDefault
    }
    return (
        <TouchableHighlight
           {...touchableProps}
        >
            <View>
                <Text style={styles.text}>{item.data}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    viewDefault : {
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'#28282B',
        margin:20,
        padding:15
    },
    viewPressed : {
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'rgba(255,255,255,0.6)',
        margin:20,
        padding:15
    },
    text : {
        color:'white'
    }
})

export default HistoryScreenListItem
