import React from 'react'
import {View,Text,Pressable, StyleSheet} from 'react-native'
import ArrowLeft from 'react-native-vector-icons/Octicons'



const HistoryScreenNav = ({ navigation })=> {
    return (
        <View style={styles.navContainer}>
            <View style={styles.innerWrapper}>

                {/* back navigation icon  */}
                <Pressable
                    android_ripple={{color:'grey',borderless:true,radius:30}}
                    onPress={()=> {
                            navigation.goBack() 
                        }}
                >
                    {/* react native left arrow icon  */}
                    <ArrowLeft 
                        name='arrow-left'
                        size={30}
                        color='white'
                        style={{marginTop:5}}     
                    />
                </Pressable> 
                <Text style={styles.navText}>History</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    navContainer : {
        flex:1,
        backgroundColor:'#121917',
        width:'100%',
        justifyContent:'space-between',
        borderBottomWidth:0.5,
        borderBottomColor:'grey',
        flexDirection:'row'
    },
    innerWrapper : {
        alignItems:'center',
        marginTop:38,
        marginLeft:30,
        flexDirection:'row',
        gap:30, 
    },
    navText : {
        color:'white',
        fontSize:21,
        letterSpacing:0.8
    },
})
export default HistoryScreenNav
