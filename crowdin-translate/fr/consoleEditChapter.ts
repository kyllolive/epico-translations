import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
const consoleEditChapter = { ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: 'series',
  LABEL_CHAPTER: 'chapter',
  LABEL_EDIT: 'Edit',
  LABEL_EDIT_CHAPTER: 'Edit Chapter',
  LABEL_SUBMIT: 'Submit',
  LABEL_UPDATE: 'Update',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: 'Cover image is required!',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX: 'Chapter description must be at most 2500 characters',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED: 'Chapter description is required',
  FORM_VALIDATION_CHAPTER_NOTE_MAX: 'Chapter note must be at most 2500 characters',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: 'Published is required',
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
  LABEL_NOT_FOUND_MSG_1: 'If you think this epico chapter exists kindly contact our support with the given series ID',
  LABEL_NOT_FOUND_MSG_2: 'with language id of',
  LABEL_NOT_FOUND_MSG_3: 'and chapter ID of'
};
export default consoleEditChapter;