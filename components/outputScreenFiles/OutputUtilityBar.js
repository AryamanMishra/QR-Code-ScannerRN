import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import WebIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import QRCodeIcon from 'react-native-vector-icons/Ionicons'
import { useGlobalContext } from '../../context'


// utility bar on output page providing open website and view code options
const OutputUtilityBar = ({ checkURL })=> {

    const {dataLinkOrOther} = useGlobalContext()
    return (
        <View style={styles.outputUtilityBar}>
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={checkURL}
            >
                <View style={styles.icon}>

                    {/* react native web search icon  */}
                    <WebIcon
                        name='search-web'
                        color='white'
                        size={27}
                    />
                    <Text style={styles.IconText}>{dataLinkOrOther === 'other' ? 'Copy Text' : 'Open Site'}</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity
                 activeOpacity={0.4}
            >
                <View style={styles.icon}>

                 {/* react native qr icon  */}
                    <QRCodeIcon 
                        name='qr-code-outline'
                        color='white'
                        size={27}
                    />
                    <Text style={styles.IconText}>View Code</Text>
                    <View> 
                        <Text style={styles.tempText}>To be available soon </Text> 
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}



// styles
const styles = StyleSheet.create({
    outputUtilityBar : {
        flex:2,
        width:'100%',
        marginBottom:100,
        marginTop:50
    },
    icon : {
        padding:12,
        flexDirection:'row',
        margin:12,
        gap:13,
        borderWidth:0.2,
        borderColor:'white',
        borderRadius:50,
    },
    IconText : {
        color:'white',
        fontSize:18,
        letterSpacing:0.5,
    },
    tempText : {
        fontSize:10,
        color:'grey',
        fontStyle:'italic',
        marginLeft:100
    }
})
export default OutputUtilityBar
