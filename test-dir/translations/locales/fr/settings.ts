import topNav from './commons/topNav';
import common from './commons/common';
import dashboard from './dashboard';

const settings = {
  ...topNav,
  ...common,
  ...dashboard,
  LABEL_HEADER_SETTINGS: 'Réglages',
  LABEL_SUB_HEADER_SECURITY: 'Sécurité',
  LABEL_CHANGE_PASSWORD: 'Changer le mot de passe',
  LABEL_CHANGE_USERNAME: "Changer le nom d'utilisateur",
  LABEL_DELETE_ACCOUNT: 'Supprimer mon compte',
  LABEL_DELETE_ACCOUNT_BODY: `
  This is permanent. When you delete your Epico account, you won'ne pas être en mesure de récupérer le contenu ou les informations que vous'ai partagé sur Epico. La suppression de votre compte supprimera définitivement votre profil, vos commentaires et vos publications sur le mur,
  ainsi que toute série et tout chapitre que vous avez créés.`,
  LABEL_PASSWORD: 'Mot de passe',
  FORM_VALIDATION_OLD_PASSWORD_REQUIRED: 'Le mot de passe actuel est requis',
  FORM_VALIDATION_NEW_PASSWORD_REQUIRED: 'Un nouveau mot de passe est requis',
  FORM_VALIDATION_NEW_PASSWORD_MIN: 'Doit contenir plus de 12 caractères',
  LABEL_CHANGE_PASSWORD_SUCCESS_MSG:
    'Votre mot de passe a été mis à jour avec succès',
  LABEL_CHANGE_PASSWORD_INCORRECT_PASSWORD_MSG: 'Mot de passe incorrect',
  LABEL_CHANGE_PASSWORD_LIMIT_EXCEEDED_MSG:
    'Limite dépassée veuillez réessayer plus tard',
  LABEL_CHANGE_PASSWORD_UNABLE_TO_PROCESS:
    'Impossible de traiter votre demande',
  LABEL_OLD_PASSWORD: 'Mot de passe actuel',
  LABEL_NEW_PASSWORD: 'Nouveau mot de passe',
  LABEL_UPDATE_PASSWORD: 'Mettre à jour le mot de passe',
  LABEL_NEW_USERNAME: "Nouveau nom d'utilisateur",
  LABEL_CHANGE_USERNAME_SUCCESS_MSG:
    "Votre nom d'utilisateur a été mis à jour avec succès",
  FORM_VALIDATION_USERNAME_MATCHES:
    'Désolé, seules les lettres minuscules (a-z), les chiffres (0-9), les caractères spéciaux (.-_) sans espace sont autorisés.',
  FORM_VALIDATION_USERNAME_REQUIRED: "Nom d'utilisateur est nécessaire",
  LABEL_PAYMENT_METHOD: 'Mode de paiement',
  LABEL_ACCEPT_PATMENTS_HEADER: 'Accepter les paiements',
  LABEL_DONATION_SETTINGS_HEADER: 'Paramètres de don',
  LABEL_CURRENCY_SUB_HEADER: 'Devise',
  LABEL_CURRENCY:
    'Choose the currency you want your supporters to pay. If your home currency isn’t listed, your payment provider will automatically convert it for you.',
  LABEL_MIN_DONATION_HEADER: 'Set Minimum Donation Price',
  LABEL_THANK_YOU_MESSAGE_HEADER: 'Auto Thank You Message',
  LABEL_THANK_YOU:
    "Un message à envoyer lorsque quelqu'un fait un don. Vous aurez également la possibilité d'en envoyer un personnel.",
  LABEL_SUBMIT_PAYMENT_SETTING: 'Soumettre',
  FORM_VALIDATION_THANK_YOU: 'Merci beaucoup pour ton soutien',
  FORM_VALIDATION_UPDATE_SUCCESS: 'Paramètres de don mis à jour avec succès !',
  LABEL_VERIFY_PAYPAL:
    "Veuillez vérifier l'e-mail qui vous a été envoyé par Paypal pour terminer l'intégration et commencer à accepter les paiements.",
  LABEL_PAYPAL:
    'Paypal doit être connecté pour recevoir les dons des autres utilisateurs !',
  LABEL_DISAGREE: 'Être en désaccord',
  LABEL_AGREE: 'Accepter',
  LABEL_SETTINGS_LANGUAGE: 'Paramètres Langue',
  LABEL_PAYMENT_ENABLED: 'Activé',
  LABEL_PAYMENT_DISABLED: 'Handicapé',
  LABEL_ACCEPT_DESCRIPTION:
    'Acceptez les cartes de crédit et le solde PayPal. Payé sur votre PayPal instantanément.',
};

export default settings;
