import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import landingPage from './commons/landingPage';
const home = { ...genres,
  ...topNav,
  ...common,
  ...authModal,
  ...landingPage,
  LATEST: 'Pinakabag-o',
  HOME_BANNER_HEADER: 'Imantala ang imong mga komiks sa lain-laing mga pinulongan!',
  HOME_BANNER_CONTENT: `Dili makit-an ang imong pinulongan? Padalhi kami ug mensahe!`,
  HOME_BANNER_HEADER_DISCORD: 'Apil sa among komunidad',
  HOME_BANNER_CONTENT_DISCORD: 'Para sa mga komento, pangutana ug sugyot. Apil sa among discord server',
  LABEL_GET_STARTED: 'Pagsugod',
  LABEL_VISIT: 'Bisita',
  COLLAB_WEBKOM_1: 'Panimalay sa Pilipinas',
  COLLAB_WEBKOM_2: 'WebKomiks',
  COLLAB_EPICO_1: 'CrowdSource Comic',
  COLLAB_EPICO_2: 'Plataporma sa Paghubad',
  COLLAB_CONTENT: 'NAGTINABANGAY SA PAGDALA SA PHILPPINE KOMIKS SA KALIBUTAN'
};
export default home;