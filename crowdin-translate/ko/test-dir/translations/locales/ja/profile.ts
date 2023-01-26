import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import donationBox from './commons/donationBox';
const profile = { ...donationBox,
  ...genres,
  ...topNav,
  ...common,
  ...authModal,
  NEW_COVER_ERROR_LABEL: 'おっとっと！新しい表紙を保存できませんでした',
  LABEL_SAVE: '保存',
  LABEL_CANCEL: 'キャンセル',
  LABEL_SUCCESS_UPDATE_PROFILE: 'プロフィールを更新しました',
  LABEL_UNABLE_SAVE_CHANGES: 'ええとああ！変更を保存できませんでした',
  LABEL_ADD_ANOTHER: '別の追加',
  LABEL_EDIT_PROFILE: 'プロファイル編集',
  LABEL_JOINED_DATE: '入社日',
  LABEL_UPDATE_PROFILE_INFORMATION: 'プロフィール情報のクイック更新',
  LABEL_CHANGE_PROFILE_PICTURE: 'プロフィール画像を変更',
  LABEL_ERROR_NEW_PROFILE: 'おっとっと！新しいプロファイルを保存できませんでした',
  LABEL_ERROR_NEW_COVER: 'おっとっと！新しい表紙を保存できませんでした',
  LABEL_ERROR_UPLOAD_COVER: 'おっとっと！表紙をアップロードできませんでした'
};
export default profile;