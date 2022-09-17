/* NotFound.js */

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h4>お探しのページは見つかりませんでした。リーロードするのが良くないみたい</h4>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default NotFound;