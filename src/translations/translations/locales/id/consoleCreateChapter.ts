import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';

const consoleCreateChapter = {
  ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: 'seri',
  LABEL_CHAPTER: 'bab',
  LABEL_SOMETHING_WENT_WRONG: 'Ups ada yang tidak beres, coba lagi nanti!',
  LABEL_GO_BACK: 'Kembali',
  LABEL_ADD_NEW_SERIES: 'Tambahkan Seri Baru',
  LABEL_NEXT_CHAPTER: 'Bab selanjutnya',
  LABEL_SUBMIT: 'Kirim',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: 'Cover image is required!',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX:
    'Chapter description must be at most 2500 characters',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED:
    'Chapter description is required',
  FORM_VALIDATION_CHAPTER_NOTE_MAX:
    'Chapter note must be at most 2500 characters',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: 'Published is required',
  FORM_VALIDATION_CHAPTER_TITLE_MAX:
    'Chapter title must be at most 100 characters',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES:
    'Sorry, only letters (a-z), numbers (0-9), special characters (\':?"!-_&()<>.,+=@#$%|) are allowed.',
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: 'Chapter title is required',
  FORM_VALIDATION_CHAPTER_PAGES_MIN: 'Must contain atleast 1 image',
  // END FORM VALIDATION
  LABEL_CREATE_CHAPTER: 'Create Chapter',
  LABEL_SINGLE_COVER_DROPBOX: 'Drop your cover photo here, or click to browse',
  LABEL_SINGLE_CHAPTER_COVER_SUB:
    'Untuk hasil terbaik di semua perangkat, gunakan gambar dengan ukuran minimal 360 x 360 piksel',
  LABEL_SERIES_DESCRIPTION: 'Deskripsi seri',
  LABEL_PUBLISH_CHAPTER: 'Terbitkan bab',
  LABEL_CHAPTER_TITLE: 'Judul bab',
  LABEL_CHAPTER_DESCRIPTION: 'Deskripsi bab',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Catatan bab (opsional)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'Catatan ini akan ditampilkan di akhir bab',
  LABEL_UPLOAD_PAGES: 'Unggah halaman',
};

export default consoleCreateChapter;
