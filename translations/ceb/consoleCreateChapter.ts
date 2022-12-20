import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';

const consoleCreateChapter = {
  ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: 'mga serye',
  LABEL_CHAPTER: 'kapitulo',
  LABEL_SOMETHING_WENT_WRONG:
    'Oops adunay sayup nga nahimo, palihug pagsulay usab unya!',
  LABEL_GO_BACK: 'Balik',
  LABEL_ADD_NEW_SERIES: 'Dugang ug bag-ong Serye',
  LABEL_NEXT_CHAPTER: 'sunod: kapitulo',
  LABEL_SUBMIT: 'I-submit',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: 'Kinahanglan ang imahe sa pagtabon!',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX:
    'Ang paghulagway sa kapitulo kinahanglan labing daghan sa 2500 ka mga karakter',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED:
    'Kinahanglan ang paghulagway sa kapitulo',
  FORM_VALIDATION_CHAPTER_NOTE_MAX:
    'Ang pahinumdum nga sulat sa kapitulo kinahanglan labaw sa 2500 ka mga karakter',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: 'Gikinahanglan ang pagmantala',
  FORM_VALIDATION_CHAPTER_TITLE_MAX:
    'Ang titulo sa kapitulo kinahanglan labing daghan sa 100 ka mga karakter',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES: `Pasensya, mga letra ra (a-z), numero (0-9), espesyal nga karakter (\ ':? "! -_ & () <>., + = @ # $% |) Ang gitugotan.`,
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: 'Kinahanglan ang titulo sa kapitulo',
  FORM_VALIDATION_CHAPTER_PAGES_MIN:
    'Kinahanglan adunay sulud nga atleast nga 1 nga imahe',
  // END FORM VALIDATION
  LABEL_CREATE_CHAPTER: 'Himo ug Kapitulo',
  LABEL_SINGLE_COVER_DROPBOX:
    'Ihulog dinhi ang imong litrato sa hapin, o i-klik aron ma-browse',
  LABEL_SINGLE_CHAPTER_COVER_SUB:
    'Alang sa labing kaayo nga mga sangputanan sa tanan nga mga aparato, paggamit usa ka imahe nga labing moubus sa 360 x 360 nga mga pixel',
  LABEL_SERIES_DESCRIPTION: 'Paglaraw sa serye',
  LABEL_PUBLISH_CHAPTER: 'Igmantala ang kapitulo',
  LABEL_CHAPTER_TITLE: 'Titulo sa Kapitulo',
  LABEL_CHAPTER_DESCRIPTION: 'Paghulagway sa kapitulo',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Kahinumduman nga sulat (kapilian)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM:
    'Kini nga sulat igapakita sa katapusan sa kapitulo',
  LABEL_UPLOAD_PAGES: 'Pag-upload ug mga panid',
};

export default consoleCreateChapter;
