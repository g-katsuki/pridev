import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky-top">
      <div>
        <a href="/" className="fon">ホーム</a>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/calc/">計算機</Link>
          </li>
          <li>
            <Link to="/frame/">フレーム</Link>
          </li>
          <li>
            <Link to="/links/">リンク</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;