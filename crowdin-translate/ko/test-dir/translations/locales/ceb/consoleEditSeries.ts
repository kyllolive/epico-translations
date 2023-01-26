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
  LABEL_SERIES: 'sunod-sunod nga',
  LABEL_CHAPTER: 'kapitulo',
  LABEL_EDIT: 'Edit',
  LABEL_EDIT_SERIES: 'I-edit ang Serye',
  LABEL_UPDATE: 'Update',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX: 'Ang titulo sa deskripsyon sa serye kinahanglang labing daghan ug 2500 ka karakter',
  FORM_VALIDATION_DESCRIPTION_REQUIRED: 'Ang deskripsyon sa serye gikinahanglan',
  FORM_VALIDATION_GENRE_REQUIRED: 'Gikinahanglan ang genre',
  FORM_VALIDATION_GENRE_MAX: 'Ang natad sa genre kinahanglang adunay ubos o katumbas sa 3 ka mga butang',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: 'Ang pinulongan gikinahanglan',
  FORM_VALIDATION_STATUS_REQUIRED: 'Gikinahanglan ang Kahimtang sa Serye',
  FORM_VALIDATION_TITLE_MAX: 'Ang titulo sa serye kinahanglan labing taas sa 100 ka karakter',
  FORM_VALIDATION_TITLE_MATCHES: 'Pasensya, mga letra (a-z), numero (0-9), espesyal nga karakter (\':?"!-_&()<>.,+=@#$%|) ang gitugotan.',
  FORM_VALIDATION_TITLE_REQUIRED: 'Ang titulo sa serye gikinahanglan',
  FORM_VALIDATION_COVER_REQUIRED: 'Kinahanglan ang cover image!',
  FORM_VALIDATION_BANNER_REQUIRED: 'Ang hulagway sa banner gikinahanglan!',
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX: 'Ihulog ang imong banner dinhi, o i-klik aron ma-browse',
  LABEL_SINGLE_COVER_DROPBOX: 'Ihulog ang imong litrato sa hapin dinhi, o i-klik aron mag-browse',
  LABEL_SINGLE_BANNER_SUB: 'Para sa labing maayong resulta sa tanang device, gamita ang hulagway nga labing menos 1080 x 360 pixels',
  LABEL_SINGLE_COVER_SUB: 'Para sa labing maayong resulta sa tanang device, gamita ang hulagway nga labing menos 600 x 400 pixels',
  LABEL_SERIES_TITLE: 'Titulo sa serye',
  LABEL_LANGUAGE: 'Mga pinulongan',
  LABEL_PRIMARY_GENRE: 'Panguna nga genre',
  LABEL_SECONDARY_GENRE: 'Ikaduha nga genre',
  LABEL_SERIES_STATUS: 'Kahimtang sa Serye',
  LABEL_STATUS_ONGOING: 'Nagpadayon',
  LABEL_STATUS_COMPLETED: 'Nakompleto',
  LABEL_SERIES_DESCRIPTION: 'Deskripsyon sa serye',
  LABEL_PUBLISH_CHAPTER: 'Imantala ang kapitulo',
  LABEL_CHAPTER_TITLE: 'Ulohan sa kapitulo',
  LABEL_CHAPTER_DESCRIPTION: 'Deskripsyon sa kapitulo',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'nota sa kapitulo (opsyonal)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'Kini nga mubo nga sulat ipakita sa katapusan sa kapitulo',
  LABEL_NOT_FOUND_HEADER: 'Uh oh, wala namo makit-an kining serye para i-edit',
  LABEL_NOT_FOUND_MSG_1: 'Kung sa imong hunahuna adunay kini nga epico nga serye palihog kontaka ang among suporta sa gihatag nga serye ID',
  LABEL_NOT_FOUND_MSG_2: 'uban sa pinulongan id sa',
  LABEL_MAX_GENRES: 'Makapili ka hangtod sa 3 ka genre',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE: 'kay reserba nga pulong, dili magamit!',
  LABEL_ALLOW_FOR_TRANSLATION: 'Tugoti ang CrowdSourced Translation'
};
export default consoleEditSeries;