import React from 'react';
import { View, Text } from 'react-native';

const XAxis = ({ data, xAxisWidth, labelWidth }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <View style={{ width: labelWidth }} />
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        {data.map((item, index) => (
          <View key={index} style={{ flex: 1, alignItems: 'left' }}>
            <Text style={{ fontSize: 12, textAlign: 'left' }}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const Xcomponent = () => {
  const xAxisData = [
    { label: '8AM' },
    { label: '9AM' },
    { label: 'Now' },
  ];
  const chartWidth = 300; 
  const xAxisHeight = 40;
  const labelWidth = 50;

  return (
    <View style={{ flex: 1, marginLeft: 10 }}>
      <View style={{ height: xAxisHeight}}>
        <XAxis data={xAxisData} xAxisWidth={chartWidth} labelWidth={labelWidth} />
      </View>
    </View>
  );
};

export default Xcomponent;

