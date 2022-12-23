import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
const home = { ...topNav,
  ...common,
  ...authModal,
  LABEL_ABOUT_US_HEADER_5: 'ABOUT US',
  LABEL_ABOUT_US_BODY_5_1: 'Be it through text or illustrations, we believe everyone has a story to share.',
  LABEL_ABOUT_US_BODY_5_2: 'También creemos que los grandes cómics pueden provenir de cualquier parte.',
  LABEL_ABOUT_US_BODY_5_3: 'We are a group of comic fans determined to build tools',
  LABEL_ABOUT_US_BODY_5_4: 'para ayudar a los creadores de historietas a conectar sus historias con tantas personas como sea posible.',
  LABEL_ABOUT_US_HEADER_6: '¿CUÁL ES TU HISTORIA?',
  LABEL_SIGN_UP: 'Inscribirse',
  LABEL_CREATE_SERIES: 'Crear serie',
  LABEL_MY_PROFILE: 'Mi perfil'
};
export default home;