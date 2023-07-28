import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustemButtonForCollab({label, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#297FFF',
        padding: 15,
        marginTop: 20,
        borderRadius: 30,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#fff',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
