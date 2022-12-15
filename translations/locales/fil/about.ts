import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const home = {
  ...topNav,
  ...common,
  ...authModal,
  LABEL_ABOUT_US_HEADER_5: 'TUNGKOL SA ATIN',
  LABEL_ABOUT_US_BODY_5_1:
    'Sa pamamagitan man ng teksto o mga ilustrasyon, naniniwala kaming lahat ay may kwentong ibabahagi.',
  LABEL_ABOUT_US_BODY_5_2:
    'Naniniwala din kami na ang mga mahuhusay na komiks ay maaaring magmula sa kahit saan.',
  LABEL_ABOUT_US_BODY_5_3:
    'Kami ay isang pangkat ng mga tagahanga ng komiks na determinadong bumuo ng mga tool',
  LABEL_ABOUT_US_BODY_5_4:
    "upang matulungan ang mga tagalikha ng komiks na ikonekta ang kanilang mga kuwento sa pinakamaraming tao hangga't maaari.",
  LABEL_ABOUT_US_HEADER_6: 'ANO ANG KWENTO MO?',
  LABEL_SIGN_UP: 'Mag-sign up',
  LABEL_CREATE_SERIES: 'Gumawa ng serye',
  LABEL_MY_PROFILE: 'Aking profile',
};

export default home;
