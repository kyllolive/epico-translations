import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import genres from './commons/genres';

const search = {
  ...topNav,
  ...common,
  ...authModal,
  ...genres,
  LABEL_SEARCH_PLACEHOLDER: 'Rechercher des séries et des créateurs',
  LABEL_MORE_FETCHING_CONTENTS: 'Récupération de plus de contenu...',
  LABEL_MORE_SEARCHING_CONTENTS: 'Recherche de contenu...',
};

export default search;
