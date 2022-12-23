import topNav from './commons/topNav';
import common from './commons/common';
import consoleSeriesList from './consoleSeriesList';
const dashboard = { ...topNav,
  ...common,
  ...consoleSeriesList,
  LABEL_HOME: 'Balay',
  LABEL_LIVE: 'Ang imong Account kay Live sa',
  LABEL_NOTIFICATIONS: 'Mga pahibalo',
  LABEL_FOLLOWERS: 'Mga sumusunod',
  LABEL_SERIES_FOLLOWED: 'Gisunod ang Serye',
  LABEL_PAYMENT_HISTORY: 'Kasaysayan sa Pagbayad',
  LABEL_PAYMENT_METHOD: 'Paagi sa pagbayad',
  LABEL_EDIT_PROFILE: 'Usba ang Profile',
  LABEL_MANAGE_SERIES: 'Pagdumala sa Serye',
  LABEL_CHANGE_USERNAME: 'Usba ang Username',
  LABEL_CHANGE_PASSWORD: 'Usba ang Password',
  LABEL_DELETE_ACCOUNT: 'Pagtangtang sa Akong Account',
  LABEL_LANGUAGES: 'Mga pinulongan',
  LABEL_EMPTY: 'Wala pa dinhi...',
  LABEL_DONATED: 'Gidonar',
  LABEL_RECENT_DONATIONS: 'Bag-ong mga Donasyon',
  LABEL_SUGGESTIONS: 'Mga sugyot',
  LABEL_DASHBOARD: 'Dashboard',
  LABEL_COVER_PAGE: 'Pagdugang og Cover Page',
  LABEL_COVER_PAGE_DESCRIPTION: `Mga panid nga adunay hulagway sa hapin
  tan-awon nga mas personal!`,
  LABEL_UPLOAD_IMAGE: 'Pag-upload og hulagway',
  LABEL_UPLOAD_SERIES: 'Pag-upload ug serye',
  LABEL_UPLOAD_SERIES_DESCRIPTION: 'Pagdugang pipila ka bag-o nga trabaho sa imong gallery',
  LABEL_CONNECT_PAYMENT_METHOD: 'Ikonektar ang Pamaagi sa Pagbayad',
  LABEL_PAYMENT_METHOD_DESCRIPTION: 'Ikonektar ang imong PayPal Account',
  LABEL_SETUP_PAYMENT_BUTTON: 'Pag-setup sa Bayad',
  LABEL_ABOUT_ME: 'Mahitungod Kanako',
  LABEL_ABOUT_ME_DESCRIPTION: 'Ipahibalo sa tanan kung unsa ang imong bahin.',
  LABEL_ABOUT_ME_BUTTON: 'Setup Mahitungod Kanako',
  LABEL_MY_SUPPORT: 'Akong Suporta'
};
export default dashboard;