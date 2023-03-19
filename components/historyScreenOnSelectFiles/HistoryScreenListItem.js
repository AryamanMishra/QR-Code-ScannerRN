import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import ArrowRight from 'react-native-vector-icons/FontAwesome'

const HistoryScreenListItem = ({item,route})=> {

    const itemProps = {
        activeOpacity:0.65, 
        style:route.params.id === item.id ? styles.selectItemView : styles.itemView
    }
    return (
        <TouchableHighlight
           {...itemProps}
        >
            <View style={styles.insideItemView}>
                <Text style={styles.text}>Scan on {item.currentDate} </Text>
                <Text style={styles.timeText}>{item.currentTime} {item.amOrPm}</Text>
                <ArrowRight
                    name='long-arrow-right'
                    size={20}
                    color='white'
                />
                <Text style={styles.dataText}>{item.data.substring(0,25)}</Text> 
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
        backgroundColor:'rgba(255,255,255,0.8)',
    },
    itemView : {
        borderWidth:0.3,
        borderRadius:8,
        borderColor:'white',
        backgroundColor:'#304250',
        marginTop:40,
        marginHorizontal:19,
        padding:18,
    },
    insideItemView : {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        flexWrap:'wrap'
    },
    dataText : {
        color:'white',
        fontSize:12,
        color:'rgb(10,170,220)',
        fontStyle:'italic'
    },
    text : {
        color:'white',
        fontSize:18
    },
    timeText : {
        color:'white',
        fontSize:12,
        fontStyle:'italic'
    }
})

export default HistoryScreenListItem
