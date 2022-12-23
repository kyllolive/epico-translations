import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const account = {
  ...topNav,
  ...common,
  ...authModal,
  LABEL_SIGN_IN: '登入',
  LABEL_SIGN_OUT: '登出',
  LABEL_SETTINGS: '设置',
};

export default account;
