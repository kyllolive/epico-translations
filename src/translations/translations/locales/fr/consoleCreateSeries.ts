import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
import genres from './commons/genres';
import tagForm from './commons/tagForm';

const consoleCreateSeries = {
  ...genres,
  ...common,
  ...topNav,
  ...imageUploader,
  ...tagForm,
  LABEL_SERIES: 'série',
  LABEL_CHAPTER: 'chapitre',
  LABEL_SOMETHING_WENT_WRONG:
    "Oups, quelque chose s'est mal passé, veuillez réessayer plus tard !",
  LABEL_GO_BACK: 'Retourner',
  LABEL_ADD_NEW_SERIES: 'Ajouter une nouvelle série',
  LABEL_NEXT_CHAPTER: 'Chapitre suivant',
  LABEL_SUBMIT: 'Soumettre',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX:
    'Le titre de la description de la série ne doit pas dépasser 2 500 caractères',
  FORM_VALIDATION_DESCRIPTION_REQUIRED:
    'La description de la série est requise',
  FORM_VALIDATION_GENRE_REQUIRED: 'Veuillez indiquer le genre',
  FORM_VALIDATION_GENRE_MAX:
    'Genre field must have less than or equal to 3 items',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: 'Language is required',
  FORM_VALIDATION_TITLE_MAX: 'Series title must be at most 100 characters',
  FORM_VALIDATION_TITLE_MATCHES:
    'Désolé, seuls les lettres (a-z), les chiffres (0-9), les caractères spéciaux (\':?"!-_&()<>.,+=@#$%|) sont autorisés.',
  FORM_VALIDATION_TITLE_REQUIRED: 'Le titre de la série est requis',
  FORM_VALIDATION_COVER_REQUIRED: "L'image de couverture est obligatoire !",
  FORM_VALIDATION_BANNER_REQUIRED: "L'image de la bannière est requise !",
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX:
    'Chapter description must be at most 2500 characters',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED:
    'Chapter description is required',
  FORM_VALIDATION_CHAPTER_NOTE_MAX:
    'La note de chapitre ne doit pas dépasser 2 500 caractères',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: 'La publication est obligatoire',
  FORM_VALIDATION_CHAPTER_TITLE_MAX:
    'Chapter title must be at most 100 characters',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES:
    'Sorry, only letters (a-z), numbers (0-9), special characters (\':?"!-_&()<>.,+=@#$%|) are allowed.',
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: 'Chapter title is required',
  FORM_VALIDATION_CHAPTER_PAGES_MIN: 'Must contain atleast 1 image',
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX:
    'Déposez votre bannière ici ou cliquez pour parcourir.',
  LABEL_SINGLE_COVER_DROPBOX:
    'Déposez votre photo de couverture ici ou cliquez pour parcourir.',
  LABEL_SINGLE_CHAPTER_COVER:
    'Déposez votre photo de couverture ici ou cliquez pour parcourir.',
  LABEL_SINGLE_BANNER_SUB:
    'For the best results on all devices, use an image that’s at least 1080 x 360 pixels.',
  LABEL_SINGLE_COVER_SUB:
    "Pour de meilleurs résultats sur tous les appareils, utilisez une image d'au moins 600 x 400 pixels.",
  LABEL_SINGLE_CHAPTER_COVER_SUB:
    'For the best results on all devices, use an image that’s at least 360 x 360 pixels.',
  LABEL_SERIES_TITLE: 'Series title',
  LABEL_LANGUAGE: 'Languages',
  LABEL_PRIMARY_GENRE: 'Primary genre',
  LABEL_SECONDARY_GENRE: 'Secondary genre',
  LABEL_SERIES_DESCRIPTION: 'Series description',
  LABEL_PUBLISH_CHAPTER: 'Publish chapter',
  LABEL_CHAPTER_TITLE: 'Chapter title',
  LABEL_CHAPTER_DESCRIPTION: 'Chapter description',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Chapter note (optional)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM:
    'This note will be shown at the end of the chapter',
  LABEL_UPLOAD_PAGES: 'Upload pages',
  LABEL_CONGRATULATION: 'Congratulations',
  LABEL_SUCCESS_CREATING_SERIES_MSG:
    'You have successfully created your series.',
  LABEL_ADD_CHAPTER: 'add chapter',
  LABEL_CREATE_NEW_SERIES: 'create new series',
  LABEL_MAX_GENRES: 'You can choose up to 3 genres',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE: 'is a reserve word, cannot be used!',
  LABEL_ALLOW_FOR_TRANSLATION: 'Allow CrowdSourced Translation',
};

export default consoleCreateSeries;
