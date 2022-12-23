import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import landingPage from './commons/landingPage';
const home = { ...genres,
  ...topNav,
  ...common,
  ...authModal,
  ...landingPage,
  LATEST: '最新的',
  HOME_BANNER_HEADER: '以不同的语言发布您的漫画！',
  HOME_BANNER_CONTENT: `找不到您的语言？给我们发信息！`,
  HOME_BANNER_HEADER_DISCORD: '加入我们的社区',
  HOME_BANNER_CONTENT_DISCORD: '对于意见、问题和建议。加入我们的不和谐服务器',
  LABEL_GET_STARTED: '开始使用',
  LABEL_VISIT: '访问',
  COLLAB_WEBKOM_1: '菲律宾之家',
  COLLAB_WEBKOM_2: 'WebKomiks',
  COLLAB_EPICO_1: '众包漫画',
  COLLAB_EPICO_2: '翻译平台',
  COLLAB_CONTENT: '合作将菲律宾 KOMIKS 推向世界'
};
export default home;