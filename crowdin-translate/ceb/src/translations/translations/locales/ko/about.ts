import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
const home = { ...topNav,
  ...common,
  ...authModal,
  LABEL_ABOUT_US_HEADER_5: '회사 소개',
  LABEL_ABOUT_US_BODY_5_1: '텍스트나 일러스트레이션을 통해 모든 사람이 공유할 이야기가 있다고 믿습니다.',
  LABEL_ABOUT_US_BODY_5_2: '우리는 또한 훌륭한 만화가 어디에서나 나올 수 있다고 믿습니다.',
  LABEL_ABOUT_US_BODY_5_3: '우리는 도구를 만들기로 결정한 만화 팬 그룹입니다.',
  LABEL_ABOUT_US_BODY_5_4: '만화 제작자가 자신의 이야기를 가능한 한 많은 사람들과 연결할 수 있도록 돕습니다.',
  LABEL_ABOUT_US_HEADER_6: '네 이야기는 뭐야?',
  LABEL_SIGN_UP: '가입하기',
  LABEL_CREATE_SERIES: '시리즈 만들기',
  LABEL_MY_PROFILE: '내 프로필'
};
export default home;