import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
import genres from './commons/genres';
import tagForm from './commons/tagForm';

const consoleCreateSeries = {
  ...genres,
  ...common,
  ...topNav,
  ...imageUploader,
  ...tagForm,
  LABEL_SERIES: '시리즈',
  LABEL_CHAPTER: '장',
  LABEL_SOMETHING_WENT_WRONG: '문제가 발생했습니다. 나중에 다시 시도해 주세요.',
  LABEL_GO_BACK: '돌아가기',
  LABEL_ADD_NEW_SERIES: '새 시리즈 추가',
  LABEL_NEXT_CHAPTER: '다음: 장',
  LABEL_SUBMIT: '제출하다',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX:
    '시리즈 설명 제목은 2500자(영문 기준) 이하여야 합니다.',
  FORM_VALIDATION_DESCRIPTION_REQUIRED: '시리즈 설명은 필수 항목입니다.',
  FORM_VALIDATION_GENRE_REQUIRED: '장르는 필수 항목입니다.',
  FORM_VALIDATION_GENRE_MAX: '장르 필드에는 3개 이하의 항목이 있어야 합니다.',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: '언어는 필수 항목입니다.',
  FORM_VALIDATION_TITLE_MAX: '시리즈 제목은 100자(영문 기준) 이하여야 합니다.',
  FORM_VALIDATION_TITLE_MATCHES:
    '죄송합니다. 문자(a-z), 숫자(0-9), 특수 문자(\':?"!-_&()<>.,+=@#$%|)만 허용됩니다.',
  FORM_VALIDATION_TITLE_REQUIRED: '시리즈 제목은 필수 항목입니다.',
  FORM_VALIDATION_COVER_REQUIRED: '표지 이미지가 필요합니다!',
  FORM_VALIDATION_BANNER_REQUIRED: '배너 이미지는 필수입니다!',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX: '장 설명은 최대 2500자여야 합니다.',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED: '챕터 설명은 필수 항목입니다.',
  FORM_VALIDATION_CHAPTER_NOTE_MAX: '장 메모는 최대 2500자여야 합니다.',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: '게시는 필수 항목입니다.',
  FORM_VALIDATION_CHAPTER_TITLE_MAX: '챕터 제목은 100자 이하여야 합니다.',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES:
    '죄송합니다. 문자(a-z), 숫자(0-9), 특수 문자(\':?"!-_&()<>.,+=@#$%|)만 허용됩니다.',
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: '챕터 제목은 필수 항목입니다.',
  FORM_VALIDATION_CHAPTER_PAGES_MIN: '이미지를 1개 이상 포함해야 합니다.',
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX: '여기에 배너를 드롭하거나 클릭하여 찾아보세요.',
  LABEL_SINGLE_COVER_DROPBOX:
    '여기에 표지 사진을 드롭하거나 클릭하여 찾아보세요.',
  LABEL_SINGLE_CHAPTER_COVER:
    '여기에 표지 사진을 드롭하거나 클릭하여 찾아보세요.',
  LABEL_SINGLE_BANNER_SUB:
    '모든 기기에서 최상의 결과를 얻으려면 최소 1080 x 360픽셀의 이미지를 사용하세요.',
  LABEL_SINGLE_COVER_SUB:
    '모든 기기에서 최상의 결과를 얻으려면 600 x 400픽셀 이상의 이미지를 사용하세요.',
  LABEL_SINGLE_CHAPTER_COVER_SUB:
    '모든 기기에서 최상의 결과를 얻으려면 360 x 360픽셀 이상의 이미지를 사용하세요.',
  LABEL_SERIES_TITLE: '시리즈 제목',
  LABEL_LANGUAGE: '언어',
  LABEL_PRIMARY_GENRE: '기본 장르',
  LABEL_SECONDARY_GENRE: '보조 장르',
  LABEL_SERIES_DESCRIPTION: '시리즈 설명',
  LABEL_PUBLISH_CHAPTER: '장 게시',
  LABEL_CHAPTER_TITLE: '장 제목',
  LABEL_CHAPTER_DESCRIPTION: '장 설명',
  LABEL_CHAPTER_NOTE_OPTIONAL: '챕터 노트(선택 사항)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: '이 메모는 장의 끝에 표시됩니다.',
  LABEL_UPLOAD_PAGES: '페이지 업로드',
  LABEL_CONGRATULATION: '축하합니다',
  LABEL_SUCCESS_CREATING_SERIES_MSG: '시리즈를 성공적으로 만들었습니다.',
  LABEL_ADD_CHAPTER: '장 추가',
  LABEL_CREATE_NEW_SERIES: '새 시리즈 만들기',
  LABEL_MAX_GENRES: '최대 3개의 장르를 선택할 수 있습니다.',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE: '예약어이므로 사용할 수 없습니다!',
  LABEL_ALLOW_FOR_TRANSLATION: '크라우드소싱 번역 허용',
};

export default consoleCreateSeries;
