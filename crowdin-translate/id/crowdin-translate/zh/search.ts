import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import genres from './commons/genres';
const search = { ...topNav,
  ...common,
  ...authModal,
  ...genres,
  LABEL_SEARCH_PLACEHOLDER: '搜索系列和创作者',
  LABEL_MORE_FETCHING_CONTENTS: '正在获取更多内容...',
  LABEL_MORE_SEARCHING_CONTENTS: '正在搜索内容...'
};
export default search;