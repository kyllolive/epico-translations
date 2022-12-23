import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import donationBox from './commons/donationBox';
const profile = { ...donationBox,
  ...genres,
  ...topNav,
  ...common,
  ...authModal,
  NEW_COVER_ERROR_LABEL: 'अरेरे! आम्ही तुमचे नवीन कव्हर सेव्ह करू शकलो नाही',
  LABEL_SAVE: 'जतन करा',
  LABEL_CANCEL: 'रद्द करा',
  LABEL_SUCCESS_UPDATE_PROFILE: 'आम्ही तुमचे प्रोफाइल अपडेट करण्यात यशस्वी झालो',
  LABEL_UNABLE_SAVE_CHANGES: 'अरेरे! आम्ही तुमचे बदल जतन करण्यात अक्षम होतो',
  LABEL_ADD_ANOTHER: 'आणखी एक जोडा',
  LABEL_EDIT_PROFILE: 'प्रोफाईल संपादित करा',
  LABEL_JOINED_DATE: 'सामील होण्याची तारीख',
  LABEL_UPDATE_PROFILE_INFORMATION: 'त्वरित अपडेट प्रोफाइल माहिती',
  LABEL_CHANGE_PROFILE_PICTURE: 'प्रोफाइल चित्र बदला',
  LABEL_ERROR_NEW_PROFILE: 'अरेरे! आम्ही तुमचे नवीन प्रोफाइल जतन करण्यात अक्षम होतो',
  LABEL_ERROR_NEW_COVER: 'अरेरे! आम्ही तुमचे नवीन कव्हर सेव्ह करू शकलो नाही',
  LABEL_ERROR_UPLOAD_COVER: 'अरेरे! आम्ही तुमचे कव्हर अपलोड करू शकलो नाही'
};
export default profile;