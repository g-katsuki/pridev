import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky-top">
      <div>
        <p className="fon">スマブラ座学</p>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/frame/">フレーム</Link>
          </li>
          <li>
            <Link to="/Links/">リンク</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;