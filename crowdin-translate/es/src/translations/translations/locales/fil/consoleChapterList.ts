import topNav from './commons/topNav';
import common from './commons/common';
import deleteDialog from './commons/deleteDialog';
const consoleChapterList = { ...topNav,
  ...common,
  ...deleteDialog,
  LABEL_COLUMN_ID: 'ID',
  LABEL_ADD_NEW_CHAPTER: 'Magdagdag ng Bagong Kabanata',
  LABEL_COLUMN_TITLE: 'Pamagat',
  LABEL_COLUMN_LANGUAGE: 'Wika',
  LABEL_COLUMN_STATUS: 'Katayuan',
  LABEL_COLUMN_CHAPTERS: 'Mga kabanata',
  LABEL_COLUMN_PUBLISHED: 'Nai-publish',
  LABEL_COLUMN_DESCRIPTION: 'Paglalarawan',
  LABEL_COLUMN_PAGES: 'Mga pahina',
  LABEL_COLUMN_CREATED_DATE: 'Petsa ng Paggawa',
  LABEL_NO_CHAPTERS: 'Walang mga Kabanata',
  LABEL_NO_SERIES: 'Walang Serye',
  LABEL_TRANSLATION: 'Pagsasalin',
  LABEL_EDIT: 'I-edit',
  LABEL_DELETE: 'Tanggalin',
  LABEL_ROWS_PER_PAGE: 'Mga hilera bawat pahina:',
  LABEL_PRIVATE_VIEW: 'Pribadong View',
  LABEL_SHARE_ACTION_MENU: 'Share/Collaborators'
};
export default consoleChapterList;