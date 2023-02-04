import {StyleSheet, View, Text, Image, Dimensions, ImageBackground} from 'react-native';
//import Icons from "../../assets/Icons"
import Profiles from '../../assets/Profiles';
import { Icons } from "../../assets/Themes"
const { height, width } = Dimensions.get('window');


export default function Body()  {
    
    return (
        <View style = {styles.bigContainer}>
            <View style = {styles.profile}>
                <ImageBackground 
                    source = {Profiles.mtl.image} 
                    style = {styles.image} 
                    imageStyle = {styles.imageStyle} 
                >
                    <Text style = {styles.nameText}>{Profiles.mtl.name}</Text>
                    <Text style = {styles.text}>{Profiles.mtl.caption}</Text>
                </ImageBackground>
            </View>
            
            <View style = {styles.audioBox}>
                <View style = {styles.testbox}>
                    <View style = {styles.textbox}>
                        <Text style = {styles.textAudio}>My hottest take</Text>
                    </View>
                    <View style = {styles.imageBox}>
                        <Image source={Icons.player.dark} style={styles.player}/>
                        <Image source={Icons.audioWave.dark} style={styles.audioWave}/>
                    </View>
                </View>
            </View>
        </View>
    );
};

// need Icons.audio_waveform_light.png
// need Icons.player_light.png

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 1 / 1.1,
        justifyContent: "space-between",
        
    },
    nameText: {
        fontFamily: "Sydney",
        fontSize: 38,
        marginLeft: 12,
        marginTop: 12,
        color: 'white',
    },
    imageStyle: {
        borderRadius: 12,
    },
    testbox: {
        
    },
    text: {
        fontFamily: "Sydney",
        fontSize: 18,
        marginLeft: 12,
        marginBottom: 12,
        color: 'white'
    },
    bigContainer: {
        height: "80%",
        alignItems: 'center',
        width: "90%"
    },
    profile: {
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    textbox: {
        marginLeft: 12,
        marginTop: 18,
    },
    audioBox: {
        marginTop: 12,
        borderWidth: 1,
        borderRadius: 32,
        backgroundColor: '#222',
        width: "100%",
        // borderColor: "black",
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.34,
        // shadowRadius: 6.27,

        // elevation: 10,
    },
    textAudio: {
        fontFamily: "Sydney",
        fontSize: 32,
        color: 'white'
        //height: "80%",
    },
    player: {
        resizeMode: 'contain',
        height: height * 0.15,
        width: width * 0.15
    },
    audioWave: {
        resizeMode: 'contain',
        height: height * 0.15,
        width: width * 0.65,
        marginLeft: 12,
    },
    
    imageBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: '2%',
        //height: "80"
        
    },

});
