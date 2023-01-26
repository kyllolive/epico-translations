import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const genre = {
  ...genres,
  ...topNav,
  ...common,
  ...authModal,
  LABEL_LOADING_SERIES: 'シリーズを読み込んでいます...',
  LABEL_FETCHING_MORE_SERIES: 'さらにシリーズを取得しています...',
};

export default genre;
