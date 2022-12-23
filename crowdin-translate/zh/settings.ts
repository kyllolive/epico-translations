import topNav from './commons/topNav';
import common from './commons/common';
import dashboard from './dashboard';

const settings = {
  ...topNav,
  ...common,
  ...dashboard,
  LABEL_HEADER_SETTINGS: '设置',
  LABEL_SUB_HEADER_SECURITY: '安全',
  LABEL_CHANGE_PASSWORD: '更改密码',
  LABEL_CHANGE_USERNAME: '更改用户名',
  LABEL_DELETE_ACCOUNT: '删除我的账户',
  LABEL_DELETE_ACCOUNT_BODY: `
  This is permanent. When you delete your Epico account, you won'无法检索您的内容或信息'已在 Epico 上分享。删除您的帐户将永久删除您的个人资料、评论和墙帖，
  以及您创建的任何系列和章节。`,
  LABEL_PASSWORD: '密码',
  FORM_VALIDATION_OLD_PASSWORD_REQUIRED: '需要当前密码',
  FORM_VALIDATION_NEW_PASSWORD_REQUIRED: '需要新密码',
  FORM_VALIDATION_NEW_PASSWORD_MIN: '必须超过 12 个字符',
  LABEL_CHANGE_PASSWORD_SUCCESS_MSG: '您的密码已成功更新',
  LABEL_CHANGE_PASSWORD_INCORRECT_PASSWORD_MSG: '密码错误',
  LABEL_CHANGE_PASSWORD_LIMIT_EXCEEDED_MSG: '超出限制请稍后再试',
  LABEL_CHANGE_PASSWORD_UNABLE_TO_PROCESS: '无法处理您的请求',
  LABEL_OLD_PASSWORD: '当前密码',
  LABEL_NEW_PASSWORD: '新密码',
  LABEL_UPDATE_PASSWORD: '更新密码',
  LABEL_NEW_USERNAME: '新用户名',
  LABEL_CHANGE_USERNAME_SUCCESS_MSG: '您的用户名已成功更新',
  FORM_VALIDATION_USERNAME_MATCHES:
    '抱歉，只能使用小写字母 (a-z)、数字 (0-9)、特殊字符 (.-_)，不允许使用空格。',
  FORM_VALIDATION_USERNAME_REQUIRED: '用户名是必需的',
  LABEL_PAYMENT_METHOD: '付款方式',
  LABEL_ACCEPT_PATMENTS_HEADER: '接受付款',
  LABEL_DONATION_SETTINGS_HEADER: '捐赠设​​置',
  LABEL_CURRENCY_SUB_HEADER: '货币',
  LABEL_CURRENCY:
    '选择您希望支持者支付的货币。如果您的本国货币未列出，您的支付服务提供商会自动为您兑换。',
  LABEL_MIN_DONATION_HEADER: '设定最低捐款价格',
  LABEL_THANK_YOU_MESSAGE_HEADER: '自动感谢信',
  LABEL_THANK_YOU: '有人捐款时要发送的消息。您也将有机会发送个人邮件。',
  LABEL_SUBMIT_PAYMENT_SETTING: '提交',
  FORM_VALIDATION_THANK_YOU: '非常感谢你的支持',
  FORM_VALIDATION_UPDATE_SUCCESS: '已成功更新捐赠设置！',
  LABEL_VERIFY_PAYPAL:
    '请验证 Paypal 发送给您的电子邮件以完成入职并开始接受付款。',
  LABEL_PAYPAL: '必须连接贝宝才能接收其他用户的捐款！',
  LABEL_DISAGREE: '不同意',
  LABEL_AGREE: '同意',
  LABEL_SETTINGS_LANGUAGE: '设置语言',
  LABEL_PAYMENT_ENABLED: '启用',
  LABEL_PAYMENT_DISABLED: '已禁用',
  LABEL_ACCEPT_DESCRIPTION: '接受信用卡和 PayPal 余额。立即支付到您的 PayPal。',
};

export default settings;
