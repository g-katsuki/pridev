import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky-top">
      <div>
        <h3>スマブラ座学</h3>
      </div>

      <nav>
        <ul>
          <li>
            <a href="/">ホーム</a>
          </li>
          <li>
            <Link to="/frame/">フレーム表</Link>
          </li>
          <li>
            <a href="#">リンク集</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;