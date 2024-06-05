import { Image, TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';
import { useState, useEffect } from 'react';
import axios from 'axios';

function PanelButton(props) {
 const [isHolding, setIsHolding] = useState(false);

 useEffect(() => {
  let intervalId;
  if (isHolding) {
   intervalId = setInterval(() => {
    axios
     .post('http://172.20.10.5:3000/home', {
      controller: props.controller,
      value: props.buttonValue,
     })
     .catch((error) => {
      console.error('There was an error!', error);
     });
   }, 500);
  } else {
   clearInterval(intervalId);
  }

  return () => {
   clearInterval(intervalId);
  };
 }, [isHolding, props.buttonValue]);

 const handlePressIn = () => {
  setIsHolding(true);
 };

 const handlePressOut = () => {
  setIsHolding(false);
 };

 return (
  <TouchableOpacity
   onPressIn={handlePressIn}
   onPressOut={handlePressOut}
   style={styles.panelButton}
  >
   <Image style={styles.panelButton_icon} source={props.icon} />
  </TouchableOpacity>
 );
}

export default PanelButton;
