import React, { useEffect } from 'react'
import { View,Text,StyleSheet, Linking, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import OutputNavbar from '../components/outputScreenFiles/OutputNavbar.js';
import OutputUtilityBar from '../components/outputScreenFiles/OutputUtilityBar';
import { useGlobalContext } from '../context.js';
import { ToastAndroid } from 'react-native';
import * as Clipboard from 'expo-clipboard';


// qr output screen
const QrScanOutput = ({ route,navigation })=> {

    // recieve data from camera view(home screen)
    const { data,type,currentDate,currentTime,amOrPm } = route.params


    const {dataLinkOrOther,setDataLinkOrOther,linkData,setLinkData,checkData} = useGlobalContext()

    const copyToClipboard = async (data) => {
        await Clipboard.setStringAsync(data);
    };



    // check if URL is valid or not
    const handlePress = ()=> {

        // if url is valid open it
        if (dataLinkOrOther === 'link') {
            let checkD = checkData()
            if (checkD) {
                Linking.openURL(linkData)
            }
        }
        else {
            ToastAndroid.show('Text Copied to clipboard',ToastAndroid.SHORT)
            copyToClipboard(linkData)  
        }
    }


    useEffect(()=> {
        let checkD = checkData()
        if (checkD === false)
            setDataLinkOrOther('other')
        else   
            setDataLinkOrOther('link')
    },[linkData])
    


    return (
        <ScrollView style={styles.outputContainer}>

            {/* navbar  */}
            <OutputNavbar navigation={navigation}/>

            {/* main content  */}
            <View style={styles.outputContent}>

                {/* recieved data  */}
                <Text 
                    
                    style={styles.outputData}
                    onPress={handlePress}
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
                checkURL={handlePress}
            />
            <StatusBar style='light'/>
        </ScrollView>
    )
}



// styles
const styles = StyleSheet.create({
    outputContainer : {
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor:'#000',
    },
    outputContent : {
        width:'100%',
        flex:1,
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
