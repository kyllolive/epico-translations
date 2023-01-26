import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
const genre = { ...genres,
  ...topNav,
  ...common,
  ...authModal,
  LABEL_LOADING_SERIES: 'Chargement de la série...',
  LABEL_FETCHING_MORE_SERIES: 'Récupérer plus de séries...'
};
export default genre;