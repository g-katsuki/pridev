import React, { useState, useEffect } from "react";

export const Calculate = () => {

    const [data, setData] = useState({message:'', ground:[], air:[], b:[], grab:[]})
    const [name, setName] = useState("")
    const [attack, setAttack] = useState("")
    const [guard, setGuard] = useState("")
  
    useEffect((e) => {
      // ユーザーに選択させた名前をパス名に結合させる
      fetch("./../data/" + name + ".json")
         //レスポンスのデータ形式をjsonに設定
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }, [name]);

    useEffect((e) => {
        setAttack(attack)
      }, [attack]);

    useEffect((e) => {
    setGuard(guard)
    }, [guard]);

    return (
    <div>
        <b>攻撃ファイター</b>
        <select value={name} onChange={(e) => setName(e.target.value)} className="form-control-lg  m-2" defaultValue="" >
            <option value="template"></option>
            <option value="mario">マリオ</option>
            <option value="joker">ジョーカー</option>
        </select>
        <br/>
        <b>技</b>
        <select value={attack} onChange={(e) => setAttack(e.target.value)} className="form-control-lg  m-2" defaultValue="" >
            {data.ground.map((value, key)=> (
                <option key={key}>{value.攻撃名}</option>
            ))
            }
            {data.air.map((value, key)=> (
                <option key={key}>{value.攻撃名}</option>
            ))
            }
            {data.b.map((value, key)=> (
                <option key={key}>{value.攻撃名}</option>
            ))
            }
        </select>
        <br/>
        <b>ガードファイター</b>
        <select value={guard} onChange={(e) => setGuard(e.target.value)} className="form-control-lg  m-2" defaultValue="" >
            <option value=""></option>
            <option value="マリオ">マリオ</option>
            <option value="ジョーカー">ジョーカー</option>
        </select>

        <h5 className="mb-4">"{data.message}"の"{attack}"を<br/>"{guard}"がガード<br/>すると以下の攻撃が確定</h5>
        
    </div>
    );
  };