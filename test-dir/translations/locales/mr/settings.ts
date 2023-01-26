import topNav from './commons/topNav';
import common from './commons/common';
import dashboard from './dashboard';

const settings = {
  ...topNav,
  ...common,
  ...dashboard,
  LABEL_HEADER_SETTINGS: 'सेटिंग्ज',
  LABEL_SUB_HEADER_SECURITY: 'सुरक्षा',
  LABEL_CHANGE_PASSWORD: 'पासवर्ड बदला',
  LABEL_CHANGE_USERNAME: 'वापरकर्तानाव बदला',
  LABEL_DELETE_ACCOUNT: 'माझे खाते हटवा',
  LABEL_DELETE_ACCOUNT_BODY: `
  This is permanent. When you delete your Epico account, you won'आपण सामग्री किंवा माहिती पुनर्प्राप्त करण्यात सक्षम नाही'Epico वर शेअर केले आहे. तुमचे खाते हटवल्याने तुमचे प्रोफाइल, टिप्पण्या आणि वॉल पोस्ट कायमचे काढून टाकले जातील,
  तुम्ही तयार केलेल्या कोणत्याही मालिका आणि अध्यायासह.`,
  LABEL_PASSWORD: 'पासवर्ड',
  FORM_VALIDATION_OLD_PASSWORD_REQUIRED: 'वर्तमान पासवर्ड आवश्यक आहे',
  FORM_VALIDATION_NEW_PASSWORD_REQUIRED: 'नवीन पासवर्ड आवश्यक आहे',
  FORM_VALIDATION_NEW_PASSWORD_MIN: '12 वर्णांपेक्षा मोठे असणे आवश्यक आहे',
  LABEL_CHANGE_PASSWORD_SUCCESS_MSG: 'तुमचा पासवर्ड यशस्वीरित्या अपडेट झाला',
  LABEL_CHANGE_PASSWORD_INCORRECT_PASSWORD_MSG: 'चुकीचा पासवर्ड',
  LABEL_CHANGE_PASSWORD_LIMIT_EXCEEDED_MSG:
    'मर्यादा ओलांडली आहे कृपया नंतर पुन्हा प्रयत्न करा',
  LABEL_CHANGE_PASSWORD_UNABLE_TO_PROCESS:
    'तुमच्या विनंतीवर प्रक्रिया करण्यात अक्षम',
  LABEL_OLD_PASSWORD: 'सध्याचा गुप्त शब्द',
  LABEL_NEW_PASSWORD: 'नवीन पासवर्ड',
  LABEL_UPDATE_PASSWORD: 'पासवर्ड अपडेट करा',
  LABEL_NEW_USERNAME: 'नवीन वापरकर्तानाव',
  LABEL_CHANGE_USERNAME_SUCCESS_MSG:
    'तुमचे वापरकर्तानाव यशस्वीरित्या अपडेट केले गेले',
  FORM_VALIDATION_USERNAME_MATCHES:
    'क्षमस्व, फक्त लहान अक्षरे (a-z), संख्या (0-9), विशेष वर्ण (.-_) कोणत्याही जागेची परवानगी नाही.',
  FORM_VALIDATION_USERNAME_REQUIRED: 'वापरकर्तानाव आवश्यक आहे',
  LABEL_PAYMENT_METHOD: 'पेमेंट पद्धत',
  LABEL_ACCEPT_PATMENTS_HEADER: 'देयके स्वीकारा',
  LABEL_DONATION_SETTINGS_HEADER: 'देणगी सेटिंग्ज',
  LABEL_CURRENCY_SUB_HEADER: 'चलन',
  LABEL_CURRENCY:
    'तुम्हाला तुमच्या समर्थकांनी द्यायचे असलेले चलन निवडा. तुमचे घर चलन सूचीबद्ध नसल्यास, तुमचा पेमेंट प्रदाता ते तुमच्यासाठी आपोआप रूपांतरित करेल.',
  LABEL_MIN_DONATION_HEADER: 'देणगीची किमान किंमत सेट करा',
  LABEL_THANK_YOU_MESSAGE_HEADER: 'ऑटो धन्यवाद संदेश',
  LABEL_THANK_YOU:
    'कोणी दान केल्यावर पाठवायचा संदेश. तुम्हाला वैयक्तिक पाठवण्याचीही संधी मिळेल.',
  LABEL_SUBMIT_PAYMENT_SETTING: 'प्रस्तुत करणे',
  FORM_VALIDATION_THANK_YOU: 'तुमच्या पाठिंब्याबद्दल खूप खूप धन्यवाद',
  FORM_VALIDATION_UPDATE_SUCCESS: 'देणगी सेटिंग्ज यशस्वीरित्या अपडेट केली!',
  LABEL_VERIFY_PAYPAL:
    'कृपया ऑनबोर्डिंग पूर्ण करण्यासाठी आणि पेमेंट स्वीकारण्यास प्रारंभ करण्यासाठी Paypal द्वारे तुम्हाला पाठवलेल्या ईमेलची पडताळणी करा.',
  LABEL_PAYPAL:
    'पेपल इतर वापरकर्त्यांकडून देणग्या प्राप्त करण्यासाठी कनेक्ट केलेले असणे आवश्यक आहे!',
  LABEL_DISAGREE: 'असहमत',
  LABEL_AGREE: 'सहमत',
  LABEL_SETTINGS_LANGUAGE: 'सेटिंग्ज भाषा',
  LABEL_PAYMENT_ENABLED: 'सक्षम केले',
  LABEL_PAYMENT_DISABLED: 'अक्षम',
  LABEL_ACCEPT_DESCRIPTION:
    'क्रेडिट कार्ड आणि PayPal शिल्लक स्वीकारा. तुमच्या PayPal वर त्वरित पैसे दिले.',
};

export default settings;
