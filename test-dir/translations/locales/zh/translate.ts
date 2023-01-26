import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const translate = {
  ...topNav,
  ...common,
  ...authModal,
  //translate page
  SCANLATE_BANNER_HEADER: '你好扫描仪！',
  SCANLATE_BANNER_CONTENT:
    '通过帮助创作者开拓更大的市场来支持创作者 免费访问所有漫画 在合法的环境中与创作者合作 可搜索的对话/手稿 内置词汇表以适应不断变化的团队',
  SCANLATE_BANNER_HEADER_2: '你的漫画值得全世界阅读',
  SCANLATE_BANNER_CONTENT_2: `漫画众包翻译服务，找不到您的语言？给我们发信息！`,
  LABEL_CONTENT_HEADER: '在这里你可以扫描你最喜欢的系列。',
  LABEL_SEARCH_SERIES: '搜索系列',
  LABEL_LANGUAGE: '语',
  LABEL_ALL: '全部',
  LABEL_NO_AVAILABLE_SERIES: '没有可供翻译的系列',
  LABEL_LOADING: '正在加载...',
  LABEL_PREVIEW: '预习',
  LABEL_SAVE: '节省',
  LABEL_GUIDE: '指导',
  LABEL_TRANSLATE: '扫描',
  LABEL_TO: '至',
  LABEL_CREATED_BY: '由...制作',
  LABEL_GLOSSARY: '词汇表',
  LABEL_CREDITS: '学分',
  LABEL_SUBMISSION_SUCCESS: '您的提交已保存！',
  LABEL_SUBMISSION_ERROR: '您的提交有错误',

  //Pages Tab//
  LABEL_PAGE: '页：',
  LABEL_PAGES: '页面',
  LABEL_DOWNLOAD: '下载',
  LABEL_OVERRIDE: '用重绘的图像覆盖？',
  LABEL_SELECT_CLEAN_VERSIONS: '选择干净的版本',
  LABEL_SELECT_VERSIONS: '选择版本...',
  LABEL_NO_UPLOADED_CLEAN_VERSION: '没有上传干净的版本',
  LABEL_UPLOAD_CLEAN_IMAGE: '上传干净的图片',
  LABEL_DOWNLOAD_CLEAN_IMAGE: '下载干净的图像',
  LABEL_TRANSLATION: '扫描',
  LABEL_ADD_TEXT: '添加文字',
  //Comment Tab
  LABEL_COMMENT: '评论',
  LABEL_COMMENT_HERE: '在这里评论...',
  LABEL_MORE_COMMENTS: '更多评论',
  LABEL_SUBMIT: '提交',
  LABEL_CANCEL: '取消',
  LABEL_REPLY: '回复',
  LABEL_UPDATE: '更新',
  LABEL_HOW_TO_COMMENT: '如何发表评论',
  LABEL_HOW_TO_COMMENT_1: '选择要评论的区域',
  LABEL_HOW_TO_COMMENT_2: '拖动以突出显示所需区域',
  LABEL_HOW_TO_COMMENT_3: '单击写有评论的文本框，输入您的评论，然后单击提交。',
  //Description Tab
  LABEL_DESCRIPTION: '描述',
  LABEL_SERIES: '系列',
  LABEL_CHAPTER: '章节',
  LABEL_SWITCH_LANGUAGE: '切换语言',
  LABEL_SERIES_TITLE: '系列名称',
  LABEL_SERIES_DESCRIPTION: '系列说明',
  LABEL_CHAPTER_TITLE: '章节标题',
  LABEL_CHAPTER_DESCRIPTION: '章节描述',
  LABEL_CHAPTER_AUTHOR_NOTE: `章节作者注`,
  //SFX Tab
  LABEL_UPLOAD: '上传',
  //History Tab
  LABEL_HISTORY: '历史',
  LABEL_MODIFIED_BY: '修改者',
  LABEL_LATEST: '最新的',
  LABEL_LOAD: '加载',
  LABEL_PUBLISH: '发布',
  //Credits Tab
  LABEL_CONTRIBUTORS: '贡献者',
  LABEL_NO_CONTRIBUTORS: '没有贡献者',

  //Change
  LABEL_CHANGE_PAGE: '有未保存的更改。你确定要搬走吗？更改将丢失',
};

export default translate;
