import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
const home = { ...topNav,
  ...common,
  ...authModal,
  LABEL_ABOUT_US_HEADER_5: 'BAHIN KAMI',
  LABEL_ABOUT_US_BODY_5_1: 'Bisan pinaagi sa teksto o mga ilustrasyon, kami nagtuo nga ang tanan adunay istorya nga ipaambit.',
  LABEL_ABOUT_US_BODY_5_2: 'Nagtuo usab kami nga ang mga dagkong komiks mahimong gikan sa bisan diin.',
  LABEL_ABOUT_US_BODY_5_3: 'Kami usa ka grupo sa mga tagahanga sa komiks nga determinado nga maghimo mga himan',
  LABEL_ABOUT_US_BODY_5_4: 'aron matabangan ang mga tigbuhat sa komiks nga makonektar ang ilang mga istorya sa daghang mga tawo kutob sa mahimo.',
  LABEL_ABOUT_US_HEADER_6: 'UNSAY IMONG STORYA?',
  LABEL_SIGN_UP: 'Sign up',
  LABEL_CREATE_SERIES: 'Paghimo og serye',
  LABEL_MY_PROFILE: 'Akong profile'
};
export default home;