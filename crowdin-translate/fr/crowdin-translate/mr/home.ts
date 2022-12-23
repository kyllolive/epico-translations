import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import landingPage from './commons/landingPage';
const home = { ...genres,
  ...topNav,
  ...common,
  ...authModal,
  ...landingPage,
  LATEST: 'नवीनतम',
  HOME_BANNER_HEADER: 'तुमची कॉमिक्स वेगवेगळ्या भाषांमध्ये प्रकाशित करा!',
  HOME_BANNER_CONTENT: `तुमची भाषा सापडली नाही? आम्हाला एक संदेश पाठवा!`,
  HOME_BANNER_HEADER_DISCORD: 'आमच्या समुदायात सामील व्हा',
  HOME_BANNER_CONTENT_DISCORD: 'टिप्पण्या, प्रश्न आणि सूचनांसाठी. आमच्या डिस्कॉर्ड सर्व्हरमध्ये सामील व्हा',
  LABEL_GET_STARTED: 'सुरु करूया',
  LABEL_VISIT: 'भेट',
  COLLAB_WEBKOM_1: 'फिलीपिन्सचे घर',
  COLLAB_WEBKOM_2: 'वेबकॉमिक्स',
  COLLAB_EPICO_1: 'क्राउडसोर्स कॉमिक',
  COLLAB_EPICO_2: 'भाषांतर प्लॅटफॉर्म',
  COLLAB_CONTENT: 'फिलिपाईन कोमिकांना जगासमोर आणण्यासाठी सहयोग करणे'
};
export default home;