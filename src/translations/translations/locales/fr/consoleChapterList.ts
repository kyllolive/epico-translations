import topNav from './commons/topNav';
import common from './commons/common';
import deleteDialog from './commons/deleteDialog';

const consoleChapterList = {
  ...topNav,
  ...common,
  ...deleteDialog,
  LABEL_COLUMN_ID: 'IDENTIFIANT',
  LABEL_ADD_NEW_CHAPTER: 'Ajouter un nouveau chapitre',
  LABEL_COLUMN_TITLE: 'Titre',
  LABEL_COLUMN_LANGUAGE: 'Langue',
  LABEL_COLUMN_STATUS: 'Statut',
  LABEL_COLUMN_CHAPTERS: 'Chapitres',
  LABEL_COLUMN_PUBLISHED: 'Publié',
  LABEL_COLUMN_DESCRIPTION: 'La description',
  LABEL_COLUMN_PAGES: 'pages',
  LABEL_COLUMN_CREATED_DATE: 'Date de création',
  LABEL_NO_CHAPTERS: 'Aucun chapitre',
  LABEL_NO_SERIES: 'Aucune série',
  LABEL_TRANSLATION: 'Traduction',
  LABEL_EDIT: 'Éditer',
  LABEL_DELETE: 'Effacer',
  LABEL_ROWS_PER_PAGE: 'Lignes par page :',
  LABEL_PRIVATE_VIEW: 'Vue privée',
  LABEL_SHARE_ACTION_MENU: 'Partager/Collaborateurs',
};

export default consoleChapterList;
