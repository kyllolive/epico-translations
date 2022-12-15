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
  HOME_BANNER_HEADER: `I-publish ang iyong mga komiks sa iba't ibang mga wika!`,
  HOME_BANNER_CONTENT: `Hindi mahanap ang iyong wika? Magpadala sa amin ng isang mensahe!`,
  HOME_BANNER_HEADER_DISCORD: 'Sumali Sa Aming Komunidad',
  HOME_BANNER_CONTENT_DISCORD:
    'Para sa mga komento, katanungan at mungkahi. Sumali sa aming discord server',
  LABEL_GET_STARTED: 'Simulan na',
  LABEL_VISIT: 'Bisita',
  COLLAB_WEBKOM_1: 'Bahay ng of Philippine',
  COLLAB_WEBKOM_2: 'WebKomiks',
  COLLAB_EPICO_1: 'Platform ng Pagsasalin ng ',
  COLLAB_EPICO_2: 'Comic na CrowdSource',
  COLLAB_CONTENT: 'NAGTULONGAN SA PAGDALA NG PHILPPINE KOMIKS SA MUNDO',
};

export default home;
