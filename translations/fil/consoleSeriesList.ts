import genres from "./commons/genres";
import topNav from "./commons/topNav";
import common from "./commons/common";
import deleteDialog from "./commons/deleteDialog";

const consoleSeriesList = {
  ...genres,
  ...topNav,
  ...common,
  ...deleteDialog,
  LABEL_COLUMN_ID: 'ID / Identidad',
  LABEL_ADD_NEW_SERIES: 'Magdagdag ng Bagong Serye',
  LABEL_COLUMN_TITLE: 'Pamagat',
  LABEL_COLUMN_LANGUAGE: 'Wika',
  LABEL_COLUMN_STATUS: 'Estado',
  LABEL_COLUMN_CHAPTERS: 'Mga kabanata',
  LABEL_COLUMN_PUBLISHED: 'Inilathala',
  LABEL_COLUMN_DESCRIPTION: 'Paglalarawan',
  LABEL_COLUMN_PAGES: 'Mga Pahina',
  LABEL_COLUMN_CREATED_DATE: 'Petsa ng pagkalikha',
  LABEL_NO_CHAPTERS: 'Walang Kabanata',
  LABEL_NO_SERIES: 'Walang Serye',
  LABEL_TRANSLATION: 'Salin',
  LABEL_EDIT: 'Baguhin',
  LABEL_DELETE: 'Burahin',
  LABEL_ROWS_PER_PAGE: 'Mga hanay bawat pahina:',
  LABEL_PRIVATE_VIEW: 'Pribadong Pagtingin',
  LABEL_SHARE_ACTION_MENU: 'Magbahagi/Mga katuwang',
  LABEL_SHARED_SERIES: 'Nakabahaging Serye',
  LABEL_COLUMN_ROLE: 'Papel',
};

export default consoleSeriesList;
