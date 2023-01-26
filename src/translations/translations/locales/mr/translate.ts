import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const translate = {
  ...topNav,
  ...common,
  ...authModal,
  //translate page
  SCANLATE_BANNER_HEADER: 'हॅलो स्कॅनलेटर्स!',
  SCANLATE_BANNER_CONTENT:
    'निर्मात्यांना मोठ्या बाजारपेठेपर्यंत पोहोचण्यात मदत करून त्यांचे समर्थन करा सर्व कॉमिक्समध्ये विनामूल्य प्रवेश मिळवा कायदेशीर सेटिंगमध्ये निर्मात्यांसह कार्य करा शोधण्यायोग्य संवाद/हस्तलिखित कार्यसंघ बदलण्यासाठी शब्दकोषात तयार केलेले',
  SCANLATE_BANNER_HEADER_2: 'तुमचे कॉमिक्स जगाने वाचण्यास पात्र आहेत',
  SCANLATE_BANNER_CONTENT_2: `कॉमिक्ससाठी क्राउडसोर्स भाषांतर सेवा, तुमची भाषा सापडली नाही? आम्हाला एक संदेश पाठवा!`,
  LABEL_CONTENT_HEADER: 'येथे तुम्ही तुमची आवडती मालिका स्कॅन करू शकता.',
  LABEL_SEARCH_SERIES: 'शोध मालिका',
  LABEL_LANGUAGE: 'इंग्रजी',
  LABEL_ALL: 'सर्व',
  LABEL_NO_AVAILABLE_SERIES: 'भाषांतरासाठी कोणतीही उपलब्ध मालिका नाही',
  LABEL_LOADING: 'लोड करत आहे...',
  LABEL_PREVIEW: 'पूर्वावलोकन',
  LABEL_SAVE: 'जतन करा',
  LABEL_GUIDE: 'मार्गदर्शन',
  LABEL_TRANSLATE: 'स्कॅनलेट करा',
  LABEL_TO: 'करण्यासाठी',
  LABEL_CREATED_BY: 'ने निर्मित',
  LABEL_GLOSSARY: 'शब्दकोष',
  LABEL_CREDITS: 'श्रेय',
  LABEL_SUBMISSION_SUCCESS: 'तुमचे सबमिशन जतन केले गेले आहे!',
  LABEL_SUBMISSION_ERROR: 'तुमच्या सबमिशनमध्ये त्रुटी आहे',

  //Pages Tab//
  LABEL_PAGE: 'पृष्ठ:',
  LABEL_PAGES: 'पृष्ठे',
  LABEL_DOWNLOAD: 'डाउनलोड करा',
  LABEL_OVERRIDE: 'पुन्हा काढलेल्या प्रतिमेसह अधिलिखित करायचे?',
  LABEL_SELECT_CLEAN_VERSIONS: 'स्वच्छ आवृत्त्या निवडा',
  LABEL_SELECT_VERSIONS: 'आवृत्त्या निवडा...',
  LABEL_NO_UPLOADED_CLEAN_VERSION: 'अपलोड केलेली स्वच्छ आवृत्ती नाही',
  LABEL_UPLOAD_CLEAN_IMAGE: 'स्वच्छ प्रतिमा अपलोड करा',
  LABEL_DOWNLOAD_CLEAN_IMAGE: 'स्वच्छ प्रतिमा डाउनलोड करा',
  LABEL_TRANSLATION: 'स्कॅनलेशन',
  LABEL_ADD_TEXT: 'मजकूर जोडा',
  //Comment Tab
  LABEL_COMMENT: 'टिप्पणी',
  LABEL_COMMENT_HERE: 'इथे कमेंट करा...',
  LABEL_MORE_COMMENTS: 'अधिक टिप्पण्या',
  LABEL_SUBMIT: 'प्रस्तुत करणे',
  LABEL_CANCEL: 'रद्द करा',
  LABEL_REPLY: 'उत्तर द्या',
  LABEL_UPDATE: 'अपडेट करा',
  LABEL_HOW_TO_COMMENT: 'टिप्पणी कशी करायची',
  LABEL_HOW_TO_COMMENT_1: 'टिप्पणी देण्यासाठी क्षेत्र निवडा',
  LABEL_HOW_TO_COMMENT_2: 'इच्छित क्षेत्र हायलाइट करण्यासाठी ड्रॅग करा',
  LABEL_HOW_TO_COMMENT_3:
    'टिप्पणी लिहा असे मजकूर बॉक्स क्लिक करा, तुमची टिप्पणी टाइप करा आणि सबमिट करा क्लिक करा.',
  //Description Tab
  LABEL_DESCRIPTION: 'वर्णन',
  LABEL_SERIES: 'मालिका',
  LABEL_CHAPTER: 'धडा',
  LABEL_SWITCH_LANGUAGE: 'भाषा बदला',
  LABEL_SERIES_TITLE: 'मालिका शीर्षक',
  LABEL_SERIES_DESCRIPTION: 'मालिका वर्णन',
  LABEL_CHAPTER_TITLE: 'अध्याय शीर्षक',
  LABEL_CHAPTER_DESCRIPTION: 'अध्याय वर्णन',
  LABEL_CHAPTER_AUTHOR_NOTE: `अध्याय लेखकाची नोंद`,
  //SFX Tab
  LABEL_UPLOAD: 'अपलोड करा',
  //History Tab
  LABEL_HISTORY: 'इतिहास',
  LABEL_MODIFIED_BY: 'द्वारे सुधारित',
  LABEL_LATEST: 'नवीनतम',
  LABEL_LOAD: 'लोड',
  LABEL_PUBLISH: 'प्रकाशित करा',
  //Credits Tab
  LABEL_CONTRIBUTORS: 'योगदानकर्ते',
  LABEL_NO_CONTRIBUTORS: 'कोणतेही योगदानकर्ते नाहीत',

  //Change
  LABEL_CHANGE_PAGE:
    'जतन न केलेले बदल आहेत. तुम्हाला नक्की दूर जायचे आहे का? बदल गमावले जातील',
  LABEL_OFFICIAL_CLEAN_VERSION: 'अधिकृत आवृत्ती',
  LABEL_MY_CLEAN_VERSION: 'माझी आवृत्ती',
  LABEL_VERSION: 'आवृत्ती',
};

export default translate;
