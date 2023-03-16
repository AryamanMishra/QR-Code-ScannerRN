import React, { useEffect, useState } from 'react'
import { Camera,CameraType } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StyleSheet,View,Text,Vibration } from 'react-native';
import { useGlobalContext } from '../../context';
import { useIsFocused } from '@react-navigation/native';
import QrCodeContainer from '../outputScreenFiles/QrCodeContainer';
import ZoomControlSlider from './ZoomControlSlider';
import { getCurrentDate,getCurrentTime } from '../../utils/getDT';
import { getData,setData } from '../../utils/handleAsyncStorage';
import uuid from 'react-native-uuid';



const CameraView = ({ navigation })=> {


    // using global context
    const {isFlashLightOn,historyList,setHistoryList} = useGlobalContext()

    // ensures that camera stays on even after screen navigation
    const isFocused = useIsFocused();

    // set zoom
    const [zoom,setZoom] = useState(0)


    const {scanned,setScanned} = useGlobalContext()    



    useEffect(()=> {
        getData(historyList,setHistoryList)
    },[])


    useEffect(()=> {
        setData(historyList)
    },[historyList])


    
    // to handle qr scan result
    const handleqrCodeScan = ({ data,type })=> {
        setScanned(true)
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

        const id = uuid.v4()
        const newHistoryListItem = {id,data,type,currentDate,currentTime,amOrPm}
        setHistoryList([newHistoryListItem,...historyList])


        // navigate screen to output page after 100ms delay
        setTimeout(()=> {
            navigation.navigate('OutputScreen', {
                data,
                type,
                currentDate,
                currentTime,
                amOrPm,
            })
        },90)
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
                    onBarCodeScanned={scanned ? undefined : handleqrCodeScan}

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
        borderTopWidth:0.5,
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
