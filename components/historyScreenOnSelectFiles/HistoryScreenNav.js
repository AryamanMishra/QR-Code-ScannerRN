import React from 'react'
import {View,Text,Pressable, StyleSheet,ToastAndroid} from 'react-native'
import ArrowLeft from 'react-native-vector-icons/Octicons'
import TrashIcon from 'react-native-vector-icons/Feather'
import { useGlobalContext } from '../../context'


const HistoryScreenNav = ({ navigation,route })=> {

    const {deleteItem} = useGlobalContext()

    const handleDeleteItemAndScreenNav = ()=> {
        deleteItem(route.params.id)
        navigation.goBack()
        ToastAndroid.show('Item removed from list', ToastAndroid.SHORT)
    }
    const navProps = {
        style: styles.navContainer
    }
    const deleteButtonProps = {
        style: styles.clearHistoryItemButton
    }
    return (
        <View {...navProps}>
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
            <View 
                {...deleteButtonProps}
            >
                <Pressable 
                    android_ripple={{color:'grey',borderless:true,radius:52}}   
                    onPress = {handleDeleteItemAndScreenNav}
                >
                <TrashIcon 
                    name='trash-2'
                    size={24}
                    color='white'
                />
                </Pressable> 
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    navContainer : {
        flex:0.97,
        backgroundColor:'rgb(0,100,100)',
        width:'100%',
        justifyContent:'space-between',
        borderBottomWidth:0.5,
        borderBottomColor:'white',
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
        paddingHorizontal:15,
        paddingVertical:15,
        borderRadius:50,
        marginTop:40,
        marginRight:27,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(0,100,100)',
    },
})
export default HistoryScreenNav
