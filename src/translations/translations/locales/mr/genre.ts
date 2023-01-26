import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const genre = {
  ...genres,
  ...topNav,
  ...common,
  ...authModal,
  LABEL_LOADING_SERIES: 'मालिका लोड करत आहे...',
  LABEL_FETCHING_MORE_SERIES: 'आणखी मालिका आणत आहे...',
};

export default genre;
