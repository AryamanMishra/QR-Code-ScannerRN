import React from 'react'
import { View,Text,StyleSheet, Linking,ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import OutputUtilityBar from '../components/outputScreenFiles/OutputUtilityBar';
import ItemNavbar from '../components/HistoryItemDetailfiles/ItemNavbar.js';


// gives detail of a history item
// like an output page
const HistoryItemDetail = ({ route,navigation })=> {

    const { data,type,currentDate,currentTime,amOrPm } = route.params.item

    
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
            <ItemNavbar navigation={navigation} id={route.params.item.id}currentDate={currentDate}/>

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
        flex:5,
        gap:12,
        marginVertical:30,
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

export default HistoryItemDetail
