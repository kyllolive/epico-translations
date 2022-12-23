import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
const consoleEditChapter = { ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: 'मालिका',
  LABEL_CHAPTER: 'धडा',
  LABEL_EDIT: 'सुधारणे',
  LABEL_EDIT_CHAPTER: 'प्रकरण संपादित करा',
  LABEL_SUBMIT: 'प्रस्तुत करणे',
  LABEL_UPDATE: 'अपडेट करा',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: 'कव्हर इमेज आवश्यक आहे!',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX: 'प्रकरणाचे वर्णन जास्तीत जास्त २५०० वर्णांचे असणे आवश्यक आहे',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED: 'प्रकरणाचे वर्णन आवश्यक आहे',
  FORM_VALIDATION_CHAPTER_NOTE_MAX: 'चॅप्टर नोट कमाल २५०० वर्णांची असणे आवश्यक आहे',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: 'प्रकाशित करणे आवश्यक आहे',
  FORM_VALIDATION_CHAPTER_TITLE_MAX: 'अध्याय शीर्षक जास्तीत जास्त 100 वर्णांचे असणे आवश्यक आहे',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES: 'क्षमस्व, फक्त अक्षरे (a-z), संख्या (0-9), विशेष वर्ण (\':?"!-_&()<>.,+=@#$%|) अनुमत आहेत.',
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: 'अध्याय शीर्षक आवश्यक आहे',
  FORM_VALIDATION_CHAPTER_PAGES_MIN: 'किमान 1 प्रतिमा असणे आवश्यक आहे',
  // END FORM VALIDATION
  LABEL_SINGLE_COVER_DROPBOX: 'तुमचा कव्हर फोटो येथे टाका किंवा ब्राउझ करण्यासाठी क्लिक करा',
  LABEL_SINGLE_CHAPTER_COVER_SUB: 'सर्व उपकरणांवरील सर्वोत्तम परिणामांसाठी, किमान 360 x 360 पिक्सेल असलेली प्रतिमा वापरा',
  LABEL_PUBLISH_CHAPTER: 'अध्याय प्रकाशित करा',
  LABEL_CHAPTER_TITLE: 'अध्याय शीर्षक',
  LABEL_CHAPTER_DESCRIPTION: 'अध्याय वर्णन',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'धडा टीप (पर्यायी)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'ही नोंद अध्यायाच्या शेवटी दर्शविली जाईल',
  LABEL_UPLOAD_PAGES: 'पृष्ठे अपलोड करा',
  LABEL_NOT_FOUND_HEADER: 'अरेरे, आम्ही संपादनासाठी हा अध्याय शोधण्यात अक्षम होतो',
  LABEL_NOT_FOUND_MSG_1: 'जर तुम्हाला वाटत असेल की हा एपिको चॅप्टर अस्तित्वात आहे, तर कृपया दिलेल्या सीरिज आयडीसह आमच्या समर्थनाशी संपर्क साधा',
  LABEL_NOT_FOUND_MSG_2: 'च्या भाषा आयडीसह',
  LABEL_NOT_FOUND_MSG_3: 'आणि चा अध्याय आयडी'
};
export default consoleEditChapter;