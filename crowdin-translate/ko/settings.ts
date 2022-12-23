import topNav from './commons/topNav';
import common from './commons/common';
import dashboard from './dashboard';

const settings = {
  ...topNav,
  ...common,
  ...dashboard,
  LABEL_HEADER_SETTINGS: '설정',
  LABEL_SUB_HEADER_SECURITY: '보안',
  LABEL_CHANGE_PASSWORD: '비밀번호 변경',
  LABEL_CHANGE_USERNAME: '사용자 이름 변경',
  LABEL_DELETE_ACCOUNT: '계정을 삭제하다',
  LABEL_DELETE_ACCOUNT_BODY: `
  This is permanent. When you delete your Epico account, you won'콘텐츠 또는 정보를 검색할 수 없습니다.'에피코에서 공유했습니다. 계정을 삭제하면 프로필, 댓글, 담벼락 게시물이 영구적으로 제거됩니다.
  생성한 시리즈 및 챕터와 함께 제공됩니다.`,
  LABEL_PASSWORD: '비밀번호',
  FORM_VALIDATION_OLD_PASSWORD_REQUIRED: '현재 비밀번호가 필요합니다',
  FORM_VALIDATION_NEW_PASSWORD_REQUIRED: '새 비밀번호가 필요합니다',
  FORM_VALIDATION_NEW_PASSWORD_MIN: '12자 이상이어야 합니다.',
  LABEL_CHANGE_PASSWORD_SUCCESS_MSG: '비밀번호가 성공적으로 업데이트되었습니다',
  LABEL_CHANGE_PASSWORD_INCORRECT_PASSWORD_MSG: '잘못된 비밀번호',
  LABEL_CHANGE_PASSWORD_LIMIT_EXCEEDED_MSG:
    '한도를 초과했습니다 나중에 다시 시도하십시오',
  LABEL_CHANGE_PASSWORD_UNABLE_TO_PROCESS: '귀하의 요청을 처리할 수 없습니다',
  LABEL_OLD_PASSWORD: '현재 비밀번호',
  LABEL_NEW_PASSWORD: '새 비밀번호',
  LABEL_UPDATE_PASSWORD: '비밀번호 업데이트',
  LABEL_NEW_USERNAME: '새 사용자 이름',
  LABEL_CHANGE_USERNAME_SUCCESS_MSG:
    '사용자 이름이 성공적으로 업데이트되었습니다.',
  FORM_VALIDATION_USERNAME_MATCHES:
    '죄송합니다. 소문자(a-z), 숫자(0-9), 특수 문자(.-_)만 공백이 허용되지 않습니다.',
  FORM_VALIDATION_USERNAME_REQUIRED: '사용자 이름은 필수 항목입니다.',
  LABEL_PAYMENT_METHOD: '지불 방법',
  LABEL_ACCEPT_PATMENTS_HEADER: '지불 수락',
  LABEL_DONATION_SETTINGS_HEADER: '기부 설정',
  LABEL_CURRENCY_SUB_HEADER: '통화',
  LABEL_CURRENCY:
    '후원자들이 지불하기를 원하는 통화를 선택하세요. 자국 통화가 목록에 없으면 결제 제공업체에서 자동으로 변환합니다.',
  LABEL_MIN_DONATION_HEADER: '최소 기부 가격 설정',
  LABEL_THANK_YOU_MESSAGE_HEADER: '자동 감사 메시지',
  LABEL_THANK_YOU:
    '누군가가 기부할 때 보낼 메시지입니다. 당신은 또한 개인을 보낼 기회가 있을 것입니다.',
  LABEL_SUBMIT_PAYMENT_SETTING: '제출하다',
  FORM_VALIDATION_THANK_YOU: '지원해 주셔서 감사합니다.',
  FORM_VALIDATION_UPDATE_SUCCESS: '기부 설정을 업데이트했습니다!',
  LABEL_VERIFY_PAYPAL:
    '온보딩을 완료하고 결제 수락을 시작하려면 Paypal에서 보낸 이메일을 확인하세요.',
  LABEL_PAYPAL:
    '다른 사용자로부터 기부를 받으려면 Paypal이 연결되어 있어야 합니다!',
  LABEL_DISAGREE: '동의하지 않는다',
  LABEL_AGREE: '동의하다',
  LABEL_SETTINGS_LANGUAGE: '설정 언어',
  LABEL_PAYMENT_ENABLED: '활성화됨',
  LABEL_PAYMENT_DISABLED: '장애가 있는',
  LABEL_ACCEPT_DESCRIPTION:
    '신용 카드와 PayPal 잔액을 수락합니다. 즉시 PayPal로 지급됩니다.',
};

export default settings;
