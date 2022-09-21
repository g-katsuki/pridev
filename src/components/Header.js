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
      {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    </header>
  );
};

export default Header;