import { Image, TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';
import { useState, useEffect } from 'react';

function PanelButton(props) {
 const [isHolding, setIsHolding] = useState(false);

 useEffect(() => {
  let intervalId;
  if (isHolding) {
   intervalId = setInterval(() => {
    console.log('1');
   }, 50);
  } else {
   clearInterval(intervalId);
  }

  return () => {
   clearInterval(intervalId);
  };
 }, [isHolding]);

 const handlePressIn = () => {
  setIsHolding(true);
 };

 const handlePressOut = () => {
  setIsHolding(false);
 };

 function longPressHandler() {
  console.log('1');
 }
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
