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
  LATEST: 'Pinakabag-o',
  HOME_BANNER_HEADER:
    'Igmantala ang imong mga komiks sa lainlaing mga sinultian!',
  HOME_BANNER_CONTENT: `
  Dili makita ang imong sinultian? Magpadala ug usa ka mensahe!`,
  HOME_BANNER_HEADER_DISCORD: 'Pag-apil sa among komunidad',
  HOME_BANNER_CONTENT_DISCORD:
    'Alang sa mga komentaryo, pangutana ug sugyot. Pag-apil sa among discord server',
  LABEL_GET_STARTED: 'Sugod na',
  LABEL_VISIT: 'Bisita',
  COLLAB_WEBKOM_1: 'Balay sa Philippine',
  COLLAB_WEBKOM_2: 'WebKomiks',
  COLLAB_EPICO_1: 'CrowdSource Platform para',
  COLLAB_EPICO_2: 'sa Paghubad ug Komiks',
  COLLAB_CONTENT: 'Nagtabangay para ma dala ang Pinoy Komiks sa kalibutan',
};

export default home;
