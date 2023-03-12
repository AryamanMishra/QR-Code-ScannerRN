import React from 'react'
import { Text, View,StyleSheet, TouchableOpacity,Pressable } from 'react-native'
import ArrowLeft from 'react-native-vector-icons/Octicons'


const OutputNavbar = ({ navigation })=> {
    return (
        <View style={styles.outputNavbarContainer}>
            <View style={styles.innerWrapper}
                >
                <Pressable
                    android_ripple={{color:'grey',borderless:true,radius:30}}
                    onPress={()=> {
                            navigation.navigate('HomeScreen')
                        }}
                >
                    <ArrowLeft 
                        name='arrow-left'
                        size={30}
                        color='white'
                        style={{marginTop:5}}
                    />
                </Pressable>
               
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
        marginTop:38,
        marginLeft:30,
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
