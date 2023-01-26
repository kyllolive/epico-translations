import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
const consoleCreateChapter = { ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: '시리즈',
  LABEL_CHAPTER: '장',
  LABEL_SOMETHING_WENT_WRONG: '문제가 발생했습니다. 나중에 다시 시도해 주세요.',
  LABEL_GO_BACK: '돌아가기',
  LABEL_ADD_NEW_SERIES: '새 시리즈 추가',
  LABEL_NEXT_CHAPTER: '다음: 장',
  LABEL_SUBMIT: '제출하다',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: '표지 이미지가 필요합니다!',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX: '장 설명은 최대 2500자여야 합니다.',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED: '챕터 설명은 필수 항목입니다.',
  FORM_VALIDATION_CHAPTER_NOTE_MAX: '장 메모는 최대 2500자여야 합니다.',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: '게시는 필수 항목입니다.',
  FORM_VALIDATION_CHAPTER_TITLE_MAX: '챕터 제목은 100자 이하여야 합니다.',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES: '죄송합니다. 문자(a-z), 숫자(0-9), 특수 문자(\':?"!-_&()<>.,+=@#$%|)만 허용됩니다.',
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: '챕터 제목은 필수 항목입니다.',
  FORM_VALIDATION_CHAPTER_PAGES_MIN: '이미지를 1개 이상 포함해야 합니다.',
  // END FORM VALIDATION
  LABEL_CREATE_CHAPTER: '챕터 생성',
  LABEL_SINGLE_COVER_DROPBOX: '여기에 표지 사진을 드롭하거나 클릭하여 찾아보세요.',
  LABEL_SINGLE_CHAPTER_COVER_SUB: '모든 기기에서 최상의 결과를 얻으려면 360 x 360픽셀 이상의 이미지를 사용하세요.',
  LABEL_SERIES_DESCRIPTION: '시리즈 설명',
  LABEL_PUBLISH_CHAPTER: '장 게시',
  LABEL_CHAPTER_TITLE: '장 제목',
  LABEL_CHAPTER_DESCRIPTION: '장 설명',
  LABEL_CHAPTER_NOTE_OPTIONAL: '챕터 노트(선택 사항)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: '이 메모는 장의 끝에 표시됩니다.',
  LABEL_UPLOAD_PAGES: '페이지 업로드'
};
export default consoleCreateChapter;