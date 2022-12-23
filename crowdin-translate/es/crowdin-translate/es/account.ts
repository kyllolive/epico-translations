import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
const account = { ...topNav,
  ...common,
  ...authModal,
  LABEL_SIGN_IN: 'Iniciar sesión',
  LABEL_SIGN_OUT: 'desconectar',
  LABEL_SETTINGS: 'Ajustes'
};
export default account;