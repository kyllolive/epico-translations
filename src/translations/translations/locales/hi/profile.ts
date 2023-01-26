import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import donationBox from './commons/donationBox';

const profile = {
  ...donationBox,
  ...genres,
  ...topNav,
  ...common,
  ...authModal,
  NEW_COVER_ERROR_LABEL: 'उफ़! हम आपका नया कवर सहेजने में असमर्थ रहे',
  LABEL_SAVE: 'बचाना',
  LABEL_CANCEL: 'रद्द करना',
  LABEL_SUCCESS_UPDATE_PROFILE: 'हम आपकी प्रोफ़ाइल को अपडेट करने में सफल रहे',
  LABEL_UNABLE_SAVE_CHANGES: 'उह ओह! हम आपके परिवर्तन सहेजने में असमर्थ रहे',
  LABEL_ADD_ANOTHER: 'एक और जोड़ें',
  LABEL_EDIT_PROFILE: 'प्रोफ़ाइल संपादित करें',
  LABEL_JOINED_DATE: 'शामिल होने की तारीख',
  LABEL_UPDATE_PROFILE_INFORMATION: 'त्वरित अद्यतन प्रोफ़ाइल जानकारी',
  LABEL_CHANGE_PROFILE_PICTURE: 'प्रोफ़ाइल चित्र बदलें',
  LABEL_ERROR_NEW_PROFILE: 'उफ़! हम आपकी नई प्रोफ़ाइल को सहेजने में असमर्थ रहे',
  LABEL_ERROR_NEW_COVER: 'उफ़! हम आपका नया कवर सहेजने में असमर्थ रहे',
  LABEL_ERROR_UPLOAD_COVER: 'उफ़! हम आपका कवर अपलोड करने में असमर्थ रहे',
};

export default profile;
