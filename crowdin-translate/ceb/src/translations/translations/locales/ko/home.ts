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
  LATEST: '최신',
  HOME_BANNER_HEADER: '다른 언어로 만화를 게시하십시오!',
  HOME_BANNER_CONTENT: `귀하의 언어를 찾을 수 없습니까? 메시지를 보내주세요!`,
  HOME_BANNER_HEADER_DISCORD: '커뮤니티 가입',
  HOME_BANNER_CONTENT_DISCORD: '의견, 질문 및 제안. 디스코드 서버에 가입하세요',
  LABEL_GET_STARTED: '시작하다',
  LABEL_VISIT: '방문',
  COLLAB_WEBKOM_1: '필리핀의 고향',
  COLLAB_WEBKOM_2: 'Web코믹스',
  COLLAB_EPICO_1: '크라우드소싱 만화',
  COLLAB_EPICO_2: '번역 플랫폼',
  COLLAB_CONTENT: 'PHILPPINE KOMIKS를 세계에 알리기 위한 협력'
};
export default home;