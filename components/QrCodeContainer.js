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
        height:210,
        width:200,
        marginBottom:60,
    },
    topLeftContainer : {
        position:'absolute',
        height:50,
        width:50,
        borderLeftWidth:3,
        borderLeftColor:'gold',
        borderTopWidth:3,
        borderTopColor:'gold'
    },
    topRightContainer : {
        position:'absolute',
        right:0,
        height:50,
        width:50,
        borderRightWidth:3,
        borderRightColor:'gold',
        borderTopWidth:3,
        borderTopColor:'gold'
    },
    bottomRightContainer : {
        position:'absolute',
        right:0,
        bottom:0,
        height:50,
        width:50,
        borderRightWidth:3,
        borderRightColor:'gold',
        borderBottomWidth:3,
        borderBottomColor:'gold'
    },
    bottomLeftContainer : {
        position:'absolute',
        left:0,
        bottom:0,
        height:50,
        width:50,
        borderLeftWidth:3,
        borderLeftColor:'yellow',
        borderBottomWidth:3,
        borderBottomColor:'yellow'
    },
})

export default QrCodeContainer
