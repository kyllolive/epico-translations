import topNav from './commons/topNav';
import common from './commons/common';
import dashboard from './dashboard';

const settings = {
  ...topNav,
  ...common,
  ...dashboard,
  LABEL_HEADER_SETTINGS: 'Settings',
  LABEL_SUB_HEADER_SECURITY: 'Security',
  LABEL_CHANGE_PASSWORD: 'Change Password',
  LABEL_CHANGE_USERNAME: 'Change Username',
  LABEL_DELETE_ACCOUNT: 'Delete My Account',
  LABEL_DELETE_ACCOUNT_BODY: `
  This is permanent. When you delete your Epico account, you won't be able to retrieve the content or information you've shared on Epico. Deleting your account will permanently remove your profile, comments, and wall posts,
  along with any series and chapter you created.`,
  LABEL_PASSWORD: 'Password',
  FORM_VALIDATION_OLD_PASSWORD_REQUIRED: 'Current password is required',
  FORM_VALIDATION_NEW_PASSWORD_REQUIRED: 'New password is required',
  FORM_VALIDATION_NEW_PASSWORD_MIN: 'Must be longer than 12 characters',
  LABEL_CHANGE_PASSWORD_SUCCESS_MSG: 'Your password was successfully updated',
  LABEL_CHANGE_PASSWORD_INCORRECT_PASSWORD_MSG: 'Incorrect password',
  LABEL_CHANGE_PASSWORD_LIMIT_EXCEEDED_MSG:
    'Limit exceeded please try again later',
  LABEL_CHANGE_PASSWORD_UNABLE_TO_PROCESS: 'Unable to process your request',
  LABEL_OLD_PASSWORD: 'Current password',
  LABEL_NEW_PASSWORD: 'New password',
  LABEL_UPDATE_PASSWORD: 'Update password',
  LABEL_NEW_USERNAME: 'New username',
  LABEL_CHANGE_USERNAME_SUCCESS_MSG: 'Your username was successfully updated',
  FORM_VALIDATION_USERNAME_MATCHES:
    'Sorry, only small letters (a-z), numbers (0-9), special characters (.-_) no space are allowed.',
  FORM_VALIDATION_USERNAME_REQUIRED: 'Username is required',
  LABEL_PAYMENT_METHOD: 'Payment Method',
  LABEL_ACCEPT_PATMENTS_HEADER: 'Accept Payments',
  LABEL_DONATION_SETTINGS_HEADER: 'Donation Settings',
  LABEL_CURRENCY_SUB_HEADER: 'Currency',
  LABEL_CURRENCY:
    'Choose the currency you want your supporters to pay. If your home currency isn’t listed, your payment provider will automatically convert it for you.',
  LABEL_MIN_DONATION_HEADER: 'Set Minimum Donation Price',
  LABEL_THANK_YOU_MESSAGE_HEADER: 'Auto Thank You Message',
  LABEL_THANK_YOU:
    'A message to be sent when someone donates. You’ll have the chance to send a personal one too.',
  LABEL_SUBMIT_PAYMENT_SETTING: 'Submit',
  FORM_VALIDATION_THANK_YOU: 'Thank you so much for your support',
  FORM_VALIDATION_UPDATE_SUCCESS: 'Successfully updated donation settings!',
  LABEL_VERIFY_PAYPAL:
    'Please verify the email sent to you by Paypal to complete onboarding and start accepting payments.',
  LABEL_PAYPAL:
    'Paypal must be connected to receive donations from other users!',
  LABEL_DISAGREE: 'Disagree',
  LABEL_AGREE: 'Agree',
  LABEL_SETTINGS_LANGUAGE: 'Settings Language',
  LABEL_PAYMENT_ENABLED: 'Enabled',
  LABEL_PAYMENT_DISABLED: 'Disabled',
  LABEL_ACCEPT_DESCRIPTION:
    'Accept credit cards and PayPal balance. Paid out to your PayPal instantly.',
};

export default settings;
