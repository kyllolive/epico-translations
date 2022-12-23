import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
const genre = { ...genres,
  ...topNav,
  ...common,
  ...authModal,
  LABEL_LOADING_SERIES: '加载系列...',
  LABEL_FETCHING_MORE_SERIES: '获取更多系列...'
};
export default genre;