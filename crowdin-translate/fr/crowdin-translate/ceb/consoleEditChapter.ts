import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
const consoleEditChapter = { ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: 'sunod-sunod nga',
  LABEL_CHAPTER: 'kapitulo',
  LABEL_EDIT: 'Edit',
  LABEL_EDIT_CHAPTER: 'Usba ang Kapitulo',
  LABEL_SUBMIT: 'Isumite',
  LABEL_UPDATE: 'Update',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: 'Kinahanglan ang cover image!',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX: 'Ang paghulagway sa kapitulo kinahanglan nga labing daghan sa 2500 ka mga karakter',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED: 'Ang paghulagway sa kapitulo gikinahanglan',
  FORM_VALIDATION_CHAPTER_NOTE_MAX: 'Ang nota sa kapitulo kinahanglan nga labing daghan sa 2500 ka mga karakter',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: 'Gikinahanglan ang pagpatik',
  FORM_VALIDATION_CHAPTER_TITLE_MAX: 'Ang ulohan sa kapitulo kinahanglang labing daghan sa 100 ka karakter',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES: 'Pasensya, mga letra (a-z), numero (0-9), espesyal nga karakter (\':?"!-_&()<>.,+=@#$%|) ang gitugotan.',
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: 'Ang ulohan sa kapitulo gikinahanglan',
  FORM_VALIDATION_CHAPTER_PAGES_MIN: 'Kinahanglan adunay labing menos 1 nga imahe',
  // END FORM VALIDATION
  LABEL_SINGLE_COVER_DROPBOX: 'Ihulog ang imong litrato sa hapin dinhi, o i-klik aron mag-browse',
  LABEL_SINGLE_CHAPTER_COVER_SUB: 'Para sa pinakanindot nga resulta sa tanang device, gamita ang hulagway nga labing menos 360 x 360 pixels',
  LABEL_PUBLISH_CHAPTER: 'Imantala ang kapitulo',
  LABEL_CHAPTER_TITLE: 'Ulohan sa kapitulo',
  LABEL_CHAPTER_DESCRIPTION: 'Deskripsyon sa kapitulo',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'nota sa kapitulo (opsyonal)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'Kini nga mubo nga sulat ipakita sa katapusan sa kapitulo',
  LABEL_UPLOAD_PAGES: 'Pag-upload og mga panid',
  LABEL_NOT_FOUND_HEADER: 'Uh oh, wala namo makit-an kini nga kapitulo para i-edit',
  LABEL_NOT_FOUND_MSG_1: 'Kung sa imong hunahuna adunay kini nga epico nga kapitulo palihug kontaka ang among suporta sa gihatag nga serye nga ID',
  LABEL_NOT_FOUND_MSG_2: 'uban sa pinulongan id sa',
  LABEL_NOT_FOUND_MSG_3: 'ug chapter ID sa'
};
export default consoleEditChapter;