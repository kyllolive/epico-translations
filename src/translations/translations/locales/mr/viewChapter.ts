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
  LABEL_WARNING_MESSAGE: `या मालिकेत प्रौढ थीम आणि परिस्थिती आहेत आणि शिफारस केली जाते
  प्रौढ प्रेक्षकांसाठी. दर्शकांच्या विवेकबुद्धीचा सल्ला दिला जातो. पाहण्यासाठी पुढे जा
  सामग्री?`,
};

export default viewChapter;
