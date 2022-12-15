import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import genres from './commons/genres';

const search = {
  ...topNav,
  ...common,
  ...authModal,
  ...genres,
  LABEL_SEARCH_PLACEHOLDER: 'Pagpangita alang sa mga serye ug magbubuhat',
  LABEL_MORE_FETCHING_CONTENTS: 'Pagkuha dugang nga mga sulud ...',
  LABEL_MORE_SEARCHING_CONTENTS: 'Pagpangita ug mga sulod',
};

export default search;
