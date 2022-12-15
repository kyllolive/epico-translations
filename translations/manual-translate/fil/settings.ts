import topNav from './commons/topNav';
import common from './commons/common';
import dashboard from './dashboard';

const settings = {
  ...topNav,
  ...common,
  ...dashboard,
  LABEL_HEADER_SETTINGS: 'Mga setting',
  LABEL_SUB_HEADER_SECURITY: 'Seguridad',
  LABEL_CHANGE_PASSWORD: 'Palitan ANG password',
  LABEL_CHANGE_USERNAME: 'Baguhin ang Username',
  LABEL_DELETE_ACCOUNT: 'Tanggalin ang Aking Account',
  LABEL_DELETE_ACCOUNT_BODY: `
  This is permanent. When you delete your Epico account, you won'hindi mo mabawi ang nilalaman o impormasyon mo'ibinahagi ko sa Epico. Ang pagtanggal sa iyong account ay permanenteng mag-aalis ng iyong profile, mga komento, at mga post sa dingding,
  kasama ng anumang serye at kabanata na ginawa mo.`,
  LABEL_PASSWORD: 'Password',
  FORM_VALIDATION_OLD_PASSWORD_REQUIRED:
    'Kinakailangan ang kasalukuyang password',
  FORM_VALIDATION_NEW_PASSWORD_REQUIRED: 'Kinakailangan ang bagong password',
  FORM_VALIDATION_NEW_PASSWORD_MIN: 'Dapat ay mas mahaba sa 12 character',
  LABEL_CHANGE_PASSWORD_SUCCESS_MSG:
    'Matagumpay na na-update ang iyong password',
  LABEL_CHANGE_PASSWORD_INCORRECT_PASSWORD_MSG: 'Maling password',
  LABEL_CHANGE_PASSWORD_LIMIT_EXCEEDED_MSG:
    'Lumampas sa limitasyon, pakisubukang muli sa ibang pagkakataon',
  LABEL_CHANGE_PASSWORD_UNABLE_TO_PROCESS:
    'Hindi maproseso ang iyong kahilingan',
  LABEL_OLD_PASSWORD: 'Kasalukuyang password',
  LABEL_NEW_PASSWORD: 'Bagong password',
  LABEL_UPDATE_PASSWORD: 'I-update ang password',
  LABEL_NEW_USERNAME: 'Bagong pangalan',
  LABEL_CHANGE_USERNAME_SUCCESS_MSG:
    'Ang iyong username ay matagumpay na na-update',
  FORM_VALIDATION_USERNAME_MATCHES:
    'Paumanhin, maliliit na letra lamang (a-z), numero (0-9), mga espesyal na character (.-_) walang puwang ang pinapayagan.',
  FORM_VALIDATION_USERNAME_REQUIRED: 'Kinakailangan ang username',
  LABEL_PAYMENT_METHOD: 'Paraan ng Pagbayad',
  LABEL_ACCEPT_PATMENTS_HEADER: 'Tanggapin ang Mga Pagbabayad',
  LABEL_DONATION_SETTINGS_HEADER: 'Mga Setting ng Donasyon',
  LABEL_CURRENCY_SUB_HEADER: 'Pera',
  LABEL_CURRENCY:
    'Piliin ang currency na gusto mong bayaran ng iyong mga tagasuporta. Kung hindi nakalista ang iyong pera sa bahay, awtomatikong iko-convert ito ng iyong provider ng pagbabayad para sa iyo.',
  LABEL_MIN_DONATION_HEADER: 'Itakda ang Pinakamababang Presyo ng Donasyon',
  LABEL_THANK_YOU_MESSAGE_HEADER: 'Auto Salamat Mensahe',
  LABEL_THANK_YOU:
    'Isang mensahe na ipapadala kapag may nag-donate. Magkakaroon ka rin ng pagkakataong magpadala ng personal.',
  LABEL_SUBMIT_PAYMENT_SETTING: 'Ipasa',
  FORM_VALIDATION_THANK_YOU: 'maraming salamat sa iyong suporta',
  FORM_VALIDATION_UPDATE_SUCCESS:
    'Matagumpay na na-update ang mga setting ng donasyon!',
  LABEL_VERIFY_PAYPAL:
    'Paki-verify ang email na ipinadala sa iyo ng Paypal upang makumpleto ang onboarding at simulan ang pagtanggap ng mga pagbabayad.',
  LABEL_PAYPAL:
    'Dapat na konektado ang Paypal para makatanggap ng mga donasyon mula sa ibang mga user!',
  LABEL_DISAGREE: 'Hindi sumasang-ayon',
  LABEL_AGREE: 'Sumang-ayon',
  LABEL_SETTINGS_LANGUAGE: 'Wika ng Mga Setting',
  LABEL_PAYMENT_ENABLED: 'Pinagana',
  LABEL_PAYMENT_DISABLED: 'Hindi pinagana',
  LABEL_ACCEPT_DESCRIPTION:
    'Tanggapin ang mga credit card at balanse sa PayPal. Agad na binayaran sa iyong PayPal.',
};

export default settings;
