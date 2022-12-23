import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';

const consoleCreateChapter = {
  ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: 'serye',
  LABEL_CHAPTER: 'kabanata',
  LABEL_SOMETHING_WENT_WRONG:
    'Oops, may nangyaring mali, pakisubukang muli sa ibang pagkakataon!',
  LABEL_GO_BACK: 'Bumalik ka',
  LABEL_ADD_NEW_SERIES: 'Magdagdag ng Bagong Serye',
  LABEL_NEXT_CHAPTER: 'sunod na kabanata',
  LABEL_SUBMIT: 'Ipasa',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: 'Kinakailangan ang larawan sa pabalat!',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX:
    'Ang paglalarawan ng kabanata ay dapat na hindi hihigit sa 2500 character',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED:
    'Kinakailangan ang paglalarawan ng kabanata',
  FORM_VALIDATION_CHAPTER_NOTE_MAX:
    'Ang tala ng kabanata ay dapat na hindi hihigit sa 2500 character',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: 'Kinakailangan ang nai-publish',
  FORM_VALIDATION_CHAPTER_TITLE_MAX:
    'Ang pamagat ng kabanata ay dapat na hindi hihigit sa 100 character',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES:
    'Paumanhin, tanging mga titik (a-z), numero (0-9), mga espesyal na character (\':?"!-_&()<>.,+=@#$%|) ang pinapayagan.',
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED:
    'Kinakailangan ang pamagat ng kabanata',
  FORM_VALIDATION_CHAPTER_PAGES_MIN:
    'Dapat maglaman ng hindi bababa sa 1 larawan',
  // END FORM VALIDATION
  LABEL_CREATE_CHAPTER: 'Lumikha ng Kabanata',
  LABEL_SINGLE_COVER_DROPBOX:
    'I-drop ang iyong cover photo dito, o i-click para mag-browse',
  LABEL_SINGLE_CHAPTER_COVER_SUB:
    'Para sa pinakamahusay na mga resulta sa lahat ng device, gumamit ng larawan na hindi bababa sa 360 x 360 pixels',
  LABEL_SERIES_DESCRIPTION: 'Paglalarawan ng serye',
  LABEL_PUBLISH_CHAPTER: 'I-publish ang kabanata',
  LABEL_CHAPTER_TITLE: 'Pamagat ng kabanata',
  LABEL_CHAPTER_DESCRIPTION: 'Paglalarawan ng kabanata',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Tala ng kabanata (opsyonal)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM:
    'Ang tala na ito ay ipapakita sa dulo ng kabanata',
  LABEL_UPLOAD_PAGES: 'Mag-upload ng mga pahina',
};

export default consoleCreateChapter;
