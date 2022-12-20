import topNav from "./commons/topNav";
import common from "./commons/common";
import imageUploader from "./commons/imageUploader";

const consoleEditChapter = {
  ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: 'Serye',
  LABEL_CHAPTER: 'Kabanata',
  LABEL_EDIT: 'Baguhin',
  LABEL_EDIT_CHAPTER: 'Baguhin ang kabanata',
  LABEL_SUBMIT: 'Ipadala',
  LABEL_UPDATE: 'Palitan',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: 'Kailangan ng pabalat na imahen!',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX: 'Di dapat lampas sa 2500 na karakter ang pagsasalarawan ng kabanata',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED: 'Kailangan ng pagsasalarawan ng kabanata',
  FORM_VALIDATION_CHAPTER_NOTE_MAX: 'Di dapat lampas sa 2500 na karakter ang tala tungkol sa kabanata',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: 'Kailangan ang pagkalathala',
  FORM_VALIDATION_CHAPTER_TITLE_MAX: 'Di dapat lampas sa 100 na karakter ang pamagat ng kabanata',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES: `Patawad, mga titik (a-z), bilang (0-9), at mga karakter na ito (\':?"!-_&()<>.,+=@#$%|) lang ang pwede.`,
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: 'Kailangan ang pamagat ng kabanata',
  FORM_VALIDATION_CHAPTER_PAGES_MIN: 'Kailangan may laman maski 1 imahen',
  // END FORM VALIDATION
  LABEL_SINGLE_COVER_DROPBOX: 'Ilagay ang pabalat na litrato rito, o pindutin para makapagbasa',
  LABEL_SINGLE_CHAPTER_COVER_SUB:'TAGALOGFor the best results on all devices, use an image that’s at least 360 x 360 pixels',
  LABEL_PUBLISH_CHAPTER: 'Ilathala ang kabanata',
  LABEL_CHAPTER_TITLE: 'Pamagat ng kabanata',
  LABEL_CHAPTER_DESCRIPTION: 'Pagsasalarawan ng kabanata',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Tala ng kabanata (di-kailangan)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'Ipapakita ang talang ito sa dulo ng kabanata',
  LABEL_UPLOAD_PAGES: 'Mag-upload ng mga pahina',
  LABEL_NOT_FOUND_HEADER: 'Naku, di namin mahanap ang kabanatang ito para mabago',
  LABEL_NOT_FOUND_MSG_1: `Kung sa palagay mo'y andito dapat ang kabanata, pakikontak ang aming suporta kalakip ang ID ng serye`,
  LABEL_NOT_FOUND_MSG_2: 'kasama ang wika ID ng',
  LABEL_NOT_FOUND_MSG_3: 'at ID ng kabanata ng',

};

export default consoleEditChapter;
