import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import donationBox from './commons/donationBox';

const profile = {
  ...donationBox,
  ...genres,
  ...topNav,
  ...common,
  ...authModal,
  NEW_COVER_ERROR_LABEL: 'Oops! Wala namo ma-save ang imong bag-ong hapin',
  LABEL_SAVE: 'Tipigi',
  LABEL_CANCEL: 'Pagkanselar',
  LABEL_SUCCESS_UPDATE_PROFILE:
    'Nagmalampuson kami sa pag-update sa imong profile',
  LABEL_UNABLE_SAVE_CHANGES: 'Uh oh! Wala namo ma-save ang imong mga kausaban',
  LABEL_ADD_ANOTHER: 'Pagdugang og Lain',
  LABEL_EDIT_PROFILE: 'Usba ang Profile',
  LABEL_JOINED_DATE: 'Petsa sa pag-apil',
  LABEL_UPDATE_PROFILE_INFORMATION:
    'Dali nga pag-update sa impormasyon sa profile',
  LABEL_CHANGE_PROFILE_PICTURE: 'Usba ang hulagway sa profile',
  LABEL_ERROR_NEW_PROFILE: 'Oops! Wala namo ma-save ang imong bag-ong profile',
  LABEL_ERROR_NEW_COVER: 'Oops! Wala namo ma-save ang imong bag-ong hapin',
  LABEL_ERROR_UPLOAD_COVER: 'Oops! Wala namo ma-upload ang imong hapin',
};

export default profile;
