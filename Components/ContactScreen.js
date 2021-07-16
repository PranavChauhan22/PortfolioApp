import React from 'react'
import { View,Text, FlatList,StyleSheet, Image, SafeAreaView,Button,Modal } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import ListItem from './ListItem'
import {useState} from 'react'
import MainScreen from './MainScreen.js'

export default function ContactScreen({value}) {
    const [vis, setvis] = useState(value)
    if(vis==false){
        return(
        <MainScreen/>)
    }
    else{
    return (
        <Modal visible={vis} animationType='slide'>
<SafeAreaView style={styles.bg}>
<Button title="close" color='#459cff' onPress={()=> setvis(false)}/>
<View>
    <View style={styles.head}>
                <Image source={require("../assets/mypic.png")} style={styles.pic}/>
                <View style={styles.packtext}>
                <Text style={styles.text1}>Pranav Chauhan</Text>
                <View style={styles.pack2}>

                <MaterialCommunityIcons name="email" style={styles.icon} size={20}/>
                <Text style={styles.text2}>thepranavchauhan@gmail.com</Text>
                </View>
                </View>
                </View>
            <ListItem title="linkedin" subtitle="@pranav-chauhan-217bb11b9" image={<MaterialCommunityIcons name="linkedin" size={50}/>}/>
            <ListItem title="Github" subtitle="github.com/PranavChauhan22" image={<MaterialCommunityIcons name="github" size={50}/>}/>
            <ListItem title="Instagram" subtitle="@thepranav.chauhan" image={<MaterialCommunityIcons name="instagram" size={50}/>}/>
            </View>
</SafeAreaView>
        </Modal>
    )
    }
}
const styles = StyleSheet.create({
    pic:{
        width:100,
        height:100,
        margin:10
    },
    head:{
        display:'flex',
        flexDirection:'row-reverse'
    },
    packtext:{
        paddingTop:40
    },
    text1:{
        fontSize:20,
        fontWeight:'700',
        textAlign:'right',
        lineHeight:30
    },
    icon:{
        margin:8
    },
    text2:{
        
        fontWeight:'600',
        margin:10
    },
    pack2:{
        display:'flex',
        flexDirection:'row',
    },

})