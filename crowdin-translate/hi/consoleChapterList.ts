import topNav from './commons/topNav';
import common from './commons/common';
import deleteDialog from './commons/deleteDialog';

const consoleChapterList = {
  ...topNav,
  ...common,
  ...deleteDialog,
  LABEL_COLUMN_ID: 'पहचान',
  LABEL_ADD_NEW_CHAPTER: 'नया अध्याय जोड़ें',
  LABEL_COLUMN_TITLE: 'शीर्षक',
  LABEL_COLUMN_LANGUAGE: 'भाषा',
  LABEL_COLUMN_STATUS: 'दर्जा',
  LABEL_COLUMN_CHAPTERS: 'अध्याय',
  LABEL_COLUMN_PUBLISHED: 'प्रकाशित',
  LABEL_COLUMN_DESCRIPTION: 'विवरण',
  LABEL_COLUMN_PAGES: 'पृष्ठों',
  LABEL_COLUMN_CREATED_DATE: 'सृजित दिनांक',
  LABEL_NO_CHAPTERS: 'कोई अध्याय नहीं',
  LABEL_NO_SERIES: 'कोई श्रृंखला नहीं',
  LABEL_TRANSLATION: 'अनुवाद',
  LABEL_EDIT: 'संपादन करना',
  LABEL_DELETE: 'मिटाना',
  LABEL_ROWS_PER_PAGE: 'प्रति पृष्ठ पंक्तियाँ:',
  LABEL_PRIVATE_VIEW: 'निजी दृश्य',
  LABEL_SHARE_ACTION_MENU: 'शेयर/सहयोगी',
};

export default consoleChapterList;
