import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
const consoleEditChapter = { ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: 'seri',
  LABEL_CHAPTER: 'bab',
  LABEL_EDIT: 'Sunting',
  LABEL_EDIT_CHAPTER: 'Edit Bab',
  LABEL_SUBMIT: 'Kirim',
  LABEL_UPDATE: 'Memperbarui',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: 'Cover image is required!',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX: 'Chapter description must be at most 2500 characters',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED: 'Chapter description is required',
  FORM_VALIDATION_CHAPTER_NOTE_MAX: 'Chapter note must be at most 2500 characters',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: 'Published is required',
  FORM_VALIDATION_CHAPTER_TITLE_MAX: 'Chapter title must be at most 100 characters',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES: 'Sorry, only letters (a-z), numbers (0-9), special characters (\':?"!-_&()<>.,+=@#$%|) are allowed.',
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: 'Chapter title is required',
  FORM_VALIDATION_CHAPTER_PAGES_MIN: 'Must contain atleast 1 image',
  // END FORM VALIDATION
  LABEL_SINGLE_COVER_DROPBOX: 'Drop your cover photo here, or click to browse',
  LABEL_SINGLE_CHAPTER_COVER_SUB: 'Untuk hasil terbaik di semua perangkat, gunakan gambar dengan ukuran minimal 360 x 360 piksel',
  LABEL_PUBLISH_CHAPTER: 'Terbitkan bab',
  LABEL_CHAPTER_TITLE: 'Judul bab',
  LABEL_CHAPTER_DESCRIPTION: 'Deskripsi bab',
  LABEL_CHAPTER_NOTE_OPTIONAL: 'Catatan bab (opsional)',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: 'Catatan ini akan ditampilkan di akhir bab',
  LABEL_UPLOAD_PAGES: 'Unggah halaman',
  LABEL_NOT_FOUND_HEADER: 'Uh oh, kami tidak dapat menemukan bab ini untuk diedit',
  LABEL_NOT_FOUND_MSG_1: 'Jika menurut Anda bab epico ini ada, silakan hubungi dukungan kami dengan ID seri yang diberikan',
  LABEL_NOT_FOUND_MSG_2: 'dengan id bahasa dari',
  LABEL_NOT_FOUND_MSG_3: 'dan ID bab dari'
};
export default consoleEditChapter;