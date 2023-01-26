import topNav from './commons/topNav';
import common from './commons/common';
import deleteDialog from './commons/deleteDialog';
const consoleChapterList = { ...topNav,
  ...common,
  ...deleteDialog,
  LABEL_COLUMN_ID: 'ID',
  LABEL_ADD_NEW_CHAPTER: 'Idugang ang Bag-ong Kapitulo',
  LABEL_COLUMN_TITLE: 'Titulo',
  LABEL_COLUMN_LANGUAGE: 'Pinulongan',
  LABEL_COLUMN_STATUS: 'Status',
  LABEL_COLUMN_CHAPTERS: 'Mga kapitulo',
  LABEL_COLUMN_PUBLISHED: 'Gipatik',
  LABEL_COLUMN_DESCRIPTION: 'Deskripsyon',
  LABEL_COLUMN_PAGES: 'Mga panid',
  LABEL_COLUMN_CREATED_DATE: 'Gibuhat nga Petsa',
  LABEL_NO_CHAPTERS: 'Walay mga Kapitulo',
  LABEL_NO_SERIES: 'Walay Serye',
  LABEL_TRANSLATION: 'Paghubad',
  LABEL_EDIT: 'Edit',
  LABEL_DELETE: 'Pagtangtang',
  LABEL_ROWS_PER_PAGE: 'Mga laray kada panid:',
  LABEL_PRIVATE_VIEW: 'Pribado nga Panglantaw',
  LABEL_SHARE_ACTION_MENU: 'Share/Mga Magtinabangay'
};
export default consoleChapterList;