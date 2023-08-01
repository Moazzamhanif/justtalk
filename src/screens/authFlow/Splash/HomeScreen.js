import { View,Image,StyleSheet,StatusBar} from 'react-native'
import React from 'react'


  const HomeScreen = ({navigation}) => {
    setTimeout(()=>{
      navigation.navigate('login');     
      }, 500);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#F6CD5B' barStyle='dark-content' />
      <Image source={require('../../../../src/assets/images/Group2.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6CD5B',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
   
    
  



