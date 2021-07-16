import React from 'react'
import { View, Text,StyleSheet,Image,SafeAreaView,Platform } from 'react-native'

export default function About({text1,text2,image}) {
    return (
        <SafeAreaView>
            <View style={styles.body}>
                <Image source={image} style={styles.pic}/>
                <View>

                <Text style={styles.headtext1}>
                    {text1}
                </Text>
                    <Text style={styles.headtext2}>
                    {text2}
                    </Text>
                </View>
            </View>
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    pic:{
        width:100,
        height:100,
        margin:10
    },
    headtext1:{
        fontSize:20,
        fontWeight:'bold',
        fontFamily:Platform.OS=='ios'?'Avenir':'Roboto',
    },
    headtext2:{
        fontSize:15,
        fontFamily:Platform.OS=='ios'?'Avenir':'Roboto',
    },
    head:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
        
    },
    body:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
        
    }

})