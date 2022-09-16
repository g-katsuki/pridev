import { Link } from "react-router-dom";
import { ApiFetch } from "./../components/ApiFetch";

const Frame = () => {
  return (
    <div className="alert alert-secondary text-center mt-5 mr-2 ml-2 mb-5">
      <h1>フレーム表</h1>
      <ApiFetch />
      <li>ガード解除は11F</li>
      <li>地上攻撃での反撃は発生+11F</li>
    </div>
  );
};

export default Frame;