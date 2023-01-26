import topNav from './commons/topNav';
import common from './commons/common';
import dashboard from './dashboard';

const settings = {
  ...topNav,
  ...common,
  ...dashboard,
  LABEL_HEADER_SETTINGS: 'Mga setting',
  LABEL_SUB_HEADER_SECURITY: 'Seguridad',
  LABEL_CHANGE_PASSWORD: 'Usba ang Password',
  LABEL_CHANGE_USERNAME: 'Usba ang Username',
  LABEL_DELETE_ACCOUNT: 'Pagtangtang sa Akong Account',
  LABEL_DELETE_ACCOUNT_BODY: `
  This is permanent. When you delete your Epico account, you won't makahimo sa pagkuha sa sulod o impormasyon nga imong'gipaambit nako sa Epico. Ang pagtangtang sa imong account permanente nga magtangtang sa imong profile, mga komento, ug mga post sa dingding,
  uban sa bisan unsang serye ug kapitulo nga imong gibuhat.`,
  LABEL_PASSWORD: 'Password',
  FORM_VALIDATION_OLD_PASSWORD_REQUIRED:
    'Ang kasamtangan nga password gikinahanglan',
  FORM_VALIDATION_NEW_PASSWORD_REQUIRED: 'Bag-ong password ang gikinahanglan',
  FORM_VALIDATION_NEW_PASSWORD_MIN:
    'Kinahanglang mas taas kay sa 12 ka karakter',
  LABEL_CHANGE_PASSWORD_SUCCESS_MSG:
    'Ang imong password malampuson nga na-update',
  LABEL_CHANGE_PASSWORD_INCORRECT_PASSWORD_MSG: 'Sayop nga password',
  LABEL_CHANGE_PASSWORD_LIMIT_EXCEEDED_MSG:
    'Milapas na sa limitasyon palihog sulayi pag-usab unya',
  LABEL_CHANGE_PASSWORD_UNABLE_TO_PROCESS: 'Dili maproseso ang imong hangyo',
  LABEL_OLD_PASSWORD: 'Kasamtangang password',
  LABEL_NEW_PASSWORD: 'Bag-ong password',
  LABEL_UPDATE_PASSWORD: 'I-update ang password',
  LABEL_NEW_USERNAME: 'Bag-ong username',
  LABEL_CHANGE_USERNAME_SUCCESS_MSG:
    'Ang imong username malampuson nga na-update',
  FORM_VALIDATION_USERNAME_MATCHES:
    'Pasensya, gamay ra nga letra (a-z), numero (0-9), espesyal nga karakter (.-_) wala’y lugar nga gitugotan.',
  FORM_VALIDATION_USERNAME_REQUIRED: 'Username gikinahanglan',
  LABEL_PAYMENT_METHOD: 'Paagi sa pagbayad',
  LABEL_ACCEPT_PATMENTS_HEADER: 'Dawata ang mga Bayad',
  LABEL_DONATION_SETTINGS_HEADER: 'Mga Setting sa Donasyon',
  LABEL_CURRENCY_SUB_HEADER: 'Salapi',
  LABEL_CURRENCY:
    'Pilia ang kuwarta nga gusto nimo nga ibayad sa imong mga tigsuporta. Kung wala nalista ang imong kuwarta sa balay, awtomatiko nga i-convert kini sa imong provider sa pagbayad para kanimo.',
  LABEL_MIN_DONATION_HEADER: 'Itakda ang Minimum nga Presyo sa Donasyon',
  LABEL_THANK_YOU_MESSAGE_HEADER: 'Auto Salamat Mensahe',
  LABEL_THANK_YOU:
    'Usa ka mensahe nga ipadala kung adunay nagdonar. Adunay ka higayon nga magpadala usab usa ka personal.',
  LABEL_SUBMIT_PAYMENT_SETTING: 'Isumite',
  FORM_VALIDATION_THANK_YOU: 'Daghang salamat sa inyong suporta',
  FORM_VALIDATION_UPDATE_SUCCESS:
    'Malampusong gi-update ang mga setting sa donasyon!',
  LABEL_VERIFY_PAYPAL:
    'Palihug pamatud-i ang email nga gipadala kanimo sa Paypal aron makompleto ang onboarding ug magsugod sa pagdawat sa mga bayad.',
  LABEL_PAYPAL:
    'Ang Paypal kinahanglan nga konektado aron makadawat mga donasyon gikan sa ubang mga tiggamit!',
  LABEL_DISAGREE: 'Dili mouyon',
  LABEL_AGREE: 'Uyon',
  LABEL_SETTINGS_LANGUAGE: 'Pinulongan sa Settings',
  LABEL_PAYMENT_ENABLED: 'Gipaandar',
  LABEL_PAYMENT_DISABLED: 'Nabaldado',
  LABEL_ACCEPT_DESCRIPTION:
    'Dawata ang mga credit card ug balanse sa PayPal. Gibayran dayon sa imong PayPal.',
};

export default settings;
