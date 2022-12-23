import topNav from './commons/topNav';
import common from './commons/common';
import deleteDialog from './commons/deleteDialog';
const consoleChapterList = { ...topNav,
  ...common,
  ...deleteDialog,
  LABEL_COLUMN_ID: 'PENGENAL',
  LABEL_ADD_NEW_CHAPTER: 'Tambahkan Bab Baru',
  LABEL_COLUMN_TITLE: 'Judul',
  LABEL_COLUMN_LANGUAGE: 'Bahasa',
  LABEL_COLUMN_STATUS: 'Status',
  LABEL_COLUMN_CHAPTERS: 'bab',
  LABEL_COLUMN_PUBLISHED: 'Diterbitkan',
  LABEL_COLUMN_DESCRIPTION: 'Keterangan',
  LABEL_COLUMN_PAGES: 'halaman',
  LABEL_COLUMN_CREATED_DATE: 'Tanggal Dibuat',
  LABEL_NO_CHAPTERS: 'Tidak ada Bab',
  LABEL_NO_SERIES: 'Tidak ada Seri',
  LABEL_TRANSLATION: 'Terjemahan',
  LABEL_EDIT: 'Sunting',
  LABEL_DELETE: 'Menghapus',
  LABEL_ROWS_PER_PAGE: 'Baris per halaman:',
  LABEL_PRIVATE_VIEW: 'Pemandangan Pribadi',
  LABEL_SHARE_ACTION_MENU: 'Bagikan/Kolaborator'
};
export default consoleChapterList;