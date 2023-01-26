import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const home = {
  ...topNav,
  ...common,
  ...authModal,
  LABEL_ABOUT_US_HEADER_5: 'आमच्याबद्दल',
  LABEL_ABOUT_US_BODY_5_1:
    'मजकूर असो किंवा चित्रांद्वारे, आमचा विश्वास आहे की प्रत्येकाकडे सामायिक करण्यासाठी एक कथा आहे.',
  LABEL_ABOUT_US_BODY_5_2:
    'आम्हाला विश्वास आहे की उत्कृष्ट कॉमिक्स कुठूनही येऊ शकतात.',
  LABEL_ABOUT_US_BODY_5_3:
    'आम्ही साधने तयार करण्यासाठी कटिबद्ध कॉमिक चाहत्यांचा एक गट आहोत',
  LABEL_ABOUT_US_BODY_5_4:
    'कॉमिक निर्मात्यांना त्यांच्या कथा शक्य तितक्या लोकांपर्यंत जोडण्यात मदत करण्यासाठी.',
  LABEL_ABOUT_US_HEADER_6: 'तुमची कथा काय आहे?',
  LABEL_SIGN_UP: 'साइन अप करा',
  LABEL_CREATE_SERIES: 'मालिका तयार करा',
  LABEL_MY_PROFILE: 'माझे प्रोफाइल',
};

export default home;
