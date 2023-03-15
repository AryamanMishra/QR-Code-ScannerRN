import React, { useState } from 'react'
import { Camera,CameraType } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StyleSheet,View,Text,Vibration } from 'react-native';
import { useGlobalContext } from '../../context';
import { useIsFocused } from '@react-navigation/native';
import QrCodeContainer from '../outputFiles/QrCodeContainer';
import ZoomControlSlider from './ZoomControlSlider';



const CameraView = ({ navigation })=> {


    // using global context
    const {isFlashLightOn} = useGlobalContext()

    // ensures that camera stays on even after screen navigation
    const isFocused = useIsFocused();

    // set zoom
    const [zoom,setZoom] = useState(0)


    // method to get current date using Date()
    const getCurrentDate = ()=> {
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();

        // format: dd-mm-yy
        return date + '-' + month + '-' + year;
    }


    // method to get current time using Date()
    const getCurrentTime = ()=> {
        let hours = new Date().getHours()
        let minutes = new Date().getMinutes()

        // check if minutes is a single digit 
        // if single digit append a 0 in front of it
        if (minutes / 10 < 1) {
            minutes = minutes.toString()
            minutes = '0'+  minutes
        }
        return hours + ':' + minutes
    }


    // to handle qr scan result
    const handleqrCodeScan = ({ data,type })=> {
        let currentDate = getCurrentDate()
        let currentTime = getCurrentTime()

        let amOrPm

        // checks if current time is AM or PM
        if (parseInt(currentTime.substring(0,currentTime.indexOf(':'))) > 11) {
            amOrPm = 'PM'
        }
        else {
            amOrPm = 'AM'
        }

        // vibration on scan complete
        Vibration.vibrate(100)


        // navigate screen to output page after 100ms delay
        setTimeout(()=> {
            navigation.navigate('OutputScreen', {
                data,
                type,
                currentDate,
                currentTime,
                amOrPm
            })
        },100)
        
    }

    return (
        <View style={styles.cameraContainer}>


            {/* using the camera component to get both flashmode and bar code related props together */}
            {
                isFocused &&
                <Camera 
                    barCodeScannerSettings={{
                        barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
                    }}

                    // handles output 
                    onBarCodeScanned={handleqrCodeScan}

                    // handles flashlight
                    flashMode={isFlashLightOn ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
                    style={styles.camera} 

                    // specifies back camera
                    type={CameraType.back}

                    // decides zoom
                    zoom={zoom}
                >

                    {/* the inner container use to border the code  */}
                    <QrCodeContainer />
                </Camera>
            }  
            

            {/* slider to control zoom  */}
            <ZoomControlSlider zoom={zoom} setZoom={setZoom}/>


            {/* displays zoom value, nothing special */}
            <View style={styles.zoomTextView}>
                <Text style={styles.zoomText}>Zoom : {
                    zoom <= 0.05 ? 0 : zoom.toFixed(1)
                }</Text>
            </View>     
        </View>
    )
}



// styles
const styles = StyleSheet.create({
    cameraContainer : {
        flex:4,
        justifyContent:'center',
        borderTopWidth:0.6,
        borderTopColor:'grey',
    },
    camera: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },  
    zoomTextView : {  
        position:'absolute',
        top:'90%',
        left:'43%',
    },  
    zoomText : { 
        color:'grey',
        fontSize:13
    },
   
})

export default CameraView
