import React from 'react'
import { StyleSheet, View, FlatList, Text,Pressable } from 'react-native'
import { useGlobalContext } from '../../context'
import HistoryScreenListItem from './HistoryScreenListItem'
import TrashIcon from 'react-native-vector-icons/Feather'


const HistoryScreenContent = ({ })=> {

    const {historyList,clearHistoryList} = useGlobalContext()
    return (
        <View style={styles.mainContent}>
            {
                historyList.length !== 0 ? (
                    <FlatList
                    style={styles.list}
                    data={historyList}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({item}) => <HistoryScreenListItem item={item}/>}
                    />
                )
                : (
                    <View style={{flex:1,alignItems:'center',marginTop:40}}>
                        <Text style={styles.text}>No Recent Scans</Text>
                    </View>
                )
            }   
            {
                historyList.length !== 0 && 
                <View 
                style={styles.clearHistoryButton}>
                    <Pressable 
                        android_ripple={{color:'grey',borderless:true,radius:52}}   
                        onPress={clearHistoryList} 
                    >
                    <TrashIcon 
                        name='trash-2'
                        size={30}
                        color='white'
                    />
                    </Pressable> 
                </View>
            }
             
        </View>
    )
}


const styles = StyleSheet.create({
    mainContent : {
        flex:6,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center'
    },
    text : {
        color:'white',
        fontSize:20
    },
    clearHistoryButton : {
        paddingHorizontal:22,
        paddingVertical:15,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#121917',
        borderRadius:30,
        borderWidth:0.3,
        borderColor:'grey',
        marginBottom:20
    },
})
export default HistoryScreenContent
