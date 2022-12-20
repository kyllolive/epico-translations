import topNav from "./commons/topNav";
import common from "./commons/common";
import imageUploader from "./commons/imageUploader";

const consoleEditChapter = {
  ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: 'シリーズ',
  LABEL_CHAPTER: '章',
  LABEL_EDIT: '編集',
  LABEL_EDIT_CHAPTER: '章を編集する',
  LABEL_SUBMIT: '提出する',
  LABEL_UPDATE: '更新',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: '表紙画像が必須です',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX: '章の記述は最大2500文字で指定してください',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED: '章の記述が必須です',
  FORM_VALIDATION_CHAPTER_NOTE_MAX: '章メモは最大2500文字である必要があります',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: '公開が必須です',
  FORM_VALIDATION_CHAPTER_TITLE_MAX: '章の題名は最大100文字で指定してください',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES: 'アルファベットの小文字（a-z）、数字（０−９）、特殊文字（\':?!-_&()<>)、+=@#$%|）で使用できます。',
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: '章の題名が必須です',
  FORM_VALIDATION_CHAPTER_PAGES_MIN: '少なくとも1つの画像が含まれている必須です',
  // END FORM VALIDATION
  LABEL_SINGLE_COVER_DROPBOX: 'ここに表紙画像を付けるか、クリックして拾い読みしてください',
  LABEL_SINGLE_CHAPTER_COVER_SUB:'JAPANESEFor the best results on all devices, use an image that’s at least 360 x 360 pixels',
  LABEL_PUBLISH_CHAPTER: '章を公開する',
  LABEL_CHAPTER_TITLE: '章の題名',
  LABEL_CHAPTER_DESCRIPTION: '章の記述',
  LABEL_CHAPTER_NOTE_OPTIONAL: '章メモ（オプション）',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'このメモは、章の最後に表示されます',
  LABEL_UPLOAD_PAGES: 'ページをアップロードする',
  LABEL_NOT_FOUND_HEADER: '編集用のこの章を見つかりませんでした',
  LABEL_NOT_FOUND_MSG_1: 'このマンガシードの章があると思われる場合は、所定のシリーズIDで弊社サポートにお問い合わせください。',
  LABEL_NOT_FOUND_MSG_2: '言語IDが',
  LABEL_NOT_FOUND_MSG_3: 'およびの章ID',

};

export default consoleEditChapter;
