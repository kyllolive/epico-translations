import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';

const translate = {
  ...topNav,
  ...common,
  ...authModal,
  //translate page
  SCANLATE_BANNER_HEADER: 'こんにちはスキャンレーター！',
  SCANLATE_BANNER_CONTENT:
    'クリエイターがより大きな市場に参入できるよう支援することで、クリエイターをサポートします すべてのコミックに無料でアクセスできます 法的設定でクリエイターと協力できます 検索可能なダイアログ/原稿 チームを変更するための組み込みの用語集',
  SCANLATE_BANNER_HEADER_2: 'あなたの漫画は世界に読まれるに値する',
  SCANLATE_BANNER_CONTENT_2: `漫画のクラウドソーシング翻訳サービスで、あなたの言語が見つかりませんか?私達にメッセージを送ります！`,
  LABEL_CONTENT_HEADER:
    'ここで、お気に入りのシリーズをスキャンレートできます。',
  LABEL_SEARCH_SERIES: 'シリーズを検索',
  LABEL_LANGUAGE: '言語',
  LABEL_ALL: '全て',
  LABEL_NO_AVAILABLE_SERIES: '翻訳可能なシリーズがありません',
  LABEL_LOADING: '読み込んでいます...',
  LABEL_PREVIEW: 'プレビュー',
  LABEL_SAVE: '保存',
  LABEL_GUIDE: 'ガイド',
  LABEL_TRANSLATE: 'スキャンレート',
  LABEL_TO: 'に',
  LABEL_CREATED_BY: 'によって作成された',
  LABEL_GLOSSARY: '用語集',
  LABEL_CREDITS: 'クレジット',
  LABEL_SUBMISSION_SUCCESS: 'あなたの提出物は保存されました！',
  LABEL_SUBMISSION_ERROR: '送信内容に誤りがあります',

  //Pages Tab//
  LABEL_PAGE: 'ページ：',
  LABEL_PAGES: 'ページ',
  LABEL_DOWNLOAD: 'ダウンロード',
  LABEL_OVERRIDE: '再描画された画像でオーバーライドしますか?',
  LABEL_SELECT_CLEAN_VERSIONS: 'クリーン バージョンを選択',
  LABEL_SELECT_VERSIONS: 'バージョンを選択...',
  LABEL_NO_UPLOADED_CLEAN_VERSION:
    'アップロードされたクリーン バージョンはありません',
  LABEL_UPLOAD_CLEAN_IMAGE: 'きれいな画像をアップロード',
  LABEL_DOWNLOAD_CLEAN_IMAGE: 'きれいな画像をダウンロード',
  LABEL_TRANSLATION: 'スキャンレーション',
  LABEL_ADD_TEXT: 'テキストを追加',
  //Comment Tab
  LABEL_COMMENT: 'コメント',
  LABEL_COMMENT_HERE: 'ここにコメント...',
  LABEL_MORE_COMMENTS: 'その他のコメント',
  LABEL_SUBMIT: '送信',
  LABEL_CANCEL: 'キャンセル',
  LABEL_REPLY: '返事',
  LABEL_UPDATE: 'アップデート',
  LABEL_HOW_TO_COMMENT: 'コメントの仕方',
  LABEL_HOW_TO_COMMENT_1: 'コメントする領域を選択してください',
  LABEL_HOW_TO_COMMENT_2: 'ドラッグして目的の領域を強調表示します',
  LABEL_HOW_TO_COMMENT_3:
    '[コメントを書く] というテキスト ボックスをクリックし、コメントを入力して、[送信] をクリックします。',
  //Description Tab
  LABEL_DESCRIPTION: '説明',
  LABEL_SERIES: 'シリーズ',
  LABEL_CHAPTER: '章',
  LABEL_SWITCH_LANGUAGE: '言語を切り替える',
  LABEL_SERIES_TITLE: 'シリーズタイトル',
  LABEL_SERIES_DESCRIPTION: 'シリーズの説明',
  LABEL_CHAPTER_TITLE: '章のタイトル',
  LABEL_CHAPTER_DESCRIPTION: '章の説明',
  LABEL_CHAPTER_AUTHOR_NOTE: `章の著者のメモ`,
  //SFX Tab
  LABEL_UPLOAD: 'アップロード',
  //History Tab
  LABEL_HISTORY: '歴史',
  LABEL_MODIFIED_BY: 'によって変更',
  LABEL_LATEST: '最新',
  LABEL_LOAD: 'ロード',
  LABEL_PUBLISH: '公開',
  //Credits Tab
  LABEL_CONTRIBUTORS: '寄稿者',
  LABEL_NO_CONTRIBUTORS: '寄稿者なし',

  //Change
  LABEL_CHANGE_PAGE:
    '保存されていない変更があります。離れてもよろしいですか？変更は失われます',
};

export default translate;
