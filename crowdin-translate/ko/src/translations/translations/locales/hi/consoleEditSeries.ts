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
  LABEL_SERIES: 'श्रृंखला',
  LABEL_CHAPTER: 'अध्याय',
  LABEL_EDIT: 'संपादन करना',
  LABEL_EDIT_SERIES: 'श्रृंखला संपादित करें',
  LABEL_UPDATE: 'अद्यतन',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX: 'Series description title must be at most 2500 characters',
  FORM_VALIDATION_DESCRIPTION_REQUIRED: 'Series description is required',
  FORM_VALIDATION_GENRE_REQUIRED: 'Genre is required',
  FORM_VALIDATION_GENRE_MAX: 'Genre field must have less than or equal to 3 items',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: 'Language is required',
  FORM_VALIDATION_STATUS_REQUIRED: 'Series Status Required',
  FORM_VALIDATION_TITLE_MAX: 'Series title must be at most 100 characters',
  FORM_VALIDATION_TITLE_MATCHES: 'क्षमा करें, केवल अक्षर (a-z), संख्याएँ (0-9), विशेष वर्ण (\':?"!-_&()<>.,+=@#$%|) की अनुमति है।',
  FORM_VALIDATION_TITLE_REQUIRED: 'श्रृंखला शीर्षक आवश्यक है',
  FORM_VALIDATION_COVER_REQUIRED: 'कवर छवि की आवश्यकता है!',
  FORM_VALIDATION_BANNER_REQUIRED: 'बैनर छवि आवश्यक है!',
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX: 'Drop your banner here, or click to browse',
  LABEL_SINGLE_COVER_DROPBOX: 'Drop your cover photo here, or click to browse',
  LABEL_SINGLE_BANNER_SUB: 'For the best results on all devices, use an image that’s at least 1080 x 360 pixels',
  LABEL_SINGLE_COVER_SUB: 'सभी उपकरणों पर सर्वोत्तम परिणामों के लिए, ऐसी छवि का उपयोग करें जो कम से कम 600 x 400 पिक्सेल की हो',
  LABEL_SERIES_TITLE: 'श्रृंखला शीर्षक',
  LABEL_LANGUAGE: 'बोली',
  LABEL_PRIMARY_GENRE: 'प्राथमिक शैली',
  LABEL_SECONDARY_GENRE: 'माध्यमिक शैली',
  LABEL_SERIES_STATUS: 'श्रृंखला स्थिति',
  LABEL_STATUS_ONGOING: 'चल रहे',
  LABEL_STATUS_COMPLETED: 'पूरा हुआ',
  LABEL_SERIES_DESCRIPTION: 'श्रृंखला विवरण',
  LABEL_PUBLISH_CHAPTER: 'अध्याय प्रकाशित करें',
  LABEL_CHAPTER_TITLE: 'अध्याय शीर्षक',
  LABEL_CHAPTER_DESCRIPTION: 'अध्याय विवरण',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'अध्याय नोट (वैकल्पिक)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'यह नोट अध्याय के अंत में दिखाया जाएगा',
  LABEL_NOT_FOUND_HEADER: 'उह ओह, हम इस श्रृंखला को संपादन के लिए नहीं ढूंढ पाए',
  LABEL_NOT_FOUND_MSG_1: 'यदि आपको लगता है कि यह महाकाव्य श्रृंखला मौजूद है तो कृपया दी गई श्रृंखला आईडी के साथ हमारे समर्थन से संपर्क करें',
  LABEL_NOT_FOUND_MSG_2: 'भाषा आईडी के साथ',
  LABEL_MAX_GENRES: 'आप 3 शैलियों तक चुन सकते हैं',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE: 'एक आरक्षित शब्द है, इसका उपयोग नहीं किया जा सकता है!',
  LABEL_ALLOW_FOR_TRANSLATION: 'क्राउडसोर्स्ड अनुवाद की अनुमति दें'
};
export default consoleEditSeries;