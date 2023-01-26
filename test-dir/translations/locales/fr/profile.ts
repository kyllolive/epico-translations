import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import donationBox from './commons/donationBox';

const profile = {
  ...donationBox,
  ...genres,
  ...topNav,
  ...common,
  ...authModal,
  NEW_COVER_ERROR_LABEL:
    "Oops! Nous n'avons pas pu enregistrer votre nouvelle couverture",
  LABEL_SAVE: 'sauvegarder',
  LABEL_CANCEL: 'Annuler',
  LABEL_SUCCESS_UPDATE_PROFILE:
    'Nous avons réussi à mettre à jour votre profil',
  LABEL_UNABLE_SAVE_CHANGES:
    "Oh oh ! Nous n'avons pas pu enregistrer vos modifications",
  LABEL_ADD_ANOTHER: 'Ajouter un autre',
  LABEL_EDIT_PROFILE: 'Editer le profil',
  LABEL_JOINED_DATE: "Date d'adhésion",
  LABEL_UPDATE_PROFILE_INFORMATION:
    'Mise à jour rapide des informations de profil',
  LABEL_CHANGE_PROFILE_PICTURE: 'Modifier la photo de profil',
  LABEL_ERROR_NEW_PROFILE:
    "Oops! Nous n'avons pas pu enregistrer votre nouveau profil",
  LABEL_ERROR_NEW_COVER:
    "Oops! Nous n'avons pas pu enregistrer votre nouvelle couverture",
  LABEL_ERROR_UPLOAD_COVER:
    "Oops! Nous n'avons pas pu télécharger votre couverture",
};

export default profile;
