import topNav from './commons/topNav';
import common from './commons/common';
import dashboard from './dashboard';

const settings = {
  ...topNav,
  ...common,
  ...dashboard,
  LABEL_HEADER_SETTINGS: 'Ajustes',
  LABEL_SUB_HEADER_SECURITY: 'Seguridad',
  LABEL_CHANGE_PASSWORD: 'Cambia la contraseña',
  LABEL_CHANGE_USERNAME: 'Cambie el nombre de usuario',
  LABEL_DELETE_ACCOUNT: 'Borrar mi cuenta',
  LABEL_DELETE_ACCOUNT_BODY: `
  This is permanent. When you delete your Epico account, you won't ser capaz de recuperar el contenido o la información que'he compartido en Epico. Eliminar su cuenta eliminará permanentemente su perfil, comentarios y publicaciones en el muro,
  junto con cualquier serie y capítulo que hayas creado.`,
  ETIQUETA_CONTRASEÑA: 'Clave',
  FORM_VALIDATION_OLD_PASSWORD_REQUIRED: 'Se requiere contraseña actual',
  FORM_VALIDATION_NEW_PASSWORD_REQUIRED: 'Se requiere una nueva contraseña',
  FORM_VALIDATION_NEW_PASSWORD_MIN: 'Debe tener más de 12 caracteres',
  LABEL_CHANGE_PASSWORD_SUCCESS_MSG: 'Su contraseña fue actualizada con éxito',
  LABEL_CHANGE_PASSWORD_INCORRECT_PASSWORD_MSG: 'Contraseña incorrecta',
  LABEL_CHANGE_PASSWORD_LIMIT_EXCEEDED_MSG:
    'Limit exceeded please try again later',
  LABEL_CHANGE_PASSWORD_UNABLE_TO_PROCESS: 'Unable to process your request',
  LABEL_OLD_PASSWORD: 'Current password',
  LABEL_NEW_PASSWORD: 'New password',
  LABEL_UPDATE_PASSWORD: 'Update password',
  LABEL_NEW_USERNAME: 'New username',
  LABEL_CHANGE_USERNAME_SUCCESS_MSG: 'Your username was successfully updated',
  FORM_VALIDATION_USERNAME_MATCHES:
    'Lo sentimos, solo se permiten letras minúsculas (a-z), números (0-9), caracteres especiales (.-_) sin espacios.',
  FORM_VALIDATION_USERNAME_REQUIRED: 'Se requiere nombre de usuario',
  LABEL_PAYMENT_METHOD: 'Método de pago',
  LABEL_ACCEPT_PATMENTS_HEADER: 'Aceptar pagos',
  LABEL_DONATION_SETTINGS_HEADER: 'Configuración de donaciones',
  LABEL_CURRENCY_SUB_HEADER: 'Divisa',
  LABEL_CURRENCY:
    'Choose the currency you want your supporters to pay. If your home currency isn’t listed, your payment provider will automatically convert it for you.',
  LABEL_MIN_DONATION_HEADER: 'Set Minimum Donation Price',
  LABEL_THANK_YOU_MESSAGE_HEADER: 'Auto Thank You Message',
  LABEL_THANK_YOU:
    'Un mensaje que se enviará cuando alguien haga una donación. También tendrás la oportunidad de enviar uno personal.',
  LABEL_SUBMIT_PAYMENT_SETTING: 'Enviar',
  FORM_VALIDATION_THANK_YOU: 'Muchas gracias por su apoyo',
  FORM_VALIDATION_UPDATE_SUCCESS:
    '¡Configuración de donación actualizada con éxito!',
  LABEL_VERIFY_PAYPAL:
    'Verifique el correo electrónico que le envió Paypal para completar la incorporación y comenzar a aceptar pagos.',
  LABEL_PAYPAL:
    'Paypal debe estar conectado para recibir donaciones de otros usuarios!',
  LABEL_DISAGREE: 'Discrepar',
  LABEL_AGREE: 'Aceptar',
  LABEL_SETTINGS_LANGUAGE: 'Ajustes Idioma',
  LABEL_PAYMENT_ENABLED: 'Activado',
  LABEL_PAYMENT_DISABLED: 'Desactivado',
  LABEL_ACCEPT_DESCRIPTION:
    'Acepta tarjetas de crédito y saldo de PayPal. Pagado a su PayPal al instante.',
};

export default settings;
