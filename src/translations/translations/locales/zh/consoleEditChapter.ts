import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';

const consoleEditChapter = {
  ...common,
  ...topNav,
  ...imageUploader,
  LABEL_SERIES: '系列',
  LABEL_CHAPTER: '章节',
  LABEL_EDIT: '编辑',
  LABEL_EDIT_CHAPTER: '编辑章节',
  LABEL_SUBMIT: '提交',
  LABEL_UPDATE: '更新',
  // FORM VALIDATION
  FORM_VALIDATION_COVER_REQUIRED: '封面图为必填项！',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_MAX: '章节描述不得超过 2500 个字符',
  FORM_VALIDATION_CHAPTER_DESCRIPTION_REQUIRED: '章节描述为必填项',
  FORM_VALIDATION_CHAPTER_NOTE_MAX: '章节注释不得超过 2500 个字符',
  FORM_VALIDATION_CHAPTER_PUBLISHED_REQUIRED: '已发布为必填项',
  FORM_VALIDATION_CHAPTER_TITLE_MAX: '章节标题不得超过 100 个字符',
  FORM_VALIDATION_CHAPTER_TITLE_MATCHES:
    '抱歉，只允许使用字母 (a-z)、数字 (0-9)、特殊字符 (\':?"!-_&()<>.,+=@#$%|)。',
  FORM_VALIDATION_CHAPTER_TITLE_REQUIRED: '章节标题为必填项',
  FORM_VALIDATION_CHAPTER_PAGES_MIN: '必须包含至少 1 张图片',
  // END FORM VALIDATION
  LABEL_SINGLE_COVER_DROPBOX: '将您的封面照片放在这里，或点击浏览',
  LABEL_SINGLE_CHAPTER_COVER_SUB:
    '为了在所有设备上获得最佳效果，请使用至少 360 x 360 像素的图像',
  LABEL_PUBLISH_CHAPTER: '发布章节',
  LABEL_CHAPTER_TITLE: '章节标题',
  LABEL_CHAPTER_DESCRIPTION: '章节描述',
  LABEL_CHAPTER_NOTE_OPTIONAL: '章节注释（可选）',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: '此注释将在本章末尾显示',
  LABEL_UPLOAD_PAGES: '上传页面',
  LABEL_NOT_FOUND_HEADER: '哦哦，我们找不到要编辑的这一章',
  LABEL_NOT_FOUND_MSG_1:
    '如果您认为此史诗章节存在，请使用给定的系列 ID 联系我们的支持人员',
  LABEL_NOT_FOUND_MSG_2: '语言 ID 为',
  LABEL_NOT_FOUND_MSG_3: '和章节ID',
};

export default consoleEditChapter;
