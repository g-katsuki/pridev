import React, { useState, useEffect } from "react";

export const ApiFetch = () => {

  const [data, setData] = useState({message:'', ground:[], air:[], b:[], grab:[]})
  const [name, setName] = useState("")

  useEffect((e) => {
    // ユーザーに選択させた名前をパス名に結合させる
    fetch("./../data/" + name + ".json")
       //レスポンスのデータ形式をjsonに設定
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [name]);

	return (
		<div>
      <b>ファイターを選択</b>

      <select value={name} onChange={(e) => setName(e.target.value)} className="form-control-lg  m-2" defaultValue="" >
        <option value="template"></option>
        <option value="mario">マリオ</option>
        <option value="joker">ジョーカー</option>
      </select>

      <h2 className="mb-4">{data.message}</h2>
      <table className="table backgroun-color: red">
        <thead className="table-dark">
        <tr><th>地上</th><th>発生</th><th>全体</th><th>ガードF</th></tr>
        </thead>
        <tbody>
          {data.ground.map((value, key)=> (
            <tr key={key}>
              <th>{value.攻撃名}</th>
              <td>{value.発生}</td>
              <td>{value.隙}</td>
              <td>{value.ガードF}</td>
            </tr>
          ))}
        </tbody>
        <thead className="table-dark">
        <tr><th>空中</th><th>発生</th><th>着地隙</th><th>ガードF</th></tr>
        </thead>
        <tbody>
          {data.air.map((value, key)=> (
            <tr key={key}>
              <th>{value.攻撃名}</th>
              <td>{value.発生}</td>
              <td>{value.隙}</td>
              <td>{value.ガードF}</td>
            </tr>
          ))}
        </tbody>
        <thead className="table-dark">
        <tr><th>B技</th><th>発生</th><th>全体</th><th>ガードF</th></tr>
        </thead>
        <tbody>
          {data.b.map((value, key)=> (
            <tr key={key}>
              <th>{value.攻撃名}</th>
              <td>{value.発生}</td>
              <td>{value.隙}</td>
              <td>{value.ガードF}</td>
            </tr>
          ))}
        </tbody>
        <thead className="table-dark">
        <tr><th>つかみ</th><th>発生</th><th>全体</th><th>ガードF</th></tr>
        </thead>
        <tbody>
          {data.grab.map((value, key)=> (
            <tr key={key}>
              <th>{value.攻撃名}</th>
              <td>{value.発生}</td>
              <td>{value.隙}</td>
              <td>{value.ガードF}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
	);
};