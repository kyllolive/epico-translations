import topNav from './commons/topNav';
import common from './commons/common';
import consoleSeriesList from './consoleSeriesList';

const dashboard = {
  ...topNav,
  ...common,
  ...consoleSeriesList,
  LABEL_HOME: '집',
  LABEL_LIVE: '귀하의 계정은',
  LABEL_NOTIFICATIONS: '알림',
  LABEL_FOLLOWERS: '팔로워',
  LABEL_SERIES_FOLLOWED: '팔로우 시리즈',
  LABEL_PAYMENT_HISTORY: '결제 내역',
  LABEL_PAYMENT_METHOD: '지불 방법',
  LABEL_EDIT_PROFILE: '프로필 편집',
  LABEL_MANAGE_SERIES: '시리즈 관리',
  LABEL_CHANGE_USERNAME: '사용자 이름 변경',
  LABEL_CHANGE_PASSWORD: '비밀번호 변경',
  LABEL_DELETE_ACCOUNT: '계정을 삭제하다',
  LABEL_LANGUAGES: '언어',
  LABEL_EMPTY: '여기 아직 아무것도...',
  LABEL_DONATED: '기부',
  LABEL_RECENT_DONATIONS: '최근 기부',
  LABEL_SUGGESTIONS: '제안',
  LABEL_DASHBOARD: '계기반',
  LABEL_COVER_PAGE: '표지 추가',
  LABEL_COVER_PAGE_DESCRIPTION: `표지 이미지가 있는 페이지
  더 개성있게 봐!`,
  LABEL_UPLOAD_IMAGE: '이미지 업로드',
  LABEL_UPLOAD_SERIES: '시리즈 업로드',
  LABEL_UPLOAD_SERIES_DESCRIPTION: '갤러리에 최근 작업 추가',
  LABEL_CONNECT_PAYMENT_METHOD: '결제 수단 연결',
  LABEL_PAYMENT_METHOD_DESCRIPTION: 'PayPal 계정 연결',
  LABEL_SETUP_PAYMENT_BUTTON: '결제 설정',
  LABEL_ABOUT_ME: '나에 대해서',
  LABEL_ABOUT_ME_DESCRIPTION: '모든 사람에게 당신이 무엇인지 알려주세요.',
  LABEL_ABOUT_ME_BUTTON: '내 소개 설정',
  LABEL_MY_SUPPORT: '내 지원',
};

export default dashboard;
