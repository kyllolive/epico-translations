import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
import genres from './commons/genres';
import tagForm from './commons/tagForm';
const consoleEditSeries = { ...genres,
  ...common,
  ...topNav,
  ...imageUploader,
  ...tagForm,
  LABEL_SERIES: '시리즈',
  LABEL_CHAPTER: '장',
  LABEL_EDIT: '편집하다',
  LABEL_EDIT_SERIES: '시리즈 편집',
  LABEL_UPDATE: '업데이트',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX: '시리즈 설명 제목은 2500자(영문 기준) 이하여야 합니다.',
  FORM_VALIDATION_DESCRIPTION_REQUIRED: '시리즈 설명은 필수 항목입니다.',
  FORM_VALIDATION_GENRE_REQUIRED: '장르는 필수 항목입니다.',
  FORM_VALIDATION_GENRE_MAX: '장르 필드에는 3개 이하의 항목이 있어야 합니다.',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: '언어는 필수 항목입니다.',
  FORM_VALIDATION_STATUS_REQUIRED: '시리즈 상태 필수',
  FORM_VALIDATION_TITLE_MAX: '시리즈 제목은 100자(영문 기준) 이하여야 합니다.',
  FORM_VALIDATION_TITLE_MATCHES: '죄송합니다. 문자(a-z), 숫자(0-9), 특수 문자(\':?"!-_&()<>.,+=@#$%|)만 허용됩니다.',
  FORM_VALIDATION_TITLE_REQUIRED: '시리즈 제목은 필수 항목입니다.',
  FORM_VALIDATION_COVER_REQUIRED: '표지 이미지가 필요합니다!',
  FORM_VALIDATION_BANNER_REQUIRED: '배너 이미지는 필수입니다!',
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX: '여기에 배너를 드롭하거나 클릭하여 찾아보기',
  LABEL_SINGLE_COVER_DROPBOX: '여기에 표지 사진을 드롭하거나 클릭하여 찾아보세요.',
  LABEL_SINGLE_BANNER_SUB: '모든 기기에서 최상의 결과를 얻으려면 1080 x 360픽셀 이상의 이미지를 사용하세요.',
  LABEL_SINGLE_COVER_SUB: '모든 기기에서 최상의 결과를 얻으려면 600 x 400픽셀 이상의 이미지를 사용하세요.',
  LABEL_SERIES_TITLE: '시리즈 제목',
  LABEL_LANGUAGE: '언어',
  LABEL_PRIMARY_GENRE: '기본 장르',
  LABEL_SECONDARY_GENRE: '보조 장르',
  LABEL_SERIES_STATUS: '시리즈 상태',
  LABEL_STATUS_ONGOING: '전진',
  LABEL_STATUS_COMPLETED: '완전한',
  LABEL_SERIES_DESCRIPTION: '시리즈 설명',
  LABEL_PUBLISH_CHAPTER: '장 게시',
  LABEL_CHAPTER_TITLE: '장 제목',
  LABEL_CHAPTER_DESCRIPTION: '장 설명',
  LABEL_CHAPTER_NOTE_OPTIONAL: '챕터 노트(선택 사항)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: '이 메모는 장의 끝에 표시됩니다.',
  LABEL_NOT_FOUND_HEADER: '어, 편집할 이 시리즈를 찾을 수 없습니다.',
  LABEL_NOT_FOUND_MSG_1: '이 에피코 시리즈가 존재한다고 생각되면 제공된 시리즈 ID로 지원팀에 문의하세요.',
  LABEL_NOT_FOUND_MSG_2: '언어 ID:',
  LABEL_MAX_GENRES: '최대 3개의 장르를 선택할 수 있습니다.',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE: '예약어이므로 사용할 수 없습니다!',
  LABEL_ALLOW_FOR_TRANSLATION: '크라우드소싱 번역 허용'
};
export default consoleEditSeries;