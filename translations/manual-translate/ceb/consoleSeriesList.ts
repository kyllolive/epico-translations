import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import deleteDialog from './commons/deleteDialog';

const consoleSeriesList = {
  ...genres,
  ...topNav,
  ...common,
  ...deleteDialog,
  LABEL_COLUMN_ID: 'ID',
  LABEL_ADD_NEW_SERIES: 'Dugang ug bag-o na serye',
  LABEL_COLUMN_TITLE: 'Titulo',
  LABEL_COLUMN_LANGUAGE: 'Sinultian',
  LABEL_COLUMN_STATUS: 'Kahimtang',
  LABEL_COLUMN_CHAPTERS: 'Kapitulo',
  LABEL_COLUMN_PUBLISHED: 'Na-igmantala',
  LABEL_COLUMN_DESCRIPTION: 'Paghulagway',
  LABEL_COLUMN_PAGES: 'Mga panid',
  LABEL_COLUMN_CREATED_DATE: 'Petsa sa pagbuhat',
  LABEL_NO_CHAPTERS: 'Walay kapitulo',
  LABEL_NO_SERIES: 'Walay Serye',
  LABEL_TRANSLATION: 'Paghubad',
  LABEL_EDIT: 'I-edit',
  LABEL_DELETE: 'I-tangtang',
  LABEL_ROWS_PER_PAGE: 'Mga laray matag panid:',
  LABEL_PRIVATE_VIEW: 'Pribado nga Pagtan-aw',
  LABEL_SHARE_ACTION_MENU: 'Pagpakigbahin / Pakigtambayayong',
  LABEL_SHARED_SERIES: 'Gibahinbahin nga Serye',
  LABEL_COLUMN_ROLE: 'Papel',
};

export default consoleSeriesList;
