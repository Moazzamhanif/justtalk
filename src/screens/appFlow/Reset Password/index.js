import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, } from 'react-native';
import Modal from 'react-native-modal';

const ResetPassword = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalHeight, setModalHeight] = useState(0);

  const Handleresetemail = () => {
    setModalVisible(true);
  };

  const handleNavigate = () => {
    setModalVisible(false);
    navigation.navigate('login1');
  };

  useEffect(() => {
    if (isModalVisible) {
      setModalHeight(375);
    } else {
      setModalHeight(0);
    }
  }, [isModalVisible]);

  return (
    <View style={styles.container}>
      <View style={styles.secondcontainer}>
        <View style={styles.textview}>
          <Text style={styles.texttop1}>Enter your email to reset</Text>
          <Text style={styles.texttop2}>your password</Text>
        </View>
        <View style={styles.emailView}>
          <Text style={styles.emailtext}>Email</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.TouchableOpacityView}>
          <TouchableOpacity onPress={Handleresetemail}>
            <Text style={styles.TouchableOpacityText}>SEND PASSWORD RESET LINK</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Bottom Modal */}
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <View style={[styles.modal, { height: modalHeight }]}>
          <Image source={require('../../../../src/assets/images/checkcircle.png')} style={styles.image} />
          <Text style={styles.modalText1}>Password reset link sent</Text>
          <Text style={styles.modalText2}>to your email</Text>

          <TouchableOpacity style={styles.closeButton} onPress={handleNavigate}>
            <Text style={styles.closeButtonText}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    width: 'auto',

  },

  input: {
    height: 60,
    width: 335,
    marginStart: 10,
    color: '#222222',
  },
  emailView: {
    height: 60,
    width: 360,
    marginTop: 70,
    alignSelf: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    tintColor: 'black',
  },
  emailtext: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#444444',
    marginStart: 10,
    textAlign: 'left',
  },
  textview: {
    alignSelf: 'center',
    marginTop: 40,
    height: 58,
    width: 300,
  },
  texttop1: {
    color: '#222222',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 24,
  },
  texttop2: {
    color: '#222222',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center',
  },
  TouchableOpacityView: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 28,
    backgroundColor: '#363333',
    width: 275,
    height: 48,
    borderRadius: 24,
  },
  TouchableOpacityText: {
    marginTop: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 15,
  },
  modal: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    // Drop shadow properties
    shadowColor: '#00000080', // Shadow color
    shadowOffset: {
      width: 0, // x offset
      height: -25, // y offset
    },
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 99, // Blur radius

  },
  image: {
    width: 56,
    height: 56,
    marginTop: 20,
  },
  modalText1: {
    fontSize: 24,
    color: '#222222',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: 40,
  },
  modalText2: {
    fontSize: 24,
    color: '#222222',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },

  closeButton: {
    backgroundColor: '#363333',
    borderRadius: 24,
    width: 275,
    height: 48,
    alignItems: 'center',
    marginTop: 45,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: 12,
  },
});

export default ResetPassword;
