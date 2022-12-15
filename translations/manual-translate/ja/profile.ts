import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const profile = {
  ...genres,
  ...topNav,
  ...common,
  ...authModal,
  NEW_COVER_ERROR_LABEL: 'おっとっと！新しいカバーを保存できませんでした',
  LABEL_SAVE: '保存する',
  LABEL_CANCEL: 'キャンセル',
  LABEL_SUCCESS_UPDATE_PROFILE: 'プロフィールの更新に成功しました',
  LABEL_UNABLE_SAVE_CHANGES: 'ええとああ！変更を保存できませんでした',
  LABEL_ADD_ANOTHER: '別の追加',
  LABEL_EDIT_PROFILE: 'プロファイル編集',
  LABEL_JOINED_DATE: '入会日',
  LABEL_UPDATE_PROFILE_INFORMATION: 'クイックアップデートプロファイル情報',
  LABEL_CHANGE_PROFILE_PICTURE: 'プロフィール画像を変更',
  LABEL_ERROR_NEW_PROFILE: ' おっと！新しいプロファイルを保存できませんでした',
  LABEL_ERROR_NEW_COVER: '  おっと！新しいカバーを保存できませんでした',
  LABEL_ERROR_UPLOAD_COVER: 'おっと！カバーをアップロードできませんでした',
};

export default profile;
