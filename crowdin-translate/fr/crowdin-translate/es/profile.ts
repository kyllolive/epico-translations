import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import donationBox from './commons/donationBox';
const profile = { ...donationBox,
  ...genres,
  ...topNav,
  ...common,
  ...authModal,
  NEW_COVER_ERROR_LABEL: '¡Ups! No pudimos guardar tu nueva portada.',
  LABEL_SAVE: 'Ahorrar',
  LABEL_CANCEL: 'Cancelar',
  LABEL_SUCCESS_UPDATE_PROFILE: 'Tuvimos éxito al actualizar su perfil',
  LABEL_UNABLE_SAVE_CHANGES: '¡UH oh! No pudimos guardar sus cambios',
  LABEL_ADD_ANOTHER: 'Agrega otro',
  LABEL_EDIT_PROFILE: 'Editar perfil',
  LABEL_JOINED_DATE: 'Fecha de ingreso',
  LABEL_UPDATE_PROFILE_INFORMATION: 'Información de perfil de actualización rápida',
  LABEL_CHANGE_PROFILE_PICTURE: 'Cambiar foto de perfil',
  LABEL_ERROR_NEW_PROFILE: '¡Ups! No pudimos guardar su nuevo perfil',
  LABEL_ERROR_NEW_COVER: '¡Ups! No pudimos guardar tu nueva portada.',
  LABEL_ERROR_UPLOAD_COVER: '¡Ups! No pudimos subir tu portada'
};
export default profile;