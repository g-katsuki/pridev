import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center m-5">
      <h1>ホーム</h1>
      
      <div className="alert alert-secondary text-center">
        <h2 className="alert alert-primary">計算機</h2>
        <h5>
          攻撃ファイターと技名, ガードファイター名を選択することで確定で反撃ができる技の一覧を表示します
        </h5>
        <img src="./../data/fea1.png" width={200}/>
      </div>
      <br />
      <div className="alert alert-secondary text-center">
        <h2 className="alert alert-primary">フレーム</h2>
        <h5>
          ファイター名を選択すると全技のデータを表示します
        </h5>
        <img src="./../data/fea2.png" width={200}/>
      </div>
    </div>
  );
};

export default Home;