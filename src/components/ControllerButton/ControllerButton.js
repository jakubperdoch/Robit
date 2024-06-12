import { TouchableOpacity } from 'react-native';
import styles from './styles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RotateLeft from '../../assets/images/rotate-left.svg';
import RotateRight from '../../assets/images/rotate-right.svg';
import ArrowDown from '../../assets/images/arrowIcon-down.svg';
import ArrowUp from '../../assets/images/arrowIcon-up.svg';

function ControllerButton({ controller, buttonValue }) {
 const [isHolding, setIsHolding] = useState(false);

 useEffect(() => {
  let intervalId;
  if (isHolding) {
   intervalId = setInterval(() => {
    axios
     .post('http://10.42.0.1:5000/data', {
      controller: controller,
      value: buttonValue,
     })
     .then((response) => {
      console.log(response.data);
     })
     .catch((error) => {
      console.error('There was an error!', error);
     });
   }, 500);
  }

  return () => {
   clearInterval(intervalId);
  };
 }, [isHolding, controller, buttonValue]);

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
   {controller === 'base' || controller === 'hand' ? (
    buttonValue === 1 ? (
     <RotateRight width={27} height={27} style={styles.rotateIcon} />
    ) : (
     <RotateLeft width={27} height={27} style={styles.rotateIcon} />
    )
   ) : buttonValue === 1 ? (
    <ArrowUp />
   ) : (
    <ArrowDown />
   )}
  </TouchableOpacity>
 );
}

export default ControllerButton;
