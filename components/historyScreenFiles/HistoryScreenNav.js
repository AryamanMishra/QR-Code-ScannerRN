import React from 'react'
import {View,Text,Pressable, StyleSheet} from 'react-native'
import ArrowLeft from 'react-native-vector-icons/Octicons'
import { useGlobalContext } from '../../context'
import TrashIcon from 'react-native-vector-icons/Feather'


// navbar of history screen
const HistoryScreenNav = ({ navigation })=> {


    // obtain state variables from global context
    const {historyList,clearHistoryList} = useGlobalContext()


    // props of main container
    const navProps = {
        style: stylesofHistoryNav.navContainer
    }
    return (
        <View {...navProps}>
            <View style={stylesofHistoryNav.innerWrapper}>

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
                <Text style={stylesofHistoryNav.navText}>History</Text>
            </View>

            {/* if history list is no empty  show clrar history button*/}
            {
                historyList.length !== 0 &&
                <View 
                    style={stylesofHistoryNav.clearHistoryButton}
                >
                    <Pressable 
                        android_ripple={{color:'grey',borderless:true,radius:84}}   
                        onPress={clearHistoryList} 
                    >
                    <TrashIcon 
                        name='trash-2'
                        size={25}
                        color='gold'
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
        paddingHorizontal:15,
        paddingVertical:15,
        borderRadius:50,
        marginTop:40,
        marginRight:27,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#121917',
    },
})
export default HistoryScreenNav
