import { TouchableOpacity } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import styles from './styles';

function GoBackButton({ navigation }) {
 const onClickHandler = () => {
  navigation.goBack();
 };

 return (
  <TouchableOpacity
   style={styles.goBackButton}
   onPress={() => onClickHandler()}
  >
   <ChevronLeft size={28} color="#67686D" />
  </TouchableOpacity>
 );
}

export default GoBackButton;
