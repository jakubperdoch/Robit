import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import Icon from '../Icon/Icon';

function ValidationButton({ onClickHandler, title, hasIcon }) {
 return (
  <TouchableOpacity style={styles.FormButton} onPress={() => onClickHandler()}>
   {hasIcon ? <Icon name="LogIn" color={'#FFFFFF'} /> : null}
   <Text style={styles.FormButton_title}>{title}</Text>
  </TouchableOpacity>
 );
}

export default ValidationButton;
