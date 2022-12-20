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
  LABEL_WARNING_MESSAGE: `Naglalaman ang Serye na ito ng mga pang-adultong tema at sitwasyon at inirerekumenda
  para sa mga mature na madla. Pinayuhan ang mga diskriminasyon ng manonood. Magpatuloy upang matingnan
  nilalaman?`,
};

export default viewChapter;
