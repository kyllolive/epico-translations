import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import donationBox from './commons/donationBox';

const profile = {
  ...donationBox,
  ...genres,
  ...topNav,
  ...common,
  ...authModal,
  NEW_COVER_ERROR_LABEL: '앗! 새 표지를 저장할 수 없습니다.',
  LABEL_SAVE: '구하다',
  LABEL_CANCEL: '취소',
  LABEL_SUCCESS_UPDATE_PROFILE: '프로필을 업데이트했습니다.',
  LABEL_UNABLE_SAVE_CHANGES: '어 오! 변경사항을 저장할 수 없습니다.',
  LABEL_ADD_ANOTHER: '다른 항목 추가',
  LABEL_EDIT_PROFILE: '프로필 편집',
  LABEL_JOINED_DATE: '가입 날짜',
  LABEL_UPDATE_PROFILE_INFORMATION: '빠른 업데이트 프로필 정보',
  LABEL_CHANGE_PROFILE_PICTURE: '프로필 사진을 바꾸다',
  LABEL_ERROR_NEW_PROFILE: '앗! 새 프로필을 저장할 수 없습니다.',
  LABEL_ERROR_NEW_COVER: '앗! 새 표지를 저장할 수 없습니다.',
  LABEL_ERROR_UPLOAD_COVER: '앗! 표지를 업로드할 수 없습니다.',
};

export default profile;
