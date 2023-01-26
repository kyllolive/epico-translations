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
  NEW_COVER_ERROR_LABEL: 'Ups! Kami tidak dapat menyimpan sampul baru Anda',
  LABEL_SAVE: 'Menyimpan',
  LABEL_CANCEL: 'Membatalkan',
  LABEL_SUCCESS_UPDATE_PROFILE: 'Kami berhasil memperbarui profil Anda',
  LABEL_UNABLE_SAVE_CHANGES: 'Uh oh! Kami tidak dapat menyimpan perubahan Anda',
  LABEL_ADD_ANOTHER: 'Tambahkan Lainnya',
  LABEL_EDIT_PROFILE: 'Sunting profil',
  LABEL_JOINED_DATE: 'Tanggal bergabung',
  LABEL_UPDATE_PROFILE_INFORMATION: 'Perbarui informasi profil dengan cepat',
  LABEL_CHANGE_PROFILE_PICTURE: 'Ganti gambar profil',
  LABEL_ERROR_NEW_PROFILE: 'Ups! Kami tidak dapat menyimpan profil baru Anda',
  LABEL_ERROR_NEW_COVER: 'Ups! Kami tidak dapat menyimpan sampul baru Anda',
  LABEL_ERROR_UPLOAD_COVER: 'Ups! Kami tidak dapat mengunggah sampul Anda',
};

export default profile;
