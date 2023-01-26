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
  NEW_COVER_ERROR_LABEL: '哎呀！我们无法保存您的新封面',
  LABEL_SAVE: '节省',
  LABEL_CANCEL: '取消',
  LABEL_SUCCESS_UPDATE_PROFILE: '我们已成功更新您的个人资料',
  LABEL_UNABLE_SAVE_CHANGES: '哦哦！我们无法保存您的更改',
  LABEL_ADD_ANOTHER: '加上另一个',
  LABEL_EDIT_PROFILE: '编辑个人资料',
  LABEL_JOINED_DATE: '加入日期',
  LABEL_UPDATE_PROFILE_INFORMATION: '快速更新个人资料信息',
  LABEL_CHANGE_PROFILE_PICTURE: '更改个人资料图片',
  LABEL_ERROR_NEW_PROFILE: '哎呀！我们无法保存您的新个人资料',
  LABEL_ERROR_NEW_COVER: '哎呀！我们无法保存您的新封面',
  LABEL_ERROR_UPLOAD_COVER: '哎呀！我们无法上传您的封面',
};

export default profile;
