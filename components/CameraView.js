import React, { useState } from 'react'
import { Camera,CameraType } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StyleSheet,View,Text,Vibration } from 'react-native';
import { useGlobalContext } from '../context';
import { useIsFocused } from '@react-navigation/native';
import QrCodeContainer from './QrCodeContainer';
import ZoomControlSlider from './ZoomControlSlider';




const CameraView = ({ navigation })=> {

    const {isFlashLightOn} = useGlobalContext()
    const isFocused = useIsFocused();
    const [zoom,setZoom] = useState(0)


    const getCurrentDate = ()=> {
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        return date + '-' + month + '-' + year;//format: d-m-y;
    }

    const getCurrentTime = ()=> {
        let hours = new Date().getHours()
        let minutes = new Date().getMinutes()
        if (minutes / 10 < 1) {
            minutes = minutes.toString()
            minutes = '0'+  minutes
        }
        return hours + ':' + minutes
    }



    const handleqrCodeScan = ({ data,type,cornerPoints })=> {
        let currentDate = getCurrentDate()
        let currentTime = getCurrentTime()

        let amOrPm
        if (parseInt(currentTime.substring(0,currentTime.indexOf(':'))) > 11) {
            amOrPm = 'PM'
        }
        else {
            amOrPm = 'AM'
        }

        Vibration.vibrate(100)
        // console.log(cornerPoints)
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
            {
                isFocused &&
                <Camera 
                    barCodeScannerSettings={{
                        barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
                    }}
                    onBarCodeScanned={handleqrCodeScan}
                    flashMode={isFlashLightOn ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
                    style={styles.camera} 
                    type={CameraType.back}
                    zoom={zoom}
                >
                    <QrCodeContainer />
                </Camera>
            }  
           
            <ZoomControlSlider zoom={zoom} setZoom={setZoom}/>

            <View style={styles.zoomTextView}>
                <Text style={styles.zoomText}>Zoom : {
                    zoom <= 0.05 ? 0 : zoom.toFixed(1)
                }</Text>
            </View>     
        </View>
    )
}


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
