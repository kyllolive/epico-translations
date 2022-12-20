import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const home = {
  ...topNav,
  ...common,
  ...authModal,
  LABEL_ABOUT_US_HEADER_5: 'BAHIN NAMO',
  LABEL_ABOUT_US_BODY_5_1:
    'Mahimo kini pinaagi sa teksto o mga ilustrasyon, gatuo kami nga ang matag usa adunay istorya nga ipaambit.',
  LABEL_ABOUT_US_BODY_5_2:
    'Kami nagtuo usab nga ang daghang komiks mahimo nga gikan sa bisan diin.',
  LABEL_ABOUT_US_BODY_5_3:
    'Kami usa ka grupo sa mga tagahanga sa komiks nga determinado sa pagbuhat ug mga gamit',
  LABEL_ABOUT_US_BODY_5_4:
    'aron matabangan ang mga tagbuhat sa komiks nga magkonektar sa ilang mga istorya sa daghang mga tawo kutob sa mahimo.',
  LABEL_ABOUT_US_HEADER_6: 'UNSAY IMONG ESTORYA?',
  LABEL_SIGN_UP: 'Pag-sign up',
  LABEL_CREATE_SERIES: 'Himo ug Serye',
};

export default home;
