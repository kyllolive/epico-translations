import topNav from './commons/topNav';
import common from './commons/common';
import consoleSeriesList from './consoleSeriesList';
const dashboard = { ...topNav,
  ...common,
  ...consoleSeriesList,
  LABEL_HOME: 'Hogar',
  LABEL_LIVE: 'Su cuenta está activa en',
  LABEL_NOTIFICATIONS: 'Notificaciones',
  LABEL_FOLLOWERS: 'Seguidores',
  LABEL_SERIES_FOLLOWED: 'Serie seguida',
  LABEL_PAYMENT_HISTORY: 'historial de pagos',
  LABEL_PAYMENT_METHOD: 'Método de pago',
  LABEL_EDIT_PROFILE: 'Editar perfil',
  LABEL_MANAGE_SERIES: 'Administrar serie',
  LABEL_CHANGE_USERNAME: 'Cambie el nombre de usuario',
  LABEL_CHANGE_PASSWORD: 'Cambia la contraseña',
  LABEL_DELETE_ACCOUNT: 'Borrar mi cuenta',
  LABEL_LANGUAGES: 'Idiomas',
  LABEL_EMPTY: 'Aquí no hay nada todavía...',
  LABEL_DONATED: 'donado',
  LABEL_RECENT_DONATIONS: 'Donaciones recientes',
  LABEL_SUGGESTIONS: 'Sugerencias',
  LABEL_DASHBOARD: 'Tablero',
  LABEL_COVER_PAGE: 'Agregar una página de portada',
  LABEL_COVER_PAGE_DESCRIPTION: `Páginas con una imagen de portada
  ¡Luce más personal!`,
  LABEL_UPLOAD_IMAGE: 'Subir una imagen',
  LABEL_UPLOAD_SERIES: 'Subir una serie',
  LABEL_UPLOAD_SERIES_DESCRIPTION: 'Agrega algunos trabajos recientes a tu galería.',
  LABEL_CONNECT_PAYMENT_METHOD: 'Conectar método de pago',
  LABEL_PAYMENT_METHOD_DESCRIPTION: 'Conecte su cuenta de PayPal',
  LABEL_SETUP_PAYMENT_BUTTON: 'Pago de configuración',
  LABEL_ABOUT_ME: 'Sobre mí',
  LABEL_ABOUT_ME_DESCRIPTION: 'Que todos sepan de qué se trata.',
  LABEL_ABOUT_ME_BUTTON: 'Configuración Acerca de mí',
  LABEL_MY_SUPPORT: 'Mi apoyo'
};
export default dashboard;