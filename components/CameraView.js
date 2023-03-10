import React from 'react'
import { Camera,CameraType } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StyleSheet,View } from 'react-native';
import { useGlobalContext } from '../context';
import { useIsFocused } from '@react-navigation/native';
import QrCodeContainer from './QrCodeContainer';




const CameraView = ({ navigation })=> {

    const {isFlashLightOn} = useGlobalContext()
    const isFocused = useIsFocused();
    
    const getCurrentDate = ()=> {
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        return date + '-' + month + '-' + year;//format: d-m-y;
    }

    const getCurrentTime = ()=> {
        let hours = new Date().getHours()
        let minutes = new Date().getMinutes()
        
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
                >
                    <QrCodeContainer />
                </Camera>
            }  
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
    }
})

export default CameraView
