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
  NEW_COVER_ERROR_LABEL: 'Oops! Hindi namin nai-save ang iyong bagong cover',
  LABEL_SAVE: 'I-save',
  LABEL_CANCEL: 'Kanselahin',
  LABEL_SUCCESS_UPDATE_PROFILE: 'Matagumpay naming na-update ang iyong profile',
  LABEL_UNABLE_SAVE_CHANGES:
    'Uh oh! Hindi namin nai-save ang iyong mga pagbabago',
  LABEL_ADD_ANOTHER: 'Magdagdag ng Isa pa',
  LABEL_EDIT_PROFILE: 'Ibahin ang profile',
  LABEL_JOINED_DATE: 'Petsa ng pagsali',
  LABEL_UPDATE_PROFILE_INFORMATION:
    'Mabilis na i-update ang impormasyon ng profile',
  LABEL_CHANGE_PROFILE_PICTURE: 'Baguhin ang larawan sa profile',
  LABEL_ERROR_NEW_PROFILE: 'Oops! Hindi namin na-save ang iyong bagong profile',
  LABEL_ERROR_NEW_COVER: 'Oops! Hindi namin nai-save ang iyong bagong cover',
  LABEL_ERROR_UPLOAD_COVER: 'Oops! Hindi namin na-upload ang iyong pabalat',
};

export default profile;
