import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import landingPage from './commons/landingPage';

const home = {
  ...genres,
  ...topNav,
  ...common,
  ...authModal,
  ...landingPage,
  LATEST: 'Pinakabago',
  HOME_BANNER_HEADER: "I-publish ang iyong mga komiks sa iba't ibang wika!",
  HOME_BANNER_CONTENT: `Hindi mahanap ang iyong wika? Padalhan kami ng mensahe!`,
  HOME_BANNER_HEADER_DISCORD: 'Sumali Sa Aming Komunidad',
  HOME_BANNER_CONTENT_DISCORD:
    'Para sa mga komento, tanong at mungkahi. Sumali sa aming discord server',
  LABEL_GET_STARTED: 'Magsimula',
  LABEL_VISIT: 'Bisitahin',
  COLLAB_WEBKOM_1: 'Tahanan ng Pilipinas',
  COLLAB_WEBKOM_2: 'WebKomiks',
  COLLAB_EPICO_1: 'CrowdSource Comic',
  COLLAB_EPICO_2: 'Platform ng Pagsasalin',
  COLLAB_CONTENT: 'MAGTULONG SA PAGDALA NG PHILPPINE KOMIKS SA MUNDO',
};

export default home;
