import { Link } from "react-router-dom";
import { ApiFetch } from "./../components/ApiFetch";

const Frame = () => {
  return (
    <div className="alert alert-secondary text-center mt-5 mr-2 ml-2 mb-5">
      <h2>フレーム表</h2>
      <ApiFetch />
      <li>ガード解除から出す地上攻撃での反撃は発生+11F</li>
      <li>ガーキャンつかみは発生+4F</li>
      <li>ガーキャンジャンプ攻撃は+3</li>
      <li>ガーキャン上スマは追加Fなしでそのまま出せる</li>
    </div>
  );
};

export default Frame;