import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const home = {
  ...topNav,
  ...common,
  ...authModal,
  LABEL_ABOUT_US_HEADER_5: '关于我们',
  LABEL_ABOUT_US_BODY_5_1:
    '无论是通过文字还是插图，我们相信每个人都有一个故事要分享。',
  LABEL_ABOUT_US_BODY_5_2: '我们也相信伟大的漫画可以来自任何地方。',
  LABEL_ABOUT_US_BODY_5_3: '我们是一群立志打造工具的漫画迷',
  LABEL_ABOUT_US_BODY_5_4: '帮助漫画创作者将他们的故事与尽可能多的人联系起来。',
  LABEL_ABOUT_US_HEADER_6: '你的故事是什么？',
  LABEL_SIGN_UP: '注册',
  LABEL_CREATE_SERIES: '创建系列',
  LABEL_MY_PROFILE: '我的简历',
};

export default home;
