import React, { useState, useEffect } from "react";

export const ApiFetch = () => {
	const [data, setData] = useState({message:'', ground:[], air:[]})

	useEffect(() => {
    // ここでユーザーに選択させた名前をパス名に結合させればいいのでは
    var n = "mario"
		fetch("./data/" + n + ".json")
			 //レスポンスのデータ形式をjsonに設定
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
	}, []);

	return (
		<div className="alert alert-primary text-center">
        <h5 className="mb-4">{data.message}</h5>
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