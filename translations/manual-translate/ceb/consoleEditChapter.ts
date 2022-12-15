import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';

const consoleEditChapter = {
  ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: 'mga serye',
  LABEL_CHAPTER: 'kapitulo',
  LABEL_EDIT: 'I-edit',
  LABEL_EDIT_CHAPTER: 'I-edit and kapitulo',
  LABEL_SUBMIT: 'I-submit',
  LABEL_UPDATE: 'I-update',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: 'Kinahanglan ang imahe sa pagtabon!',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX:
    'Ang paghulagway sa kapitulo kinahanglan labing daghan sa 2500 ka mga karakter',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED:
    'Kinahanglan ang paghulagway sa kapitulo',
  FORM_VALIDATION_CHAPTER_NOTE_MAX:
    'Ang pahinumdum sa kapitulo kinahanglan labaw sa 2500 ka mga karakter',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: 'Gikinahanglan ang pagmantala',
  FORM_VALIDATION_CHAPTER_TITLE_MAX:
    'Ang titulo sa kapitulo kinahanglan labing daghan sa 100 ka mga karakter',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES: `Pasensya, mga letra ra (a-z), numero (0-9), espesyal nga karakter (\ ':? "! -_ & () <>., + = @ # $% |) Ang gitugotan.`,
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: 'Kinahanglan ang titulo sa kapitulo',
  FORM_VALIDATION_CHAPTER_PAGES_MIN:
    'Kinahanglan adunay sulud nga atleast nga 1 nga imahe',
  // END FORM VALIDATION
  LABEL_SINGLE_COVER_DROPBOX:
    'Ihulog dinhi ang imong litrato sa pagtabon, o i-klik aron ma-browse',
  LABEL_SINGLE_CHAPTER_COVER_SUB:
    'Alang sa labing kaayo nga mga sangputanan sa tanan nga mga aparato, paggamit usa ka imahe nga labing moubus sa 360 x 360 nga mga pixel',
  LABEL_PUBLISH_CHAPTER: 'Igmantala ang kapitulo',
  LABEL_CHAPTER_TITLE: 'Titulo sa kapitulo',
  LABEL_CHAPTER_DESCRIPTION: 'Paghulagway sa kapitulo',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Kahinumduman nga sulat (kapilian)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM:
    'Kini nga sulat igapakita sa katapusan sa kapitulo',
  LABEL_UPLOAD_PAGES: 'Pag-upload sa mga panid',
  LABEL_NOT_FOUND_HEADER:
    'Hala, wala namo makita kini nga kapitulo aron ma-edit',
  LABEL_NOT_FOUND_MSG_1:
    'Kung sa imong hunahuna nga kini nga kapitulo adunay palihug pagkontak sa among suporta sa gihatag nga serye ID',
  LABEL_NOT_FOUND_MSG_2: 'nga adunay language ID nga',
  LABEL_NOT_FOUND_MSG_3: 'ug chapter ID nga',
};

export default consoleEditChapter;
