import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
import genres from './commons/genres';
import tagForm from './commons/tagForm';
const consoleEditSeries = { ...genres,
  ...common,
  ...topNav,
  ...imageUploader,
  ...tagForm,
  LABEL_SERIES: '系列',
  LABEL_CHAPTER: '章节',
  LABEL_EDIT: '编辑',
  LABEL_EDIT_SERIES: '编辑系列',
  LABEL_UPDATE: '更新',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX: '系列描述标题不得超过 2500 个字符',
  FORM_VALIDATION_DESCRIPTION_REQUIRED: '系列说明为必填项',
  FORM_VALIDATION_GENRE_REQUIRED: '流派是必需的',
  FORM_VALIDATION_GENRE_MAX: '类型字段必须少于或等于 3 个项目',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: '语言是必需的',
  FORM_VALIDATION_STATUS_REQUIRED: '需要系列状态',
  FORM_VALIDATION_TITLE_MAX: '系列标题不得超过 100 个字符',
  FORM_VALIDATION_TITLE_MATCHES: '抱歉，只允许使用字母 (a-z)、数字 (0-9)、特殊字符 (\':?"!-_&()<>.,+=@#$%|)。',
  FORM_VALIDATION_TITLE_REQUIRED: '系列标题为必填项',
  FORM_VALIDATION_COVER_REQUIRED: '封面图为必填项！',
  FORM_VALIDATION_BANNER_REQUIRED: '横幅图片是必需的！',
  // END FORM VALIDATION
  LABEL_SINGLE_BANNER_DROPBOX: '将您的横幅放在这里，或点击浏览',
  LABEL_SINGLE_COVER_DROPBOX: '将您的封面照片放在这里，或点击浏览',
  LABEL_SINGLE_BANNER_SUB: '为了在所有设备上获得最佳效果，请使用至少 1080 x 360 像素的图像',
  LABEL_SINGLE_COVER_SUB: '为了在所有设备上获得最佳效果，请使用至少 600 x 400 像素的图像',
  LABEL_SERIES_TITLE: '系列标题',
  LABEL_LANGUAGE: '语言',
  LABEL_PRIMARY_GENRE: '主要流派',
  LABEL_SECONDARY_GENRE: '次要流派',
  LABEL_SERIES_STATUS: '系列状态',
  LABEL_STATUS_ONGOING: '进行中',
  LABEL_STATUS_COMPLETED: '完全的',
  LABEL_SERIES_DESCRIPTION: '系列说明',
  LABEL_PUBLISH_CHAPTER: '发布章节',
  LABEL_CHAPTER_TITLE: '章节标题',
  LABEL_CHAPTER_DESCRIPTION: '章节描述',
  LABEL_CHAPTER_NOTE_OPTIONAL: '章节注释（可选）',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: '此注释将在本章末尾显示',
  LABEL_NOT_FOUND_HEADER: '哦，我们无法找到该系列进行编辑',
  LABEL_NOT_FOUND_MSG_1: '如果您认为此史诗系列存在，请使用给定系列 ID 联系我们的支持人员',
  LABEL_NOT_FOUND_MSG_2: '语言 ID 为',
  LABEL_MAX_GENRES: '您最多可以选择 3 种流派',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE: '是保留词，不能用！',
  LABEL_ALLOW_FOR_TRANSLATION: '允许众包翻译'
};
export default consoleEditSeries;