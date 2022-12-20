import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
const support = { ...topNav,
  ...common,
  ...authModal,
  LABEL_CONNECT_HEADER: 'Connect a Payment Method',
  LABEL_CONNECT_DESCRIPTION: 'Ask your fans and followers to support you, receive messages of encouragement and keep doing what you love!',
  LABEL_CONNECT_WARNING: `Donations go directly to your PayPal account. We just get a notification that the transaction was successful so we can update the creator's page, but we do not take a fee from donations`,
  LABEL_CONNECT_PAYPAL_HEADER: 'Connecting your PayPal Account',
  LABEL_CONNECT_PAYPAL_1: 'On your settings page, click on payment method',
  LABEL_CONNECT_PAYPAL_2: 'Click enable to begin the onboarding process.',
  LABEL_CONNECT_PAYPAL_3: 'Complete the onboarding process to start receiving donations. Check for any email PayPal may have sent to fully complete onboarding.',
  LABEL_SETUP_HEADER: 'Setup your Donation Settings',
  LABEL_SETUP_DESCRIPTION_1: 'Choose the donation currency of your choice and your minimum donation amount.',
  LABEL_SETUP_DESCRIPTION_2: 'Set-up your auto thank-you message for your supporters once a donation is received.'
};
export default support;