import topNav from "./commons/topNav";
import common from "./commons/common";
import deleteDialog from "./commons/deleteDialog";

const consoleChapterList = {
  ...topNav,
  ...common,
  ...deleteDialog,
  LABEL_COLUMN_ID: 'ID',
  LABEL_ADD_NEW_CHAPTER: '新しい章を追加',
  LABEL_COLUMN_TITLE: '題名',
  LABEL_COLUMN_LANGUAGE: '言語',
  LABEL_COLUMN_STATUS: '状態',
  LABEL_COLUMN_CHAPTERS: '章',
  LABEL_COLUMN_PUBLISHED: '公開',
  LABEL_COLUMN_DESCRIPTION: '記述',
  LABEL_COLUMN_PAGES: 'ページ',
  LABEL_COLUMN_CREATED_DATE: '作成日',
  LABEL_NO_CHAPTERS: '章なし',
  LABEL_NO_SERIES: 'シリーズなし',
  LABEL_TRANSLATION: '翻訳',
  LABEL_EDIT: '編集',
  LABEL_DELETE: '削除',
  LABEL_ROWS_PER_PAGE: '1ページあたりの行数：',
  LABEL_PRIVATE_VIEW: 'プライベートビュー',
  LABEL_SHARE_ACTION_MENU: 'シェア/共同編集者'
};

export default consoleChapterList;
