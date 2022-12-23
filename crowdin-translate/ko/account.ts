import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const account = {
  ...topNav,
  ...common,
  ...authModal,
  LABEL_SIGN_IN: '로그인',
  LABEL_SIGN_OUT: '로그아웃',
  LABEL_SETTINGS: '설정',
};

export default account;
