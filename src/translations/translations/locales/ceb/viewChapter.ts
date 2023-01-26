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
  LABEL_WARNING_MESSAGE: `Kini nga Serye adunay mga tema ug sitwasyon sa mga hamtong ug girekomenda
  alang sa hamtong nga mga tumatan-aw. Gitambagan ang mga kabuot sa tumatan-aw. Padayon sa pagtan-aw
  sulod?`,
};

export default viewChapter;
