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
  LABEL_SERIES: 'sunod-sunod nga',
  LABEL_CHAPTER: 'kapitulo',
  LABEL_SOMETHING_WENT_WRONG:
    'Oops naay nahitabo, palihog sulayi pag-usab unya!',
  LABEL_GO_BACK: 'Balik',
  LABEL_ADD_NEW_SERIES: 'Idugang ang Bag-ong Serye',
  LABEL_NEXT_CHAPTER: 'sunod: kapitulo',
  LABEL_SUBMIT: 'Isumite',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX:
    'Ang titulo sa deskripsyon sa serye kinahanglang labing daghan ug 2500 ka karakter',
  FORM_VALIDATION_DESCRIPTION_REQUIRED:
    'Ang deskripsyon sa serye gikinahanglan',
  FORM_VALIDATION_GENRE_REQUIRED: 'Gikinahanglan ang genre',
  FORM_VALIDATION_GENRE_MAX:
    'Ang natad sa genre kinahanglang adunay ubos o katumbas sa 3 ka mga butang',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: 'Ang pinulongan gikinahanglan',
  FORM_VALIDATION_TITLE_MAX:
    'Ang titulo sa serye kinahanglan labing taas sa 100 ka karakter',
  FORM_VALIDATION_TITLE_MATCHES:
    'Pasensya, mga letra (a-z), numero (0-9), espesyal nga karakter (\':?"!-_&()<>.,+=@#$%|) ang gitugotan.',
  FORM_VALIDATION_TITLE_REQUIRED: 'Ang titulo sa serye gikinahanglan',
  FORM_VALIDATION_COVER_REQUIRED: 'Kinahanglan ang cover image!',
  FORM_VALIDATION_BANNER_REQUIRED: 'Ang hulagway sa banner gikinahanglan!',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX:
    'Ang paghulagway sa kapitulo kinahanglan nga labing daghan sa 2500 ka mga karakter',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED:
    'Ang paghulagway sa kapitulo gikinahanglan',
  FORM_VALIDATION_CHAPTER_NOTE_MAX:
    'Ang nota sa kapitulo kinahanglan nga labing daghan sa 2500 ka mga karakter',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: 'Gikinahanglan ang pagpatik',
  FORM_VALIDATION_CHAPTER_TITLE_MAX:
    'Ang ulohan sa kapitulo kinahanglang labing daghan sa 100 ka karakter',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES:
    'Pasensya, mga letra (a-z), numero (0-9), espesyal nga karakter (\':?"!-_&()<>.,+=@#$%|) ang gitugotan.',
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED:
    'Ang ulohan sa kapitulo gikinahanglan',
  FORM_VALIDATION_CHAPTER_PAGES_MIN:
    'Kinahanglan adunay labing menos 1 nga imahe',
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX:
    'Ihulog ang imong banner dinhi, o i-klik aron ma-browse.',
  LABEL_SINGLE_COVER_DROPBOX:
    'Ihulog ang imong litrato sa hapin dinhi, o i-klik aron mag-browse.',
  LABEL_SINGLE_CHAPTER_COVER:
    'Ihulog ang imong litrato sa hapin dinhi, o i-klik aron mag-browse.',
  LABEL_SINGLE_BANNER_SUB:
    'Para sa labing maayong resulta sa tanang device, gamita ang hulagway nga labing menos 1080 x 360 pixels.',
  LABEL_SINGLE_COVER_SUB:
    'Para sa labing maayong resulta sa tanang device, gamita ang hulagway nga labing menos 600 x 400 pixels.',
  LABEL_SINGLE_CHAPTER_COVER_SUB:
    'Para sa pinakanindot nga resulta sa tanang device, gamita ang hulagway nga labing menos 360 x 360 pixels.',
  LABEL_SERIES_TITLE: 'Titulo sa serye',
  LABEL_LANGUAGE: 'Mga pinulongan',
  LABEL_PRIMARY_GENRE: 'Panguna nga genre',
  LABEL_SECONDARY_GENRE: 'Ikaduha nga genre',
  LABEL_SERIES_DESCRIPTION: 'Deskripsyon sa serye',
  LABEL_PUBLISH_CHAPTER: 'Imantala ang kapitulo',
  LABEL_CHAPTER_TITLE: 'Ulohan sa kapitulo',
  LABEL_CHAPTER_DESCRIPTION: 'Deskripsyon sa kapitulo',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'nota sa kapitulo (opsyonal)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM:
    'Kini nga mubo nga sulat ipakita sa katapusan sa kapitulo',
  LABEL_UPLOAD_PAGES: 'Pag-upload og mga panid',
  LABEL_CONGRATULATION: 'Mga pahalipay',
  LABEL_SUCCESS_CREATING_SERIES_MSG:
    'Malampuson nimong nahimo ang imong serye.',
  LABEL_ADD_CHAPTER: 'dugangi ang kapitulo',
  LABEL_CREATE_NEW_SERIES: 'paghimo og bag-ong serye',
  LABEL_MAX_GENRES: 'Makapili ka hangtod sa 3 ka genre',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE: 'kay reserba nga pulong, dili magamit!',
  LABEL_ALLOW_FOR_TRANSLATION: 'Tugoti ang CrowdSourced Translation',
};

export default consoleCreateSeries;
