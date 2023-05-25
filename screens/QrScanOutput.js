import React from 'react'
import { View,Text,StyleSheet, Linking, ScrollView } from 'react-native'
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
        <ScrollView style={styles.outputContainer}>

            {/* navbar  */}
            <OutputNavbar navigation={navigation}/>

            {/* main content  */}
            <View style={styles.outputContent}>

                {/* recieved data  */}
                <Text 
                    style={styles.outputData}
                    onPress={checkURL}
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum nesciunt quae, saepe ducimus hic natus exercitationem officiis sed quibusdam porro tempore, minus, consequatur provident quos vitae ex pariatur aliquid maiores.
                    Quas doloribus illo officia voluptatibus iusto cum ab tempora, animi quibusdam voluptatem obcaecati veritatis voluptas, dolorem dolore, debitis libero. Molestias voluptatem recusandae nihil assumenda ipsam iure tenetur enim aliquid soluta!
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
