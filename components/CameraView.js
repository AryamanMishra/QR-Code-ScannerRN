import React, { useEffect, useState } from 'react'
import { Camera,CameraType } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StyleSheet,View,Text,Vibration } from 'react-native';
import { useGlobalContext } from '../context';
import { useIsFocused } from '@react-navigation/native';
import QrCodeContainer from './QrCodeContainer';
import Slider from '@react-native-community/slider';
import ZoomIcon from 'react-native-vector-icons/MaterialIcons'


const CameraView = ({ navigation })=> {

    const {isFlashLightOn} = useGlobalContext()
    const isFocused = useIsFocused();
    const [zoom,setZoom] = useState(0)
    const [sliderThumbIcon,setSliderThumbIcon] = useState()


    const fetchIconImage =  ()=> {
        try {
            Promise.all([
                ZoomIcon.getImageSource('zoom-in',25,'gold')
            ]).then(source => {
                console.log(source)
            })
        }
        catch (e) {
            console.log(e)
        }
    }
    

    // useEffect(()=>{
    //     fetchIconImage()
    // },[])




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

    const handleqrCodeScan = ({ data,type })=> {
        let currentDate = getCurrentDate()
        let currentTime = getCurrentTime()

        let amOrPm
        if (parseInt(currentTime.substring(0,currentTime.indexOf(':'))) > 11) {
            amOrPm = 'PM'
        }
        else {
            amOrPm = 'AM'
        }
        Vibration.vibrate([100])
        navigation.navigate('OutputScreen', {
            data,
            type,
            currentDate,
            currentTime,
            amOrPm
        })
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
                    {/* <View style={styles.outerQrZone}/> */}
                    <QrCodeContainer />
                    {/* <View style={styles.outerQrZone}/> */}
                </Camera>
            }  
            <View style={styles.zoomControlSlider}>      
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={1}
                    value={zoom}
                    onValueChange={(value)=>setZoom(value)}
                    minimumTrackTintColor='gold'
                    thumbTintColor='gold'
                    // step={0.1}
                    // thumbImage={sliderThumbIcon}
                />  
            </View>
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
        borderTopWidth:0.5,
        borderTopColor:'grey',
    },
    camera: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },  
    zoomControlSlider : {
        position:'absolute',
        top:'80%',
        marginLeft:'18%',
        backgroundColor:'#181818',
        borderRadius:50,
        flexDirection:'row',
        alignItems:'center',
        gap:20,
    },
    slider : {
        paddingHorizontal:25,
        paddingVertical:25,
        color:'gold',
        height:20,
        width:250,
    },
    zoomTextView : {  
        position:'absolute',
        top:'89%',
        left:'43%',
    },  
    zoomText : { 
        color:'grey',
        fontSize:13
    },
    outerQrZone : {
        backgroundColor:'#121917',
        flex:1
    }
})

export default CameraView
