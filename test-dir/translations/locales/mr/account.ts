import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const account = {
  ...topNav,
  ...common,
  ...authModal,
  LABEL_SIGN_IN: 'साइन इन करा',
  LABEL_SIGN_OUT: 'साइन आउट करा',
  LABEL_SETTINGS: 'सेटिंग्ज',
};

export default account;
