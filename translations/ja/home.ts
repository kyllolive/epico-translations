import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import landingPage from './commons/landingPage';

const home = {
  ...genres,
  ...topNav,
  ...common,
  ...authModal,
  ...landingPage,
  LATEST: '最新',
  HOME_BANNER_HEADER: 'コミックをさまざまな言語で公開しましょう！',
  HOME_BANNER_CONTENT: `あなたの言語が見つかりませんでしたか？私達にメッセージを送ります！`,
  HOME_BANNER_HEADER_DISCORD: '私たちのコミュニティに参加する',
  HOME_BANNER_CONTENT_DISCORD: 'コミックをさまざまな言語で公開しましょう！',
  LABEL_GET_STARTED: 'はじめに',
  LABEL_VISIT: '訪問',
  COLLAB_WEBKOM_1: 'Philippine WebKomiks',
  COLLAB_WEBKOM_2: 'の本拠地',
  COLLAB_EPICO_1: 'クラウドソースコミック',
  COLLAB_EPICO_2: '翻訳プラットフォーム',
  COLLAB_CONTENT: 'フィリピンのコミックを世界にもたらすためのコラボレーション',
};

export default home;
