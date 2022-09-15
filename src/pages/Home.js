import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center m-5">
      <h1>ホーム</h1>
      <div>
        <Link to={`/frame/`}>フレーム表はこちら</Link>
      </div>
    </div>
  );
};

export default Home;