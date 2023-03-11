import React from 'react'
import { View,StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider';
import zoomInImage from '../assets/zoomIcon.png'

const ZoomControlSlider = ({ zoom,setZoom })=> {
    return (
        <View style={styles.zoomControlSlider}>      
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={1}
                value={zoom}
                onValueChange={(value)=>setZoom(value)}
                minimumTrackTintColor='gold'
                maximumTrackTintColor='grey'
                thumbImage={zoomInImage}
                thumbTintColor='gold'
            />  
        </View>
    )
}


const styles = StyleSheet.create({
    zoomControlSlider : {
        position:'absolute',
        top:'80%',
        marginLeft:'17%',
        backgroundColor:'#181818',
        borderRadius:50,
    },
    slider : {
        marginLeft:15,
        paddingVertical:25,
        color:'gold',
        height:20,
        width:235,
    },
})
export default ZoomControlSlider
