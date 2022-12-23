import topNav from './commons/topNav';
import common from './commons/common';
import consoleSeriesList from './consoleSeriesList';
const dashboard = { ...topNav,
  ...common,
  ...consoleSeriesList,
  LABEL_HOME: '家',
  LABEL_LIVE: '您的帐户在',
  LABEL_NOTIFICATIONS: '通知',
  LABEL_FOLLOWERS: '追随者',
  LABEL_SERIES_FOLLOWED: '系列关注',
  LABEL_PAYMENT_HISTORY: '支付历史',
  LABEL_PAYMENT_METHOD: '付款方式',
  LABEL_EDIT_PROFILE: '编辑个人资料',
  LABEL_MANAGE_SERIES: '管理系列',
  LABEL_CHANGE_USERNAME: '更改用户名',
  LABEL_CHANGE_PASSWORD: '更改密码',
  LABEL_DELETE_ACCOUNT: '删除我的账户',
  LABEL_LANGUAGES: '语言',
  LABEL_EMPTY: '这里什么都没有...',
  LABEL_DONATED: '捐赠的',
  LABEL_RECENT_DONATIONS: '最近的捐款',
  LABEL_SUGGESTIONS: '建议',
  LABEL_DASHBOARD: '仪表板',
  LABEL_COVER_PAGE: '添加封面',
  LABEL_COVER_PAGE_DESCRIPTION: `带有封面图片的页面
  看起来更有个性！`,
  LABEL_UPLOAD_IMAGE: '上传图片',
  LABEL_UPLOAD_SERIES: '上传一个系列',
  LABEL_UPLOAD_SERIES_DESCRIPTION: '将一些最近的作品添加到您的画廊',
  LABEL_CONNECT_PAYMENT_METHOD: '连接付款方式',
  LABEL_PAYMENT_METHOD_DESCRIPTION: '连接您的贝宝账户',
  LABEL_SETUP_PAYMENT_BUTTON: '设置付款',
  LABEL_ABOUT_ME: '关于我',
  LABEL_ABOUT_ME_DESCRIPTION: '让每个人都知道你在做什么。',
  LABEL_ABOUT_ME_BUTTON: '设置关于我',
  LABEL_MY_SUPPORT: '我的支持'
};
export default dashboard;