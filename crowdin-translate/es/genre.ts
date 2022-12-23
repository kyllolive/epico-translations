import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const genre = {
  ...genres,
  ...topNav,
  ...common,
  ...authModal,
  LABEL_LOADING_SERIES: 'Loading series...',
  LABEL_FETCHING_MORE_SERIES: 'Fetching more series...',
};

export default genre;
