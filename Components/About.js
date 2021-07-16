import React from 'react'
import { View, Text,StyleSheet,Image,SafeAreaView, FlatList, ScrollView, Modal, Button,Platform } from 'react-native'
import AboutList from "./AboutList.js"
import {useState} from 'react'
import MainScreen from './MainScreen.js'
export default function About({value}) {
    const [vis, setvis] = useState(value)
    const workexps=[
        {
            text1:"Web Administrator",
            text2:"IEEE Delhi Section",
            image:require("../assets/IEEEDelhilogo.jpeg")
        },
        {
            text1:"Executive Team",
            text2:"IEEE NSUT",
            image:require("../assets/IEEENsutlogo.jpeg")
        },
        {
            text1:"Software Developer",
            text2:"ARES NSUT",
            image:require("../assets/Areslogo.png")
        },
        {
            text1:"Tech Team",
            text2:"Junoon",
            image:require("../assets/AresNsutlogo.png")
        },
        {
            text1:"Internshala Student Partner'22",
            text2:"Internshala",
            image:require("../assets/ISPlogo.jpeg")
        },
    ]
    if(vis==false){
        return(
        <MainScreen/>)
    }
    else{
    return (
            <Modal visible={vis} animationType='slide'>
        <SafeAreaView>

            <ScrollView>
                <Button title="close" color='#459cff' onPress={()=> setvis(false)}/>
            <View style={styles.head}>
                <Image source={require("../assets/mypic.png")} style={styles.pic}/>
                <View style={styles.headpack}>

                <Text style={styles.headtext1}>
                    Pranav Chauhan
                </Text>
                    <Text style={styles.headtext2}>
                    thepranavchauhan@gmail.com
                    </Text>
                </View>
            </View>
            <Text style={styles.texthead}>Work Experience</Text>
            <FlatList data={workexps}
            keyExtractor={workexp=>workexp.text1}
            renderItem={({item})=>
            <AboutList text1={item.text1} 
            text2={item.text2}
            image={item.image}/>}/>
                        <Text style={styles.texthead}>Languages</Text>
        <View style={styles.techgrid}>
    <Text style={styles.greenbox}>
        C++
    </Text>
    <Text style={styles.greenbox}>
        C
    </Text>
    <Text style={styles.greenbox}>
        Python
    </Text>
    <Text style={styles.greenbox}>
       HTML
    </Text>
    <Text style={styles.greenbox}>
       CSS3
    </Text>
    <Text style={styles.greenbox}>
        JavaScript
    </Text>

</View>
                        <Text style={styles.texthead}>Frameworks </Text>
        <View style={styles.techgrid}>
    <Text style={styles.bluebox}>
        React
    </Text>
    <Text style={styles.bluebox}>
        Node
    </Text>
    <Text style={styles.bluebox}>
        Tkinter
    </Text>
    <Text style={styles.bluebox}>
        Express
    </Text>

</View>
                        <Text style={styles.texthead}>Tools </Text>
        <View style={styles.techgrid}>
    <Text style={styles.greenbox}>
        Docker
    </Text>

</View>
                        <Text style={styles.texthead}>Platforms </Text>
        <View style={styles.techgrid}>
    <Text style={styles.bluebox}>
        Heroku
    </Text>
    <Text style={styles.bluebox}>
        Vercel
    </Text>

</View>
                        <Text style={styles.texthead}>Databases </Text>
        <View style={styles.techgrid}>
    <Text style={styles.greenbox}>
        MongoDb
    </Text>
    <Text style={styles.greenbox}>
        AWS
    </Text>

</View>
                        <Text style={styles.texthead}>Graphic Frameworks</Text>
        <View style={styles.techgrid}>
    <Text style={styles.bluebox}>
        Blender3D
    </Text>
    <Text style={styles.bluebox}>
        Vectary
    </Text>


</View>
                        <Text style={styles.texthead}>Interests </Text>
        <View style={styles.techgrid}>
    <Text style={styles.greenbox}>
        ML
    </Text>
    <Text style={styles.greenbox}>
        AI
    </Text>
    <Text style={styles.greenbox}>
        Data Science
    </Text>
    <Text style={styles.greenbox}>
        Cloud
    </Text>

</View>
            
            </ScrollView>
                            
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
        
    },
    texthead:{
        textAlign:'center',
        fontSize:30,
        fontFamily:Platform.OS=='ios'?'Avenir':'Roboto',
        margin:30


    },
    bluebox:{
        backgroundColor:'#0864cc',
        color:'#FFFFFF',
        padding:10,
        margin:10,
        
    },
    greenbox:{
        backgroundColor:'#42f5c5',
        color:'#03805e',
        padding:10,
        margin:10,
        
    },
    techgrid:{
        display:'flex',
        flexDirection:'row',
        margin:10,
        padding:10,
        flexWrap:'wrap'
    },
})