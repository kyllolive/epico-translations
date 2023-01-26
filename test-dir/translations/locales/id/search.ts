import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import genres from './commons/genres';

const search = {
  ...topNav,
  ...common,
  ...authModal,
  ...genres,
  LABEL_SEARCH_PLACEHOLDER: 'Search for series and creators',
  LABEL_MORE_FETCHING_CONTENTS: 'Fetching more contents...',
  LABEL_MORE_SEARCHING_CONTENTS: 'Searching for contents...',
};

export default search;
