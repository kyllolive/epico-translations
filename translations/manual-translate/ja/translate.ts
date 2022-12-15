import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const translate = {
  ...topNav,
  ...common,
  ...authModal,
  SCANLATE_BANNER_HEADER: 'こんにちは翻訳者！',
  SCANLATE_BANNER_CONTENT:
    'より大きな市場への参入を支援することでクリエイターをサポートします。すべてのコミックに無料でアクセスできます。法的な設定でクリエイターと協力します。検索可能なダイアログ/原稿チームを変更するための組み込みの用語集',
  SCANLATE_BANNER_HEADER_2: 'あなたの漫画は世界に読まれるに値する',
  SCANLATE_BANNER_CONTENT_2: `クラウドソーシングによる漫画の翻訳サービスですが、あなたの言語が見つかりませんでしたか？私達にメッセージを送ります！`,
  LABEL_CONTENT_HEADER:
    'ここでは、あなたのお気に入りのSeriesを翻訳することができます。',
  LABEL_SEARCH_SERIES: '検索シリーズ',
  LABEL_LANGUAGE: '言語',
  LABEL_ALL: 'すべて',
  LABEL_NO_AVAILABLE_SERIES: '翻訳用のシリーズはありません',
  LABEL_LOADING: 'ローディング...',
  LABEL_PREVIEW: 'プレビュー',
  LABEL_SAVE: '保存',
  LABEL_GUIDE: 'ガイド',
  LABEL_TRANSLATE: '翻訳する',
  LABEL_TO: 'to',
  LABEL_CREATED_BY: 'で作成されています。',
  LABEL_GLOSSARY: '用語集',
  LABEL_CREDITS: '貢献者',
  LABEL_SUBMISSION_SUCCESS: 'あなたの投稿が保存されました。',
  LABEL_SUBMISSION_ERROR: '投稿内容に誤りがありました。',
  //Pages Tab//
  LABEL_PAGE: 'ページ:',
  LABEL_PAGES: 'ページ',
  LABEL_DOWNLOAD: 'ダウンロード',
  LABEL_OVERRIDE: '再描画された画像でオーバーライドしますか？',
  LABEL_SELECT_CLEAN_VERSIONS: 'クリーンバージョンの選択',
  LABEL_SELECT_VERSIONS: 'バージョン選択...',
  LABEL_NO_UPLOADED_CLEAN_VERSION: 'アップロードされたクリーンバージョンがない',
  LABEL_UPLOAD_CLEAN_IMAGE: 'クリーンな画像のアップロード',
  LABEL_DOWNLOAD_CLEAN_IMAGE: 'クリーンイメージのダウンロード',
  LABEL_TRANSLATION: '翻訳',
  LABEL_ADD_TEXT: 'テキストの追加',
  //Comment Tab
  LABEL_COMMENT: 'コメント',
  LABEL_COMMENT_HERE: 'コメントはこちら...',
  LABEL_MORE_COMMENTS: 'その他のコメント',
  LABEL_SUBMIT: '送信',
  LABEL_CANCEL: 'キャンセル',
  LABEL_REPLY: '返信',
  LABEL_UPDATE: 'アップデート',
  LABEL_HOW_TO_COMMENT: 'コメントの仕方',
  LABEL_HOW_TO_COMMENT_1: 'コメントするエリアを選択',
  LABEL_HOW_TO_COMMENT_2: 'ドラッグして希望のエリアを強調する',
  LABEL_HOW_TO_COMMENT_3:
    'コメントを書く」というテキストボックスをクリックして、コメントを入力し、送信をクリックします。',
  //Description Tab
  LABEL_DESCRIPTION: '説明',
  LABEL_SERIES: 'シリーズ',
  LABEL_CHAPTER: '章',
  LABEL_SWITCH_LANGUAGE: '言語の切り替え',
  LABEL_SERIES_TITLE: 'シリーズ名',
  LABEL_SERIES_DESCRIPTION: 'シリーズ概要',
  LABEL_CHAPTER_TITLE: '章タイトル',
  LABEL_CHAPTER_DESCRIPTION: '章の説明',
  LABEL_CHAPTER_AUTHOR_NOTE: `章 著者のコメント`,
  //SFX Tab
  LABEL_UPLOAD: 'アップロード',
  //History Tab
  LABEL_HISTORY: '歴史',
  LABEL_MODIFIED_BY: 'によって修正されました。',
  LABEL_LATEST: '最新',
  LABEL_LOAD: 'ロード',
  LABEL_PUBLISH: '発行',
  //Credits Tab
  LABEL_CONTRIBUTORS: '貢献者',
  LABEL_NO_CONTRIBUTORS: 'コントリビューターなし',
  //Change
  LABEL_CHANGE_PAGE:
    '保存されていない変更があります。離れてもよろしいですか？変更は失われます',
};

export default translate;
