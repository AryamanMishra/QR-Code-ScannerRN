import React, { useState } from 'react'
import { View,Text,StyleSheet, Linking } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import OutputNavbar from './OutputNavbar';
import OutputUtilityBar from './OutputUtilityBar';


const QrScanOutput = ({ route,navigation })=> {

    const { data,type,currentDate,currentTime,amOrPm } = route.params

    const checkURL = ()=> {
        if (Linking.canOpenURL) {
            Linking.openURL(data)
        }
    }
    
    return (
        <View style={styles.outputContainer}>
            <OutputNavbar navigation={navigation}/>
            <View style={styles.outputContent}>
                <Text 
                    style={styles.outputData}
                    onPress={checkURL}
                >
                    {data}
                </Text>
                <Text
                    style={styles.outputDate}    
                >
                    Bar Code type:  {type}
                </Text>
                <Text
                    style={styles.outputDate}    
                >
                    Scanned on:  {currentDate}   {currentTime} {amOrPm}
                </Text>
                </View>
            <OutputUtilityBar
                checkURL={checkURL}
            />
            <StatusBar style='light'/>
        </View>
    )
}

const styles = StyleSheet.create({
    outputContainer : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000',
    },
    outputContent : {
        width:'100%',
        flex:6.5, 
        gap:12,
        marginVertical:25,
        paddingHorizontal:25
    },
    outputData : {
        color:'#90e0ef',
        lineHeight:33,
        fontSize:20,
        textDecorationLine:'underline',
        marginBottom:5
    },
    outputDate : {
        color:'grey',
        fontSize:13,
        fontStyle:'italic'
    }
})

export default QrScanOutput
