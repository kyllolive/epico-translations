import topNav from './commons/topNav';
import common from './commons/common';
import deleteDialog from './commons/deleteDialog';
const consoleChapterList = { ...topNav,
  ...common,
  ...deleteDialog,
  LABEL_COLUMN_ID: 'ID',
  LABEL_ADD_NEW_CHAPTER: '添加新章节',
  LABEL_COLUMN_TITLE: '标题',
  LABEL_COLUMN_LANGUAGE: '语',
  LABEL_COLUMN_STATUS: '地位',
  LABEL_COLUMN_CHAPTERS: '章节',
  LABEL_COLUMN_PUBLISHED: '发表',
  LABEL_COLUMN_DESCRIPTION: '描述',
  LABEL_COLUMN_PAGES: '页面',
  LABEL_COLUMN_CREATED_DATE: '创建日期',
  LABEL_NO_CHAPTERS: '没有章节',
  LABEL_NO_SERIES: '无系列',
  LABEL_TRANSLATION: '翻译',
  LABEL_EDIT: '编辑',
  LABEL_DELETE: '删除',
  LABEL_ROWS_PER_PAGE: '每页行数：',
  LABEL_PRIVATE_VIEW: '私人景观',
  LABEL_SHARE_ACTION_MENU: '分享/合作者'
};
export default consoleChapterList;