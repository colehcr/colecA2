import {StyleSheet, View, Text, Image, Dimensions} from "react-native";
// import { Icons } from "../../assets/Icons";
import { Icons } from "../../assets/Themes"

const { height, width } = Dimensions.get('window');
export default function Header() {
    return (
        <View style = {styles.header}>
            <Image source={Icons.menu.dark} style={styles.headerIcons}/>
            <Text style = {styles.title}>VAIL</Text>
            <Image source={Icons.moon} style={styles.headerIcons} />
        </View>
    );
};

const styles = StyleSheet.create({
    headerIcons: {
        resizeMode: 'contain',
        height: height * 0.15,
        width: width * 0.15,
    },
    title: {
        fontFamily: "Sydney-Bold",
        fontSize: 48,
        color: 'white'
    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
        width: "90%",
        justifyContent: 'space-between',
    },
});
