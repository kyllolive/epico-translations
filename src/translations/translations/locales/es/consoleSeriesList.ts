import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import deleteDialog from './commons/deleteDialog';

const consoleSeriesList = {
  ...genres,
  ...topNav,
  ...common,
  ...deleteDialog,
  LABEL_COLUMN_ID: 'IDENTIFICACIÓN',
  LABEL_ADD_NEW_SERIES: 'Agregar nueva serie',
  LABEL_COLUMN_TITLE: 'Título',
  LABEL_COLUMN_LANGUAGE: 'Idioma',
  LABEL_COLUMN_STATUS: 'Estado',
  LABEL_COLUMN_CHAPTERS: 'Capítulos',
  LABEL_COLUMN_PUBLISHED: 'Publicado',
  LABEL_COLUMN_DESCRIPTION: 'Descripción',
  LABEL_COLUMN_PAGES: 'Paginas',
  LABEL_COLUMN_CREATED_DATE: 'Fecha de creación',
  LABEL_NO_CHAPTERS: 'Sin capítulos',
  LABEL_NO_SERIES: 'Sin serie',
  LABEL_TRANSLATION: 'Traducción',
  LABEL_EDIT: 'Editar',
  LABEL_DELETE: 'Borrar',
  LABEL_ROWS_PER_PAGE: 'Filas por página:',
  LABEL_PRIVATE_VIEW: 'Vista privada',
  LABEL_SHARE_ACTION_MENU: 'Compartir/Colaboradores',
  LABEL_SHARED_SERIES: 'Serie compartida',
  LABEL_COLUMN_ROLE: 'Role',
};

export default consoleSeriesList;
