import React from 'react'
import { View, Text,Image,ScrollView, SafeAreaView,StyleSheet, Button, Platform,Modal } from 'react-native'
import {useState} from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import ProjectsScreen from './ProjectsScreen'
export default function DoctorWebsite({value}) {
    const [state, setstate] = useState(1)
    const [vis, setvis] = useState(value)
    var img
    var img1=require(`../assets/Renalimg1.png`)
    var img2=require(`../assets/Renalimg2.png`)
    var img3=require(`../assets/Renalimg3.png`)
    var img4=require(`../assets/Renalimg4.png`)
    var img5=require(`../assets/Renalimg5.png`)
    if (state==0) {
        img=img1
    }
    else if (state==1) {
        img=img2
    }
    else if (state==2) {
        img=img3
    }
    else if (state==3) {
        img=img4
    }
    else if (state==4) {
        img=img5
    }
    if(vis==false){
        return(
        <ProjectsScreen/>)
    }
    else{
    return (
        <Modal visible={vis} animationType='slide'>
<SafeAreaView>
    <ScrollView>
    <Button title="close" color='#459cff' onPress={()=> setvis(false)}/>
    <Image source={img} style={styles.img}/>
    <View style={styles.arrowpack}>
    
    <MaterialCommunityIcons name='arrow-left-drop-circle' size={40} color='#000FFF' onPress={()=>setstate((state!=0)?((state-1)%5):4)}/>
    <MaterialCommunityIcons name='arrow-right-drop-circle' size={40} color='#000FFF' onPress={()=>setstate((state+1)%5)}/>
    </View>
    <View style={styles.headtext}>
        <Text style={styles.texthead}>About Project</Text>
    </View>
    <View style={styles.bodytext}>
    <Text style={styles.textbody}>The tech stacks I used were Javascript, CSS, Pug, NodeJs, MongoDB, and ExpressJs.The landing page includes a parallax effect which is designed to attract users when they land on the website. The page contains an icon the click on which takes us to Login Dashboard. The login Dashboard contains three input sections as name, id, and category so based upon the category submitted the user will land to their respective dashboard.
</Text>
<Text style={styles.sectext}>

The sections of the website are:
</Text>
<Text style={styles.textbody}>
The staff dashboard contains the section where the staff members can fill the form related to patient queries and on submission these queries will be forwarded to doctors. It also contains an option to go to the report collection page where the prescription reports of patients are collected(This prescription will be given by doctors through the doctor dashboard).

</Text>
<Text style={styles.textbody}>
Doctor lands on the main page from where a doctor can go to three platforms. He can either chat with patients(developed using socket.io and webrtc), see the graph of patients, or go to the main dashboard.
The doctor dashboard contains queries of patients and doctor can give their prescriptions easily and in a comfortable manner.
The graph contains the number of patients visited, the disease they are suffering from, the time when a maximum number of patients admitted, the regions to which they belong, and many others criteria are also included.



</Text>
<Text style={styles.textbody}>

Admin Dashboard contains all the details of staff and doctors logged in. It contains their names, id and whether they are doctors or staff members. There is also a cool animation running in the background.
</Text>
<Text style={styles.sectext}>
    Challenges i ran into :
</Text>
<Text style={styles.textbody}>
The challenges i faced were concerned about the integration of webrtc and socket.io framework in website as well as storage and retrieval data in a fast manner from MongoDb.
</Text>
<Text style={styles.sectext}>
    Tech Stacks Used :
</Text>
<View style={styles.techgrid}>
    <Text style={styles.greenbox}>
        HTML5
    </Text>
    <Text style={styles.greenbox}>
        CSS3
    </Text>
    <Text style={styles.greenbox}>
        NodeJs
    </Text>
    <Text style={styles.greenbox}>
       MongoDb
    </Text>
    <Text style={styles.greenbox}>
        JavaScript
    </Text>
    <Text style={styles.greenbox}>
        Embedded JavaScript
    </Text>
    <Text style={styles.greenbox}>
        Pug
    </Text>
    <Text style={styles.greenbox}>
        ExpressJs
    </Text>

</View>
<Text style={styles.sectext}>
    Can be found here :
</Text>
<View style={styles.linkgrid}>
    <MaterialCommunityIcons name='github' size={30} style={styles.icon}/>
    <Text style={styles.bluebox}>

    
        https://github.com/PranavChauhan22

    </Text>
        <MaterialCommunityIcons name='dev-to' size={30} style={styles.icon}/>
    <Text style={styles.bluebox}>
        https://devfolio.co/@PranavDevelops
    </Text>



</View>
    </View>

      </ScrollView>
</SafeAreaView>
</Modal>
    )
    }
}

const styles = StyleSheet.create({
    headtext:{fontSize:20,fontWeight:'bold',lineHeight:20},
    img:{
        width:400,
        height:250,
        margin:10,
        borderRadius:20,
        
        },
        arrowpack:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
        },
        texthead:{
            textAlign:'center',
            fontSize:30,
            fontFamily:Platform.OS=='ios'?'Avenir':'Roboto',
    

        },
        sectext:{
            textAlign:'center',
            fontSize:20,
            fontStyle:'italic',
            fontWeight:'bold',
            fontFamily:Platform.OS=='ios'?'Avenir':'Roboto',
            

        },
        textbody:{
            textAlign:'center',
            fontSize:20,
            fontFamily:Platform.OS=='ios'?'Avenir':'Roboto',
            padding:10

        },
        greenbox:{
            backgroundColor:'#42f5c5',
            color:'#03805e',
            padding:10,
            margin:10,
            
        },
        bluebox:{
            backgroundColor:'#13acf2',
            color:'#FFFFFF',
            padding:15,
            margin:15,

            
            
        },
        techgrid:{
            display:'flex',
            flexDirection:'row',
            margin:10,
            padding:10,
            flexWrap:'wrap'
        },
        linkgrid:{
            display:'flex',
            flexDirection:'row',
            margin:10,
            padding:10,
            flexWrap:'wrap',
        },
        icon:{
            padding:10,
            margin:10
        }
    

})