import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
import genres from './commons/genres';
import tagForm from './commons/tagForm';

const consoleEditSeries = {
  ...genres,
  ...common,
  ...topNav,
  ...imageUploader,
  ...tagForm,
  LABEL_SERIES: 'シリーズ',
  LABEL_CHAPTER: '章',
  LABEL_EDIT: '編集',
  LABEL_EDIT_SERIES: 'シリーズの編集',
  LABEL_UPDATE: '更新',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX:
    'シリーズの記述の題名は最大2500文字で指定してください',
  FORM_VALIDATION_DESCRIPTION_REQUIRED: 'シリーズの記述が必須です',
  FORM_VALIDATION_GENRE_REQUIRED: '主要なジャンルが必須です',
  FORM_VALIDATION_GENRE_MAX:
    'ジャンルフィールドには3つ以下のアイテムが必要です',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: '言語が必須です',
  FORM_VALIDATION_STATUS_REQUIRED: 'シリーズ状態が必須です',
  FORM_VALIDATION_TITLE_MAX: 'シリーズの題名は最大100文字で指定してください',
  FORM_VALIDATION_TITLE_MATCHES:
    "アルファベットの小文字（a-z）、数字（０−９）、特殊文字（':?!-_&()<>)、+=@#$%|）で使用できます。",
  FORM_VALIDATION_TITLE_REQUIRED: 'シリーズの題名が必須です',
  FORM_VALIDATION_COVER_REQUIRED: '表紙画像が必須です！',
  FORM_VALIDATION_BANNER_REQUIRED: 'バナー画像が必須です！',
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX:
    'ここにバナーを付けるか、クリックして拾い読みしてください',
  LABEL_SINGLE_COVER_DROPBOX:
    'ここに表紙画像を付けるか、クリックして拾い読みしてください',
  LABEL_SINGLE_BANNER_SUB:
    'JAPANESE For the best results on all devices, use an image that’s at least 1080 x 360 pixels',
  LABEL_SINGLE_COVER_SUB:
    ' JAPANESEFor the best results on all devices, use an image that’s at least 600 x 400 pixels',
  LABEL_SERIES_TITLE: 'シリーズの題名',
  LABEL_LANGUAGE: '言語',
  LABEL_PRIMARY_GENRE: '主要なジャンル',
  LABEL_SECONDARY_GENRE: '二次的なジャンル',
  LABEL_SERIES_STATUS: 'シリーズ状態',
  LABEL_STATUS_ONGOING: '進行中',
  LABEL_STATUS_COMPLETED: '完了',
  LABEL_SERIES_DESCRIPTION: 'シリーズの記述',
  LABEL_PUBLISH_CHAPTER: '章を公開する',
  LABEL_CHAPTER_TITLE: '章の題名',
  LABEL_CHAPTER_DESCRIPTION: '章の記述',
  LABEL_CHAPTER_NOTE_OPTIONAL: '章メモ（オプション）',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'このメモは、章の最後に表示されます',
  LABEL_NOT_FOUND_HEADER: '編集用のこのシリーズを見つかりませんでした',
  LABEL_NOT_FOUND_MSG_1:
    'このマンガシードのシリーズがあると思われる場合は、所定のシリーズIDで弊社サポートにお問い合わせください。',
  LABEL_NOT_FOUND_MSG_2: '言語IDが',
  LABEL_MAX_GENRES: 'LABEL_MAX_GENRES',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE: 'LABEL_OPTIONAL_TAG_ERROR_MESSAGE',
  LABEL_ALLOW_FOR_TRANSLATION: 'クラウドソーシングによる翻訳を許可する',
};

export default consoleEditSeries;
