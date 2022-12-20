import topNav from './commons/topNav';
import common from './commons/common';
import dashboard from './dashboard';

const settings = {
  ...topNav,
  ...common,
  ...dashboard,
  LABEL_HEADER_SETTINGS: '設定',
  LABEL_SUB_HEADER_SECURITY: '安全',
  LABEL_CHANGE_PASSWORD: 'パスワードを変更する',
  LABEL_CHANGE_USERNAME: 'ユーザー名の変更',
  LABEL_DELETE_ACCOUNT: 'アカウントを削除します',
  LABEL_DELETE_ACCOUNT_BODY: `
  This is permanent. When you delete your Epico account, you won'コンテンツまたは情報を取得できない'エピコでシェアしました。アカウントを削除すると、プロフィール、コメント、ウォール投稿が完全に削除されます。
  作成したシリーズやチャプターと一緒に.`,
  LABEL_PASSWORD: 'パスワード',
  FORM_VALIDATION_OLD_PASSWORD_REQUIRED: '現在のパスワードが必要です',
  FORM_VALIDATION_NEW_PASSWORD_REQUIRED: '新しいパスワードが必要です',
  FORM_VALIDATION_NEW_PASSWORD_MIN: '12文字以上である必要があります',
  LABEL_CHANGE_PASSWORD_SUCCESS_MSG: 'パスワードが正常に更新されました',
  LABEL_CHANGE_PASSWORD_INCORRECT_PASSWORD_MSG: 'パスワードが正しくありません',
  LABEL_CHANGE_PASSWORD_LIMIT_EXCEEDED_MSG:
    '制限を超えました。しばらくしてからもう一度お試しください',
  LABEL_CHANGE_PASSWORD_UNABLE_TO_PROCESS: 'リクエストを処理できません',
  LABEL_OLD_PASSWORD: '現在のパスワード',
  LABEL_NEW_PASSWORD: '新しいパスワード',
  LABEL_UPDATE_PASSWORD: 'パスワードの更新',
  LABEL_NEW_USERNAME: '新しいユーザーネーム',
  LABEL_CHANGE_USERNAME_SUCCESS_MSG: 'ユーザー名が正常に更新されました',
  FORM_VALIDATION_USERNAME_MATCHES:
    '申し訳ありませんが、小文字 (a-z)、数字 (0-9)、特殊文字 (.-_) のみ使用できます。スペースは使用できません。',
  FORM_VALIDATION_USERNAME_REQUIRED: 'ユーザー名が必要です',
  LABEL_PAYMENT_METHOD: '支払方法',
  LABEL_ACCEPT_PATMENTS_HEADER: '支払いを受け入れる',
  LABEL_DONATION_SETTINGS_HEADER: '寄付の設定',
  LABEL_CURRENCY_SUB_HEADER: '通貨',
  LABEL_CURRENCY:
    'サポーターに支払う通貨を選択します。自国の通貨がリストにない場合は、支払いプロバイダーが自動的に換算します。',
  LABEL_MIN_DONATION_HEADER: '最低寄付額を設定する',
  LABEL_THANK_YOU_MESSAGE_HEADER: '自動お礼メッセージ',
  LABEL_THANK_YOU:
    '誰かが寄付したときに送信されるメッセージ。個人的なものを送る機会もあります。',
  LABEL_SUBMIT_PAYMENT_SETTING: '送信',
  FORM_VALIDATION_THANK_YOU: 'サポートありがとうございます',
  FORM_VALIDATION_UPDATE_SUCCESS: '寄付の設定が正常に更新されました。',
  LABEL_VERIFY_PAYPAL:
    'オンボーディングを完了し、支払いの受け入れを開始するには、Paypal から送信されたメールを確認してください。',
  LABEL_PAYPAL:
    '他のユーザーから寄付を受け取るには、Paypal に接続する必要があります。',
  LABEL_DISAGREE: '同意しない',
  LABEL_AGREE: '同意',
  LABEL_SETTINGS_LANGUAGE: '設定言語',
  LABEL_PAYMENT_ENABLED: '有効',
  LABEL_PAYMENT_DISABLED: '無効',
  LABEL_ACCEPT_DESCRIPTION:
    'クレジット カードと PayPal の残高を受け入れます。あなたのPayPalに即座に支払われます。',
};

export default settings;
