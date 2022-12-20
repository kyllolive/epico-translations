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
  LABEL_SERIES: 'Serye',
  LABEL_CHAPTER: 'Kabanata',
  LABEL_SOMETHING_WENT_WRONG: 'Naku may mali, pakisubukan uli mamaya!',
  LABEL_GO_BACK: 'Bumalik',
  LABEL_ADD_NEW_SERIES: 'Magdagdag ng bagong serye',
  LABEL_NEXT_CHAPTER: 'Susunod: Kabanata',
  LABEL_SUBMIT: 'Magpadala',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX:
    'Ang pamagat ng paglalarawan ng serye ay dapat na higit sa 2500 mga character',
  FORM_VALIDATION_DESCRIPTION_REQUIRED:
    'Kinakailangan ang paglalarawan ng serye',
  FORM_VALIDATION_GENRE_REQUIRED: 'Pangunahing genre ang kinakailangan',
  FORM_VALIDATION_GENRE_MAX:
    'Ang patlang ng genre ay dapat magkaroon ng mas mababa sa o katumbas ng 3 mga item',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: 'Kailangan ng wika',
  FORM_VALIDATION_TITLE_MAX:
    'Ang pamagat ng serye ay dapat na hindi hihigit sa 100 mga character',
  FORM_VALIDATION_TITLE_MATCHES: `Paumanhin, mga titik lamang (a-z), mga numero (0-9), mga espesyal na character (\ ':? "! -_ & () <>., + = @ # $% |) Ang pinapayagan.`,
  FORM_VALIDATION_TITLE_REQUIRED: 'Kinakailangan ang pamagat ng serye',
  FORM_VALIDATION_COVER_REQUIRED: 'Kinakailangan ang imahe ng takip!',
  FORM_VALIDATION_BANNER_REQUIRED: 'Kinakailangan ang imahe ng banner!',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX:
    'Ang paglalarawan ng kabanata ay dapat na higit sa 2500 mga character',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED:
    'Kailangan ang paglalarawan ng kabanata',
  FORM_VALIDATION_CHAPTER_NOTE_MAX:
    'Ang tala ng kabanata ay dapat na higit sa 2500 mga character',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: 'Kailangan ng lathala',
  FORM_VALIDATION_CHAPTER_TITLE_MAX:
    'Ang pamagat ng kabanata ay dapat na higit sa 100 mga character',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES: `Paumanhin, mga titik lamang (a-z), mga numero (0-9), mga espesyal na character (\ ':? "! -_ & () <>., + = @ # $% |) Ang pinapayagan.`,
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: 'Kailangan ng pamagat ng kabanata',
  FORM_VALIDATION_CHAPTER_PAGES_MIN: 'Dapat maglaman ng atleast na 1 imahe',
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX:
    'I-drop ang iyong banner dito, o mag-click upang mag-browse',
  LABEL_SINGLE_COVER_DROPBOX:
    'I-drop ang iyong larawan sa pabalat dito, o mag-click upang mag-browse',
  LABEL_SINGLE_CHAPTER_COVER:
    'I-drop ang iyong larawan sa pabalat dito, o mag-click upang mag-browse',
  LABEL_SINGLE_BANNER_SUB:
    'TAGALOG THIS ONEFor the best results on all devices, use an image that’s at least 1080 x 360 pixels',
  LABEL_SINGLE_COVER_SUB:
    'TAGALOG THIS ONEFor the best results on all devices, use an image that’s at least 600 x 400 pixels',
  LABEL_SINGLE_CHAPTER_COVER_SUB:
    'TAGALOG THIS ONEFor the best results on all devices, use an image that’s at least 360 x 360 pixels',
  LABEL_SERIES_TITLE: 'Pamagat ng serye',
  LABEL_LANGUAGE: 'Mga Wika',
  LABEL_PRIMARY_GENRE: 'Pangunahing genre ang kinakailangan',
  LABEL_SECONDARY_GENRE: 'Pangalawang genre',
  LABEL_SERIES_DESCRIPTION: 'Paglalarawan ng serye',
  LABEL_PUBLISH_CHAPTER: 'I-publish ang kabanata',
  LABEL_CHAPTER_TITLE: 'Pamagat ng kabanata',
  LABEL_CHAPTER_DESCRIPTION: 'Paglalarawan ng kabanata',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Tala ng kabanata (opsyonal)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM:
    'Ang tala na ito ay ipapakita sa pagtatapos ng kabanata',
  LABEL_UPLOAD_PAGES: 'Mag-upload ng mga pahina',
  LABEL_CONGRATULATION: 'Binabati kita',
  LABEL_SUCCESS_CREATING_SERIES_MSG: 'Matagumpay mong nilikha ang iyong serye.',
  LABEL_ADD_CHAPTER: 'magdagdag ng kabanata',
  LABEL_CREATE_NEW_SERIES: 'lumikha ng bagong serye',
  LABEL_MAX_GENRES: 'Pwedeng pumili hanggang 3 genre/uri',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE:
    'Hindi pwedeng gamitin, ito ay isang reserba na salita',
  LABEL_ALLOW_FOR_TRANSLATION: 'Payagan ang CrowdSourced na Pagsasalin',
};

export default consoleCreateSeries;
