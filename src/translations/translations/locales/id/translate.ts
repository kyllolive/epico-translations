import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const translate = {
  ...topNav,
  ...common,
  ...authModal,
  //translate page
  SCANLATE_BANNER_HEADER: 'Hello Scanlators!',
  SCANLATE_BANNER_CONTENT:
    'Dukung pembuat konten dengan membantu mereka menjangkau pasar yang lebih besar Dapatkan akses ke semua komik secara gratis Bekerja dengan pembuat konten dalam pengaturan hukum Dialog/manuskrip yang dapat ditelusuri Glosarium bawaan untuk mengubah tim',
  SCANLATE_BANNER_HEADER_2: 'Komik Anda Layak Dibaca Oleh Dunia',
  SCANLATE_BANNER_CONTENT_2: `Layanan terjemahan crowdsource untuk komik, tidak dapat menemukan bahasa Anda? Kirimi kami pesan!`,
  LABEL_CONTENT_HEADER: 'Di sini Anda dapat memindai Seri favorit Anda.',
  LABEL_SEARCH_SERIES: 'Cari Seri',
  LABEL_LANGUAGE: 'Bahasa',
  LABEL_ALL: 'Semua',
  LABEL_NO_AVAILABLE_SERIES: 'Tidak Ada Seri yang Tersedia untuk Terjemahan',
  LABEL_LOADING: 'Memuat...',
  LABEL_PREVIEW: 'Pratinjau',
  LABEL_SAVE: 'Menyimpan',
  LABEL_GUIDE: 'Memandu',
  LABEL_TRANSLATE: 'Pindai',
  LABEL_TO: 'ke',
  LABEL_CREATED_BY: 'dibuat oleh',
  LABEL_GLOSSARY: 'Glosarium',
  LABEL_CREDITS: 'Kredit',
  LABEL_SUBMISSION_SUCCESS: 'Kiriman Anda telah disimpan!',
  LABEL_SUBMISSION_ERROR: 'Ada kesalahan dalam pengiriman Anda',

  //Pages Tab//
  LABEL_PAGE: 'Page:',
  LABEL_PAGES: 'Pages',
  LABEL_DOWNLOAD: 'Download',
  LABEL_OVERRIDE: 'override with redrawn image?',
  LABEL_SELECT_CLEAN_VERSIONS: 'Select clean versions',
  LABEL_SELECT_VERSIONS: 'Select versions...',
  LABEL_NO_UPLOADED_CLEAN_VERSION: 'No uploaded clean version',
  LABEL_UPLOAD_CLEAN_IMAGE: 'upload clean image',
  LABEL_DOWNLOAD_CLEAN_IMAGE: 'download clean image',
  LABEL_TRANSLATION: 'Scanlation',
  LABEL_ADD_TEXT: 'Add Text',
  //Comment Tab
  LABEL_COMMENT: 'Comment',
  LABEL_COMMENT_HERE: 'Comment here...',
  LABEL_MORE_COMMENTS: 'More Comments',
  LABEL_SUBMIT: 'Submit',
  LABEL_CANCEL: 'Cancel',
  LABEL_REPLY: 'Reply',
  LABEL_UPDATE: 'Update',
  LABEL_HOW_TO_COMMENT: 'How to comment',
  LABEL_HOW_TO_COMMENT_1: 'Select an area to comment on',
  LABEL_HOW_TO_COMMENT_2: 'Drag to highlight the desired area',
  LABEL_HOW_TO_COMMENT_3:
    'Click the text box that says Write a comment, type your comment, and click submit.',
  //Description Tab
  LABEL_DESCRIPTION: 'Keterangan',
  LABEL_SERIES: 'Seri',
  LABEL_CHAPTER: 'Bab',
  LABEL_SWITCH_LANGUAGE: 'Ganti Bahasa',
  LABEL_SERIES_TITLE: 'Judul Seri',
  LABEL_SERIES_DESCRIPTION: 'Deskripsi Seri',
  LABEL_CHAPTER_TITLE: 'Judul Bab',
  LABEL_CHAPTER_DESCRIPTION: 'Deskripsi Bab',
  LABEL_CHAPTER_AUTHOR_NOTE: `Catatan Penulis Bab`,
  //SFX Tab
  LABEL_UPLOAD: 'Upload',
  //History Tab
  LABEL_HISTORY: 'History',
  LABEL_MODIFIED_BY: 'modified by',
  LABEL_LATEST: 'Latest',
  LABEL_LOAD: 'Load',
  LABEL_PUBLISH: 'Publish',
  //Credits Tab
  LABEL_CONTRIBUTORS: 'Contributors',
  LABEL_NO_CONTRIBUTORS: 'No Contributors',

  //Change
  LABEL_CHANGE_PAGE:
    'There are unsaved changes. Are you sure you want to move away? Changes will be lost',
  LABEL_OFFICIAL_CLEAN_VERSION: 'Official Version',
  LABEL_MY_CLEAN_VERSION: 'my version',
  LABEL_VERSION: 'version',
};

export default translate;
