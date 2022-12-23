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
    'Soutenez les créateurs en les aidant à atteindre un marché plus large Accédez gratuitement à toutes les bandes dessinées Travaillez avec les créateurs dans un cadre légal Dialogue/manuscrit consultable Glossaire intégré pour les équipes changeantes',
  SCANLATE_BANNER_HEADER_2:
    "Vos bandes dessinées méritent d'être lues par le monde",
  SCANLATE_BANNER_CONTENT_2: `Service de traduction crowdsourcé pour les bandes dessinées, vous n\'avez pas trouvé votre langue ? Envoie-nous un message!`,
  LABEL_CONTENT_HEADER: 'Ici, vous pouvez scanner votre série préférée.',
  LABEL_SEARCH_SERIES: 'Rechercher une série',
  LABEL_LANGUAGE: 'Langue',
  LABEL_ALL: 'Tout',
  LABEL_NO_AVAILABLE_SERIES: 'Aucune série disponible pour la traduction',
  LABEL_LOADING: 'Chargement...',
  LABEL_PREVIEW: 'Aperçu',
  LABEL_SAVE: 'sauvegarder',
  LABEL_GUIDE: 'Guide',
  LABEL_TRANSLATE: 'Scanlate',
  LABEL_TO: 'to',
  LABEL_CREATED_BY: 'created by',
  LABEL_GLOSSARY: 'Glossary',
  LABEL_CREDITS: 'Credits',
  LABEL_SUBMISSION_SUCCESS: 'Your Submission has been saved!',
  LABEL_SUBMISSION_ERROR: 'There is an error in your submission',

  //Pages Tab//
  LABEL_PAGE: 'Page:',
  LABEL_PAGES: 'pages',
  LABEL_DOWNLOAD: 'Télécharger',
  LABEL_OVERRIDE: 'remplacer par une image redessinée ?',
  LABEL_SELECT_CLEAN_VERSIONS: 'Sélectionnez des versions propres',
  LABEL_SELECT_VERSIONS: 'Sélectionnez les variantes...',
  LABEL_NO_UPLOADED_CLEAN_VERSION: 'Aucune version propre téléchargée',
  LABEL_UPLOAD_CLEAN_IMAGE: 'télécharger une image propre',
  LABEL_DOWNLOAD_CLEAN_IMAGE: 'télécharger une image propre',
  LABEL_TRANSLATION: 'Scanlation',
  LABEL_ADD_TEXT: 'Add Text',
  //Comment Tab
  LABEL_COMMENT: 'Commentaire',
  LABEL_COMMENT_HERE: 'Commentez ici...',
  LABEL_MORE_COMMENTS: 'Plus de commentaires',
  LABEL_SUBMIT: 'Soumettre',
  LABEL_CANCEL: 'Annuler',
  LABEL_REPLY: 'Réponse',
  LABEL_UPDATE: 'Mise à jour',
  LABEL_HOW_TO_COMMENT: 'Comment commenter',
  LABEL_HOW_TO_COMMENT_1: 'Sélectionnez une zone à commenter',
  LABEL_HOW_TO_COMMENT_2:
    'Faites glisser pour mettre en surbrillance la zone souhaitée',
  LABEL_HOW_TO_COMMENT_3:
    'Cliquez sur la zone de texte indiquant Rédiger un commentaire, saisissez votre commentaire, puis cliquez sur Soumettre.',
  //Description Tab
  LABEL_DESCRIPTION: 'La description',
  LABEL_SERIES: 'Série',
  LABEL_CHAPTER: 'Chapitre',
  LABEL_SWITCH_LANGUAGE: 'Changer de langue',
  LABEL_SERIES_TITLE: 'Titre de la série',
  LABEL_SERIES_DESCRIPTION: 'Description de la série',
  LABEL_CHAPTER_TITLE: 'Titre du chapitre',
  LABEL_CHAPTER_DESCRIPTION: 'Description du chapitre',
  LABEL_CHAPTER_AUTHOR_NOTE: `Note de l\'auteur du chapitre`,
  //SFX Tab
  LABEL_UPLOAD: 'Upload',
  //History Tab
  LABEL_HISTORY: 'History',
  LABEL_MODIFIED_BY: 'modified by',
  LABEL_LATEST: 'Latest',
  LABEL_LOAD: 'Load',
  LABEL_PUBLISH: 'Publish',
  //Credits Tab
  LABEL_CONTRIBUTORS: 'Contributors',
  LABEL_NO_CONTRIBUTORS: 'No Contributors',

  //Change
  LABEL_CHANGE_PAGE:
    'Il y a des modifications non enregistrées. Êtes-vous sûr de vouloir déménager ? Les modifications seront perdues',
};

export default translate;
