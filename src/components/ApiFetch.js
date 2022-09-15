import React, { useState, useEffect } from "react";

export const ApiFetch = () => {

  const [data, setData] = useState({message:'', ground:[], air:[]})
  const [log, setLog] = useState("")
  const [name, setName] = useState("")

  useEffect((e) => {
    // ここでユーザーに選択させた名前をパス名に結合させればいいのでは
    fetch("./../data/" + name + ".json")
       //レスポンスのデータ形式をjsonに設定
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data)
      });
      setLog(name)
  }, [name]);

	return (
		<div className="alert alert-primary text-center">
      <b>ファイターを選択</b>

      <select value={name} onChange={(e) => setName(e.target.value)} className="form-control-lg  m-2" defaultValue="" >
        <option value="template"></option>
        <option value="mario">マリオ</option>
        <option value="joker">ジョーカー</option>
      </select>

      <h2 className="mb-4">{data.message}</h2>
      <table className="table bg-white">
        <thead className="table-dark">
          <tr><th>地上攻撃</th><th>発生</th><th>ガード硬直</th></tr>
        </thead>
        <tbody>
          {data.ground.map((value, key)=> (
            <tr key={key}>
              <th>{value.攻撃名}</th>
              <td>{value.発生}</td>
              <td>{value.ガード硬直}</td>
            </tr>
          ))}
        </tbody>
        <thead className="table-dark">
          <tr><th>空中攻撃</th><th>発生</th><th>ガード硬直</th></tr>
        </thead>
        <tbody>
          {data.air.map((value, key)=> (
            <tr key={key}>
              <th>{value.攻撃名}</th>
              <td>{value.発生}</td>
              <td>{value.ガード硬直}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
	);
};