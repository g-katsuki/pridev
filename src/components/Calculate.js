import React, { useState, useEffect } from "react";

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
    
    useEffect((e) => {  // selectタグで選択させるからuseEffectでレンダー後まで送らせて更新
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

    // useEffect((e) => {
    //     for (var i = 0; i < result.length; i++) { 
    //         var resultList = document.createElement('li'); 
    //         todoList.textContent = todo[i]; 
    //         document.getElementById('list').appendChild(todoList); 
    //     }
    // }, [result]);

    var temp_result = [];
    const Search = (e)=> {
        temp_result.splice(0);
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
        for(var i = 0; i < guard.ground.length; i++){
            if(guard.ground[i].発生 <= disadvantage_frame - 11){
                temp_result.push(guard.ground[i].攻撃名);
            }
        }
        for(var i = 0; i < guard.air.length; i++){
            if(guard.air[i].発生 <= disadvantage_frame - 3){
                temp_result.push(guard.air[i].攻撃名);
            }
        }
        for(var i = 0; i < guard.b.length; i++){
            if(guard.b[i].発生 <= disadvantage_frame - 11){
                temp_result.push(guard.b[i].攻撃名);
            }
            else if(i == 1 && guard.b[i].発生 <= disadvantage_frame){
                temp_result.push(guard.b[i].攻撃名); 
            }
        }
        if(guard.grab[0].発生 <= disadvantage_frame - 4){
            temp_result.push("つかみ");
        }
        setResult(temp_result);
    };

    let items = result.map((value,key)=>(
        <div key={key} value={key}>
        <div className="card listcard text-center bg-primary col-auto mb-2 ml-2">
          {result[key]}
        </div>
        </div>  
    ))

    return (
    <div>
        <div className="alert alert-secondary text-center mt-4 mr-2 ml-2">
        <h3>確定反撃を計算</h3>
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

            <button onClick={Search} className="btn btn-primary btn-lg">検索</button>

        </div>
        <h5 className="alert alert-secondary text-center mr-5 ml-5 mb-3">"{attacker.message}"の"{attack}"を<br/>"{guard.message}"がガード<br/>すると以下の攻撃が確定</h5>
        <div className="row ml-2">
        {items}
        </div>
    </div>
    );
  };