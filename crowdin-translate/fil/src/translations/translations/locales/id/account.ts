import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
const account = { ...topNav,
  ...common,
  ...authModal,
  LABEL_SIGN_IN: 'Masuk',
  LABEL_SIGN_OUT: 'Keluar',
  LABEL_SETTINGS: 'Pengaturan'
};
export default account;