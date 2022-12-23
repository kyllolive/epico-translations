import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import genres from './commons/genres';
const search = { ...topNav,
  ...common,
  ...authModal,
  ...genres,
  LABEL_SEARCH_PLACEHOLDER: 'मालिका आणि निर्माते शोधा',
  LABEL_MORE_FETCHING_CONTENTS: 'अधिक सामग्री आणत आहे...',
  LABEL_MORE_SEARCHING_CONTENTS: 'सामग्री शोधत आहे...'
};
export default search;