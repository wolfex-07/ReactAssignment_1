import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {gameStyle} from './SnakeStyles';

const BtnImagesurl =
  'https://static.vecteezy.com/system/resources/previews/012/493/996/original/up-arrow-simple-symbol-with-transparent-background-png.png';
const PlaybtnUrl = 'https://cdn-icons-png.flaticon.com/512/0/375.png';

const snakeCoordsArray = [
  {x: 0, y: 0},
  {x: 20, y: 0},
  {x: 40, y: 0},
  {x: 60, y: 0},
];

export default function SnakeGame() {
  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const [snakePositonData, setPosition] = useState(snakeCoordsArray);

  function moveSnake(moveX, moveY) {
    const updatedSnakeCoords = [...snakePositonData];
    for (let i = 0; i < updatedSnakeCoords.length - 1; i++) {
      updatedSnakeCoords[i] = {...updatedSnakeCoords[i + 1]};
    }
    const lastElementIndex = updatedSnakeCoords.length - 1;
    updatedSnakeCoords[lastElementIndex] = {
      ...updatedSnakeCoords[lastElementIndex],
      y: updatedSnakeCoords[lastElementIndex].y + moveY,
      x: updatedSnakeCoords[lastElementIndex].x + moveX,
    };
    setPosition(updatedSnakeCoords);
  }

  const handleUpBtnTapped = () => {
    const updatedSnakeCoords = [...snakePositonData];

    for (let i = 0; i < updatedSnakeCoords.length - 1; i++) {
      updatedSnakeCoords[i] = {...updatedSnakeCoords[i + 1]};
    }

    const lastElementIndex = updatedSnakeCoords.length - 1;
    updatedSnakeCoords[lastElementIndex] = {
      ...updatedSnakeCoords[lastElementIndex],
      y: updatedSnakeCoords[lastElementIndex].y - 20,
    };

    setPosition(updatedSnakeCoords);
  };

  const handleDownBtnTapped = () => {
    const updatedSnakeCoords = [...snakePositonData];

    for (let i = 0; i < updatedSnakeCoords.length - 1; i++) {
      updatedSnakeCoords[i] = {...updatedSnakeCoords[i + 1]};
    }

    const lastElementIndex = updatedSnakeCoords.length - 1;
    updatedSnakeCoords[lastElementIndex] = {
      ...updatedSnakeCoords[lastElementIndex],
      y: updatedSnakeCoords[lastElementIndex].y + 20,
    };

    setPosition(updatedSnakeCoords);
  };

  const handleRightBtnTapped = () => {
    const updatedSnakeCoords = [...snakePositonData];
    for (let i = 0; i < updatedSnakeCoords.length - 1; i++) {
      updatedSnakeCoords[i] = {...updatedSnakeCoords[i + 1]};
    }
    const lastElementIndex = updatedSnakeCoords.length - 1;
    updatedSnakeCoords[lastElementIndex] = {
      ...updatedSnakeCoords[lastElementIndex],
      x: updatedSnakeCoords[lastElementIndex].x + 20,
    };
    setPosition(updatedSnakeCoords);
  };

  const handleleftBtnTapped = () => {
    const updatedSnakeCoords = [...snakePositonData];
    for (let i = 0; i < updatedSnakeCoords.length - 1; i++) {
      updatedSnakeCoords[i] = {...updatedSnakeCoords[i + 1]};
    }
    const lastElementIndex = updatedSnakeCoords.length - 1;
    updatedSnakeCoords[lastElementIndex] = {
      ...updatedSnakeCoords[lastElementIndex],
      x: updatedSnakeCoords[lastElementIndex].x - 20,
    };
    setPosition(updatedSnakeCoords);
  };
  const handlePausePlayTapped = () => {
    console.log('pause/play tapped');
  };

  console.log(snakePositonData[0].x);
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
            }}>
            Tail
          </Text>
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
        <View // snake head
          style={[
            gameStyle.snakebody,
            changesStyle(snakePositonData[3].x, snakePositonData[3].y)
              .moveSnake,
          ]}>
          <Text // snake Head
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 6,
              fontWeight: '700',
            }}>
            Head
          </Text>
        </View>
      </View>
      <TouchableOpacity style={gameStyle.upBtn} onPress={handleUpBtnTapped}>
        <Image
          resizeMode="contain"
          style={gameStyle.btnImg}
          src={BtnImagesurl}
        />
      </TouchableOpacity>
      <View style={gameStyle.centerBtnViews}>
        <TouchableOpacity
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
          onPress={handleRightBtnTapped}
          style={gameStyle.rightBtn}>
          <Image
            resizeMode="contain"
            style={gameStyle.btnImg}
            src={BtnImagesurl}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleDownBtnTapped} style={gameStyle.downBtn}>
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
