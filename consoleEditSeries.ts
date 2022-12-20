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
  LABEL_SERIES: 'series',
  LABEL_CHAPTER: 'chapter',
  LABEL_EDIT: 'Edit',
  LABEL_EDIT_SERIES: 'Edit Series',
  LABEL_UPDATE: 'Update',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX:
    'Series description title must be at most 2500 characters',
  FORM_VALIDATION_DESCRIPTION_REQUIRED: 'Series description is required',
  FORM_VALIDATION_GENRE_REQUIRED: 'Genre is required',
  FORM_VALIDATION_GENRE_MAX:
    'Genre field must have less than or equal to 3 items',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: 'Language is required',
  FORM_VALIDATION_STATUS_REQUIRED: 'Series Status Required',
  FORM_VALIDATION_TITLE_MAX: 'Series title must be at most 100 characters',
  FORM_VALIDATION_TITLE_MATCHES:
    'Sorry, only letters (a-z), numbers (0-9), special characters (\':?"!-_&()<>.,+=@#$%|) are allowed.',
  FORM_VALIDATION_TITLE_REQUIRED: 'Series title is required',
  FORM_VALIDATION_COVER_REQUIRED: 'Cover image is required!',
  FORM_VALIDATION_BANNER_REQUIRED: 'Banner image is required!',
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX: 'Drop your banner here, or click to browse',
  LABEL_SINGLE_COVER_DROPBOX: 'Drop your cover photo here, or click to browse',
  LABEL_SINGLE_BANNER_SUB:
    'For the best results on all devices, use an image that’s at least 1080 x 360 pixels',
  LABEL_SINGLE_COVER_SUB:
    'For the best results on all devices, use an image that’s at least 600 x 400 pixels',
  LABEL_SERIES_TITLE: 'Series title',
  LABEL_LANGUAGE: 'Languages',
  LABEL_PRIMARY_GENRE: 'Primary genre',
  LABEL_SECONDARY_GENRE: 'Secondary genre',
  LABEL_SERIES_STATUS: 'Series Status',
  LABEL_STATUS_ONGOING: 'Ongoing',
  LABEL_STATUS_COMPLETED: 'Completed',
  LABEL_SERIES_DESCRIPTION: 'Series description',
  LABEL_PUBLISH_CHAPTER: 'Publish chapter',
  LABEL_CHAPTER_TITLE: 'Chapter title',
  LABEL_CHAPTER_DESCRIPTION: 'Chapter description',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Chapter note (optional)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM:
    'This note will be shown at the end of the chapter',
  LABEL_NOT_FOUND_HEADER: 'Uh oh, we were unable to find this series for edit',
  LABEL_NOT_FOUND_MSG_1:
    'If you think this epico series exists kindly contact our support with the given series ID',
  LABEL_NOT_FOUND_MSG_2: 'with language id of',
  LABEL_MAX_GENRES: 'You can choose up to 3 genres',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE: 'is a reserve word, cannot be used!',
  LABEL_ALLOW_FOR_TRANSLATION: 'Allow CrowdSourced Translation',
};

export default consoleEditSeries;
