import topNav from './commons/topNav';
import common from './commons/common';
import deleteDialog from './commons/deleteDialog';

const consoleChapterList = {
  ...topNav,
  ...common,
  ...deleteDialog,
  LABEL_COLUMN_ID: 'आयडी',
  LABEL_ADD_NEW_CHAPTER: 'नवीन अध्याय जोडा',
  LABEL_COLUMN_TITLE: 'शीर्षक',
  LABEL_COLUMN_LANGUAGE: 'इंग्रजी',
  LABEL_COLUMN_STATUS: 'स्थिती',
  LABEL_COLUMN_CHAPTERS: 'अध्याय',
  LABEL_COLUMN_PUBLISHED: 'प्रकाशित',
  LABEL_COLUMN_DESCRIPTION: 'वर्णन',
  LABEL_COLUMN_PAGES: 'पृष्ठे',
  LABEL_COLUMN_CREATED_DATE: 'तारीख तयार केली',
  LABEL_NO_CHAPTERS: 'अध्याय नाही',
  LABEL_NO_SERIES: 'मालिका नाही',
  LABEL_TRANSLATION: 'भाषांतर',
  LABEL_EDIT: 'सुधारणे',
  LABEL_DELETE: 'हटवा',
  LABEL_ROWS_PER_PAGE: 'प्रति पृष्ठ पंक्ती:',
  LABEL_PRIVATE_VIEW: 'खाजगी दृश्य',
  LABEL_SHARE_ACTION_MENU: 'शेअर/सहयोगी',
};

export default consoleChapterList;
