import topNav from './commons/topNav';
import common from './commons/common';
import consoleSeriesList from './consoleSeriesList';

const dashboard = {
  ...topNav,
  ...common,
  ...consoleSeriesList,
  LABEL_HOME: '家',
  LABEL_LIVE: 'あなたのアカウントはライブです',
  LABEL_NOTIFICATIONS: '通知',
  LABEL_FOLLOWERS: 'フォロワー',
  LABEL_SERIES_FOLLOWED: 'シリーズフォロー',
  LABEL_PAYMENT_HISTORY: '支払歴',
  LABEL_PAYMENT_METHOD: '支払方法',
  LABEL_EDIT_PROFILE: 'プロファイル編集',
  LABEL_MANAGE_SERIES: 'シリーズの管理',
  LABEL_CHANGE_USERNAME: 'ユーザー名の変更',
  LABEL_CHANGE_PASSWORD: 'パスワードを変更する',
  LABEL_DELETE_ACCOUNT: 'アカウントを削除します',
  LABEL_LANGUAGES: '言語',
  LABEL_EMPTY: 'ここにはまだ何もありません...',
  LABEL_DONATED: '寄付した',
  LABEL_RECENT_DONATIONS: '最近の寄付',
  LABEL_SUGGESTIONS: '提案',
  LABEL_DASHBOARD: 'ダッシュボード',
  LABEL_COVER_PAGE: '表紙を追加する',
  LABEL_COVER_PAGE_DESCRIPTION: `表紙画像のあるページ
  より個性的に見える！`,
  LABEL_UPLOAD_IMAGE: '画像をアップロードする',
  LABEL_UPLOAD_SERIES: 'シリーズをアップロードする',
  LABEL_UPLOAD_SERIES_DESCRIPTION: '最近の作品をギャラリーに追加する',
  LABEL_CONNECT_PAYMENT_METHOD: 'お支払い方法を接続する',
  LABEL_PAYMENT_METHOD_DESCRIPTION: 'PayPal アカウントを接続する',
  LABEL_SETUP_PAYMENT_BUTTON: '支払いの設定',
  LABEL_ABOUT_ME: '私について',
  LABEL_ABOUT_ME_DESCRIPTION: 'あなたのことをみんなに知らせてください。',
  LABEL_ABOUT_ME_BUTTON: 'セットアップ 私について',
  LABEL_MY_SUPPORT: '私のサポート',
};

export default dashboard;
