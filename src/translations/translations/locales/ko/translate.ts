import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const translate = {
  ...topNav,
  ...common,
  ...authModal,
  //translate page
  SCANLATE_BANNER_HEADER: '안녕하세요 스캔들입니다!',
  SCANLATE_BANNER_CONTENT:
    '더 큰 시장에 도달할 수 있도록 지원하여 크리에이터 지원 모든 만화에 무료로 액세스 법적 환경에서 크리에이터와 작업 검색 가능한 대화/원고 변경 팀을 위한 용어집 내장',
  SCANLATE_BANNER_HEADER_2: '당신의 만화는 세계가 읽을 가치가 있습니다',
  SCANLATE_BANNER_CONTENT_2: `만화를 위한 크라우드소싱 번역 서비스, 귀하의 언어를 찾을 수 없습니까? 메시지를 보내주세요!`,
  LABEL_CONTENT_HEADER: '여기에서 좋아하는 시리즈를 스캔할 수 있습니다.',
  LABEL_SEARCH_SERIES: '시리즈 검색',
  LABEL_LANGUAGE: '언어',
  LABEL_ALL: '모두',
  LABEL_NO_AVAILABLE_SERIES: '번역에 사용할 수 있는 시리즈 없음',
  LABEL_LOADING: '로드 중...',
  LABEL_PREVIEW: '시사',
  LABEL_SAVE: '구하다',
  LABEL_GUIDE: '가이드',
  LABEL_TRANSLATE: '스캔하다',
  LABEL_TO: '에게',
  LABEL_CREATED_BY: '만든 사람',
  LABEL_GLOSSARY: '용어 사전',
  LABEL_CREDITS: '크레딧',
  LABEL_SUBMISSION_SUCCESS: '제출물이 저장되었습니다!',
  LABEL_SUBMISSION_ERROR: '제출에 오류가 있습니다',

  //Pages Tab//
  LABEL_PAGE: '페이지:',
  LABEL_PAGES: '페이지',
  LABEL_DOWNLOAD: '다운로드',
  LABEL_OVERRIDE: '다시 그린 이미지로 재정의하시겠습니까?',
  LABEL_SELECT_CLEAN_VERSIONS: '깨끗한 버전 선택',
  LABEL_SELECT_VERSIONS: '버전 선택...',
  LABEL_NO_UPLOADED_CLEAN_VERSION: '업로드된 클린 버전 없음',
  LABEL_UPLOAD_CLEAN_IMAGE: '깨끗한 이미지 업로드',
  LABEL_DOWNLOAD_CLEAN_IMAGE: '깨끗한 이미지 다운로드',
  LABEL_TRANSLATION: '스캔',
  LABEL_ADD_TEXT: '텍스트 추가',
  //Comment Tab
  LABEL_COMMENT: '논평',
  LABEL_COMMENT_HERE: '여기 댓글...',
  LABEL_MORE_COMMENTS: '더 많은 댓글',
  LABEL_SUBMIT: '제출하다',
  LABEL_CANCEL: '취소',
  LABEL_REPLY: '회신하다',
  LABEL_UPDATE: '업데이트',
  LABEL_HOW_TO_COMMENT: '댓글 방법',
  LABEL_HOW_TO_COMMENT_1: '댓글을 달 영역을 선택하세요.',
  LABEL_HOW_TO_COMMENT_2: '드래그하여 원하는 영역 강조',
  LABEL_HOW_TO_COMMENT_3:
    '댓글 쓰기라는 텍스트 상자를 클릭하고 댓글을 입력한 다음 제출을 클릭합니다.',
  //Description Tab
  LABEL_DESCRIPTION: '설명',
  LABEL_SERIES: '시리즈',
  LABEL_CHAPTER: '장',
  LABEL_SWITCH_LANGUAGE: '언어 전환',
  LABEL_SERIES_TITLE: '시리즈 제목',
  LABEL_SERIES_DESCRIPTION: '시리즈 설명',
  LABEL_CHAPTER_TITLE: '장 제목',
  LABEL_CHAPTER_DESCRIPTION: '장 설명',
  LABEL_CHAPTER_AUTHOR_NOTE: `챕터 저자 노트`,
  //SFX Tab
  LABEL_UPLOAD: '업로드',
  //History Tab
  LABEL_HISTORY: '역사',
  LABEL_MODIFIED_BY: '에 의해 수정됨',
  LABEL_LATEST: '최신',
  LABEL_LOAD: '짐',
  LABEL_PUBLISH: '게시',
  //Credits Tab
  LABEL_CONTRIBUTORS: '기여자',
  LABEL_NO_CONTRIBUTORS: '기여자 없음',

  //Change
  LABEL_CHANGE_PAGE:
    '저장되지 않은 변경 사항이 있습니다. 이동하시겠습니까? 변경 사항이 손실됩니다.',
  LABEL_OFFICIAL_CLEAN_VERSION: '공식 버전',
  LABEL_MY_CLEAN_VERSION: '내 버전',
  LABEL_VERSION: '버전',
};

export default translate;
