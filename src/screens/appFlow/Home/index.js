import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, } from 'react-native';
import Modal from 'react-native-modal';
import React, { useState, useEffect } from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
const Mainhomescreen = ({ navigation }) => {
  const [chatRoomsModalStates, setChatRoomsModalStates] = useState({
    houseParty: false,
    raveRoom: false,
    birthdayParty: false,
    foodClub: false,
    kittyChats: false,
    friendsSquad: false,
    pineappleParty: false,
  });

  const [modalHeight, setModalHeight] = useState(0);

  const handleOpenModal = (roomName) => {
    setChatRoomsModalStates((prevStates) => ({ ...prevStates, [roomName]: true }));
  };

  const handleCloseModal = () => {
    // Close all modals when continue is pressed
    setChatRoomsModalStates({
      houseParty: false,
      raveRoom: false,
      birthdayParty: false,
      foodClub: false,
      kittyChats: false,
      friendsSquad: false,
      pineappleParty: false,
    });
  };

  useEffect(() => {
    // Handle setting the modal height based on visibility
    const isAnyModalVisible = Object.values(chatRoomsModalStates).some((value) => value === true);
    if (isAnyModalVisible) {
      // Set the height to show the modal
      setModalHeight(responsiveHeight(50));
    } else {
      // Set the height to hide the modal
      setModalHeight(0);
    }
  }, [chatRoomsModalStates]);

  const handleScreenPress = () => {
    handleCloseModal();
  };


  const housePartyChat = () => {

    navigation.navigate('messages');
  };



  return (

    //<TouchableOpacity onPress={handleScreenPress}>
    <View style={styles.container}>
      <StatusBar backgroundColor='#F6CD5B' barStyle='dark-content' />

      <View style={styles.header}>
        <Image source={require('../../../../src/assets/images/Group6.png')} style={styles.headerImage} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>These Chatrooms, You Bet!</Text>
        <Text style={styles.subtitle}>Join Any Room Now</Text>
      </View>
      <View style={styles.chatRoomsContainer}>
        <Image source={require('../../../../src/assets/images/Ellipse17.png')} style={styles.circleImage} />
        <Image source={require('../../../../src/assets/images/Group3.png')} style={styles.centerImage} />


        <View style={styles.chatRoomItem1}>
          <TouchableOpacity onPress={() => handleOpenModal('houseParty')}>
            <Image source={require('../../../../src/assets/images/HouseParty.png')} />
            <Text style={styles.chatRoomText}>House Party</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chatRoomItem2}>
          <TouchableOpacity onPress={() => handleOpenModal('raveRoom')}>
            <Image source={require('../../../../src/assets/images/RaveRoom.png')} />
            <Text style={styles.chatRoomText}>Rave Room</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chatRoomItem3}>
          <TouchableOpacity onPress={() => handleOpenModal('birthdayParty')}>
            <Image source={require('../../../../src/assets/images/BirthdayParty.png')} />
            <Text style={styles.chatRoomText}>Birthday Party</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chatRoomItem4}>
          <TouchableOpacity onPress={() => handleOpenModal('foodClub')}>
            <Image source={require('../../../../src/assets/images/FoodClub.png')} />
            <Text style={styles.chatRoomText}>Food Club</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chatRoomItem5}>
          <TouchableOpacity onPress={() => handleOpenModal('kittyChats')}>
            <Image source={require('../../../../src/assets/images/KittyChats.png')} />
            <Text style={styles.chatRoomText}>Kitty Chats</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chatRoomItem6}>
          <TouchableOpacity onPress={() => handleOpenModal('friendsSquad')}>
            <Image source={require('../../../../src/assets/images/FriendsSquad.png')} />
            <Text style={styles.chatRoomText}>Friends Squad</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chatRoomItem7}>
          <TouchableOpacity onPress={() => handleOpenModal('pineappleParty')}>
            <Image source={require('../../../../src/assets/images/PineappleParty.png')} />
            <Text style={styles.chatRoomText}>Pineapple Party</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* House party Modal */}
      <Modal
        isVisible={chatRoomsModalStates.houseParty}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={{ justifyContent: 'flex-end', margin: 0 }}
        onBackdropPress={handleCloseModal} // Close the modal when clicking on the backdrop
        swipeDirection="down" // Allow swiping the modal down to close it
        onSwipeComplete={handleCloseModal} // Close the modal when swiping it down
      >
        <View style={[styles.modal, { height: modalHeight }]}>
          <Image source={require('../../../../src/assets/images/HousePartyModal.png')} style={styles.image} />
          <Text style={styles.modalText1}>House Party</Text>
          <Text style={styles.modalText2}>136 members joined the room</Text>

          <TouchableOpacity style={styles.closeButton} onPress={housePartyChat}>
            <Text style={styles.closeButtonText}>START TALK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {/*Rave Room  Modal */}
      <Modal
        isVisible={chatRoomsModalStates.raveRoom}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={{ justifyContent: 'flex-end', margin: 0 }}
        onBackdropPress={handleCloseModal} // Close the modal when clicking on the backdrop
        swipeDirection="down" // Allow swiping the modal down to close it
        onSwipeComplete={handleCloseModal} // Close the modal when swiping it down
      >
        <View style={[styles.modal, { height: modalHeight }]}>
          <Image source={require('../../../../src/assets/images/RaveRoomModal.png')} style={styles.image} />
          <Text style={styles.modalText1}>Rave Room</Text>
          <Text style={styles.modalText2}>136 members joined the room</Text>

          <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
            <Text style={styles.closeButtonText}>START TALK</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/*Birthday Party Modal */}
      <Modal
        isVisible={chatRoomsModalStates.birthdayParty}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={{ justifyContent: 'flex-end', margin: 0 }}
        onBackdropPress={handleCloseModal} // Close the modal when clicking on the backdrop
        swipeDirection="down" // Allow swiping the modal down to close it
        onSwipeComplete={handleCloseModal} // Close the modal when swiping it down
      >
        <View style={[styles.modal, { height: modalHeight }]}>
          <Image source={require('../../../../src/assets/images/BirthdayPartyModal.png')} style={styles.image} />
          <Text style={styles.modalText1}>Birthday Party</Text>
          <Text style={styles.modalText2}>136 members joined the room</Text>

          <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
            <Text style={styles.closeButtonText}>START TALK</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/*Food Club  Modal */}
      <Modal
        isVisible={chatRoomsModalStates.foodClub}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={{ justifyContent: 'flex-end', margin: 0 }}
        onBackdropPress={handleCloseModal} // Close the modal when clicking on the backdrop
        swipeDirection="down" // Allow swiping the modal down to close it
        onSwipeComplete={handleCloseModal} // Close the modal when swiping it down
      >
        <View style={[styles.modal, { height: modalHeight }]}>
          <Image source={require('../../../../src/assets/images/FoodClubModal.png')} style={styles.image} />
          <Text style={styles.modalText1}>Food Club</Text>
          <Text style={styles.modalText2}>136 members joined the room</Text>

          <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
            <Text style={styles.closeButtonText}>START TALK</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/*Kitty Chats  Modal */}
      <Modal
        isVisible={chatRoomsModalStates.kittyChats}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={{ justifyContent: 'flex-end', margin: 0 }}
        onBackdropPress={handleCloseModal} // Close the modal when clicking on the backdrop
        swipeDirection="down" // Allow swiping the modal down to close it
        onSwipeComplete={handleCloseModal} // Close the modal when swiping it down
      >
        <View style={[styles.modal, { height: modalHeight }]}>
          <Image source={require('../../../../src/assets/images/KittyChatsModal.png')} style={styles.image} />
          <Text style={styles.modalText1}>Kitty Chats</Text>
          <Text style={styles.modalText2}>136 members joined the room</Text>

          <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
            <Text style={styles.closeButtonText}>START TALK</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/*Friends Squad  Modal */}
      <Modal
        isVisible={chatRoomsModalStates.friendsSquad}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={{ justifyContent: 'flex-end', margin: 0 }}
        onBackdropPress={handleCloseModal} // Close the modal when clicking on the backdrop
        swipeDirection="down" // Allow swiping the modal down to close it
        onSwipeComplete={handleCloseModal} // Close the modal when swiping it down
      >
        <View style={[styles.modal, { height: modalHeight }]}>
          <Image source={require('../../../../src/assets/images/FriendsSquadModal.png')} style={styles.image} />
          <Text style={styles.modalText1}>Friends Squad</Text>
          <Text style={styles.modalText2}>136 members joined the room</Text>

          <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
            <Text style={styles.closeButtonText}>START TALK</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/*Pineapple Party Modal */}
      <Modal
        isVisible={chatRoomsModalStates.pineappleParty}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={{ justifyContent: 'flex-end', margin: 0 }}
        onBackdropPress={handleCloseModal} // Close the modal when clicking on the backdrop
        swipeDirection="down" // Allow swiping the modal down to close it
        onSwipeComplete={handleCloseModal} // Close the modal when swiping it down
      >
        <View style={[styles.modal, { height: modalHeight }]}>
          <Image source={require('../../../../src/assets/images/PineapplePartyModal.png')} style={styles.image} />
          <Text style={styles.modalText1}>Pineapple Party</Text>
          <Text style={styles.modalText2}>136 members joined the room</Text>

          <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
            <Text style={styles.closeButtonText}>START TALK</Text>
          </TouchableOpacity>
        </View>
      </Modal>


    </View>
    //</TouchableOpacity>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    backgroundColor: '#F6CD5B',
    width: responsiveWidth(100),
    height: responsiveHeight(11),
    flex: 0.3
  },
  headerImage: {
    //   height:responsiveHeight(6),
    //  width:responsiveWidth(30),

    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(3.5),
  },
  // Add this style to the titleContainer
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,


  },

  title: {
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    color: '#111820',
  },
  subtitle: {
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.7),
    color: '#111820',
    marginTop: responsiveHeight(2.6),
  },
  chatRoomsContainer: {
    // marginTop: responsiveHeight(19),
    // width: responsiveWidth(80),
    // height: responsiveWidth(80),
  
    alignSelf: 'center',
   justifyContent:'flex-start',
    flex: 2,

  },
  circleImage: {
    alignSelf: 'center',
    zIndex: 1,


    //  width: responsiveWidth(80),
    //  height: responsiveWidth(80),
  },
  centerImage: {
    alignSelf: 'center',
    zIndex: 2,
    marginTop: -responsiveWidth(48),
  },
  chatRoomItem1: {
    alignSelf: 'center',
    alignItems: 'center',
    width: responsiveWidth(9.8),
    height: responsiveWidth(9.8),
    zIndex: 3,
    marginTop: -responsiveWidth(54),
    marginLeft: responsiveWidth(11),
  },
  chatRoomItem2: {
    alignSelf: 'center',
    width: responsiveWidth(9.8),
    height: responsiveWidth(9.8),
    zIndex: 3,
    alignItems: 'center',
    marginTop: responsiveWidth(53),
    marginLeft: -responsiveWidth(22),
  },
  chatRoomItem3: {
    alignSelf: 'center',
    alignItems: 'center',
    width: responsiveWidth(9.8),
    height: responsiveWidth(9.8),
    zIndex: 3,
    marginTop: -responsiveWidth(11),
    marginLeft: responsiveWidth(46),
  },
  chatRoomItem4: {
    alignSelf: 'center',
    alignItems: 'center',
    width: responsiveWidth(9.8),
    height: responsiveWidth(9.8),
    zIndex: 3,
    marginTop: -responsiveWidth(35),
    marginLeft: responsiveWidth(80),
  },
  chatRoomItem5: {
    alignSelf: 'center',
    alignItems: 'center',
    width: responsiveWidth(9.8),
    height: responsiveWidth(9.8),
    zIndex: 3,
    marginTop: -responsiveWidth(36),
    marginRight: -responsiveWidth(65),
  },
  chatRoomItem6: {
    alignSelf: 'center',
    alignItems: 'center',
    width: responsiveWidth(9.8),
    height: responsiveWidth(9.8),
    zIndex: 3,
    marginTop: -responsiveWidth(10),
    marginLeft: -responsiveWidth(42),
  },
  chatRoomItem7: {
    alignSelf: 'center',
    alignItems: 'center',
    width: responsiveWidth(9.8),
    height: responsiveWidth(9.8),
    zIndex: 3,
    marginTop: responsiveWidth(15),
    marginLeft: -responsiveWidth(54),
  },
  chatRoomText: {
    color: '#111820',
    alignSelf: 'center',
    fontSize: responsiveFontSize(1.4),
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    width: responsiveWidth(28),
    marginTop: -responsiveWidth(1.4),
  },
  modal: {
    backgroundColor: '#FFFFFF',
    height: responsiveHeight(45.7),
    borderTopLeftRadius: 43,
    borderTopRightRadius: 43,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  image: {
    width: '100%',
    height: responsiveHeight(25),
    borderTopLeftRadius: 43,
    borderTopRightRadius: 43,
  },
  modalText1: {
    fontSize: responsiveFontSize(2.6),
    color: '#111820',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: responsiveHeight(4.2),
  },
  modalText2: {
    fontSize: responsiveFontSize(1.8),
    color: '#111820',
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    marginTop: responsiveHeight(1.4),
  },
  closeButton: {
    backgroundColor: '#F6CD5B',
    borderRadius: 24,
    width: responsiveWidth(68.8),
    height: responsiveHeight(5.6),
    alignItems: 'center',
    marginTop: responsiveHeight(4),
  },
  closeButtonText: {
    color: '#363333',
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: responsiveHeight(1.6),
  },
});

export default Mainhomescreen;