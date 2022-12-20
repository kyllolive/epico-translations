import genres from './commons/genres';
import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const profile = {
  ...genres,
  ...topNav,
  ...common,
  ...authModal,
  NEW_COVER_ERROR_LABEL: 'Naku! Hindi namin nai-save ang iyong bagong takip',
  LABEL_SAVE: 'Save',
  LABEL_CANCEL: 'Kanselahin',
  LABEL_SUCCESS_UPDATE_PROFILE: 'Matagumpay kaming na-update ang iyong profile',
  LABEL_UNABLE_SAVE_CHANGES:
    'Uh oh! Hindi namin nai-save ang iyong mga pagbabago',
  LABEL_ADD_ANOTHER: 'Magdagdag ng Isa Pa',
  LABEL_EDIT_PROFILE: 'Ibahin ang profile',
  LABEL_JOINED_DATE: 'Sumali sa petsa',
  LABEL_UPDATE_PROFILE_INFORMATION:
    'Mabilis na pag-update ng impormasyon sa profile',
  LABEL_CHANGE_PROFILE_PICTURE: 'Palitan ang larawan sa profile',
  LABEL_ERROR_NEW_PROFILE:
    ' Naku! Hindi namin nai-save ang iyong bagong profile',
  LABEL_ERROR_NEW_COVER: 'Naku! Hindi namin nai-save ang iyong bagong imahe',
  LABEL_ERROR_UPLOAD_COVER:
    'Naku! Hindi namin nagawang i-upload ang iyong imahe',
};

export default profile;
