import { StyleSheet, Text, View, Image, Dimensions, PixelRatio } from 'react-native';
import { Icons, Themes } from '../../assets/Themes';

const { height, width } = Dimensions.get('window');


export default function Footer() {
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.iconContainer}>
        <Image source={Icons.discover.dark} style={[styles.icon, styles.discoverIcon]} />
        <Text style={styles.navigationText}>Discover</Text>
      </View>
      <View style={[styles.iconContainer, { marginBottom: '1.5%', marginLeft: '-4%' }]}>
        <Image source={Icons.heart.dark} style={[styles.icon, styles.matchesIcon]} />
        <Text style={styles.navigationText}>Matches</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={Icons.messages.dark} style={[styles.icon, styles.messagesIcon]} />
        <Text style={styles.navigationText}>DMs</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'baseline',
    justifyContent: 'space-around',
    width: width,
    height: height * 0.1,
    color: 'white'
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    color: 'black'
  },
  icon: {
    height: height * 0.05,
    width: width * 0.1,
    resizeMode: 'contain',
  },
  discoverIcon: {},
  matchesIcon: {},
  messagesIcon: {},
  navigationText: {
    fontFamily: 'Sydney',
    fontSize: PixelRatio.getFontScale() * height * 0.02,
    color: 'black'
  },
});
