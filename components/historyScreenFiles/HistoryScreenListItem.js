import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import ArrowRight from 'react-native-vector-icons/FontAwesome'


const HistoryScreenListItem = ({item,navigation})=> {

    const handleLongPress = (id)=> {
        navigation.navigate('HistoryScreenOnSelect', {
            id
        })
    }
    // data,
    // type,
    // currentDate,
    // currentTime,
    // amOrPm,
    return (
        <TouchableHighlight
            activeOpacity={0.65} 
            style={styles.itemView}
            onLongPress={()=>handleLongPress(item.id)}
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
    itemView : {
        borderWidth:0.3,
        borderRadius:7,
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
    text : {
        color:'white',
        fontSize:18
    },
    dataText : {
        color:'white',
        fontSize:12,
        color:'rgb(10,170,220)',
        fontStyle:'italic'
    },
    timeText : {
        color:'grey',
        fontSize:12,
        fontStyle:'italic'
    }
})

export default HistoryScreenListItem
