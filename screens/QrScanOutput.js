import React from 'react'
import { View,Text,StyleSheet, Linking } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import OutputNavbar from '../components/outputScreenFiles/OutputNavbar.js';
import OutputUtilityBar from '../components/outputScreenFiles/OutputUtilityBar';


// qr output screen
const QrScanOutput = ({ route,navigation })=> {


    // recieve data from camera view(home screen)
    const { data,type,currentDate,currentTime,amOrPm } = route.params


    // check if URL is valid or not
    const checkURL = ()=> {

        // if url is valid open it
        if (Linking.canOpenURL) {
            Linking.openURL(data)
        }
    }

    
    return (
        <View style={styles.outputContainer}>

            {/* navbar  */}
            <OutputNavbar navigation={navigation}/>

            {/* main content  */}
            <View style={styles.outputContent}>

                {/* recieved data  */}
                <Text 
                    style={styles.outputData}
                    onPress={checkURL}
                >
                    {data}
                </Text>


                {/* info about bar code type  */}
                <Text
                    style={styles.outputDate}    
                >
                    Bar Code type:  {type}
                </Text>


                {/* tells date and time of scan */}
                <Text
                    style={styles.outputDate}    
                >
                    Scanned on:  {currentDate}   {currentTime} {amOrPm}
                </Text>
            </View>

            {/* utility bar  */}
            <OutputUtilityBar
                checkURL={checkURL}
            />

            <StatusBar style='light'/>
        </View>
    )
}



// styles
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
    },
    
})

export default QrScanOutput
