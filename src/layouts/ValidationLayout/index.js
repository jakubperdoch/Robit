import Footer from '../../components/Footer/Footer';
import { SafeAreaView } from 'react-native-safe-area-context';
import ValidationButton from '../../components/ValidationButton/ValidationButton';
import { Text, View } from 'react-native';
import styles from './styles';

const ValidationLayout = ({
 children,
 buttonText,
 navigation,
 title,
 subTitle,
}) => {
 const onClickHandler = (state) => {
  navigation.navigate('Home');
 };

 return (
  <SafeAreaView style={{ flex: 1 }}>
   <View style={styles.ValidationLayout}>
    <View style={styles.Layout_header}>
     <Text style={styles.Layout_subTitle}>{subTitle}</Text>
     <Text style={styles.Layout_title}>{title}</Text>
    </View>
    {children}

    <ValidationButton
     onClickHandler={onClickHandler.bind(this, buttonText)}
     title={buttonText}
    />
   </View>
  </SafeAreaView>
 );
};

export default ValidationLayout;
