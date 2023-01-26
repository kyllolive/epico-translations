import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';

const consoleCreateChapter = {
  ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: 'シリーズ',
  LABEL_CHAPTER: '章',
  LABEL_SOMETHING_WENT_WRONG:
    'エラーが発生しました。後でもう一度お試しください。',
  LABEL_GO_BACK: '戻る',
  LABEL_ADD_NEW_SERIES: '新しいシリーズを追加',
  LABEL_NEXT_CHAPTER: '次の章',
  LABEL_SUBMIT: '送信',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: '表紙画像必須！',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX:
    'チャプターの説明は 2500 文字以内にしてください',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED: '章の説明が必要です',
  FORM_VALIDATION_CHAPTER_NOTE_MAX:
    '章のメモは 2500 文字以内にする必要があります',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: '公開は必須です',
  FORM_VALIDATION_CHAPTER_TITLE_MAX:
    '章のタイトルは 100 文字以内にする必要があります',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES:
    '文字 (a ～ z)、数字 (0 ～ 9)、特殊文字 (\':?"!-_&()<>.,+=@#$%|) のみを使用できます。',
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: '章のタイトルは必須です',
  FORM_VALIDATION_CHAPTER_PAGES_MIN:
    '少なくとも 1 つの画像を含める必要があります',
  // END FORM VALIDATION
  LABEL_CREATE_CHAPTER: '章の作成',
  LABEL_SINGLE_COVER_DROPBOX:
    'カバー写真をここにドロップするか、クリックして参照してください',
  LABEL_SINGLE_CHAPTER_COVER_SUB:
    'すべてのデバイスで最適な結果を得るには、360 x 360 ピクセル以上の画像を使用してください',
  LABEL_SERIES_DESCRIPTION: 'シリーズ説明',
  LABEL_PUBLISH_CHAPTER: 'チャプターを公開',
  LABEL_CHAPTER_TITLE: '章のタイトル',
  LABEL_CHAPTER_DESCRIPTION: '章の説明',
  LABEL_CHAPTER_NOTE_OPTIONAL: '章のメモ (オプション)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'この注記は、章の最後に表示されます',
  LABEL_UPLOAD_PAGES: 'ページをアップロード',
};

export default consoleCreateChapter;
