import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const translate = {
  ...topNav,
  ...common,
  ...authModal,
  //translate page
  SCANLATE_BANNER_HEADER: 'Hello Scanlators!',
  SCANLATE_BANNER_CONTENT:
    'बड़े बाज़ार तक पहुँचने में क्रिएटर्स की सहायता करें सभी कॉमिक्स तक मुफ़्त में पहुँच प्राप्त करें कानूनी सेटिंग में क्रिएटर्स के साथ काम करें खोजने योग्य संवाद/पांडुलिपि बदलती टीमों के लिए शब्दकोष में निर्मित',
  SCANLATE_BANNER_HEADER_2: 'आपकी कॉमिक्स दुनिया को पढ़ने लायक है',
  SCANLATE_BANNER_CONTENT_2: `कॉमिक्स के लिए क्राउडसोर्स की गई अनुवाद सेवा, आपकी भाषा नहीं मिली? हमें एक संदेश भेजें!`,
  LABEL_CONTENT_HEADER: 'यहां आप अपनी पसंदीदा सीरीज को स्कैन कर सकते हैं।',
  LABEL_SEARCH_SERIES: 'खोज श्रृंखला',
  LABEL_LANGUAGE: 'भाषा',
  LABEL_ALL: 'सभी',
  LABEL_NO_AVAILABLE_SERIES: 'अनुवाद के लिए कोई श्रृंखला उपलब्ध नहीं है',
  LABEL_LOADING: 'लोड हो रहा है...',
  LABEL_PREVIEW: 'पूर्वावलोकन',
  LABEL_SAVE: 'बचाना',
  LABEL_GUIDE: 'मार्गदर्शक',
  LABEL_TRANSLATE: 'स्कैनलेट',
  LABEL_TO: 'प्रति',
  LABEL_CREATED_BY: 'के द्वारा बनाई गई',
  LABEL_GLOSSARY: 'शब्दकोष',
  LABEL_CREDITS: 'क्रेडिट',
  LABEL_SUBMISSION_SUCCESS: 'आपका सबमिशन सहेज लिया गया है!',
  LABEL_SUBMISSION_ERROR: 'आपके सबमिशन में त्रुटि है',

  //Pages Tab//
  LABEL_PAGE: 'पृष्ठ:',
  LABEL_PAGES: 'पृष्ठों',
  LABEL_DOWNLOAD: 'डाउनलोड',
  LABEL_OVERRIDE: 'फिर से खींची गई छवि के साथ ओवरराइड करें?',
  LABEL_SELECT_CLEAN_VERSIONS: 'स्वच्छ संस्करणों का चयन करें',
  LABEL_SELECT_VERSIONS: 'संस्करण चुनें...',
  LABEL_NO_UPLOADED_CLEAN_VERSION: 'कोई अपलोड नहीं किया गया स्वच्छ संस्करण',
  LABEL_UPLOAD_CLEAN_IMAGE: 'स्वच्छ छवि अपलोड करें',
  LABEL_DOWNLOAD_CLEAN_IMAGE: 'स्वच्छ छवि डाउनलोड करें',
  LABEL_TRANSLATION: 'स्कैनलेशन',
  LABEL_ADD_TEXT: 'लेख जोड़ें',
  //Comment Tab
  LABEL_COMMENT: 'टिप्पणी',
  LABEL_COMMENT_HERE: 'यहां कमेंट करें...',
  LABEL_MORE_COMMENTS: 'अधिक टिप्पणियाँ',
  LABEL_SUBMIT: 'प्रस्तुत करना',
  LABEL_CANCEL: 'रद्द करना',
  LABEL_REPLY: 'जवाब',
  LABEL_UPDATE: 'अद्यतन',
  LABEL_HOW_TO_COMMENT: 'कैसे कमेंट करें',
  LABEL_HOW_TO_COMMENT_1: 'टिप्पणी करने के लिए एक क्षेत्र चुनें',
  LABEL_HOW_TO_COMMENT_2: 'वांछित क्षेत्र को हाइलाइट करने के लिए खींचें',
  LABEL_HOW_TO_COMMENT_3:
    'Click the text box that says Write a comment, type your comment, and click submit.',
  //Description Tab
  LABEL_DESCRIPTION: 'Description',
  LABEL_SERIES: 'Series',
  LABEL_CHAPTER: 'Chapter',
  LABEL_SWITCH_LANGUAGE: 'Switch Language',
  LABEL_SERIES_TITLE: 'Series Title',
  LABEL_SERIES_DESCRIPTION: 'Series Description',
  LABEL_CHAPTER_TITLE: 'Chapter Title',
  LABEL_CHAPTER_DESCRIPTION: 'Chapter Description',
  LABEL_CHAPTER_AUTHOR_NOTE: `Chapter Author's Note`,
  //SFX Tab
  LABEL_UPLOAD: 'Upload',
  //History Tab
  LABEL_HISTORY: 'History',
  LABEL_MODIFIED_BY: 'modified by',
  LABEL_LATEST: 'Latest',
  LABEL_LOAD: 'Load',
  LABEL_PUBLISH: 'Publish',
  //Credits Tab
  LABEL_CONTRIBUTORS: 'Contributors',
  LABEL_NO_CONTRIBUTORS: 'No Contributors',

  //Change
  LABEL_CHANGE_PAGE:
    'There are unsaved changes. Are you sure you want to move away? Changes will be lost',
};

export default translate;
