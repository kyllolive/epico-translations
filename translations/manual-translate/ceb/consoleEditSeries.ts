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
  LABEL_SERIES: 'mga serye',
  LABEL_CHAPTER: 'kapitulo',
  LABEL_EDIT: 'I-edit',
  LABEL_EDIT_SERIES: 'I-edit ang serye',
  LABEL_UPDATE: 'I-update',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX:
    'Ang titulo sa paghulagway sa serye kinahanglan labing daghan sa 2500 ka mga karakter',
  FORM_VALIDATION_DESCRIPTION_REQUIRED: 'Kinahanglan ang paghulagway sa serye',
  FORM_VALIDATION_GENRE_REQUIRED: 'Kinahanglan ang panguna nga genre',
  FORM_VALIDATION_GENRE_MAX:
    'Ang natad sa genre kinahanglan adunay mas gamay o katumbas sa 3 nga mga butang',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: 'Kinahanglan ang sinultian',
  FORM_VALIDATION_STATUS_REQUIRED: 'Kinahanglan ang Status sa Serye',
  FORM_VALIDATION_TITLE_MAX:
    'Ang titulo sa serye kinahanglan labing daghan sa 100 ka mga karakter',
  FORM_VALIDATION_TITLE_MATCHES: `Pasensya, mga letra ra (a-z), numero (0-9), espesyal nga karakter (\ ':? "! -_ & () <>., + = @ # $% |) Ang gitugotan.`,
  FORM_VALIDATION_TITLE_REQUIRED: 'Kinahanglan ang titulo sa serye',
  FORM_VALIDATION_COVER_REQUIRED: 'Kinahanglan ang imahe sa pagtabon!',
  FORM_VALIDATION_BANNER_REQUIRED: 'Kinahanglan ang imahe sa banner!',
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX:
    'Ihulog dinhi ang imong banner, o pag-klik aron ma-browse',
  LABEL_SINGLE_COVER_DROPBOX:
    'Ihulog dinhi ang imong litrato sa hapin, o i-klik aron ma-browse',
  LABEL_SINGLE_BANNER_SUB:
    'Alang sa labing kaayo nga mga sangputanan sa tanan nga mga aparato, gamita ang usa ka imahen nga labing menos 1080 x 360 nga mga pixel',
  LABEL_SINGLE_COVER_SUB:
    'Alang sa labing kaayo nga mga sangputanan sa tanan nga mga aparato, paggamit usa ka imahe nga labing moubus sa 600 x 400 nga mga pixel',
  LABEL_SERIES_TITLE: 'Titulo sa serye',
  LABEL_LANGUAGE: 'Mga sinultian',
  LABEL_PRIMARY_GENRE: 'Pang una nga genre',
  LABEL_SECONDARY_GENRE: 'Pang ika-duha nga genre',
  LABEL_SERIES_STATUS: 'Kahimtang sa Serye',
  LABEL_STATUS_ONGOING: 'Nagpadayon',
  LABEL_STATUS_COMPLETED: 'Nahuman',
  LABEL_SERIES_DESCRIPTION: 'Paglaraw sa serye',
  LABEL_PUBLISH_CHAPTER: 'Igmantala ang kapitulo',
  LABEL_CHAPTER_TITLE: 'Titulo sa Kapitulo',
  LABEL_CHAPTER_DESCRIPTION: 'Paghulagway sa kapitulo',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Kahinumduman nga sulat (kapilian)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM:
    'Kini nga sulat igapakita sa katapusan sa kapitulo',
  LABEL_NOT_FOUND_HEADER:
    'Uh oh, wala namo makita ang kini nga serye alang sa pag-edit',
  LABEL_NOT_FOUND_MSG_1:
    'Kung sa imong hunahuna adunay kini nga serye palihug pagkontak sa among suporta sa gihatag nga serye ID',
  LABEL_NOT_FOUND_MSG_2: 'nga adunay language id nga',
  LABEL_MAX_GENRES: 'Mahimo ka makapili hangtod sa 3 ka lahi',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE: 'usa ka reserba nga pulong, dili magamit!',
  LABEL_ALLOW_FOR_TRANSLATION: 'Tugoti ang CrowdSourced na paghubad',
};

export default consoleEditSeries;
