import styles from './styles';
import {
 Slider,
 SliderTrack,
 SliderFilledTrack,
 SliderThumb,
} from '@gluestack-ui/themed';

function GripSlider({ changeGripValue, gripValue }) {
 return (
  <Slider
   style={styles.slider}
   defaultValue={0}
   size="md"
   maxValue={50}
   orientation="horizontal"
   value={gripValue}
   onChange={changeGripValue}
   sx={{
    _thumb: {
     borderRadius: 3,
     backgroundColor: '#00A3FF',
     shadowOpacity: 0,
    },
    _track: {
     borderRadius: 3,
     height: 20,
     backgroundColor: '#67686D',
    },
    _filledTrack: {
     backgroundColor: '#A9A9A9',
    },
   }}
  >
   <SliderTrack>
    <SliderFilledTrack />
   </SliderTrack>
   <SliderThumb />
  </Slider>
 );
}
export default GripSlider;
