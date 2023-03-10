import React from 'react'
import { Text, View,StyleSheet, TouchableOpacity } from 'react-native'
import ArrowLeft from 'react-native-vector-icons/Octicons'


const OutputNavbar = ({ navigation })=> {
    return (
        <View style={styles.outputNavbarContainer}>
            <View style={styles.innerWrapper}>
                <TouchableOpacity
                    onPress={()=> {
                        navigation.navigate('HomeScreen')
                    }}
                >
                    <ArrowLeft 
                        name='arrow-left'
                        size={29}
                        color='white'
                        
                    />
                </TouchableOpacity>
                <Text style={styles.outputNavbarText}>Output</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outputNavbarContainer : {
        flex:1.1,
        backgroundColor:'#121917',
        width:'100%',
        justifyContent:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'grey'
    },
    innerWrapper : {
        alignItems:'center',
        marginTop:33,
        marginLeft:28,
        flexDirection:'row',
        gap:30, 
    },
    outputNavbarText : {
        color:'white',
        fontSize:21,
        letterSpacing:0.8
    }
})

export default OutputNavbar
