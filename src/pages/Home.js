import { Link } from "react-router-dom";
import { ApiFetch } from "./../components/ApiFetch";

const Home = () => {
  return (
    <>
      <h1>ホーム</h1>
      <div>
        <Link to={`/frame/`}>こちら</Link>
      </div>
      <ApiFetch />
    </>
  );
};

export default Home;