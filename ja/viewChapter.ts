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
  LABEL_WARNING_MESSAGE: `このシリーズには大人のテーマと状況が含まれており、お勧めです
    成熟した聴衆のために。視聴者の裁量をお勧めします。表示に進みます
    コンテンツ？`,
};

export default viewChapter;
