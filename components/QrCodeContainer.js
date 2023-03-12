import React from 'react'
import { StyleSheet,Text,View } from 'react-native'


const QrCodeContainer = ()=> {
    return (
        <View style={styles.qrCodeContainerView}>
            <View style={styles.topLeftContainer} /> 
            <View style={styles.topRightContainer} />
            <View style={styles.bottomRightContainer} />
            <View style={styles.bottomLeftContainer} />
        </View>
    )
}


const styles = StyleSheet.create({
    qrCodeContainerView : {
        height:245,
        width:235,
        marginBottom:100,
        backgroundColor:'rgba(255,255,255,0.2)'
    },
    topLeftContainer : {
        position:'absolute',
        height:50,
        width:50,
        borderLeftWidth:3,
        borderLeftColor:'#FFC000',
        borderTopWidth:3,
        borderTopColor:'#FFC000'
    },
    topRightContainer : {
        position:'absolute',
        right:0,
        height:50,
        width:50,
        borderRightWidth:3,
        borderRightColor:'#FFC000',
        borderTopWidth:3,
        borderTopColor:'#FFC000'
    },
    bottomRightContainer : {
        position:'absolute',
        right:0,
        bottom:0,
        height:50,
        width:50,
        borderRightWidth:3,
        borderRightColor:'#FFC000',
        borderBottomWidth:3,
        borderBottomColor:'#FFC000'
    },
    bottomLeftContainer : {
        position:'absolute',
        left:0,
        bottom:0,
        height:50,
        width:50,
        borderLeftWidth:3,
        borderLeftColor:'#FFC000',
        borderBottomWidth:3,
        borderBottomColor:'#FFC000'
    },
})

export default QrCodeContainer
