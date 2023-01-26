import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import deleteDialog from './commons/deleteDialog';
const consoleSeriesList = { ...genres,
  ...topNav,
  ...common,
  ...deleteDialog,
  LABEL_COLUMN_ID: 'ID',
  LABEL_ADD_NEW_SERIES: '新しいシリーズを追加',
  LABEL_COLUMN_TITLE: '題名',
  LABEL_COLUMN_LANGUAGE: '言語',
  LABEL_COLUMN_STATUS: '状態',
  LABEL_COLUMN_CHAPTERS: '章',
  LABEL_COLUMN_PUBLISHED: '公開済み',
  LABEL_COLUMN_DESCRIPTION: '説明',
  LABEL_COLUMN_PAGES: 'ページ',
  LABEL_COLUMN_CREATED_DATE: '作成日',
  LABEL_NO_CHAPTERS: 'チャプターなし',
  LABEL_NO_SERIES: 'シリーズなし',
  LABEL_TRANSLATION: '翻訳',
  LABEL_EDIT: '編集',
  LABEL_DELETE: '消去',
  LABEL_ROWS_PER_PAGE: 'ページあたりの行数:',
  LABEL_PRIVATE_VIEW: 'プライベート ビュー',
  LABEL_SHARE_ACTION_MENU: '共有/共同編集者',
  LABEL_SHARED_SERIES: '共有シリーズ',
  LABEL_COLUMN_ROLE: '役割'
};
export default consoleSeriesList;