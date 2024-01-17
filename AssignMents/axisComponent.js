import React from 'react';
import { View, Text } from 'react-native';

const YAxis = ({ data, height, yAxisWidth }) => {

  return (
    <View style={{ position: 'absolute', right:10, top: 20, width: yAxisWidth, height: height, }}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        {data.map((value, index) => (
          <View key={index} style={{ alignItems: 'flex-end', paddingRight: 0 }}>
            <Text style={{ fontSize: 12, fontWeight: '500' }}>- {value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

// Usage Example
const ExampleComponent = () => {
  const yAxisData = [400,300,200,100,0]; // Example y-axis data
  const yAxisHeight = 300; // Height of the y-axis
  const yAxisWidth = 50; // Width of the y-axis

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <YAxis data={yAxisData} height={yAxisHeight} yAxisWidth={yAxisWidth} />
    </View>
  );
};

export default ExampleComponent;
