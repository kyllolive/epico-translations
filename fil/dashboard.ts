import topNav from './commons/topNav';
import common from './commons/common';
import consoleSeriesList from './consoleSeriesList';

const dashboard = {
  ...topNav,
  ...common,
  ...consoleSeriesList,
  LABEL_HOME: 'Bahay',
  LABEL_LIVE: 'Ang iyong Account ay Live sa',
  LABEL_NOTIFICATIONS: 'Mga abiso',
  LABEL_FOLLOWERS: 'Mga tagasunod',
  LABEL_SERIES_FOLLOWED: 'Sinundan ng Serye',
  LABEL_PAYMENT_HISTORY: 'Kasaysayan ng pagbabayad',
  LABEL_PAYMENT_METHOD: 'Paraan ng Pagbayad',
  LABEL_EDIT_PROFILE: 'Ibahin ang profile',
  LABEL_MANAGE_SERIES: 'Pamahalaan ang Serye',
  LABEL_CHANGE_USERNAME: 'Baguhin ang Username',
  LABEL_CHANGE_PASSWORD: 'Palitan ANG password',
  LABEL_DELETE_ACCOUNT: 'Tanggalin ang Aking Account',
  LABEL_LANGUAGES: 'Mga wika',
  LABEL_EMPTY: 'Wala pa dito...',
  LABEL_DONATED: 'Nag-donate',
  LABEL_RECENT_DONATIONS: 'Kamakailang mga Donasyon',
  LABEL_SUGGESTIONS: 'Mga mungkahi',
  LABEL_DASHBOARD: 'Dashboard',
  LABEL_COVER_PAGE: 'Magdagdag ng Cover Page',
  LABEL_COVER_PAGE_DESCRIPTION: `Mga pahinang may larawan sa pabalat
  magmukhang mas personal!`,
  LABEL_UPLOAD_IMAGE: 'Mag-upload ng larawan',
  LABEL_UPLOAD_SERIES: 'Mag-upload ng serye',
  LABEL_UPLOAD_SERIES_DESCRIPTION:
    'Magdagdag ng ilang kamakailang gawa sa iyong gallery',
  LABEL_CONNECT_PAYMENT_METHOD: 'Ikonekta ang Paraan ng Pagbabayad',
  LABEL_PAYMENT_METHOD_DESCRIPTION: 'Ikonekta ang iyong PayPal Account',
  LABEL_SETUP_PAYMENT_BUTTON: 'I-setup ang Pagbabayad',
  LABEL_ABOUT_ME: 'Tungkol sa Akin',
  LABEL_ABOUT_ME_DESCRIPTION: 'Ipaalam sa lahat kung tungkol saan ka.',
  LABEL_ABOUT_ME_BUTTON: 'Setup Tungkol sa Akin',
  LABEL_MY_SUPPORT: 'Aking Suporta',
};

export default dashboard;
