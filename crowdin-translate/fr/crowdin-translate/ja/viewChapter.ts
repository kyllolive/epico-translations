import genres from './commons/genres';
import common from './commons/common';
import seriesDrawer from './commons/seriesDrawer';
import seriesReader from './commons/seriesReader';
import seriesFooter from './commons/seriesFooter';
import authModal from './commons/authModal';
import followButton from './commons/followButton';
const viewChapter = { ...genres,
  ...common,
  ...seriesDrawer,
  ...seriesReader,
  ...seriesFooter,
  ...authModal,
  ...followButton,
  LABEL_WARNING_MESSAGE: `このシリーズには成人向けのテーマとシチュエーションが含まれており、推奨されます
  成熟した視聴者向け。視聴者の裁量が推奨されます。表示に進む
  コンテンツ？`
};
export default viewChapter;