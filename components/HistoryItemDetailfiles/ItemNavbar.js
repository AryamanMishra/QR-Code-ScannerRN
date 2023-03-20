import React from 'react'
import { Text, View,StyleSheet, Pressable,Alert,ToastAndroid } from 'react-native'
import ArrowLeft from 'react-native-vector-icons/Octicons'
import TrashIcon from 'react-native-vector-icons/Feather'
import { useGlobalContext } from '../../context'



// navbar of output page
const ItemNavbar = ({ navigation,currentDate,id })=> {

    const {deleteItem} = useGlobalContext()
    const handleBackButton = ()=> {
        navigation.goBack()
    }

    const helper = ()=> {
        deleteItem(id)
        navigation.goBack()
        ToastAndroid.show('Scan removed from history', ToastAndroid.SHORT)
    }

    const handleDeleteItemAndNavBack = ()=> {
        Alert.alert('Delete Scan','Are you Sure you want to remove the item from history?', 
            [
                {
                    text:'No',
                    style:'cancel'
                },
                {
                    text:'Yes',
                    onPress:()=>helper()
                }
            ],
            {
                cancelable: true
            }
        )
       
    }

    const deleteButtonProps = {
        style: styles.clearItemButton
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
            <View 
                {...deleteButtonProps}
            >
                <Pressable 
                    android_ripple={{color:'white',borderless:true,radius:52}}  
                    onPress={handleDeleteItemAndNavBack} 
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
    clearItemButton : {
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:50,
        marginTop:40,
        marginRight:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(100,100,100,0.4)',
    },
})

export default ItemNavbar
