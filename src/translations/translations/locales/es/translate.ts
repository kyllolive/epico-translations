import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const translate = {
  ...topNav,
  ...common,
  ...authModal,
  //translate page
  SCANLATE_BANNER_HEADER: 'Hello Scanlators!',
  SCANLATE_BANNER_CONTENT:
    'Apoye a los creadores ayudándolos a llegar a un mercado más amplio Obtenga acceso a todos los cómics de forma gratuita Trabaje con los creadores en un entorno legal Búsqueda de diálogo/manuscrito Glosario incorporado para cambiar de equipo',
  SCANLATE_BANNER_HEADER_2: 'Tus cómics merecen ser leídos por el mundo',
  SCANLATE_BANNER_CONTENT_2: `Servicio de traducción colaborativo para cómics, ¿no pudo encontrar su idioma? ¡Mandanos un mensaje!`,
  LABEL_CONTENT_HEADER: 'Aquí puedes escanear tu serie favorita.',
  LABEL_SEARCH_SERIES: 'Serie de búsqueda',
  LABEL_LANGUAGE: 'Idioma',
  LABEL_ALL: 'Todos',
  LABEL_NO_AVAILABLE_SERIES: 'No hay series disponibles para traducir',
  LABEL_LOADING: 'Cargando...',
  LABEL_PREVIEW: 'Avance',
  LABEL_SAVE: 'Ahorrar',
  LABEL_GUIDE: 'Guía',
  LABEL_TRANSLATE: 'escanear',
  LABEL_TO: 'a',
  LABEL_CREATED_BY: 'creado por',
  LABEL_GLOSSARY: 'Glosario',
  LABEL_CREDITS: 'Créditos',
  LABEL_SUBMISSION_SUCCESS: '¡Su presentación se ha grabado!',
  LABEL_SUBMISSION_ERROR: 'Hay un error en tu envío',

  //Pages Tab//
  LABEL_PAGE: 'Page:',
  LABEL_PAGES: 'Pages',
  LABEL_DOWNLOAD: 'Download',
  LABEL_OVERRIDE: 'override with redrawn image?',
  LABEL_SELECT_CLEAN_VERSIONS: 'Select clean versions',
  LABEL_SELECT_VERSIONS: 'Select versions...',
  LABEL_NO_UPLOADED_CLEAN_VERSION: 'No uploaded clean version',
  LABEL_UPLOAD_CLEAN_IMAGE: 'upload clean image',
  LABEL_DOWNLOAD_CLEAN_IMAGE: 'download clean image',
  LABEL_TRANSLATION: 'Scanlation',
  LABEL_ADD_TEXT: 'Add Text',
  //Comment Tab
  LABEL_COMMENT: 'Comentario',
  LABEL_COMMENT_HERE: 'Comenta aquí...',
  LABEL_MORE_COMMENTS: 'Más comentarios',
  LABEL_SUBMIT: 'Enviar',
  LABEL_CANCEL: 'Cancelar',
  LABEL_REPLY: 'Respuesta',
  LABEL_UPDATE: 'Actualizar',
  LABEL_HOW_TO_COMMENT: 'como comentar',
  LABEL_HOW_TO_COMMENT_1: 'Seleccione un área para comentar',
  LABEL_HOW_TO_COMMENT_2: 'Arrastre para resaltar el área deseada',
  LABEL_HOW_TO_COMMENT_3:
    'Click the text box that says Write a comment, type your comment, and click submit.',
  //Description Tab
  LABEL_DESCRIPTION: 'Description',
  LABEL_SERIES: 'Series',
  LABEL_CHAPTER: 'Chapter',
  LABEL_SWITCH_LANGUAGE: 'Switch Language',
  LABEL_SERIES_TITLE: 'Series Title',
  LABEL_SERIES_DESCRIPTION: 'Series Description',
  LABEL_CHAPTER_TITLE: 'Chapter Title',
  LABEL_CHAPTER_DESCRIPTION: 'Chapter Description',
  LABEL_CHAPTER_AUTHOR_NOTE: `Chapter Author's Note`,
  //SFX Tab
  LABEL_UPLOAD: 'Upload',
  //History Tab
  LABEL_HISTORY: 'Historia',
  LABEL_MODIFIED_BY: 'modificado por',
  LABEL_LATEST: 'Más reciente',
  LABEL_LOAD: 'Carga',
  LABEL_PUBLISH: 'Publicar',
  //Credits Tab
  LABEL_CONTRIBUTORS: 'Contributors',
  LABEL_NO_CONTRIBUTORS: 'No Contributors',

  //Change
  LABEL_CHANGE_PAGE:
    'There are unsaved changes. Are you sure you want to move away? Changes will be lost',
};

export default translate;
