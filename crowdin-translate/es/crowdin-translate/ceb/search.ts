import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import genres from './commons/genres';
const search = { ...topNav,
  ...common,
  ...authModal,
  ...genres,
  LABEL_SEARCH_PLACEHOLDER: 'Pagpangita alang sa mga serye ug mga tiglalang',
  LABEL_MORE_FETCHING_CONTENTS: 'Nagkuha ug dugang mga sulod...',
  LABEL_MORE_SEARCHING_CONTENTS: 'Nangita sa sulod...'
};
export default search;