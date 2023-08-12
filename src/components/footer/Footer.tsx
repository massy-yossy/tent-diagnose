import { FC, memo } from "react";

const Footer:FC = memo(() => {
  return (
    <footer>
      <p>企画・診断制作：株式会社OUTRIP</p>
      <a href="">＜＜ お問い合わせ ＞＞</a>
      <img src="./images/logo.png" alt="ロゴ" />
      <p><small>&copy;2023 mypace outdoor.All Rights Reserved</small></p>
    </footer>
  );
});

export default Footer;
