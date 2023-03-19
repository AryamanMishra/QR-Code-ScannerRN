import React from 'react'
import { Text, View,StyleSheet, Pressable } from 'react-native'
import ArrowLeft from 'react-native-vector-icons/Octicons'


// navbar of output page
const ItemNavbar = ({ navigation,currentDate })=> {


    const handleBackButton = ()=> {
        navigation.goBack()
    }


    return (
        <View style={styles.navContainer}>
            <View style={styles.innerWrapper}>

                {/* back navigation icon  */}
                <Pressable
                    android_ripple={{color:'grey',borderless:true,radius:30}}
                    onPress={handleBackButton}
                >
                    {/* react native left arrow icon  */}
                    <ArrowLeft 
                        name='arrow-left'
                        size={30}
                        color='white'
                        style={{marginTop:5}}     
                    />
                </Pressable> 
                <Text style={styles.navText}>Scan on {currentDate}</Text>
            </View>

        </View>
    )
}



// styles
const styles = StyleSheet.create({
    navContainer : {
        flex:1.1,
        backgroundColor:'#121917',
        width:'100%',
        justifyContent:'space-between',
        borderBottomWidth:0.5,
        borderBottomColor:'grey',
        flexDirection:'row',
        alignItems:'center'
    },
    innerWrapper : {
        alignItems:'center',
        marginTop:35,
        marginLeft:27,
        flexDirection:'row',
        gap:30, 
    },
    navText : {
        color:'white',
        fontSize:20,
        letterSpacing:0.8
    },
})

export default ItemNavbar
