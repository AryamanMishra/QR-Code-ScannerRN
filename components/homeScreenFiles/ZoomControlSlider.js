import React from 'react'
import { View,StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider';
import zoomInImage from '../../assets/zoomIcon.png'


// provides zoom function in form of a slider
const ZoomControlSlider = ({ zoom,setZoom })=> {
    return (
        <View style={styles.zoomControlSlider}>      
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={1}

                // linking zoom value to state variable to handle it dynamically
                value={zoom} 

                // if user slides, the resultant slide value is assigned to zoom state variable using setZoom
                // which in turns affect the zoom on camera, as camera zoom prop is assigned the same state variable
                // and thus zoom is handled on sliding
                onValueChange={(value)=>setZoom(value)}

                // slider track colors
                minimumTrackTintColor='#FFC000'
                maximumTrackTintColor='grey'

                // slider thumb is assigned the zoom-in image present in assest folder
                thumbImage={zoomInImage}
            />  
        </View>
    )
}


// styles
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
