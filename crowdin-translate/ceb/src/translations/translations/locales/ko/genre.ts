import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
const genre = { ...genres,
  ...topNav,
  ...common,
  ...authModal,
  LABEL_LOADING_SERIES: '시리즈 로드 중...',
  LABEL_FETCHING_MORE_SERIES: '더 많은 시리즈를 가져오는 중...'
};
export default genre;