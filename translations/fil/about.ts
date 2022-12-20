import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const home = {
  ...topNav,
  ...common,
  ...authModal,
  LABEL_ABOUT_US_HEADER_5: 'TUNGKOL SA AMIN',
  LABEL_ABOUT_US_BODY_5_1:
    'Maging sa pamamagitan ng teksto o mga guhit, naniniwala kaming lahat ay may kwentong ibabahagi.',
  LABEL_ABOUT_US_BODY_5_2:
    'Naniniwala rin kami na ang mga dakilang komiks ay maaaring magmula kahit saan.',
  LABEL_ABOUT_US_BODY_5_3:
    'Kami ay isang pangkat ng mga tagahanga ng komiks na tinutukoy na bumuo ng mga tool',
  LABEL_ABOUT_US_BODY_5_4: `upang matulungan ang mga tagalikha ng komiks na ikonekta ang kanilang mga kwento sa maraming tao hangga't maaari.`,
  LABEL_ABOUT_US_HEADER_6: 'ANO ANG KWENTO MO?',
  LABEL_SIGN_UP: 'Mag-sign up',
  LABEL_CREATE_SERIES: 'Lumikha ng serye',
};

export default home;
