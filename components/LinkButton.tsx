// LinkButton.tsx

import React from 'react';

import { useContext } from 'react';

import { Text, TouchableOpacity } from 'react-native';


const LinkButton = ({ onPress, title, styles }) => {
  return (
    <TouchableOpacity style={styles.touch} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LinkButton;