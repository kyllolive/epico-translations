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
  LABEL_SERIES: 'シリーズ',
  LABEL_CHAPTER: '章',
  LABEL_SOMETHING_WENT_WRONG:
    '申し訳ありません。予期せぬ不具合が生じました。しばらくしてからもう一度お試し下さい。',
  LABEL_GO_BACK: '戻る',
  LABEL_ADD_NEW_SERIES: '新しいシリーズを追加',
  LABEL_NEXT_CHAPTER: '次の章',
  LABEL_SUBMIT: '提出する',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX:
    'シリーズの記述の題名は最大2500文字で指定してください',
  FORM_VALIDATION_DESCRIPTION_REQUIRED: 'シリーズの記述が必須です',
  FORM_VALIDATION_GENRE_REQUIRED: '主要なジャンルが必須です',
  FORM_VALIDATION_GENRE_MAX:
    'ジャンルフィールドには3つ以下のアイテムが必要です',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: '言語が必須です',
  FORM_VALIDATION_TITLE_MAX: 'シリーズ題名は最大100文字で指定してください',
  FORM_VALIDATION_TITLE_MATCHES:
    "アルファベットの小文字（a-z）、数字（０−９）、特殊文字（':?!-_&()<>)、+=@#$%|）で使用できます。",
  FORM_VALIDATION_TITLE_REQUIRED: 'シリーズ題名が必須です',
  FORM_VALIDATION_COVER_REQUIRED: '表紙画像が必須です',
  FORM_VALIDATION_BANNER_REQUIRED: 'バナー画像が必須です',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX:
    '章の記述は最大2500文字で指定してください',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED: '章の記述が必須です',
  FORM_VALIDATION_CHAPTER_NOTE_MAX: '章メモは最大2500文字で指定してください',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: '公開が必須です',
  FORM_VALIDATION_CHAPTER_TITLE_MAX: '章の題名は最大100文字で指定してください',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES:
    "アルファベットの小文字（a-z）、数字（０−９）、特殊文字（':?!-_&()<>)、+=@#$%|）で使用できます。",
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: '章の題名が必須です',
  FORM_VALIDATION_CHAPTER_PAGES_MIN:
    '少なくとも1つの画像が含まれている必須です',
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX:
    'ここにバナーを付けるか、クリックして拾い読みしてください',
  LABEL_SINGLE_COVER_DROPBOX:
    'ここに表紙画像を付けるか、クリックして拾い読みしてください',
  LABEL_SINGLE_CHAPTER_COVER:
    'ここに表紙画像を付けるか、クリックして拾い読みしてください',
  LABEL_SINGLE_BANNER_SUB:
    'JAPANTHISONEFor the best results on all devices, use an image that’s at least 1080 x 360 pixels',
  LABEL_SINGLE_COVER_SUB:
    'JAPANTHISONEFor the best results on all devices, use an image that’s at least 600 x 400 pixels',
  LABEL_SINGLE_CHAPTER_COVER_SUB:
    'JAPANTHISONEFor the best results on all devices, use an image that’s at least 360 x 360 pixels',
  LABEL_SERIES_TITLE: 'シリーズ題名',
  LABEL_LANGUAGE: '言語',
  LABEL_PRIMARY_GENRE: '主要なジャンルが必須です',
  LABEL_SECONDARY_GENRE: '二次的なジャンル',
  LABEL_SERIES_DESCRIPTION: 'シリーズの記述',
  LABEL_PUBLISH_CHAPTER: '章を公開する',
  LABEL_CHAPTER_TITLE: '章の題名',
  LABEL_CHAPTER_DESCRIPTION: '章の記述',
  LABEL_CHAPTER_NOTE_OPTIONAL: '章メモ（オプション）',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'このメモは、章の最後に表示されます',
  LABEL_UPLOAD_PAGES: 'ページをアップロードする',
  LABEL_CONGRATULATION: 'おめでとうございます',
  LABEL_SUCCESS_CREATING_SERIES_MSG: 'シリーズが作成されました。',
  LABEL_ADD_CHAPTER: '章を追加',
  LABEL_CREATE_NEW_SERIES: '新しいシリーズを作る',
  LABEL_MAX_GENRES: 'LABEL_MAX_GENRES',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE: 'LABEL_OPTIONAL_TAG_ERROR_MESSAGE',
  LABEL_ALLOW_FOR_TRANSLATION: 'クラウドソーシングによる翻訳を許可する',
};

export default consoleCreateSeries;
