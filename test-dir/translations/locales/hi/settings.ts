import topNav from './commons/topNav';
import common from './commons/common';
import dashboard from './dashboard';

const settings = {
  ...topNav,
  ...common,
  ...dashboard,
  LABEL_HEADER_SETTINGS: 'समायोजन',
  LABEL_SUB_HEADER_SECURITY: 'सुरक्षा',
  LABEL_CHANGE_PASSWORD: 'पासवर्ड बदलें',
  LABEL_CHANGE_USERNAME: 'उपयोगकर्ता नाम परिवर्तन करें',
  LABEL_DELETE_ACCOUNT: 'मेरा एकाउंट हटा दो',
  LABEL_DELETE_ACCOUNT_BODY: `
  This is permanent. When you delete your Epico account, you won'आप सामग्री या जानकारी को पुनः प्राप्त करने में सक्षम नहीं हैं've ने एपिको पर साझा किया। आपका खाता हटाने से आपकी प्रोफ़ाइल, टिप्पणियां और वॉल पोस्ट स्थायी रूप से निकल जाएंगे,
  आपके द्वारा बनाई गई किसी भी श्रृंखला और अध्याय के साथ।`,
  LABEL_PASSWORD: 'पासवर्ड',
  FORM_VALIDATION_OLD_PASSWORD_REQUIRED: 'वर्तमान पासवर्ड आवश्यक है',
  FORM_VALIDATION_NEW_PASSWORD_REQUIRED: 'नया पासवर्ड आवश्यक है',
  FORM_VALIDATION_NEW_PASSWORD_MIN: '12 वर्णों से अधिक लंबा होना चाहिए',
  LABEL_CHANGE_PASSWORD_SUCCESS_MSG:
    'आपका पासवर्ड सफलतापूर्वक अपडेट कर दिया गया था',
  LABEL_CHANGE_PASSWORD_INCORRECT_PASSWORD_MSG: 'गलत पासवर्ड',
  LABEL_CHANGE_PASSWORD_LIMIT_EXCEEDED_MSG:
    'Limit exceeded please try again later',
  LABEL_CHANGE_PASSWORD_UNABLE_TO_PROCESS: 'Unable to process your request',
  LABEL_OLD_PASSWORD: 'Current password',
  LABEL_NEW_PASSWORD: 'New password',
  LABEL_UPDATE_PASSWORD: 'Update password',
  LABEL_NEW_USERNAME: 'New username',
  LABEL_CHANGE_USERNAME_SUCCESS_MSG: 'Your username was successfully updated',
  FORM_VALIDATION_USERNAME_MATCHES:
    'क्षमा करें, केवल छोटे अक्षर (a-z), अंक (0-9), विशेष वर्ण (.-_) की अनुमति नहीं है।',
  FORM_VALIDATION_USERNAME_REQUIRED: 'उपयोगकर्ता नाम आवश्यक है',
  LABEL_PAYMENT_METHOD: 'भुगतान का तरीका',
  LABEL_ACCEPT_PATMENTS_HEADER: 'भुगतान स्वीकार करें',
  LABEL_DONATION_SETTINGS_HEADER: 'दान सेटिंग्स',
  LABEL_CURRENCY_SUB_HEADER: 'मुद्रा',
  LABEL_CURRENCY:
    'Choose the currency you want your supporters to pay. If your home currency isn’t listed, your payment provider will automatically convert it for you.',
  LABEL_MIN_DONATION_HEADER: 'Set Minimum Donation Price',
  LABEL_THANK_YOU_MESSAGE_HEADER: 'Auto Thank You Message',
  LABEL_THANK_YOU:
    'जब कोई दान करता है तो भेजा जाने वाला संदेश। आपके पास एक व्यक्तिगत भेजने का भी मौका होगा।',
  LABEL_SUBMIT_PAYMENT_SETTING: 'प्रस्तुत करना',
  FORM_VALIDATION_THANK_YOU: 'आपके समर्थन के लिए धन्यवाद',
  FORM_VALIDATION_UPDATE_SUCCESS: 'दान सेटिंग को सफलतापूर्वक अपडेट किया गया!',
  LABEL_VERIFY_PAYPAL:
    'ऑनबोर्डिंग को पूरा करने और भुगतान स्वीकार करना शुरू करने के लिए कृपया पेपैल द्वारा आपको भेजे गए ईमेल को सत्यापित करें।',
  LABEL_PAYPAL:
    'अन्य उपयोगकर्ताओं से दान प्राप्त करने के लिए पेपैल जुड़ा होना चाहिए!',
  LABEL_DISAGREE: 'असहमत',
  LABEL_AGREE: 'इस बात से सहमत',
  LABEL_SETTINGS_LANGUAGE: 'सेटिंग भाषा',
  LABEL_PAYMENT_ENABLED: 'सक्रिय',
  LABEL_PAYMENT_DISABLED: 'अक्षम',
  LABEL_ACCEPT_DESCRIPTION:
    'क्रेडिट कार्ड और पेपाल बैलेंस स्वीकार करें। अपने पेपैल को तुरंत भुगतान करें।',
};

export default settings;
