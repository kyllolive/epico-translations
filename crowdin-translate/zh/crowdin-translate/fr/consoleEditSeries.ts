import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
import genres from './commons/genres';
import tagForm from './commons/tagForm';
const consoleEditSeries = { ...genres,
  ...common,
  ...topNav,
  ...imageUploader,
  ...tagForm,
  LABEL_SERIES: 'série',
  LABEL_CHAPTER: 'chapitre',
  LABEL_EDIT: 'Éditer',
  LABEL_EDIT_SERIES: 'Modifier la série',
  LABEL_UPDATE: 'Mise à jour',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX: 'Le titre de la description de la série ne doit pas dépasser 2 500 caractères',
  FORM_VALIDATION_DESCRIPTION_REQUIRED: 'La description de la série est requise',
  FORM_VALIDATION_GENRE_REQUIRED: 'Veuillez indiquer le genre',
  FORM_VALIDATION_GENRE_MAX: 'Genre field must have less than or equal to 3 items',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: 'Language is required',
  FORM_VALIDATION_STATUS_REQUIRED: 'Series Status Required',
  FORM_VALIDATION_TITLE_MAX: 'Series title must be at most 100 characters',
  FORM_VALIDATION_TITLE_MATCHES: 'Désolé, seuls les lettres (a-z), les chiffres (0-9), les caractères spéciaux (\':?"!-_&()<>.,+=@#$%|) sont autorisés.',
  FORM_VALIDATION_TITLE_REQUIRED: 'Le titre de la série est requis',
  FORM_VALIDATION_COVER_REQUIRED: "L'image de couverture est obligatoire !",
  FORM_VALIDATION_BANNER_REQUIRED: "L'image de la bannière est requise !",
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX: 'Drop your banner here, or click to browse',
  LABEL_SINGLE_COVER_DROPBOX: 'Drop your cover photo here, or click to browse',
  LABEL_SINGLE_BANNER_SUB: 'For the best results on all devices, use an image that’s at least 1080 x 360 pixels',
  LABEL_SINGLE_COVER_SUB: "Pour de meilleurs résultats sur tous les appareils, utilisez une image d'au moins 600 x 400 pixels",
  LABEL_SERIES_TITLE: 'Titre de la série',
  LABEL_LANGUAGE: 'Langues',
  LABEL_PRIMARY_GENRE: 'Genre primaire',
  LABEL_SECONDARY_GENRE: 'Genre secondaire',
  LABEL_SERIES_STATUS: 'Statut de la série',
  LABEL_STATUS_ONGOING: 'En cours',
  LABEL_STATUS_COMPLETED: 'Complété',
  LABEL_SERIES_DESCRIPTION: 'Description de la série',
  LABEL_PUBLISH_CHAPTER: 'Publier le chapitre',
  LABEL_CHAPTER_TITLE: 'Titre du chapitre',
  LABEL_CHAPTER_DESCRIPTION: 'Description du chapitre',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Note de chapitre (facultatif)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'Cette note sera présentée à la fin du chapitre',
  LABEL_NOT_FOUND_HEADER: "Oh oh, nous n'avons pas pu trouver cette série pour l'édition",
  LABEL_NOT_FOUND_MSG_1: 'If you think this epico series exists kindly contact our support with the given series ID',
  LABEL_NOT_FOUND_MSG_2: 'with language id of',
  LABEL_MAX_GENRES: 'You can choose up to 3 genres',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE: 'is a reserve word, cannot be used!',
  LABEL_ALLOW_FOR_TRANSLATION: 'Allow CrowdSourced Translation'
};
export default consoleEditSeries;