import React, { useState, useEffect } from "react";

function a(){
    return <b>gjg</b>
}

export const Calculate = () => {

    const [attacker, setAttacker] = useState({message:'', ground:[], air:[], b:[], grab:[]})
    const [name, setName] = useState("")
    const [attack, setAttack] = useState("")
    const [guard, setGuard] = useState({message:'', ground:[], air:[], b:[], grab:[]})
    const [nameg, setNameg] = useState("")
    const [result, setResult] = useState([])

	// useEffect(() => {
	// 	// APIをfetchする
	// 	fetch("https://script.google.com/macros/s/AKfycbw33CTXbytAieYV2YlMuV0DlwwhrbYHOqyh3Wgmptfug-lkQmQZQfF6NZbR3yWnYBerqQ/exec", { method: "GET" })
	// 		//レスポンスのデータ形式をtextに設定
	// 		.then((res) => res.text())
	// 		 //APIから渡されるレスポンスデータ(data)をstateにセットする
	// 		.then((data) => {
	// 			setStr(data);
    //             console.log(data);
	// 		});
	// }, []);

    useEffect((e) => {
      // ユーザーに選択させた名前をパス名に結合させる
      fetch("./../data/" + name + ".json")
         //レスポンスのデータ形式をjsonに設定
        .then((res) => res.json())
        .then((attacker) => {
          setAttacker(attacker);
        });
    }, [name]);

    useEffect((e) => {
        setAttack(attack)
      }, [attack]);

    useEffect((e) => {
    // ユーザーに選択させた名前をパス名に結合させる
    fetch("./../data/" + nameg + ".json")
        //レスポンスのデータ形式をjsonに設定
        .then((res) => res.json())
        .then((guard) => {
        setGuard(guard);
        });
    }, [nameg]);

    const Search = (e)=> {
        var disadvantage_frame;
        for(var i = 0; i < attacker.ground.length; i++){
            if(attack == attacker.ground[i].攻撃名){
                disadvantage_frame = attacker.ground[i].隙 - attacker.ground[i].発生 - attacker.ground[i].ガードF;
            }
        }
        for(var i = 0; i < attacker.air.length; i++){
            if(attack == attacker.air[i].攻撃名){
                disadvantage_frame = attacker.air[i].隙 - attacker.air[i].ガードF;
            }
        }
        for(var i = 0; i < attacker.b.length; i++){
            if(attack == attacker.b[i].攻撃名){
                disadvantage_frame = attacker.b[i].隙 - attacker.b[i].発生 - attacker.b[i].ガードF;
            }
        }
        console.log(disadvantage_frame);
    };

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
        <select value={attack} onChange={(e) => setAttack(e.target.value)} className="form-control-lg m-2" defaultValue="" >
            <option value=""></option>
            {attacker.ground.map((value, key)=> (
                <option key={key}>{value.攻撃名}</option>
            ))
            }
            {attacker.air.map((value, key)=> (
                <option key={key}>{value.攻撃名}</option>
            ))
            }
            {attacker.b.map((value, key)=> (
                <option key={key}>{value.攻撃名}</option>
            ))
            }
        </select>
        <br/>
        <b>ガードファイター</b>
        <select value={nameg} onChange={(e) => setNameg(e.target.value)} className="form-control-lg m-2" defaultValue="" >
            <option value="template"></option>
            <option value="mario">マリオ</option>
            <option value="joker">ジョーカー</option>
        </select>

        <h5 className="mb-4">"{attacker.message}"の"{attack}"を<br/>"{guard.message}"がガード<br/>すると以下の攻撃が確定</h5>
        <button onClick={Search} className="btn btn-primary">検索</button>
    </div>
    );
  };