import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import genres from './commons/genres';

const search = {
  ...topNav,
  ...common,
  ...authModal,
  ...genres,
  LABEL_SEARCH_PLACEHOLDER: 'Maghanap ng mga serye at tagalikha',
  LABEL_MORE_FETCHING_CONTENTS: 'Kinukuha ang higit pang nilalaman...',
  LABEL_MORE_SEARCHING_CONTENTS: 'Naghahanap ng mga nilalaman...',
};

export default search;
