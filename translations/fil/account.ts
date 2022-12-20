import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const account = {
  ...topNav,
  ...common,
  ...authModal,
  LABEL_SIGN_IN: 'Pumasok',
  LABEL_SIGN_OUT: 'Lumabas',
  LABEL_SETTINGS: 'Mga setting',
};

export default account;
