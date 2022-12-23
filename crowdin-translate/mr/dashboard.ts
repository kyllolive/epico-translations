import topNav from './commons/topNav';
import common from './commons/common';
import consoleSeriesList from './consoleSeriesList';

const dashboard = {
  ...topNav,
  ...common,
  ...consoleSeriesList,
  LABEL_HOME: 'मुख्यपृष्ठ',
  LABEL_LIVE: 'तुमचे खाते येथे थेट आहे',
  LABEL_NOTIFICATIONS: 'अधिसूचना',
  LABEL_FOLLOWERS: 'अनुयायी',
  LABEL_SERIES_FOLLOWED: 'मालिका फॉलो केली',
  LABEL_PAYMENT_HISTORY: 'पेमेंट इतिहास',
  LABEL_PAYMENT_METHOD: 'पेमेंट पद्धत',
  LABEL_EDIT_PROFILE: 'प्रोफाईल संपादित करा',
  LABEL_MANAGE_SERIES: 'मालिका व्यवस्थापित करा',
  LABEL_CHANGE_USERNAME: 'वापरकर्तानाव बदला',
  LABEL_CHANGE_PASSWORD: 'पासवर्ड बदला',
  LABEL_DELETE_ACCOUNT: 'माझे खाते हटवा',
  LABEL_LANGUAGES: 'भाषा',
  LABEL_EMPTY: 'इथे अजून काहीही नाही...',
  LABEL_DONATED: 'दान केले',
  LABEL_RECENT_DONATIONS: 'अलीकडील देणग्या',
  LABEL_SUGGESTIONS: 'सूचना',
  LABEL_DASHBOARD: 'डॅशबोर्ड',
  LABEL_COVER_PAGE: 'एक कव्हर पृष्ठ जोडा',
  LABEL_COVER_PAGE_DESCRIPTION: `कव्हर इमेज असलेली पेज
  अधिक वैयक्तिक पहा!`,
  LABEL_UPLOAD_IMAGE: 'एक प्रतिमा अपलोड करा',
  LABEL_UPLOAD_SERIES: 'मालिका अपलोड करा',
  LABEL_UPLOAD_SERIES_DESCRIPTION: 'तुमच्या गॅलरीत काही अलीकडील काम जोडा',
  LABEL_CONNECT_PAYMENT_METHOD: 'पेमेंट पद्धत कनेक्ट करा',
  LABEL_PAYMENT_METHOD_DESCRIPTION: 'तुमचे PayPal खाते कनेक्ट करा',
  LABEL_SETUP_PAYMENT_BUTTON: 'पेमेंट सेट करा',
  LABEL_ABOUT_ME: 'माझ्याबद्दल',
  LABEL_ABOUT_ME_DESCRIPTION: 'तुम्ही कशाबद्दल आहात हे सर्वांना कळू द्या.',
  LABEL_ABOUT_ME_BUTTON: 'माझ्याबद्दल सेटअप करा',
  LABEL_MY_SUPPORT: 'माझा सपोर्ट',
};

export default dashboard;
