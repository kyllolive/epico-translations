import topNav from './commons/topNav';
import common from './commons/common';
import consoleSeriesList from './consoleSeriesList';
const dashboard = { ...topNav,
  ...common,
  ...consoleSeriesList,
  LABEL_HOME: 'Rumah',
  LABEL_LIVE: 'Akun Anda Langsung di',
  LABEL_NOTIFICATIONS: 'Pemberitahuan',
  LABEL_FOLLOWERS: 'pengikut',
  LABEL_SERIES_FOLLOWED: 'Seri Diikuti',
  LABEL_PAYMENT_HISTORY: 'Riwayat Pembayaran',
  LABEL_PAYMENT_METHOD: 'Cara Pembayaran',
  LABEL_EDIT_PROFILE: 'Sunting profil',
  LABEL_MANAGE_SERIES: 'Kelola Seri',
  LABEL_CHANGE_USERNAME: 'Ubah Nama Pengguna',
  LABEL_CHANGE_PASSWORD: 'Ganti kata sandi',
  LABEL_DELETE_ACCOUNT: 'Hapus akun Saya',
  LABEL_LANGUAGES: 'Bahasa',
  LABEL_EMPTY: 'Belum ada apa-apa disini...',
  LABEL_DONATED: 'Disumbangkan',
  LABEL_RECENT_DONATIONS: 'Donasi Terbaru',
  LABEL_SUGGESTIONS: 'Saran',
  LABEL_DASHBOARD: 'Dasbor',
  LABEL_COVER_PAGE: 'Tambahkan Halaman Sampul',
  LABEL_COVER_PAGE_DESCRIPTION: `Halaman dengan gambar sampul
  terlihat lebih pribadi!`,
  LABEL_UPLOAD_IMAGE: 'Unggah gambar',
  LABEL_UPLOAD_SERIES: 'Unggah seri',
  LABEL_UPLOAD_SERIES_DESCRIPTION: 'Tambahkan beberapa karya terbaru ke galeri Anda',
  LABEL_CONNECT_PAYMENT_METHOD: 'Hubungkan Metode Pembayaran',
  LABEL_PAYMENT_METHOD_DESCRIPTION: 'Hubungkan Akun PayPal Anda',
  LABEL_SETUP_PAYMENT_BUTTON: 'Pengaturan Pembayaran',
  LABEL_ABOUT_ME: 'Tentang saya',
  LABEL_ABOUT_ME_DESCRIPTION: 'Biarkan semua orang tahu tentang Anda.',
  LABEL_ABOUT_ME_BUTTON: 'Pengaturan Tentang Saya',
  LABEL_MY_SUPPORT: 'Dukungan saya'
};
export default dashboard;