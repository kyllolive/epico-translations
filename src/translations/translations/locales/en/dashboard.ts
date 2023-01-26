import topNav from './commons/topNav';
import common from './commons/common';
import consoleSeriesList from './consoleSeriesList';

const dashboard = {
  ...topNav,
  ...common,
  ...consoleSeriesList,
  LABEL_HOME: 'Home',
  LABEL_LIVE: 'Your Account is Live at',
  LABEL_NOTIFICATIONS: 'Notifications',
  LABEL_FOLLOWERS: 'Followers',
  LABEL_SERIES_FOLLOWED: 'Series Followed',
  LABEL_PAYMENT_HISTORY: 'Payment History',
  LABEL_PAYMENT_METHOD: 'Payment Method',
  LABEL_EDIT_PROFILE: 'Edit Profile',
  LABEL_MANAGE_SERIES: 'My Series',
  LABEL_CHANGE_USERNAME: 'Change Username',
  LABEL_CHANGE_PASSWORD: 'Change Password',
  LABEL_DELETE_ACCOUNT: 'Delete My Account',
  LABEL_LANGUAGES: 'Languages',
  LABEL_EMPTY: 'Nothing here just yet...',
  LABEL_DONATED: 'Donated',
  LABEL_RECENT_DONATIONS: 'Recent Donations',
  LABEL_SUGGESTIONS: 'Suggestions',
  LABEL_DASHBOARD: 'Dashboard',
  LABEL_COVER_PAGE: 'Add a Cover Page',
  LABEL_COVER_PAGE_DESCRIPTION: `Pages with a cover image 
  look more personal!`,
  LABEL_UPLOAD_IMAGE: 'Upload an image',
  LABEL_UPLOAD_SERIES: 'Upload a series',
  LABEL_UPLOAD_SERIES_DESCRIPTION: 'Add some recent work to your gallery',
  LABEL_CONNECT_PAYMENT_METHOD: 'Connect Payment Method',
  LABEL_PAYMENT_METHOD_DESCRIPTION: 'Connect your PayPal Account',
  LABEL_SETUP_PAYMENT_BUTTON: 'Setup Payment',
  LABEL_ABOUT_ME: 'About Me',
  LABEL_ABOUT_ME_DESCRIPTION: 'Let everyone know what you`re about.',
  LABEL_ABOUT_ME_BUTTON: 'Setup About Me',
  LABEL_MY_SUPPORT: 'My Support',
  LABEL_MANAGE_SHARED: 'Shared Series',
};

export default dashboard;
