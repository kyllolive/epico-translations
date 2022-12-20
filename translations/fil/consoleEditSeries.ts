import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
import genres from './commons/genres';
import tagForm from './commons/tagForm';

const consoleEditSeries = {
  ...genres,
  ...common,
  ...topNav,
  ...imageUploader,
  ...tagForm,
  LABEL_SERIES: 'serye',
  LABEL_CHAPTER: 'kabanata',
  LABEL_EDIT: 'Baguhin',
  LABEL_EDIT_SERIES: 'Baguhin ang serye',
  LABEL_UPDATE: 'Palitan',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX:
    'Di dapat lampas sa 2500 na karakter ang pamagat ng pagsasalarawan ng serye',
  FORM_VALIDATION_DESCRIPTION_REQUIRED: 'Kailangan ang pagsasalarawan ng serye',
  FORM_VALIDATION_GENRE_REQUIRED: 'Kailangan ang pangunahing genre / uri',
  FORM_VALIDATION_GENRE_MAX:
    'Ang patlang ng genre ay dapat magkaroon ng mas mababa sa o katumbas ng 3 mga item',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: 'Kailangan ang wika',
  FORM_VALIDATION_STATUS_REQUIRED: 'Kailangan ang estado ng serye',
  FORM_VALIDATION_TITLE_MAX:
    'Di dapat lampas sa 100 na karakter ang pamagat ng serye',
  FORM_VALIDATION_TITLE_MATCHES: `Patawad, mga titik lamang (a-z), bilang (0-9), at mga karakter na ito (\':?"!-_&()<>.,+=@#$%|) ang pwede.`,
  FORM_VALIDATION_TITLE_REQUIRED: 'Kailangan ang pamagat ng serye',
  FORM_VALIDATION_COVER_REQUIRED: 'Kailangan ng imaheng pabalat',
  FORM_VALIDATION_BANNER_REQUIRED: 'Kailangan ng imaheng bandera',
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX:
    'Ilagay ang bandera mo rito, o pumindot para makapag-browse / makapagbasa',
  LABEL_SINGLE_COVER_DROPBOX:
    'Ilagay ang pabalat mong letrato rito, o pumindot para makasilip',
  LABEL_SINGLE_BANNER_SUB:
    'TAGALOGFor the best results on all devices, use an image that’s at least 1080 x 360 pixels',
  LABEL_SINGLE_COVER_SUB:
    'TAGALOGFor the best results on all devices, use an image that’s at least 600 x 400 pixels',
  LABEL_SERIES_TITLE: 'Pamagat ng serye',
  LABEL_LANGUAGE: 'Mga wika',
  LABEL_PRIMARY_GENRE: 'Pangunahing genre',
  LABEL_SECONDARY_GENRE: 'Pangalawang genre',
  LABEL_SERIES_STATUS: 'Estado ng serye',
  LABEL_STATUS_ONGOING: 'Umaandar / Kasalukuyang ginagawa',
  LABEL_STATUS_COMPLETED: 'Buo',
  LABEL_SERIES_DESCRIPTION: 'Pagsasalarawan ng serye',
  LABEL_PUBLISH_CHAPTER: 'Ilathala ang kabanata',
  LABEL_CHAPTER_TITLE: 'Pamagat ng kabanata',
  LABEL_CHAPTER_DESCRIPTION: 'Pagsasalarawan ng kabanata',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Tala tungkol sa kabanata (di-kailangan)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM:
    'Ang talang ito ay makikita sa dulo ng kabanata',
  LABEL_NOT_FOUND_HEADER:
    'Naku, hindi namin mahanap ang seryeng ito para mabago',
  LABEL_NOT_FOUND_MSG_1: `Kung sa palagay mo'y umiiral ang seryeng ito rito, pakikontak ang aming suporta gamit ang inyong Serye ID`,
  LABEL_NOT_FOUND_MSG_2: 'na may wikang identipikasyon na',
  LABEL_MAX_GENRES: 'Pwedeng pumili hanggang 3 genre/uri',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE:
    'Hindi pwedeng gamitin, ito ay isang reserba na salita',
  LABEL_ALLOW_FOR_TRANSLATION: 'Payagan ang CrowdSourced na Pagsasalin',
};

export default consoleEditSeries;
