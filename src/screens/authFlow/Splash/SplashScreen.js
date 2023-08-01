
import { View, Image, StyleSheet,StatusBar } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const SplashScreen = ({navigation}) => {
  setTimeout(()=>{
    navigation.navigate('home');     
    }, 0.3);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#111820' barStyle='light-content' />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111820', // Customize the background color if needed
  },
  image: {
    width:responsiveWidth(100),
    height:'auto',
    resizeMode: 'contain',
  },
  
});

export default SplashScreen;

