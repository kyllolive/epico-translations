import topNav from './commons/topNav';
import common from './commons/common';
import authModal from './commons/authModal';
const home = { ...topNav,
  ...common,
  ...authModal,
  LABEL_ABOUT_US_HEADER_5: 'TENTANG KAMI',
  LABEL_ABOUT_US_BODY_5_1: 'Baik itu melalui teks atau ilustrasi, kami percaya setiap orang memiliki cerita untuk dibagikan.',
  LABEL_ABOUT_US_BODY_5_2: 'Kami juga percaya komik hebat bisa datang dari mana saja.',
  LABEL_ABOUT_US_BODY_5_3: 'Kami adalah sekelompok penggemar komik yang bertekad untuk membuat alat',
  LABEL_ABOUT_US_BODY_5_4: 'untuk membantu pembuat komik menghubungkan cerita mereka dengan sebanyak mungkin orang.',
  LABEL_ABOUT_US_HEADER_6: 'APA CERITAMU?',
  LABEL_SIGN_UP: 'Daftar',
  LABEL_CREATE_SERIES: 'Buat seri',
  LABEL_MY_PROFILE: 'Profil saya'
};
export default home;