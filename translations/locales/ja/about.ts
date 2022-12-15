import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const home = {
  ...topNav,
  ...common,
  ...authModal,
  LABEL_ABOUT_US_HEADER_5: '私たちに関しては',
  LABEL_ABOUT_US_BODY_5_1:
    'テキストでもイラストでも、誰もが共有できるストーリーを持っていると信じています。',
  LABEL_ABOUT_US_BODY_5_2:
    'また、優れたコミックはどこからでも生まれると信じています。',
  LABEL_ABOUT_US_BODY_5_3:
    '私たちはツールを作ることを決意した漫画ファンの集まりです',
  LABEL_ABOUT_US_BODY_5_4:
    'コミック クリエイターが自分のストーリーをできるだけ多くの人につなげるのに役立ちます。',
  LABEL_ABOUT_US_HEADER_6: 'あなたのストーリーは？',
  LABEL_SIGN_UP: 'サインアップ',
  LABEL_CREATE_SERIES: 'シリーズを作成',
  LABEL_MY_PROFILE: '私のプロフィール',
};

export default home;
