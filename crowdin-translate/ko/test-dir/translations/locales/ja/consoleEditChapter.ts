import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
const consoleEditChapter = { ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: 'シリーズ',
  LABEL_CHAPTER: '章',
  LABEL_EDIT: '編集',
  LABEL_EDIT_CHAPTER: 'チャプターを編集',
  LABEL_SUBMIT: '送信',
  LABEL_UPDATE: 'アップデート',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: '表紙画像必須！',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX: 'チャプターの説明は 2500 文字以内にしてください',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED: '章の説明が必要です',
  FORM_VALIDATION_CHAPTER_NOTE_MAX: '章のメモは 2500 文字以内にする必要があります',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: '公開は必須です',
  FORM_VALIDATION_CHAPTER_TITLE_MAX: '章のタイトルは 100 文字以内にする必要があります',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES: '文字 (a ～ z)、数字 (0 ～ 9)、特殊文字 (\':?"!-_&()<>.,+=@#$%|) のみを使用できます。',
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: '章のタイトルは必須です',
  FORM_VALIDATION_CHAPTER_PAGES_MIN: '少なくとも 1 つの画像を含める必要があります',
  // END FORM VALIDATION
  LABEL_SINGLE_COVER_DROPBOX: 'カバー写真をここにドロップするか、クリックして参照してください',
  LABEL_SINGLE_CHAPTER_COVER_SUB: 'すべてのデバイスで最適な結果を得るには、360 x 360 ピクセル以上の画像を使用してください',
  LABEL_PUBLISH_CHAPTER: 'チャプターを公開',
  LABEL_CHAPTER_TITLE: '章のタイトル',
  LABEL_CHAPTER_DESCRIPTION: '章の説明',
  LABEL_CHAPTER_NOTE_OPTIONAL: '章のメモ (オプション)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'この注記は、章の最後に表示されます',
  LABEL_UPLOAD_PAGES: 'ページをアップロード',
  LABEL_NOT_FOUND_HEADER: 'このチャプターを編集することができませんでした',
  LABEL_NOT_FOUND_MSG_1: 'このエピコのチャプターが存在すると思われる場合は、指定されたシリーズ ID を添えてサポートにご連絡ください。',
  LABEL_NOT_FOUND_MSG_2: 'の言語 ID を持つ',
  LABEL_NOT_FOUND_MSG_3: 'のチャプターID'
};
export default consoleEditChapter;