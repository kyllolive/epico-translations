import topNav from './commons/topNav';
import common from './commons/common';
import deleteDialog from './commons/deleteDialog';
const consoleChapterList = { ...topNav,
  ...common,
  ...deleteDialog,
  LABEL_COLUMN_ID: 'ID',
  LABEL_ADD_NEW_CHAPTER: '새 장 추가',
  LABEL_COLUMN_TITLE: '제목',
  LABEL_COLUMN_LANGUAGE: '언어',
  LABEL_COLUMN_STATUS: '상태',
  LABEL_COLUMN_CHAPTERS: '장',
  LABEL_COLUMN_PUBLISHED: '게시됨',
  LABEL_COLUMN_DESCRIPTION: '설명',
  LABEL_COLUMN_PAGES: '페이지',
  LABEL_COLUMN_CREATED_DATE: '만든 날짜',
  LABEL_NO_CHAPTERS: '챕터 없음',
  LABEL_NO_SERIES: '시리즈 없음',
  LABEL_TRANSLATION: '번역',
  LABEL_EDIT: '편집하다',
  LABEL_DELETE: '삭제',
  LABEL_ROWS_PER_PAGE: '페이지당 행 수:',
  LABEL_PRIVATE_VIEW: '프라이빗 뷰',
  LABEL_SHARE_ACTION_MENU: '공유/공동작업자'
};
export default consoleChapterList;