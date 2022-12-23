import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
const consoleEditChapter = { ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: 'série',
  LABEL_CHAPTER: 'chapitre',
  LABEL_EDIT: 'Éditer',
  LABEL_EDIT_CHAPTER: 'Modifier le chapitre',
  LABEL_SUBMIT: 'Soumettre',
  LABEL_UPDATE: 'Mise à jour',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: "L'image de couverture est obligatoire !",
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX: 'Chapter description must be at most 2500 characters',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED: 'Chapter description is required',
  FORM_VALIDATION_CHAPTER_NOTE_MAX: 'La note de chapitre ne doit pas dépasser 2 500 caractères',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: 'La publication est obligatoire',
  FORM_VALIDATION_CHAPTER_TITLE_MAX: 'Chapter title must be at most 100 characters',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES: 'Sorry, only letters (a-z), numbers (0-9), special characters (\':?"!-_&()<>.,+=@#$%|) are allowed.',
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: 'Chapter title is required',
  FORM_VALIDATION_CHAPTER_PAGES_MIN: 'Must contain atleast 1 image',
  // END FORM VALIDATION
  LABEL_SINGLE_COVER_DROPBOX: 'Drop your cover photo here, or click to browse',
  LABEL_SINGLE_CHAPTER_COVER_SUB: 'For the best results on all devices, use an image that’s at least 360 x 360 pixels',
  LABEL_PUBLISH_CHAPTER: 'Publish chapter',
  LABEL_CHAPTER_TITLE: 'Chapter title',
  LABEL_CHAPTER_DESCRIPTION: 'Chapter description',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Chapter note (optional)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'This note will be shown at the end of the chapter',
  LABEL_UPLOAD_PAGES: 'Upload pages',
  LABEL_NOT_FOUND_HEADER: 'Uh oh, we were unable to find this chapter for edit',
  LABEL_NOT_FOUND_MSG_1: "Si vous pensez que ce chapitre épique existe, veuillez contacter notre support avec l'ID de série donné",
  LABEL_NOT_FOUND_MSG_2: "avec l'identifiant de langue de",
  LABEL_NOT_FOUND_MSG_3: 'et ID de chapitre de'
};
export default consoleEditChapter;