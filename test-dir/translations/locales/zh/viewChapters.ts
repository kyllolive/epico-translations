import genres from './commons/genres';
import common from './commons/common';
import seriesDrawer from './commons/seriesDrawer';
import seriesReader from './commons/seriesReader';
import topNav from './commons/topNav';
import seriesFooter from './commons/seriesFooter';
import authModal from './commons/authModal';
import followButton from './commons/followButton';

const viewChapters = {
  ...genres,
  ...common,
  ...seriesDrawer,
  ...seriesReader,
  ...seriesFooter,
  ...topNav,
  ...authModal,
  ...followButton,
  LABEL_DESCRIPTION: '描述',
  LABEL_CONTINUE_READING_BUTTON: '继续阅读',
  LABEL_FIRST_CHAPTER_BUTTON: '第一章',
};

export default viewChapters;
