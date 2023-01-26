import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import genres from './commons/genres';
const search = { ...topNav,
  ...common,
  ...authModal,
  ...genres,
  LABEL_SEARCH_PLACEHOLDER: '시리즈 및 제작자 검색',
  LABEL_MORE_FETCHING_CONTENTS: '더 많은 콘텐츠를 가져오는 중...',
  LABEL_MORE_SEARCHING_CONTENTS: '콘텐츠 검색 중...'
};
export default search;