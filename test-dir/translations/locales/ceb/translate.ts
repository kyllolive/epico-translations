import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const translate = {
  ...topNav,
  ...common,
  ...authModal,
  //translate page
  SCANLATE_BANNER_HEADER: 'Hello mga Scanlator!',
  SCANLATE_BANNER_CONTENT:
    'Suportahi ang mga tiglalang pinaagi sa pagtabang kanila nga makaabot sa mas dako nga merkado Pagbaton ug access sa tanang komiks nga libre Pagtrabaho uban sa mga tiglalang sa legal nga kahimtang Mapangita nga dayalogo/manuskrito Gitukod sa glossary para sa pag-ilis sa mga team',
  SCANLATE_BANNER_HEADER_2: 'Ang Imong Komiks Angayan nga Basahon Sa Kalibutan',
  SCANLATE_BANNER_CONTENT_2: `Crowdsourced nga serbisyo sa paghubad alang sa mga komiks, wala makit-an ang imong pinulongan? Padalhi kami ug mensahe!`,
  LABEL_CONTENT_HEADER:
    'Dinhi mahimo nimong i-scan ang imong paborito nga Serye.',
  LABEL_SEARCH_SERIES: 'Serye sa pagpangita',
  LABEL_LANGUAGE: 'Pinulongan',
  LABEL_ALL: 'Tanan',
  LABEL_NO_AVAILABLE_SERIES: 'Walay Magamit nga Serye para sa Paghubad',
  LABEL_LOADING: 'Nagkarga...',
  LABEL_PREVIEW: 'Preview',
  LABEL_SAVE: 'Tipigi',
  LABEL_GUIDE: 'Giya',
  LABEL_TRANSLATE: 'Scanlate',
  LABEL_TO: 'sa',
  LABEL_CREATED_BY: 'gibuhat ni',
  LABEL_GLOSSARY: 'Glosaryo',
  LABEL_CREDITS: 'Mga kredito',
  LABEL_SUBMISSION_SUCCESS: 'Ang imong Pagsumite naluwas na!',
  LABEL_SUBMISSION_ERROR: 'Adunay usa ka sayup sa imong pagsumite',

  //Pages Tab//
  LABEL_PAGE: 'Panid:',
  LABEL_PAGES: 'Mga panid',
  LABEL_DOWNLOAD: 'Pag-download',
  LABEL_OVERRIDE: 'i-override sa gi-redrawn nga imahe?',
  LABEL_SELECT_CLEAN_VERSIONS: 'Pagpili og limpyo nga mga bersyon',
  LABEL_SELECT_VERSIONS: 'Pilia ang mga bersyon...',
  LABEL_NO_UPLOADED_CLEAN_VERSION: 'Walay gi-upload nga limpyo nga bersyon',
  LABEL_UPLOAD_CLEAN_IMAGE: 'pag-upload og limpyo nga hulagway',
  LABEL_DOWNLOAD_CLEAN_IMAGE: 'download limpyo nga larawan',
  LABEL_TRANSLATION: 'Pag-scan',
  LABEL_ADD_TEXT: 'Idugang ang Teksto',
  //Comment Tab
  LABEL_COMMENT: 'Komento',
  LABEL_COMMENT_HERE: 'Comment dinhi...',
  LABEL_MORE_COMMENTS: 'Dugang Komento',
  LABEL_SUBMIT: 'Isumite',
  LABEL_CANCEL: 'Pagkanselar',
  LABEL_REPLY: 'tubag',
  LABEL_UPDATE: 'Update',
  LABEL_HOW_TO_COMMENT: 'Unsaon pag comment',
  LABEL_HOW_TO_COMMENT_1: 'Pagpili og usa ka lugar nga pagkomentohan',
  LABEL_HOW_TO_COMMENT_2: 'I-drag aron i-highlight ang gusto nga lugar',
  LABEL_HOW_TO_COMMENT_3:
    'I-klik ang text box nga nag-ingon Pagsulat og komento, i-type ang imong komento, ug i-klik ang isumite.',
  //Description Tab
  LABEL_DESCRIPTION: 'Deskripsyon',
  LABEL_SERIES: 'Sunod-sunod nga',
  LABEL_CHAPTER: 'Kapitulo',
  LABEL_SWITCH_LANGUAGE: 'Pagbalhin sa Pinulongan',
  LABEL_SERIES_TITLE: 'Titulo sa Serye',
  LABEL_SERIES_DESCRIPTION: 'Deskripsyon sa Serye',
  LABEL_CHAPTER_TITLE: 'Ulohan sa Kapitulo',
  LABEL_CHAPTER_DESCRIPTION: 'Deskripsyon sa Kapitulo',
  LABEL_CHAPTER_AUTHOR_NOTE: `Sulat sa Awtor sa Kapitulo`,
  //SFX Tab
  LABEL_UPLOAD: 'Pag-upload',
  //History Tab
  LABEL_HISTORY: 'Kasaysayan',
  LABEL_MODIFIED_BY: 'giusab sa',
  LABEL_LATEST: 'Pinakabag-o',
  LABEL_LOAD: 'load',
  LABEL_PUBLISH: 'Imantala',
  //Credits Tab
  LABEL_CONTRIBUTORS: 'Mga kontribyutor',
  LABEL_NO_CONTRIBUTORS: 'Walay mga Kontributor',

  //Change
  LABEL_CHANGE_PAGE:
    'Adunay dili maluwas nga mga pagbag-o. Sigurado ka nga gusto ka mopalayo? Mawala ang mga pagbag-o',
};

export default translate;
