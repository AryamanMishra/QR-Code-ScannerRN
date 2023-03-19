import React from 'react'
import {View,Text,Pressable, StyleSheet} from 'react-native'
import ArrowLeft from 'react-native-vector-icons/Octicons'
import { useGlobalContext } from '../../context'
import TrashIcon from 'react-native-vector-icons/Feather'

const HistoryScreenNav = ({ navigation })=> {

    const {showDeleteItemButtonOnLongPress} = useGlobalContext()
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
            {
                showDeleteItemButtonOnLongPress && 
                <View 
                    style={styles.clearHistoryItemButton}
                >
                    <Pressable 
                        android_ripple={{color:'grey',borderless:true,radius:52}}   
                    >
                    <TrashIcon 
                        name='trash-2'
                        size={26}
                        color='white'
                    />
                    </Pressable> 
                </View>
            }
            
        </View>
    )
}


const styles = StyleSheet.create({
    navContainer : {
        flex:0.97,
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
        fontSize:21,
        letterSpacing:0.8
    },
    clearHistoryItemButton : {
        marginTop:35,
        marginRight:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#121917',
    },
   
})
export default HistoryScreenNav
