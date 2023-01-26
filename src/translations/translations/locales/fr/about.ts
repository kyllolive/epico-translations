import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const home = {
  ...topNav,
  ...common,
  ...authModal,
  LABEL_ABOUT_US_HEADER_5: 'ABOUT US',
  LABEL_ABOUT_US_BODY_5_1:
    'Be it through text or illustrations, we believe everyone has a story to share.',
  LABEL_ABOUT_US_BODY_5_2:
    "Nous pensons également que de grandes bandes dessinées peuvent venir de n'importe où.",
  LABEL_ABOUT_US_BODY_5_3:
    'We are a group of comic fans determined to build tools',
  LABEL_ABOUT_US_BODY_5_4:
    'pour aider les créateurs de bandes dessinées à connecter leurs histoires au plus grand nombre de personnes possible.',
  LABEL_ABOUT_US_HEADER_6: 'QUELLE EST TON HISTOIRE?',
  LABEL_SIGN_UP: "S'inscrire",
  LABEL_CREATE_SERIES: 'Créer une série',
  LABEL_MY_PROFILE: 'Mon profil',
};

export default home;
