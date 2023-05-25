import React from 'react'
import {View,Text,Pressable, StyleSheet} from 'react-native'
import ArrowLeft from 'react-native-vector-icons/Octicons'
import { useGlobalContext } from '../../context'
import TrashIcon from 'react-native-vector-icons/Feather'
import { useBackHandler } from '@react-native-community/hooks'


// navbar of history screen
const HistoryScreenNav = ({ navigation })=> {


    // obtain state variables from global context
    const {historyList,clearHistoryList} = useGlobalContext()

    const {longPressItem,
        setLongPressItem,
        selectedHistoryItemId,
        setSelectedHistoryItemId,clearHistoryItem} = useGlobalContext()


    // props of main container
    const navProps = {
        style: longPressItem === true ? stylesofHistoryNav.navContainerOnSelected: stylesofHistoryNav.navContainer
    }

    const handleLongPressItem = ()=> {
        clearHistoryItem(selectedHistoryItemId)
        setLongPressItem(false)
        setSelectedHistoryItemId(0)
    }

    const handleLongPressItemArrow = ()=> {
        setLongPressItem(false)
    }

    useBackHandler(() => {
        if (longPressItem) {
            handleLongPressItemArrow()
            return true
        }
        return false
    })


    return (
        <View {...navProps}>
            <View style={stylesofHistoryNav.innerWrapper}>

                {/* back navigation icon  */}
                <Pressable
                    android_ripple={{color:'grey',borderless:true,radius:30}}
                    onPress= {longPressItem ? handleLongPressItemArrow : ()=> navigation.goBack()}
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

            {/* if history list is no empty  show clrar history button*/}
            {
                historyList.length !== 0 &&
                <View 
                    style={stylesofHistoryNav.clearHistoryButton}
                >
                    <Pressable 
                        android_ripple={longPressItem ? {color:'white',borderless:true,radius:25} : {color:'grey',borderless:true,radius:25}}   
                        onPress={longPressItem ? handleLongPressItem : clearHistoryList} 
                    >
                    <TrashIcon 
                        name='trash-2'
                        size={24}
                        color={longPressItem ? 'white' : 'gold'}
                    />
                    </Pressable> 
                </View>
            }
        </View>
    )
}


// styles
export const stylesofHistoryNav = StyleSheet.create({
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
    navContainerOnSelected : {
        flex:0.97,
        backgroundColor:'rgb(50,110,50)',
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
    clearHistoryButton : {
        paddingHorizontal:12,
        paddingVertical:12,
        borderRadius:50,
        marginTop:40,
        marginRight:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(50,100,150,0.5)',
    },
})
export default HistoryScreenNav
