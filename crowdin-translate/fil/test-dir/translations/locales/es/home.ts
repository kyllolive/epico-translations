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
  LATEST: 'Más reciente',
  HOME_BANNER_HEADER: '¡Publica tus cómics en diferentes idiomas!',
  HOME_BANNER_CONTENT: `¿No pudo encontrar su idioma? ¡Mandanos un mensaje!`,
  HOME_BANNER_HEADER_DISCORD: 'Únete a nuestra comunidad',
  HOME_BANNER_CONTENT_DISCORD: 'Para comentarios, preguntas y sugerencias. Únete a nuestro servidor de discordia',
  LABEL_GET_STARTED: 'Empezar',
  LABEL_VISIT: 'Visitar',
  COLLAB_WEBKOM_1: 'Hogar de Filipinas',
  COLLAB_WEBKOM_2: 'WebKomiks',
  COLLAB_EPICO_1: 'CrowdSource Comic',
  COLLAB_EPICO_2: 'Translation Platform',
  COLLAB_CONTENT: 'COLLABORATING IN BRINGING PHILPPINE KOMIKS TO THE WORLD'
};
export default home;