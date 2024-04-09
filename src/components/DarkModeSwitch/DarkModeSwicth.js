import { Switch } from '@gluestack-ui/themed';

function DarkModeSwicth({ changeTheme, themeValue }) {
 return (
  <Switch
   onToggle={() => changeTheme()}
   value={themeValue}
   size="sm"
   sx={{
    _light: {
     props: {
      trackColor: {
       false: '#67686D',
       true: '#00A3FF',
      },
     },
    },
   }}
  />
 );
}

export default DarkModeSwicth;
