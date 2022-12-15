import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const account = {
  ...topNav,
  ...common,
  ...authModal,
  LABEL_SIGN_IN: 'Mag-sign in',
  LABEL_SIGN_OUT: 'Mag-sign out',
  LABEL_SETTINGS: 'Mga setting',
};

export default account;
