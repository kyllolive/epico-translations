import genres from './commons/genres';
import common from './commons/common';
import seriesDrawer from './commons/seriesDrawer';
import seriesReader from './commons/seriesReader';
import seriesFooter from './commons/seriesFooter';
import authModal from './commons/authModal';
import followButton from './commons/followButton';

const viewChapter = {
  ...genres,
  ...common,
  ...seriesDrawer,
  ...seriesReader,
  ...seriesFooter,
  ...authModal,
  ...followButton,
  LABEL_WARNING_MESSAGE: `이 시리즈에는 성인용 테마와 상황이 포함되어 있으며 권장됩니다.
  성숙한 관객을 위해. 시청자의 재량에 따릅니다. 보기로 이동
  콘텐츠?`,
};

export default viewChapter;
