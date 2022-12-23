import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
import genres from './commons/genres';
import tagForm from './commons/tagForm';

const consoleCreateSeries = {
  ...genres,
  ...common,
  ...topNav,
  ...imageUploader,
  ...tagForm,
  LABEL_SERIES: 'serye',
  LABEL_CHAPTER: 'kabanata',
  LABEL_SOMETHING_WENT_WRONG:
    'Oops, may nangyaring mali, pakisubukang muli sa ibang pagkakataon!',
  LABEL_GO_BACK: 'Bumalik ka',
  LABEL_ADD_NEW_SERIES: 'Magdagdag ng Bagong Serye',
  LABEL_NEXT_CHAPTER: 'sunod na kabanata',
  LABEL_SUBMIT: 'Ipasa',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX:
    'Ang pamagat ng paglalarawan ng serye ay dapat na hindi hihigit sa 2500 character',
  FORM_VALIDATION_DESCRIPTION_REQUIRED:
    'Kinakailangan ang paglalarawan ng serye',
  FORM_VALIDATION_GENRE_REQUIRED: 'Kinakailangan ang genre',
  FORM_VALIDATION_GENRE_MAX:
    'Dapat ay mas mababa sa o katumbas ng 3 item ang field ng genre',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: 'Kinakailangan ang wika',
  FORM_VALIDATION_TITLE_MAX:
    'Ang pamagat ng serye ay dapat na hindi hihigit sa 100 character',
  FORM_VALIDATION_TITLE_MATCHES:
    'Paumanhin, tanging mga titik (a-z), numero (0-9), mga espesyal na character (\':?"!-_&()<>.,+=@#$%|) ang pinapayagan.',
  FORM_VALIDATION_TITLE_REQUIRED: 'Kinakailangan ang pamagat ng serye',
  FORM_VALIDATION_COVER_REQUIRED: 'Kinakailangan ang larawan sa pabalat!',
  FORM_VALIDATION_BANNER_REQUIRED: 'Kinakailangan ang larawan ng banner!',
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
  LABEL_SINGLE_BANNER_DROPBOX:
    'I-drop ang iyong banner dito, o i-click upang mag-browse.',
  LABEL_SINGLE_COVER_DROPBOX:
    'I-drop ang iyong cover photo dito, o i-click para mag-browse.',
  LABEL_SINGLE_CHAPTER_COVER:
    'I-drop ang iyong cover photo dito, o i-click para mag-browse.',
  LABEL_SINGLE_BANNER_SUB:
    'Para sa pinakamahusay na mga resulta sa lahat ng device, gumamit ng larawan na hindi bababa sa 1080 x 360 pixels.',
  LABEL_SINGLE_COVER_SUB:
    'Para sa pinakamahusay na mga resulta sa lahat ng device, gumamit ng larawan na hindi bababa sa 600 x 400 pixels.',
  LABEL_SINGLE_CHAPTER_COVER_SUB:
    'Para sa pinakamahusay na mga resulta sa lahat ng device, gumamit ng larawan na hindi bababa sa 360 x 360 pixels.',
  LABEL_SERIES_TITLE: 'Pamagat ng serye',
  LABEL_LANGUAGE: 'Mga wika',
  LABEL_PRIMARY_GENRE: 'Pangunahing genre',
  LABEL_SECONDARY_GENRE: 'Pangalawang genre',
  LABEL_SERIES_DESCRIPTION: 'Paglalarawan ng serye',
  LABEL_PUBLISH_CHAPTER: 'I-publish ang kabanata',
  LABEL_CHAPTER_TITLE: 'Pamagat ng kabanata',
  LABEL_CHAPTER_DESCRIPTION: 'Paglalarawan ng kabanata',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Tala ng kabanata (opsyonal)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM:
    'Ang tala na ito ay ipapakita sa dulo ng kabanata',
  LABEL_UPLOAD_PAGES: 'Mag-upload ng mga pahina',
  LABEL_CONGRATULATION: 'Binabati kita',
  LABEL_SUCCESS_CREATING_SERIES_MSG: 'Matagumpay mong nagawa ang iyong serye.',
  LABEL_ADD_CHAPTER: 'magdagdag ng kabanata',
  LABEL_CREATE_NEW_SERIES: 'lumikha ng bagong serye',
  LABEL_MAX_GENRES: 'Maaari kang pumili ng hanggang 3 genre',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE:
    'ay isang reserbang salita, hindi maaaring gamitin!',
  LABEL_ALLOW_FOR_TRANSLATION: 'Payagan ang CrowdSourced Translation',
};

export default consoleCreateSeries;
