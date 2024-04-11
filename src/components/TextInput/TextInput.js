import { Input, InputField, InputSlot, InputIcon } from '@gluestack-ui/themed';

function TextInput({
 type,
 iconLeft,
 IconRightShow,
 IconRightHide,
 onClicHandler,
 showPassword,
 placeholder,
}) {
 return (
  <Input
   textAlign="center"
   borderColor="#00A6FB"
   backgroundColor="#F7F8F8"
   height={55}
   paddingHorizontal={20}
   borderRadius={16}
   width={'100%'}
  >
   <InputSlot>
    <InputIcon size="lg" as={iconLeft} color="$darkBlue500" />
   </InputSlot>
   {type == 'password' ? (
    <>
     <InputField
      fontFamily="Tech"
      color="#0582CA"
      placeholderTextColor="#0582CA"
      placeholder={placeholder}
      type={showPassword ? 'text' : 'password'}
      fontSize={17}
     />
     <InputSlot onPress={() => onClicHandler()}>
      <InputIcon
       size="lg"
       color="$darkBlue500"
       as={showPassword ? IconRightShow : IconRightHide}
      />
     </InputSlot>
    </>
   ) : (
    <>
     <InputField
      placeholder={placeholder}
      fontFamily="Tech"
      color="#0582CA"
      placeholderTextColor="#0582CA"
      type="text"
      fontSize={17}
     />
    </>
   )}
  </Input>
 );
}

export default TextInput;
