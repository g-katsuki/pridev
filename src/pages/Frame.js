import { Link } from "react-router-dom";
import { ApiFetch } from "./../components/ApiFetch";

const Frame = () => {
  return (
    <div className="alert alert-primary text-center m-5">
      <h1>フレーム表</h1>
      <ApiFetch />
    </div>
  );
};

export default Frame;