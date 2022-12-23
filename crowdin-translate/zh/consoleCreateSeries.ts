import topNav from './commons/topNav';
import common from './commons/common';
import imageUploader from './commons/imageUploader';
import genres from './commons/genres';
import tagForm from './commons/tagForm';

const consoleCreateSeries = {
  ...genres,
  ...common,
  ...topNav,
  ...imageUploader,
  ...tagForm,
  LABEL_SERIES: '系列',
  LABEL_CHAPTER: '章节',
  LABEL_SOMETHING_WENT_WRONG: '糟糕，出了点问题，请稍后再试！',
  LABEL_GO_BACK: '回去',
  LABEL_ADD_NEW_SERIES: '添加新系列',
  LABEL_NEXT_CHAPTER: '下一个：章节',
  LABEL_SUBMIT: '提交',
  // FORM VALIDATION
  FORM_VALIDATION_DESCRIPTION_MAX: '系列描述标题不得超过 2500 个字符',
  FORM_VALIDATION_DESCRIPTION_REQUIRED: '系列说明为必填项',
  FORM_VALIDATION_GENRE_REQUIRED: '流派是必需的',
  FORM_VALIDATION_GENRE_MAX: '类型字段必须少于或等于 3 个项目',
  FORM_VALIDATION_LANGUAGE_ID_REQUIRED: '语言是必需的',
  FORM_VALIDATION_TITLE_MAX: '系列标题不得超过 100 个字符',
  FORM_VALIDATION_TITLE_MATCHES:
    '抱歉，只允许使用字母 (a-z)、数字 (0-9)、特殊字符 (\':?"!-_&()<>.,+=@#$%|)。',
  FORM_VALIDATION_TITLE_REQUIRED: '系列标题为必填项',
  FORM_VALIDATION_COVER_REQUIRED: '封面图为必填项！',
  FORM_VALIDATION_BANNER_REQUIRED: '横幅图片是必需的！',
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
  LABEL_SINGLE_BANNER_DROPBOX: '将您的横幅放在这里，或点击浏览。',
  LABEL_SINGLE_COVER_DROPBOX: '将您的封面照片放在这里，或点击浏览。',
  LABEL_SINGLE_CHAPTER_COVER: '将您的封面照片放在这里，或点击浏览。',
  LABEL_SINGLE_BANNER_SUB:
    '为了在所有设备上获得最佳效果，请使用至少 1080 x 360 像素的图像。',
  LABEL_SINGLE_COVER_SUB:
    '为了在所有设备上获得最佳效果，请使用至少 600 x 400 像素的图像。',
  LABEL_SINGLE_CHAPTER_COVER_SUB:
    '为了在所有设备上获得最佳效果，请使用至少 360 x 360 像素的图像。',
  LABEL_SERIES_TITLE: '系列标题',
  LABEL_LANGUAGE: '语言',
  LABEL_PRIMARY_GENRE: '主要流派',
  LABEL_SECONDARY_GENRE: '次要流派',
  LABEL_SERIES_DESCRIPTION: '系列说明',
  LABEL_PUBLISH_CHAPTER: '发布章节',
  LABEL_CHAPTER_TITLE: '章节标题',
  LABEL_CHAPTER_DESCRIPTION: '章节描述',
  LABEL_CHAPTER_NOTE_OPTIONAL: '章节注释（可选）',
  LABEL_NOTE_TEXTAREA_MSG_BOTTOM: '此注释将在本章末尾显示',
  LABEL_UPLOAD_PAGES: '上传页面',
  LABEL_CONGRATULATION: '恭喜',
  LABEL_SUCCESS_CREATING_SERIES_MSG: '您已成功创建系列。',
  LABEL_ADD_CHAPTER: '添加章节',
  LABEL_CREATE_NEW_SERIES: '创建新系列',
  LABEL_MAX_GENRES: '您最多可以选择 3 种流派',
  LABEL_OPTIONAL_TAG_ERROR_MESSAGE: '是保留词，不能用！',
  LABEL_ALLOW_FOR_TRANSLATION: '允许众包翻译',
};

export default consoleCreateSeries;
