import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
import genres from './commons/genres';
import tagForm from './commons/tagForm';
const consoleEditSeries = { ...genres,
  ...common,
  ...topNav,
  ...imageUploader,
  ...tagForm,
  LABEL_SERIES: 'serye',
  LABEL_CHAPTER: 'kabanata',
  LABEL_EDIT: 'I-edit',
  LABEL_EDIT_SERIES: 'I-edit ang Serye',
  LABEL_UPDATE: 'Update',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX: 'Ang pamagat ng paglalarawan ng serye ay dapat na hindi hihigit sa 2500 character',
  FORM_VALIDATION_DESCRIPTION_REQUIRED: 'Kinakailangan ang paglalarawan ng serye',
  FORM_VALIDATION_GENRE_REQUIRED: 'Kinakailangan ang genre',
  FORM_VALIDATION_GENRE_MAX: 'Dapat ay mas mababa sa o katumbas ng 3 item ang field ng genre',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: 'Kinakailangan ang wika',
  FORM_VALIDATION_STATUS_REQUIRED: 'Kinakailangan ang Katayuan ng Serye',
  FORM_VALIDATION_TITLE_MAX: 'Ang pamagat ng serye ay dapat na hindi hihigit sa 100 character',
  FORM_VALIDATION_TITLE_MATCHES: 'Paumanhin, tanging mga titik (a-z), numero (0-9), mga espesyal na character (\':?"!-_&()<>.,+=@#$%|) ang pinapayagan.',
  FORM_VALIDATION_TITLE_REQUIRED: 'Kinakailangan ang pamagat ng serye',
  FORM_VALIDATION_COVER_REQUIRED: 'Kinakailangan ang larawan sa pabalat!',
  FORM_VALIDATION_BANNER_REQUIRED: 'Kinakailangan ang larawan ng banner!',
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX: 'I-drop ang iyong banner dito, o i-click upang mag-browse',
  LABEL_SINGLE_COVER_DROPBOX: 'I-drop ang iyong cover photo dito, o i-click para mag-browse',
  LABEL_SINGLE_BANNER_SUB: 'Para sa pinakamahusay na mga resulta sa lahat ng device, gumamit ng larawan na hindi bababa sa 1080 x 360 pixels',
  LABEL_SINGLE_COVER_SUB: 'Para sa pinakamahusay na mga resulta sa lahat ng device, gumamit ng larawan na hindi bababa sa 600 x 400 pixels',
  LABEL_SERIES_TITLE: 'Pamagat ng serye',
  LABEL_LANGUAGE: 'Mga wika',
  LABEL_PRIMARY_GENRE: 'Pangunahing genre',
  LABEL_SECONDARY_GENRE: 'Pangalawang genre',
  LABEL_SERIES_STATUS: 'Katayuan ng Serye',
  LABEL_STATUS_ONGOING: 'Patuloy',
  LABEL_STATUS_COMPLETED: 'Nakumpleto',
  LABEL_SERIES_DESCRIPTION: 'Paglalarawan ng serye',
  LABEL_PUBLISH_CHAPTER: 'I-publish ang kabanata',
  LABEL_CHAPTER_TITLE: 'Pamagat ng kabanata',
  LABEL_CHAPTER_DESCRIPTION: 'Paglalarawan ng kabanata',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Tala ng kabanata (opsyonal)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'Ang tala na ito ay ipapakita sa dulo ng kabanata',
  LABEL_NOT_FOUND_HEADER: 'Naku, hindi namin mahanap ang seryeng ito para i-edit',
  LABEL_NOT_FOUND_MSG_1: 'Kung sa tingin mo ay umiiral ang epico series na ito, mangyaring makipag-ugnayan sa aming suporta gamit ang ibinigay na series ID',
  LABEL_NOT_FOUND_MSG_2: 'na may language id ng',
  LABEL_MAX_GENRES: 'Maaari kang pumili ng hanggang 3 genre',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE: 'ay isang reserbang salita, hindi maaaring gamitin!',
  LABEL_ALLOW_FOR_TRANSLATION: 'Payagan ang CrowdSourced Translation'
};
export default consoleEditSeries;