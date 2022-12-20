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
  LABEL_SERIES: 'mga serye',
  LABEL_CHAPTER: 'kapitulo',
  LABEL_SOMETHING_WENT_WRONG:
    'Oops adunay sayup nga nahimo, palihug pagsulay usab sa unya!',
  LABEL_GO_BACK: 'Balik',
  LABEL_ADD_NEW_SERIES: 'Dugang ug bag-o nga serye',
  LABEL_NEXT_CHAPTER: 'sunod: kapitulo',
  LABEL_SUBMIT: 'I-submit',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX:
    'Ang titulo sa paghulagway sa serye kinahanglan labing daghan sa 2500 ka mga karakter',
  FORM_VALIDATION_DESCRIPTION_REQUIRED: 'Kinahanglan ang paghulagway sa serye',
  FORM_VALIDATION_GENRE_REQUIRED: 'Kinahanglan ang panguna nga genre',
  FORM_VALIDATION_GENRE_MAX:
    'Ang natad sa genre kinahanglan adunay mas gamay o katumbas sa 3 nga mga butang',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: 'Kinahanglan ang sinultian',
  FORM_VALIDATION_TITLE_MAX:
    'Ang titulo sa serye kinahanglan labing daghan sa 100 ka mga karakter',
  FORM_VALIDATION_TITLE_MATCHES: `Pasensya, mga letra ra (a-z), numero (0-9), espesyal nga karakter (\ ':? "! -_ & () <>., + = @ # $% |) Ang gitugotan.`,
  FORM_VALIDATION_TITLE_REQUIRED: 'Kinahanglan ang titulo sa serye',
  FORM_VALIDATION_COVER_REQUIRED: 'Kinahanglan ang imahe sa cover!',
  FORM_VALIDATION_BANNER_REQUIRED: 'Kinahanglan ang imahe sa banner!',
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
    'Kinahanglan adunay sulud labing gamay nga 1 nga imahe',
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX:
    'Ihulog dinhi ang imong banner, o pag-klik aron ma-browse.',
  LABEL_SINGLE_COVER_DROPBOX:
    'Ihulog dinhi ang imong imahe sa pag tabon, o i-klik aron ma-browse.',
  LABEL_SINGLE_CHAPTER_COVER:
    'Ihulog dinhi ang imong imahe sa pag tabon, o i-klik aron ma-browse.',
  LABEL_SINGLE_BANNER_SUB:
    'Alang sa labing kaayo nga mga sangputanan sa tanan nga mga aparato, gamita ang usa ka imahen nga dili moubus sa 1080 x 360 nga mga pixel.',
  LABEL_SINGLE_COVER_SUB:
    'Alang sa labing kaayo nga mga sangputanan sa tanan nga mga aparato, paggamit usa ka imahe nga labing moubus sa 600 x 400 nga mga pixel.',
  LABEL_SINGLE_CHAPTER_COVER_SUB:
    'Alang sa labing kaayo nga mga sangputanan sa tanan nga mga aparato, paggamit usa ka imahe nga labing moubus sa 360 x 360 nga mga pixel.',
  LABEL_SERIES_TITLE: 'Titulo sa serye',
  LABEL_LANGUAGE: 'Sinultian',
  LABEL_PRIMARY_GENRE: 'Pang una nga genre',
  LABEL_SECONDARY_GENRE: 'Pang ika-duha na genre',
  LABEL_SERIES_DESCRIPTION: 'Series description',
  LABEL_PUBLISH_CHAPTER: 'Publish chapter',
  LABEL_CHAPTER_TITLE: 'Titulo sa Kapitulo',
  LABEL_CHAPTER_DESCRIPTION: 'Paghulagway sa kapitulo',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Kahinumduman nga sulat (kapilian)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM:
    'Kini nga sulat igapakita sa katapusan sa kapitulo',
  LABEL_UPLOAD_PAGES: 'I-upload ang mga panid',
  LABEL_CONGRATULATION: 'Pahalipay',
  LABEL_SUCCESS_CREATING_SERIES_MSG:
    'Malampuson nimo nga nahimo ang imong serye.',
  LABEL_ADD_CHAPTER: 'dungag ug kapitulo',
  LABEL_CREATE_NEW_SERIES: 'Himo ug bag-o nga serye',
  LABEL_MAX_GENRES: 'Maka pili ka hantud 3 ka genre',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE: 'usa ka reserba nga pulong, dili magamit!',
  LABEL_ALLOW_FOR_TRANSLATION: 'Tugoti ang CrowdSourced na paghubad',
};

export default consoleCreateSeries;
