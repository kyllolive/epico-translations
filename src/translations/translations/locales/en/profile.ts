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
  NEW_COVER_ERROR_LABEL: 'Oops! We were unable to save your new cover',
  LABEL_SAVE: 'Save',
  LABEL_CANCEL: 'Cancel',
  LABEL_SUCCESS_UPDATE_PROFILE: 'We were successful updating your profile',
  LABEL_UNABLE_SAVE_CHANGES: 'Uh oh! We were unable to save your changes',
  LABEL_ADD_ANOTHER: 'Add Another',
  LABEL_EDIT_PROFILE: 'Edit Profile',
  LABEL_JOINED_DATE: 'Joined date',
  LABEL_UPDATE_PROFILE_INFORMATION: 'Quick update profile information',
  LABEL_CHANGE_PROFILE_PICTURE: 'Change profile picture',
  LABEL_ERROR_NEW_PROFILE: 'Oops! We were unable to save your new profile',
  LABEL_ERROR_NEW_COVER: 'Oops! We were unable to save your new cover',
  LABEL_ERROR_UPLOAD_COVER: 'Oops! We were unable to upload your cover',
};

export default profile;
