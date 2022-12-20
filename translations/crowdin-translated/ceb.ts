import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
const home = { ...topNav,
  ...common,
  ...authModal,
  LABEL_ABOUT_US_HEADER_5: 'ABOUT US',
  LABEL_ABOUT_US_BODY_5_1: "Bisag Unsa.",
  LABEL_ABOUT_US_BODY_5_2: 'We also believe great comics can come from anywhere.',
  LABEL_ABOUT_US_BODY_5_3: 'We are a group of comic fans determined to build tools',
  LABEL_ABOUT_US_BODY_5_4: 'to help comic creators connect their stories to as many people as possible.',
  LABEL_ABOUT_US_HEADER_6: "WHAT'S YOUR STORY?",
  LABEL_SIGN_UP: 'Sign up',
  LABEL_CREATE_SERIES: 'Create series',
  LABEL_MY_PROFILE: 'My profile'
};
export default home;