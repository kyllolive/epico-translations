import topNav from './commons/topNav';
import common from './commons/common';
import consoleSeriesList from './consoleSeriesList';

const dashboard = {
  ...topNav,
  ...common,
  ...consoleSeriesList,
  LABEL_HOME: 'घर',
  LABEL_LIVE: 'आपका खाता यहां लाइव है',
  LABEL_NOTIFICATIONS: 'सूचनाएं',
  LABEL_FOLLOWERS: 'समर्थक',
  LABEL_SERIES_FOLLOWED: 'श्रृंखला का अनुसरण किया गया',
  LABEL_PAYMENT_HISTORY: 'भुगतान इतिहास',
  LABEL_PAYMENT_METHOD: 'भुगतान का तरीका',
  LABEL_EDIT_PROFILE: 'प्रोफ़ाइल संपादित करें',
  LABEL_MANAGE_SERIES: 'श्रृंखला प्रबंधित करें',
  LABEL_CHANGE_USERNAME: 'उपयोगकर्ता नाम परिवर्तन करें',
  LABEL_CHANGE_PASSWORD: 'पासवर्ड बदलें',
  LABEL_DELETE_ACCOUNT: 'मेरा एकाउंट हटा दो',
  LABEL_LANGUAGES: 'बोली',
  LABEL_EMPTY: 'यहां अभी कुछ नहीं...',
  LABEL_DONATED: 'दान',
  LABEL_RECENT_DONATIONS: 'हाल के दान',
  LABEL_SUGGESTIONS: 'सुझाव',
  LABEL_DASHBOARD: 'डैशबोर्ड',
  LABEL_COVER_PAGE: 'एक कवर पेज जोड़ें',
  LABEL_COVER_PAGE_DESCRIPTION: `कवर इमेज वाले पेज
  अधिक व्यक्तिगत देखो!`,
  LABEL_UPLOAD_IMAGE: 'एक छवि अपलोड करें',
  LABEL_UPLOAD_SERIES: 'एक श्रृंखला अपलोड करें',
  LABEL_UPLOAD_SERIES_DESCRIPTION: 'अपनी गैलरी में कुछ हालिया काम जोड़ें',
  LABEL_CONNECT_PAYMENT_METHOD: 'भुगतान विधि कनेक्ट करें',
  LABEL_PAYMENT_METHOD_DESCRIPTION: 'अपना पेपैल खाता कनेक्ट करें',
  LABEL_SETUP_PAYMENT_BUTTON: 'सेटअप भुगतान',
  LABEL_ABOUT_ME: 'मेरे बारे में',
  LABEL_ABOUT_ME_DESCRIPTION: 'सभी को बताएं कि आप किस बारे में हैं।',
  LABEL_ABOUT_ME_BUTTON: 'मेरे बारे में सेटअप',
  LABEL_MY_SUPPORT: 'मेरा सहारा',
};

export default dashboard;
