import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import ArrowRight from 'react-native-vector-icons/FontAwesome'
import { useGlobalContext } from '../../context'


// individual history list item
const HistoryScreenListItem = ({item,navigation})=> {


    const {longPressItem,
        setLongPressItem,
        selectedHistoryItemId,
        setSelectedHistoryItemId} = useGlobalContext()


    // handles single press of item
    const handlePress = ()=> {
        navigation.navigate('HistoryItemDetail', {
            item
        })
    }

    const handleLongPress = ()=> {
        setLongPressItem(true)
        setSelectedHistoryItemId(item.id)  
    }


    // data,
    // type,
    // currentDate,
    // currentTime,
    // amOrPm,

    return (
        <TouchableHighlight
            activeOpacity={0.65}  // active opacity on item press
            style={longPressItem === true && selectedHistoryItemId === item.id ? stylesofListItem.selectedItemView : stylesofListItem.itemView}
            onLongPress={()=>handleLongPress(item.id)} 
            onPress={()=>handlePress()}
        >
            {/* single item  */}
            <View style={stylesofListItem.insideItemView}>
                <Text style={stylesofListItem.text}>Scan on {item.currentDate} </Text>
                <Text style={stylesofListItem.timeText}>{item.currentTime} {item.amOrPm}</Text>

                {/* react native right arrow to open item details */}
                <ArrowRight
                    name='long-arrow-right'
                    size={20}
                    color='white'
                />

                {/* give short desc of item data  */}
                <Text style={stylesofListItem.dataText}>{item.data.substring(0,25)}</Text>     
            </View>
        </TouchableHighlight>
    )
}


// styles
export const stylesofListItem = StyleSheet.create({
    itemView : {
        borderWidth:0.3,
        borderRadius:7,
        borderColor:'white',
        backgroundColor:'#103250',
        marginTop:45,
        marginHorizontal:19,
        padding:18,
    },
    selectedItemView : {
        borderWidth:0.3,
        borderRadius:7,
        borderColor:'white',
        backgroundColor:'#07a',
        marginTop:45,
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
