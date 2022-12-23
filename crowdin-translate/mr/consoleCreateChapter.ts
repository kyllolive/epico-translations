import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';

const consoleCreateChapter = {
  ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: 'मालिका',
  LABEL_CHAPTER: 'धडा',
  LABEL_SOMETHING_WENT_WRONG:
    'अरेरे काहीतरी चूक झाली, कृपया नंतर पुन्हा प्रयत्न करा!',
  LABEL_GO_BACK: 'परत जा',
  LABEL_ADD_NEW_SERIES: 'नवीन मालिका जोडा',
  LABEL_NEXT_CHAPTER: 'पुढील: धडा',
  LABEL_SUBMIT: 'प्रस्तुत करणे',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: 'कव्हर इमेज आवश्यक आहे!',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX:
    'प्रकरणाचे वर्णन जास्तीत जास्त २५०० वर्णांचे असणे आवश्यक आहे',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED: 'प्रकरणाचे वर्णन आवश्यक आहे',
  FORM_VALIDATION_CHAPTER_NOTE_MAX:
    'चॅप्टर नोट कमाल २५०० वर्णांची असणे आवश्यक आहे',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: 'प्रकाशित करणे आवश्यक आहे',
  FORM_VALIDATION_CHAPTER_TITLE_MAX:
    'अध्याय शीर्षक जास्तीत जास्त 100 वर्णांचे असणे आवश्यक आहे',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES:
    'क्षमस्व, फक्त अक्षरे (a-z), संख्या (0-9), विशेष वर्ण (\':?"!-_&()<>.,+=@#$%|) अनुमत आहेत.',
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: 'अध्याय शीर्षक आवश्यक आहे',
  FORM_VALIDATION_CHAPTER_PAGES_MIN: 'किमान 1 प्रतिमा असणे आवश्यक आहे',
  // END FORM VALIDATION
  LABEL_CREATE_CHAPTER: 'अध्याय तयार करा',
  LABEL_SINGLE_COVER_DROPBOX:
    'तुमचा कव्हर फोटो येथे टाका किंवा ब्राउझ करण्यासाठी क्लिक करा',
  LABEL_SINGLE_CHAPTER_COVER_SUB:
    'सर्व उपकरणांवरील सर्वोत्तम परिणामांसाठी, किमान 360 x 360 पिक्सेल असलेली प्रतिमा वापरा',
  LABEL_SERIES_DESCRIPTION: 'मालिकेचे वर्णन',
  LABEL_PUBLISH_CHAPTER: 'अध्याय प्रकाशित करा',
  LABEL_CHAPTER_TITLE: 'अध्याय शीर्षक',
  LABEL_CHAPTER_DESCRIPTION: 'अध्याय वर्णन',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'धडा टीप (पर्यायी)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'ही नोंद अध्यायाच्या शेवटी दर्शविली जाईल',
  LABEL_UPLOAD_PAGES: 'पृष्ठे अपलोड करा',
};

export default consoleCreateChapter;
