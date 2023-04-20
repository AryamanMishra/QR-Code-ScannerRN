import React from 'react'
import {View,Text,Pressable, StyleSheet,ToastAndroid} from 'react-native'
import ArrowLeft from 'react-native-vector-icons/Octicons'
import TrashIcon from 'react-native-vector-icons/Feather'
import { useGlobalContext } from '../../context'
import {stylesofHistoryNav} from '../historyScreenFiles/HistoryScreenNav.js'


// gives option to delete one particular item
const HistoryScreenNav = ({ navigation,route })=> {


    // function to delete particular item
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
            <View style={stylesofHistoryNav.innerWrapper}>

                {/* back navigation icon  */}
                <Pressable
                    android_ripple={{color:'white',borderless:true,radius:28}}
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
                <Text style={stylesofHistoryNav.navText}>History</Text>
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
                    size={25}
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
        backgroundColor:'rgb(0,130,120)',
        width:'100%',
        justifyContent:'space-between',
        borderBottomWidth:0.5,
        borderBottomColor:'white',
        flexDirection:'row',
        alignItems:'center'
    },
    clearHistoryItemButton : {
        paddingHorizontal:15,
        paddingVertical:15,
        borderRadius:50,
        marginTop:40,
        marginRight:27,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(0,130,120)',
    },
})
export default HistoryScreenNav
