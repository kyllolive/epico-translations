import topNav from './commons/topNav';
import common from './commons/common';
import consoleSeriesList from './consoleSeriesList';

const dashboard = {
  ...topNav,
  ...common,
  ...consoleSeriesList,
  LABEL_HOME: 'Maison',
  LABEL_LIVE: 'Votre compte est actif sur',
  LABEL_NOTIFICATIONS: 'Avis',
  LABEL_FOLLOWERS: 'Suiveurs',
  LABEL_SERIES_FOLLOWED: 'Série suivie',
  LABEL_PAYMENT_HISTORY: 'historique de paiement',
  LABEL_PAYMENT_METHOD: 'Mode de paiement',
  LABEL_EDIT_PROFILE: 'Editer le profil',
  LABEL_MANAGE_SERIES: 'Gérer la série',
  LABEL_CHANGE_USERNAME: "Changer le nom d'utilisateur",
  LABEL_CHANGE_PASSWORD: 'Changer le mot de passe',
  LABEL_DELETE_ACCOUNT: 'Supprimer mon compte',
  LABEL_LANGUAGES: 'Langues',
  LABEL_EMPTY: "Rien ici pour l'instant...",
  LABEL_DONATED: 'Donné',
  LABEL_RECENT_DONATIONS: 'Dons récents',
  LABEL_SUGGESTIONS: 'Suggestions',
  LABEL_DASHBOARD: 'Tableau de bord',
  LABEL_COVER_PAGE: 'Ajouter une page de garde',
  LABEL_COVER_PAGE_DESCRIPTION: `Pages avec une image de couverture
  look plus personnel!`,
  LABEL_UPLOAD_IMAGE: 'Télécharger une image',
  LABEL_UPLOAD_SERIES: 'Télécharger une série',
  LABEL_UPLOAD_SERIES_DESCRIPTION:
    'Ajoutez des travaux récents à votre galerie',
  LABEL_CONNECT_PAYMENT_METHOD: 'Connecter le mode de paiement',
  LABEL_PAYMENT_METHOD_DESCRIPTION: 'Connectez votre compte PayPal',
  LABEL_SETUP_PAYMENT_BUTTON: 'Configurer le paiement',
  LABEL_ABOUT_ME: 'À propos de moi',
  LABEL_ABOUT_ME_DESCRIPTION:
    'Faites savoir à tout le monde de quoi vous parlez.',
  LABEL_ABOUT_ME_BUTTON: 'À propos de moi',
  LABEL_MY_SUPPORT: 'Mon support',
};

export default dashboard;
