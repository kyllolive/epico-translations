import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
const account = { ...topNav,
  ...common,
  ...authModal,
  LABEL_SIGN_IN: 'ログイン',
  LABEL_SIGN_OUT: 'サインアウト',
  LABEL_SETTINGS: '設定'
};
export default account;