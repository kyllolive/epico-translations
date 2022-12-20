import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
import donationBox from './commons/donationBox';

const profile = {
  ...genres,
  ...topNav,
  ...common,
  ...authModal,
  ...donationBox,
  NEW_COVER_ERROR_LABEL: 'Oops! Wala namo maluwas ang imong bag-ong cover',
  LABEL_SAVE: 'I-save',
  LABEL_CANCEL: 'Ikansela',
  LABEL_SUCCESS_UPDATE_PROFILE:
    'Malampuson kami nga nag-update sa imong profile',
  LABEL_UNABLE_SAVE_CHANGES:
    'Uh oh! Wala namon masalbar ang imong mga pagbag-o',
  LABEL_ADD_ANOTHER: 'Pagdugang ug lain',
  LABEL_EDIT_PROFILE: 'Usaba ang Profile',
  LABEL_JOINED_DATE: 'Petsa sa pag apil',
  LABEL_UPDATE_PROFILE_INFORMATION:
    'Dali nga pag-update sa kasayuran sa profile',
  LABEL_CHANGE_PROFILE_PICTURE: 'Usba ang litrato sa profile',
  LABEL_ERROR_NEW_PROFILE: 'Oops! Wala namo na-save ang imong bag-ong profile',
  LABEL_ERROR_NEW_COVER: 'Oops! Wala namo na-save ang imong bag-ong cover',
  LABEL_ERROR_UPLOAD_COVER: 'Oops! Wala namo ma-upload ang imong cover',
};

export default profile;
