import { Link } from "react-router-dom";
import React from 'react'
import "./../App.css"

function TopBar() {
    
    const menu = document.querySelector(".menu");
      const navbar = document.querySelector(".navbar");
      window.addEventListener("scroll", () => {
        if (window.pageYOffset >= menu.offsetTop) {
          //stickyクラスをnavbarに付与する。
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      });

  return (
    <div>
        <div className="header">
            <nav className="navbar">
                <h3 className="logo">スマブラ座学</h3>
                <ul class="menu">
                    <li><a href="/">ホーム</a></li>
                    <li><a href="/frame/">フレーム表</a></li>
                    <li><a href="#">リンク集</a></li>
                    <li><a href="#">ホーム</a></li>
                    <li><a href="#">ホーム</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default TopBar
