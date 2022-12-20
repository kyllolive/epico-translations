import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const home = {
  ...topNav,
  ...common,
  ...authModal,
  LABEL_ABOUT_US_HEADER_5: '会社概要',
  LABEL_ABOUT_US_BODY_5_1:
    '文章でもイラストでも、誰にでもストーリーがあると信じています。',
  LABEL_ABOUT_US_BODY_5_2:
    'また、素晴らしいコミックはどこからでも生まれると信じています。',
  LABEL_ABOUT_US_BODY_5_3:
    '私たちは、ツールを作ることを決意したコミックファンのグループです。',
  LABEL_ABOUT_US_BODY_5_4:
    'は、漫画家が自分のストーリーをより多くの人に伝えることができるようにするための活動です。',
  LABEL_ABOUT_US_HEADER_6: 'あなたのストーリーは？',
  LABEL_SIGN_UP: 'サインアップ',
  LABEL_CREATE_SERIES: 'シリーズ化',
};

export default home;
