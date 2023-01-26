import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
const consoleEditChapter = { ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: 'श्रृंखला',
  LABEL_CHAPTER: 'अध्याय',
  LABEL_EDIT: 'संपादन करना',
  LABEL_EDIT_CHAPTER: 'अध्याय संपादित करें',
  LABEL_SUBMIT: 'प्रस्तुत करना',
  LABEL_UPDATE: 'अद्यतन',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: 'Cover image is required!',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX: 'Chapter description must be at most 2500 characters',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED: 'Chapter description is required',
  FORM_VALIDATION_CHAPTER_NOTE_MAX: 'Chapter note must be at most 2500 characters',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: 'Published is required',
  FORM_VALIDATION_CHAPTER_TITLE_MAX: 'Chapter title must be at most 100 characters',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES: 'Sorry, only letters (a-z), numbers (0-9), special characters (\':?"!-_&()<>.,+=@#$%|) are allowed.',
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: 'Chapter title is required',
  FORM_VALIDATION_CHAPTER_PAGES_MIN: 'Must contain atleast 1 image',
  // END FORM VALIDATION
  LABEL_SINGLE_COVER_DROPBOX: 'Drop your cover photo here, or click to browse',
  LABEL_SINGLE_CHAPTER_COVER_SUB: 'सभी उपकरणों पर सर्वोत्तम परिणामों के लिए, कम से कम 360 x 360 पिक्सेल वाली छवि का उपयोग करें',
  LABEL_PUBLISH_CHAPTER: 'अध्याय प्रकाशित करें',
  LABEL_CHAPTER_TITLE: 'अध्याय शीर्षक',
  LABEL_CHAPTER_DESCRIPTION: 'अध्याय विवरण',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'अध्याय नोट (वैकल्पिक)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'यह नोट अध्याय के अंत में दिखाया जाएगा',
  LABEL_UPLOAD_PAGES: 'पेज अपलोड करें',
  LABEL_NOT_FOUND_HEADER: 'उह ओह, हम इस अध्याय को संपादन के लिए खोजने में असमर्थ थे',
  LABEL_NOT_FOUND_MSG_1: 'यदि आपको लगता है कि यह महाकाव्य अध्याय मौजूद है तो कृपया दी गई श्रृंखला आईडी के साथ हमारे समर्थन से संपर्क करें',
  LABEL_NOT_FOUND_MSG_2: 'भाषा आईडी के साथ',
  LABEL_NOT_FOUND_MSG_3: 'और अध्याय आईडी'
};
export default consoleEditChapter;