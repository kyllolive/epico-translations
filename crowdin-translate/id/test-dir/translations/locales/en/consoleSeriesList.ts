import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import deleteDialog from './commons/deleteDialog';
const consoleSeriesList = { ...genres,
  ...topNav,
  ...common,
  ...deleteDialog,
  LABEL_COLUMN_ID: 'ID',
  LABEL_ADD_NEW_SERIES: 'Add New Series',
  LABEL_COLUMN_TITLE: 'Title',
  LABEL_COLUMN_LANGUAGE: 'Language',
  LABEL_COLUMN_STATUS: 'Status',
  LABEL_COLUMN_CHAPTERS: 'Chapters',
  LABEL_COLUMN_PUBLISHED: 'Published',
  LABEL_COLUMN_DESCRIPTION: 'Description',
  LABEL_COLUMN_PAGES: 'Pages',
  LABEL_COLUMN_CREATED_DATE: 'Created Date',
  LABEL_NO_CHAPTERS: 'No Chapters',
  LABEL_NO_SERIES: 'No Series',
  LABEL_TRANSLATION: 'Translation',
  LABEL_EDIT: 'Edit',
  LABEL_DELETE: 'Delete',
  LABEL_ROWS_PER_PAGE: 'Rows per page:',
  LABEL_PRIVATE_VIEW: 'Private View',
  LABEL_SHARE_ACTION_MENU: 'Share/Collaborators',
  LABEL_SHARED_SERIES: 'Shared Series',
  LABEL_COLUMN_ROLE: 'Role',
  LABEL_OTHER_VERSIONS_WILL_BE_DELETED: 'This is the last official copy, unofficial versions of this series will be deleted as well.'
};
export default consoleSeriesList;