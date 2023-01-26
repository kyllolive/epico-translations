import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const genre = {
  ...genres,
  ...topNav,
  ...common,
  ...authModal,
  LABEL_LOADING_SERIES: 'Memuat seri...',
  LABEL_FETCHING_MORE_SERIES: 'Mengambil lebih banyak seri...',
};

export default genre;
