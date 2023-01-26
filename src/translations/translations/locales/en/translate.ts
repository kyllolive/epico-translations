import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const translate = {
  ...topNav,
  ...common,
  ...authModal,
  //translate page
  SCANLATE_BANNER_HEADER: 'Hello Scanlators!',
  SCANLATE_BANNER_CONTENT:
    'Support creators by helping them reach a larger market Gain access to all comics for free Work with creators in a legal setting Searchable dialogue/manuscript Built in glossary for changing teams',
  SCANLATE_BANNER_HEADER_2: 'Your Comics Deserves To Be Read By The World',
  SCANLATE_BANNER_CONTENT_2: `Crowdsourced translation service for comics, couldn't find your language? Send us a message!`,
  LABEL_CONTENT_HEADER: 'Here you can scanlate your favorite Series.',
  LABEL_SEARCH_SERIES: 'Search Series',
  LABEL_LANGUAGE: 'Language',
  LABEL_ALL: 'All',
  LABEL_NO_AVAILABLE_SERIES: 'No Available Series for Translation',
  LABEL_LOADING: 'Loading...',
  LABEL_PREVIEW: 'Preview',
  LABEL_SAVE: 'Save',
  LABEL_GUIDE: 'Guide',
  LABEL_TRANSLATE: 'Scanlate',
  LABEL_TO: 'to',
  LABEL_CREATED_BY: 'created by',
  LABEL_GLOSSARY: 'Glossary',
  LABEL_CREDITS: 'Credits',
  LABEL_SUBMISSION_SUCCESS: 'Your Submission has been saved!',
  LABEL_SUBMISSION_ERROR: 'There is an error in your submission',

  //Pages Tab//
  LABEL_PAGE: 'Page:',
  LABEL_PAGES: 'Pages',
  LABEL_DOWNLOAD: 'Download',
  LABEL_OVERRIDE: 'override with redrawn image?',
  LABEL_SELECT_CLEAN_VERSIONS: 'Select clean versions',
  LABEL_SELECT_VERSIONS: 'Select versions...',
  LABEL_NO_UPLOADED_CLEAN_VERSION: 'No uploaded clean version',
  LABEL_UPLOAD_CLEAN_IMAGE: 'upload clean image',
  LABEL_DOWNLOAD_CLEAN_IMAGE: 'download clean image',
  LABEL_TRANSLATION: 'Scanlation',
  LABEL_ADD_TEXT: 'Add Text',
  //Comment Tab
  LABEL_COMMENT: 'Comment',
  LABEL_COMMENT_HERE: 'Comment here...',
  LABEL_MORE_COMMENTS: 'More Comments',
  LABEL_SUBMIT: 'Submit',
  LABEL_CANCEL: 'Cancel',
  LABEL_REPLY: 'Reply',
  LABEL_UPDATE: 'Update',
  LABEL_HOW_TO_COMMENT: 'How to comment',
  LABEL_HOW_TO_COMMENT_1: 'Select an area to comment on',
  LABEL_HOW_TO_COMMENT_2: 'Drag to highlight the desired area',
  LABEL_HOW_TO_COMMENT_3:
    'Click the text box that says Write a comment, type your comment, and click submit.',
  //Description Tab
  LABEL_DESCRIPTION: 'Description',
  LABEL_SERIES: 'Series',
  LABEL_CHAPTER: 'Chapter',
  LABEL_SWITCH_LANGUAGE: 'Switch Language',
  LABEL_SERIES_TITLE: 'Series Title',
  LABEL_SERIES_DESCRIPTION: 'Series Description',
  LABEL_CHAPTER_TITLE: 'Chapter Title',
  LABEL_CHAPTER_DESCRIPTION: 'Chapter Description',
  LABEL_CHAPTER_AUTHOR_NOTE: `Chapter Author's Note`,
  //SFX Tab
  LABEL_UPLOAD: 'Upload',
  //History Tab
  LABEL_HISTORY: 'History',
  LABEL_MODIFIED_BY: 'modified by',
  LABEL_LATEST: 'Latest',
  LABEL_LOAD: 'Load',
  LABEL_PUBLISH: 'Publish',
  //Credits Tab
  LABEL_CONTRIBUTORS: 'Contributors',
  LABEL_NO_CONTRIBUTORS: 'No Contributors',

  //Change
  LABEL_CHANGE_PAGE:
    'There are unsaved changes. Are you sure you want to move away? Changes will be lost',
  LABEL_OFFICIAL_CLEAN_VERSION: 'Official Version',
  LABEL_MY_CLEAN_VERSION: 'my version',
  LABEL_VERSION: 'version',
};

export default translate;
