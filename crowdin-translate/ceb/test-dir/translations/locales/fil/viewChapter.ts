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
  LABEL_WARNING_MESSAGE: `Ang Seryeng ito ay naglalaman ng mga pang-adultong tema at sitwasyon at inirerekomenda
  para sa mga mature audience. Ang mga pagpapasya ng manonood ay pinapayuhan. Magpatuloy upang tingnan
  nilalaman?`
};
export default viewChapter;