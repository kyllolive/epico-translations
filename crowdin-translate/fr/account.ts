import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
const account = { ...topNav,
  ...common,
  ...authModal,
  LABEL_SIGN_IN: 'Sign in',
  LABEL_SIGN_OUT: 'Sign out',
  LABEL_SETTINGS: 'Settings'
};
export default account;