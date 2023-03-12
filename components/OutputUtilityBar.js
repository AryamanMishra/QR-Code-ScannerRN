import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import WebIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import QRCodeIcon from 'react-native-vector-icons/Ionicons'

const OutputUtilityBar = ({ checkURL })=> {
    return (
        <View style={styles.outputUtilityBar}>
            <TouchableOpacity
                activeOpacity={0.3}
                onPress={checkURL}
            >
                <View style={styles.icon}>
                    <WebIcon
                        name='search-web'
                        color='white'
                        size={27}
                    />
                    <Text style={styles.IconText}>Open Site</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                 activeOpacity={0.3}
            >
                <View style={styles.icon}>
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

const styles = StyleSheet.create({
    outputUtilityBar : {
        flex:1,
        width:'100%',
        position:'absolute',
        top:'52%',
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
