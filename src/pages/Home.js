import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center m-5">
      <h1>ホーム</h1>
      <div>
      <li>ガード解除から出す地上攻撃での反撃は発生+11F</li>
      <li>ガーキャンつかみは発生+4F</li>
      <li>ガーキャンジャンプ攻撃は+3</li>
      <li>ガーキャン上スマは追加Fなしでそのまま出せる</li>
      </div>
    </div>
  );
};

export default Home;