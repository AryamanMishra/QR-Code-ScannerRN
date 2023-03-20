import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import ArrowRight from 'react-native-vector-icons/FontAwesome'
import {stylesofListItem} from '../historyScreenFiles/HistoryScreenListItem'


const HistoryScreenListItem = ({item,route})=> {

    const itemProps = {
        activeOpacity:0.65, 
        style:route.params.id === item.id ? styles.selectItemView : stylesofListItem.itemView
    }
    return (
        <TouchableHighlight
           {...itemProps}
        >
            <View style={stylesofListItem.insideItemView}>
                <Text style={stylesofListItem.text}>Scan on {item.currentDate} </Text>
                <Text style={stylesofListItem.timeText}>{item.currentTime} {item.amOrPm}</Text>
                <ArrowRight
                    name='long-arrow-right'
                    size={20}
                    color='white'
                />
                <Text style={stylesofListItem.dataText}>{item.data.substring(0,25)}</Text> 
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    selectItemView : {
        borderWidth:0.3,
        borderRadius:7,
        borderColor:'white',
        marginTop:40,
        marginHorizontal:19,
        padding:18,
        backgroundColor:'rgba(0,10,200,0.95)',
    }
})

export default HistoryScreenListItem
