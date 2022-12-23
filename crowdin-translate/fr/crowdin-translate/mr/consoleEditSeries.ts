import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
import genres from './commons/genres';
import tagForm from './commons/tagForm';
const consoleEditSeries = { ...genres,
  ...common,
  ...topNav,
  ...imageUploader,
  ...tagForm,
  LABEL_SERIES: 'मालिका',
  LABEL_CHAPTER: 'धडा',
  LABEL_EDIT: 'सुधारणे',
  LABEL_EDIT_SERIES: 'मालिका संपादित करा',
  LABEL_UPDATE: 'अपडेट करा',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX: 'मालिका वर्णनाचे शीर्षक जास्तीत जास्त २५०० वर्णांचे असणे आवश्यक आहे',
  FORM_VALIDATION_DESCRIPTION_REQUIRED: 'मालिकेचे वर्णन आवश्यक आहे',
  FORM_VALIDATION_GENRE_REQUIRED: 'शैली आवश्यक आहे',
  FORM_VALIDATION_GENRE_MAX: 'शैली फील्डमध्ये 3 पेक्षा कमी किंवा समान आयटम असणे आवश्यक आहे',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: 'भाषा आवश्यक आहे',
  FORM_VALIDATION_STATUS_REQUIRED: 'मालिका स्थिती आवश्यक',
  FORM_VALIDATION_TITLE_MAX: 'मालिका शीर्षक जास्तीत जास्त 100 वर्णांचे असणे आवश्यक आहे',
  FORM_VALIDATION_TITLE_MATCHES: 'क्षमस्व, फक्त अक्षरे (a-z), संख्या (0-9), विशेष वर्ण (\':?"!-_&()<>.,+=@#$%|) अनुमत आहेत.',
  FORM_VALIDATION_TITLE_REQUIRED: 'मालिका शीर्षक आवश्यक आहे',
  FORM_VALIDATION_COVER_REQUIRED: 'कव्हर इमेज आवश्यक आहे!',
  FORM_VALIDATION_BANNER_REQUIRED: 'बॅनर प्रतिमा आवश्यक आहे!',
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX: 'तुमचे बॅनर येथे टाका किंवा ब्राउझ करण्यासाठी क्लिक करा',
  LABEL_SINGLE_COVER_DROPBOX: 'तुमचा कव्हर फोटो येथे टाका किंवा ब्राउझ करण्यासाठी क्लिक करा',
  LABEL_SINGLE_BANNER_SUB: 'सर्व उपकरणांवरील सर्वोत्तम परिणामांसाठी, किमान 1080 x 360 पिक्सेल असलेली प्रतिमा वापरा',
  LABEL_SINGLE_COVER_SUB: 'सर्व उपकरणांवरील सर्वोत्तम परिणामांसाठी, किमान 600 x 400 पिक्सेल असलेली प्रतिमा वापरा',
  LABEL_SERIES_TITLE: 'मालिका शीर्षक',
  LABEL_LANGUAGE: 'भाषा',
  LABEL_PRIMARY_GENRE: 'प्राथमिक शैली',
  LABEL_SECONDARY_GENRE: 'दुय्यम प्रकार',
  LABEL_SERIES_STATUS: 'मालिका स्थिती',
  LABEL_STATUS_ONGOING: 'चालू आहे',
  LABEL_STATUS_COMPLETED: 'पूर्ण झाले',
  LABEL_SERIES_DESCRIPTION: 'मालिकेचे वर्णन',
  LABEL_PUBLISH_CHAPTER: 'अध्याय प्रकाशित करा',
  LABEL_CHAPTER_TITLE: 'अध्याय शीर्षक',
  LABEL_CHAPTER_DESCRIPTION: 'अध्याय वर्णन',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'धडा टीप (पर्यायी)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'ही नोंद अध्यायाच्या शेवटी दर्शविली जाईल',
  LABEL_NOT_FOUND_HEADER: 'अरेरे, आम्ही संपादनासाठी ही मालिका शोधण्यात अक्षम होतो',
  LABEL_NOT_FOUND_MSG_1: 'जर तुम्हाला वाटत असेल की ही एपिको मालिका अस्तित्वात आहे, कृपया दिलेल्या मालिका आयडीसह आमच्या समर्थनाशी संपर्क साधा',
  LABEL_NOT_FOUND_MSG_2: 'च्या भाषा आयडीसह',
  LABEL_MAX_GENRES: 'तुम्ही 3 पर्यंत शैली निवडू शकता',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE: 'राखीव शब्द आहे, वापरता येत नाही!',
  LABEL_ALLOW_FOR_TRANSLATION: 'Crowdsourced Translation ला अनुमती द्या'
};
export default consoleEditSeries;