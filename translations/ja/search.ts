import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import genres from './commons/genres';

const search = {
  ...topNav,
  ...common,
  ...authModal,
  ...genres,
  LABEL_SEARCH_PLACEHOLDER: 'シリーズとクリエイターを検索する',
  LABEL_MORE_FETCHING_CONTENTS: '他のコンテンツを取得しています...',
  LABEL_MORE_SEARCHING_CONTENTS: 'コンテンツを検索しています...',
  
};

export default search;
