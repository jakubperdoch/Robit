import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import Icon from '../Icon/Icon';

function FormButton({ onClickHandler, title }) {
 return (
  <TouchableOpacity style={styles.FormButton} onPress={() => onClickHandler()}>
   <Icon name="LogIn" color={'#FFFFFF'} />
   <Text style={styles.FormButton_title}>{title}</Text>
  </TouchableOpacity>
 );
}

export default FormButton;
