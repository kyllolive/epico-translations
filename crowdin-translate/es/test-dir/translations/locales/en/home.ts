import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import landingPage from './commons/landingPage';
const home = { ...genres,
  ...topNav,
  ...common,
  ...authModal,
  ...landingPage,
  LATEST: 'Latest',
  HOME_BANNER_HEADER: 'Publish your comics in different languages!',
  HOME_BANNER_CONTENT: `Couldn't find your language? Send us a message!`,
  HOME_BANNER_HEADER_DISCORD: 'Join our community',
  HOME_BANNER_CONTENT_DISCORD: 'For comments, questions and suggestions. Join our discord server',
  LABEL_GET_STARTED: 'Get Started',
  LABEL_VISIT: 'Visit',
  COLLAB_WEBKOM_1: 'Home of Philippine',
  COLLAB_WEBKOM_2: 'WebKomiks',
  COLLAB_EPICO_1: 'CrowdSource Comic',
  COLLAB_EPICO_2: 'Translation Platform',
  COLLAB_CONTENT: 'COLLABORATING IN BRINGING PHILPPINE KOMIKS TO THE WORLD',
  LABEL_CONNECT_HEADER: 'Connect a Payment Method',
  LABEL_CONNECT_DESCRIPTION: 'Ask your fans and followers to support you, receive messages of encouragement and keep doing what you love!',
  LABEL_CONNECT_WARNING: `Donations go directly to your PayPal account. We just get a notification that the transaction was successful so we can update the creator's page, `,
  LABEL_CONNECT_PAYPAL_HEADER: 'Connecting your PayPal Account',
  LABEL_CONNECT_PAYPAL_1: 'On your settings page, click on payment method',
  LABEL_CONNECT_PAYPAL_2: 'Click enable to begin the onboarding process.',
  LABEL_CONNECT_PAYPAL_3: 'Complete the onboarding process to start receiving donations. Check for any email PayPal may have sent to fully complete onboarding.',
  LABEL_SETUP_HEADER: 'Setup your Donation Settings',
  LABEL_SETUP_DESCRIPTION_1: 'Choose the donation currency of your choice and your minimum donation amount.',
  LABEL_SETUP_DESCRIPTION_2: 'Set-up your auto thank-you message for your supporters once a donation is received.',
  LABEL_WARNING_1: 'we do not take a fee from donations.',
  LABEL_PAYMENT_HEADER_1: 'Start Accepting Payments!',
  LABEL_PAYMENT_DESCRIPTION: 'Enabling your Payment Methods now in your Settings page to start accepting payments from your fans.',
  LABEL_HEADER_HOW_ACCEPT: 'How to accept Payments?',
  LABEL_HEADER_ACTION_1: 'Accept Donations with 0% Platform Fees!',
  LABEL_HEADER_ACTION_2: 'Start accepting donations in just 60 seconds.',
  LABEL_HEADER_ACTION_3: 'Grow your income by onboarding your PayPal',
  LABEL_HEADER_SLIDER_1: 'Accept Donations!',
  LABEL_HEADER_SLIDER_2: 'Epico takes 0% Platform fees, complete the onboarding process to start earning.'
};
export default home;