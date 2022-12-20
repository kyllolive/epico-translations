import topNav from './commons/topNav';
import common from './commons/common';
import deleteDialog from './commons/deleteDialog';

const consoleChapterList = {
  ...topNav,
  ...common,
  ...deleteDialog,
  LABEL_COLUMN_ID: 'ID',
  LABEL_ADD_NEW_CHAPTER: `Add New Chapter
  Pagdugang Bag-ong Kapitulo`,
  LABEL_COLUMN_TITLE: 'Titulo',
  LABEL_COLUMN_LANGUAGE: 'Sinultian',
  LABEL_COLUMN_STATUS: 'Kahimtang',
  LABEL_COLUMN_CHAPTERS: 'Mga Kapitulo',
  LABEL_COLUMN_PUBLISHED: 'Gipatik',
  LABEL_COLUMN_DESCRIPTION: 'Paghulagway',
  LABEL_COLUMN_PAGES: 'Mga panid',
  LABEL_COLUMN_CREATED_DATE: 'Petsa sa Pagbuhat',
  LABEL_NO_CHAPTERS: `Wala'y Mga Kapitulo`,
  LABEL_NO_SERIES: 'Wala’y Series',
  LABEL_TRANSLATION: 'Paghubad',
  LABEL_EDIT: 'I-edit',
  LABEL_DELETE: 'I-tangtang',
  LABEL_ROWS_PER_PAGE: 'Mga laray matag panid:',
  LABEL_PRIVATE_VIEW: 'Pribado nga Pagtan-aw',
  LABEL_SHARE_ACTION_MENU: 'Pagpakigbahin / Pakigtambayayong',
};

export default consoleChapterList;
