import Constants from 'expo-constants'

import React from 'react'
import { View, Text, Image,StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
export default function ListItem({title,subtitle,image}) {
    return (
<SafeAreaView>
    <TouchableOpacity>
            <View style={styles.listpack}>
                {image}
                <View style={styles.pack}>
                <Text style={styles.text1}>{title}</Text>
                <Text style={styles.text2}>{subtitle}</Text>
                </View>
            </View>
            </TouchableOpacity>
            </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    listpack:{
    display:'flex',
    flexDirection:'row',
    paddingTop:Constants.statusBarHeight,
    paddingLeft:10,
    paddingTop:20,
    paddingBottom:10,
    backgroundColor:"#e3dfde",
    margin:10,
    borderRadius:20,

    
    },
    text1:{
        fontSize:15,
        fontWeight:'bold',
        lineHeight:25,
        // color:{color}
        
    },
    text2:{
        fontSize:15,
        fontWeight:'bold',
        // color:{color}
    },
    pack:{
        marginLeft:20
    },



})
