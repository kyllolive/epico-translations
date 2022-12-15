import topNav from "./commons/topNav";
import common from "./commons/common";
import imageUploader from "./commons/imageUploader";

const consoleCreateChapter = {
  ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: 'serye',
  LABEL_CHAPTER: 'kabanata',
  LABEL_SOMETHING_WENT_WRONG: 'Oops may nangyari, mangyaring subukan ulit mamaya!',
  LABEL_GO_BACK: 'Bumalik ka',
  LABEL_ADD_NEW_SERIES: 'Magdagdag ng Bagong Serye',
  LABEL_NEXT_CHAPTER: 'sunod na kabanata',
  LABEL_SUBMIT: 'Ipasa',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: 'Kinakailangan ang imahe ng takip!',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX: 'Ang paglalarawan ng kabanata ay dapat na higit sa 2500 mga character',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED: 'Kailangan ang paglalarawan ng kabanata',
  FORM_VALIDATION_CHAPTER_NOTE_MAX: 'Ang tala ng kabanata ay dapat na higit sa 2500 mga character',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: 'Kailangan ng lathala',
  FORM_VALIDATION_CHAPTER_TITLE_MAX: 'Ang pamagat ng kabanata ay dapat na higit sa 100 mga character',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES: `Paumanhin, mga titik lamang (a-z), mga numero (0-9), mga espesyal na character (\ ':? "! -_ & () <>., + = @ # $% |) Ang pinapayagan.`,
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: 'Kailangan ng pamagat ng kabanata',
  FORM_VALIDATION_CHAPTER_PAGES_MIN: 'Dapat maglaman ng atleast na 1 imahe',
  // END FORM VALIDATION
  LABEL_CREATE_CHAPTER: 'Lumikha ng Kabanata',
  LABEL_SINGLE_COVER_DROPBOX: 'I-drop ang iyong larawan sa pabalat dito, o mag-click upang mag-browse',
  LABEL_SERIES_DESCRIPTION: 'Paglalarawan ng serye',
  LABEL_PUBLISH_CHAPTER: 'I-publish ang kabanata',
  LABEL_CHAPTER_TITLE: 'Pamagat ng kabanata',
  LABEL_CHAPTER_DESCRIPTION: 'Paglalarawan ng kabanata',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Tala ng kabanata (opsyonal)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'Ang tala na ito ay ipapakita sa pagtatapos ng kabanata',
  LABEL_UPLOAD_PAGES: 'Mag-upload ng mga pahina',
};

export default consoleCreateChapter;
