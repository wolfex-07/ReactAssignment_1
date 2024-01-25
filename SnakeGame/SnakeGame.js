import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import {gameStyle} from './SnakeStyles';

let counter = 0;
const BtnImagesurl =
  'https://static.vecteezy.com/system/resources/previews/012/493/996/original/up-arrow-simple-symbol-with-transparent-background-png.png';
const PlaybtnUrl = 'https://cdn-icons-png.flaticon.com/512/0/375.png';

const snakeCoordsArray = [
  {x: 0, y: 0},
  {x: 20, y: 0},
  {x: 40, y: 0},
  {x: 60, y: 0},
];

let snakeDirection = {
  left: false,
  right: false,
  up: false,
  down: false,
};

let timeOut = ''
export default function SnakeGame() {
  const [snakePositonData, setPosition] = useState(snakeCoordsArray);
  let isGameOver = false;

  function setSnakeDirection(direction) {
    Object.keys(snakeDirection).forEach(key => {
      snakeDirection[key] = false;
    });
    snakeDirection[direction] = true;
  }

  function start() {}

  function timeoutCaller(moveX,moveY) {
    setTimeout(function() {
      // const updatedSnakeCoords = [...snakePositonData];
      // for (let i = 0; i < updatedSnakeCoords.length - 1; i++) {
      //   updatedSnakeCoords[i] = {...updatedSnakeCoords[i + 1]};
      // }
      // const lastElementIndex = updatedSnakeCoords.length - 1;
      // updatedSnakeCoords[lastElementIndex] = {
      //   ...updatedSnakeCoords[lastElementIndex],
      //   y: updatedSnakeCoords[lastElementIndex].y + moveY,
      //   x: updatedSnakeCoords[lastElementIndex].x + moveX,
      // };
      // setPosition(updatedSnakeCoords);
    }, 1000);
  }
  // Start the function
  // printHello();

  useEffect(() => {
       //console.log('hook called ', counter,  " time ")
       flow()
       //console.log('snakedirection is',snakeDirection)
       return ()=> clearTimeout(timeOut)
  }, [snakePositonData]);

  function flow() {
    switch (true) {
      case snakeDirection.left:
       
        handleleftBtnTapped()
        //moveSnake(-20,0)
        break;
      case snakeDirection.right:
       
        handleRightBtnTapped()
        //moveSnake(20,0)
        break;
      case snakeDirection.up:
        
        handleUpBtnTapped()
        //moveSnake(0,-20)
        break;
      case snakeDirection.down:
        
        handleDownBtnTapped()
        //moveSnake(0,20)
        break;
      default:
        break;
    }
  }

  function moveSnake(moveX,moveY) {
    timeOut = setTimeout(function() {
      const updatedSnakeCoords = [...snakePositonData];
      for (let i = 0; i < updatedSnakeCoords.length - 1; i++) {
        updatedSnakeCoords[i] = {...updatedSnakeCoords[i + 1]};
      }

      console.log('last direction' , snakeDirection)
      console.log('coords', moveX, " ", moveY)
      const lastElementIndex = updatedSnakeCoords.length - 1;
      updatedSnakeCoords[lastElementIndex] = {
        ...updatedSnakeCoords[lastElementIndex],
        y: updatedSnakeCoords[lastElementIndex].y + moveY,
        x: updatedSnakeCoords[lastElementIndex].x + moveX,
      };
      setPosition(updatedSnakeCoords);
    }, 100);
  }

  const handleUpBtnTapped = () => {
    const moveY = -20;
    moveSnake(0, moveY);
    setSnakeDirection('up');
  };

  const handleDownBtnTapped = () => {
    const moveY = 20;
    console.log('down btn pressed.')
    moveSnake(0, moveY);
    setSnakeDirection('down');
  };

  const handleRightBtnTapped = () => {3
    const moveX = 20;
    moveSnake(moveX, 0);
    setSnakeDirection('right');
  };

  const handleleftBtnTapped = () => {
    const moveX = -20;
    moveSnake(moveX, 0);
    setSnakeDirection('left');
  };

  const handlePausePlayTapped = () => {
    //console.log('pause/play tapped');
  };

  return (
    <SafeAreaView style={gameStyle.container}>
      <Text style={gameStyle.topText}>SnakeGame 2.0</Text>
      <View style={gameStyle.boundry}>
        <View
          style={[
            gameStyle.snakebody,
            changesStyle(snakePositonData[0].x, snakePositonData[0].y)
              .moveSnake,
          ]}>
          <Text // // snake tail
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 8,
              fontWeight: '700',
            }}></Text>
        </View>
        <View
          style={[
            gameStyle.snakebody,
            changesStyle(snakePositonData[1].x, snakePositonData[1].y)
              .moveSnake,
          ]}
        />
        <View
          style={[
            gameStyle.snakebody,
            changesStyle(snakePositonData[2].x, snakePositonData[2].y)
              .moveSnake,
          ]}
        />
        <View
          style={[
            gameStyle.snakebody,
            changesStyle(snakePositonData[3].x, snakePositonData[3].y)
              .moveSnake,
            gameStyle.snakeHead,
          ]}>
          <Image
            style={{
              ...gameStyle.snakeHeadImg,
              transform: snakeDirection.right
                ? 'scaleX(-1)'
                : snakeDirection.left
                ? 'scaleX(1)'
                : snakeDirection.down
                ? 'rotate(-90deg)'
                : 'rotate(90deg)',
            }}
            // {...styles.container, padding: isFocused? 14 : 4}
            source={require('./snake-head.png')}
            //src={uri}
          />
        </View>
      </View>
      <TouchableOpacity
        style={gameStyle.upBtn}
        onPress={handleUpBtnTapped}
        disabled={false}>
        <Image
          resizeMode="contain"
          style={gameStyle.btnImg}
          src={BtnImagesurl}
        />
      </TouchableOpacity>
      <View style={gameStyle.centerBtnViews}>
        <TouchableOpacity
          disabled={false}
          style={gameStyle.leftBtn}
          onPress={handleleftBtnTapped}>
          <Image
            resizeMode="contain"
            style={gameStyle.btnImg}
            src={BtnImagesurl}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePausePlayTapped}
          style={gameStyle.playPauseBtn}>
          <Image
            resizeMode="contain"
            style={gameStyle.btnImg}
            src={PlaybtnUrl}
          />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={false}
          onPress={handleRightBtnTapped}
          style={gameStyle.rightBtn}>
          <Image
            resizeMode="contain"
            style={gameStyle.btnImg}
            src={BtnImagesurl}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        disabled={false}
        onPress={handleDownBtnTapped}
        style={gameStyle.downBtn}>
        <Image
          resizeMode="contain"
          style={gameStyle.btnImg}
          src={BtnImagesurl}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const changesStyle = (x, y) =>
  StyleSheet.create({
    moveSnake: {
      position: 'absolute',
      left: x,
      top: y,
    },
  });
