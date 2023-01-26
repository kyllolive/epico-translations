import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
const account = { ...topNav,
  ...common,
  ...authModal,
  LABEL_SIGN_IN: 'साइन इन करें',
  LABEL_SIGN_OUT: 'साइन आउट',
  LABEL_SETTINGS: 'समायोजन'
};
export default account;