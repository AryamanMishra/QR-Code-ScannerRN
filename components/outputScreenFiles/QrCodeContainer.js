import React from 'react'
import { StyleSheet,View } from 'react-native'


// provides borders inside camera view to focus on the qr shape
/*

   * * *     * * *
   *             *
   *             *
   

   *             *
   *             *
   * * *     * * *

*/

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



// styles
const styles = StyleSheet.create({


    // main container
    qrCodeContainerView : {
        height:245,
        width:235,
        marginBottom:100,
        backgroundColor:'rgba(255,255,255,0.2)'
    },

    // top left border inside container
    topLeftContainer : {
        position:'absolute', // positioned relative to main container
        height:50,
        width:50,
        borderLeftWidth:3,
        borderLeftColor:'#FFC000',
        borderTopWidth:3,
        borderTopColor:'#FFC000'
    },

    // top right container
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

    // bottom right container
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

    // bottom left container
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
