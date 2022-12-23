import topNav from './commons/topNav';
import common from './commons/common';
import dashboard from './dashboard';

const settings = {
  ...topNav,
  ...common,
  ...dashboard,
  LABEL_HEADER_SETTINGS: 'Pengaturan',
  LABEL_SUB_HEADER_SECURITY: 'Keamanan',
  LABEL_CHANGE_PASSWORD: 'Ganti kata sandi',
  LABEL_CHANGE_USERNAME: 'Ubah Nama Pengguna',
  LABEL_DELETE_ACCOUNT: 'Hapus akun Saya',
  LABEL_DELETE_ACCOUNT_BODY: `
  This is permanent. When you delete your Epico account, you won'tidak dapat mengambil kembali konten atau informasi yang Anda'telah dibagikan di Epico. Menghapus akun Anda akan menghapus profil, komentar, dan kiriman dinding Anda secara permanen,
  bersama dengan seri dan bab apa pun yang Anda buat.`,
  LABEL_PASSWORD: 'Kata sandi',
  FORM_VALIDATION_OLD_PASSWORD_REQUIRED: 'Kata sandi saat ini diperlukan',
  FORM_VALIDATION_NEW_PASSWORD_REQUIRED: 'Kata sandi baru diperlukan',
  FORM_VALIDATION_NEW_PASSWORD_MIN: 'Harus lebih dari 12 karakter',
  LABEL_CHANGE_PASSWORD_SUCCESS_MSG: 'Kata sandi Anda berhasil diperbarui',
  LABEL_CHANGE_PASSWORD_INCORRECT_PASSWORD_MSG: 'kata kunci Salah',
  LABEL_CHANGE_PASSWORD_LIMIT_EXCEEDED_MSG:
    'Limit exceeded please try again later',
  LABEL_CHANGE_PASSWORD_UNABLE_TO_PROCESS: 'Unable to process your request',
  LABEL_OLD_PASSWORD: 'Current password',
  LABEL_NEW_PASSWORD: 'New password',
  LABEL_UPDATE_PASSWORD: 'Update password',
  LABEL_NEW_USERNAME: 'New username',
  LABEL_CHANGE_USERNAME_SUCCESS_MSG: 'Your username was successfully updated',
  FORM_VALIDATION_USERNAME_MATCHES:
    'Maaf, hanya huruf kecil (a-z), angka (0-9), karakter khusus (.-_) tidak boleh ada spasi.',
  FORM_VALIDATION_USERNAME_REQUIRED: 'Nama pengguna diperlukan',
  LABEL_PAYMENT_METHOD: 'Cara Pembayaran',
  LABEL_ACCEPT_PATMENTS_HEADER: 'Terima Pembayaran',
  LABEL_DONATION_SETTINGS_HEADER: 'Pengaturan Donasi',
  LABEL_CURRENCY_SUB_HEADER: 'Mata uang',
  LABEL_CURRENCY:
    'Choose the currency you want your supporters to pay. If your home currency isn’t listed, your payment provider will automatically convert it for you.',
  LABEL_MIN_DONATION_HEADER: 'Set Minimum Donation Price',
  LABEL_THANK_YOU_MESSAGE_HEADER: 'Auto Thank You Message',
  LABEL_THANK_YOU:
    'Pesan yang akan dikirim ketika seseorang menyumbang. Anda akan memiliki kesempatan untuk mengirim yang pribadi juga.',
  LABEL_SUBMIT_PAYMENT_SETTING: 'Kirim',
  FORM_VALIDATION_THANK_YOU: 'Terima kasih banyak atas dukungan Anda',
  FORM_VALIDATION_UPDATE_SUCCESS: 'Berhasil memperbarui setelan donasi!',
  LABEL_VERIFY_PAYPAL:
    'Harap verifikasi email yang dikirimkan kepada Anda oleh Paypal untuk menyelesaikan orientasi dan mulai menerima pembayaran.',
  LABEL_PAYPAL:
    'Paypal harus terhubung untuk menerima donasi dari pengguna lain!',
  LABEL_DISAGREE: 'Tidak setuju',
  LABEL_AGREE: 'Setuju',
  LABEL_SETTINGS_LANGUAGE: 'Pengaturan Bahasa',
  LABEL_PAYMENT_ENABLED: 'Diaktifkan',
  LABEL_PAYMENT_DISABLED: 'Dengan disabilitas',
  LABEL_ACCEPT_DESCRIPTION:
    'Terima kartu kredit dan saldo PayPal. Dibayarkan ke PayPal Anda secara instan.',
};

export default settings;
