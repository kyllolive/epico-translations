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
  LABEL_WARNING_MESSAGE: `Kini nga Serye adunay sulud nga mga tema ug sitwasyon nga dili angay sa mga bata girekomenda alang sa mga hamtong nga mambasa. Gitambagan ang paghukum sa tumatan-aw. Pagpadayon sa pagtan-aw
  sulud?`,
};

export default viewChapter;
