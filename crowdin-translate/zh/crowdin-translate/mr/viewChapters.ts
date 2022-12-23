import genres from './commons/genres';
import common from './commons/common';
import seriesDrawer from './commons/seriesDrawer';
import seriesReader from './commons/seriesReader';
import topNav from './commons/topNav';
import seriesFooter from './commons/seriesFooter';
import authModal from './commons/authModal';
import followButton from './commons/followButton';
const viewChapters = { ...genres,
  ...common,
  ...seriesDrawer,
  ...seriesReader,
  ...seriesFooter,
  ...topNav,
  ...authModal,
  ...followButton,
  LABEL_DESCRIPTION: 'वर्णन',
  LABEL_CONTINUE_READING_BUTTON: 'वाचन सुरू ठेवा',
  LABEL_FIRST_CHAPTER_BUTTON: 'पहिला अध्याय'
};
export default viewChapters;