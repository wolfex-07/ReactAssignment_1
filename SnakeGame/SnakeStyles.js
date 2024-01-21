import { StyleSheet } from "react-native";

const gameStyle = StyleSheet.create({
    snakebody: {
      height: 20,
      width: 20,
      backgroundColor: 'green',
      borderRadius: 20,
      overflow: 'hidden',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      //justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    boundry: {
       marginTop: 0,
       margin:10,
       height: 350,
       borderRadius: 10,
       borderWidth: 2,
       borderColor: 'green',
       backgroundColor:'white',
    },
    topText: {
      marginTop: 10,
      color:'white',
      margin: 10,
      padding:5,
      fontSize: 24,
      borderWidth: 0,
      backgroundColor: 'green',
      overflow: 'hidden',
       textAlign: 'center',
       borderRadius: 20,
    },
    paragraph: {
      margin: 4,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
     playPauseBtn: {
      alignSelf: 'center',
      textAlign: 'center',
       marginTop:0,
       borderWidth: 0,
       borderRadius: 25,
       //backgroundColor: 'lightpink',
       height: 50,
       width: 50,
       transform: [{rotate: '0deg'}]
     },
     upBtn: {
      alignSelf: 'center',
      textAlign: 'center',
       marginTop:20,
       marginBottom: 5,
       borderWidth: 0,
       borderRadius: 25,
       backgroundColor: 'lightpink',
       height: 50,
       width: 50,
       transform: [{rotate: '0deg'}]
     },
     downBtn: {
      alignSelf: 'center',
      textAlign: 'center',
       marginTop: 5,
       marginRight: 0,
       borderWidth: 0,
       borderRadius: 25,
       backgroundColor: 'lightpink',
       height: 50,
       width: 50,
       transform: [{rotate: '180deg'}]
     },
     leftBtn: {
      alignSelf: 'center',
      textAlign: 'center',
       marginTop:0,
       marginRight: 5,
       borderWidth: 0,
       borderRadius: 25,
       backgroundColor: 'lightpink',
       height: 50,
       width: 50,
       transform: [{rotate: '-90deg'}]
     },
     rightBtn: {
      alignSelf: 'center',
      textAlign: 'center',
       marginTop:0,
       marginLeft: 5,
       marginRight: 0,
       borderWidth: 0,
       borderRadius: 25,
       backgroundColor: 'lightpink',
       height: 50,
       width: 50,
       transform: [{rotate: '90deg'}]
     },
     btnImg: {
      flex: 1,
     },
     centerBtnViews: {
       flexDirection: 'row',
      // backgroundColor: '',
       alignSelf: 'center',
     }
  });

  export {gameStyle};
  