import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
const home = { ...topNav,
  ...common,
  ...authModal,
  LABEL_ABOUT_US_HEADER_5: 'हमारे बारे में',
  LABEL_ABOUT_US_BODY_5_1: 'पाठ या चित्र के माध्यम से हो, हम मानते हैं कि हर किसी के पास साझा करने के लिए एक कहानी है।',
  LABEL_ABOUT_US_BODY_5_2: 'हम यह भी मानते हैं कि महान कॉमिक्स कहीं से भी आ सकती हैं।',
  LABEL_ABOUT_US_BODY_5_3: 'हम उपकरण बनाने के लिए दृढ़ संकल्पित हास्य प्रशंसकों का एक समूह हैं',
  LABEL_ABOUT_US_BODY_5_4: 'हास्य रचनाकारों को उनकी कहानियों को अधिक से अधिक लोगों से जोड़ने में मदद करने के लिए।',
  LABEL_ABOUT_US_HEADER_6: 'आपकी कहानी क्या है?',
  LABEL_SIGN_UP: 'साइन अप करें',
  LABEL_CREATE_SERIES: 'श्रृंखला बनाएं',
  LABEL_MY_PROFILE: 'मेरी प्रोफाइल'
};
export default home;