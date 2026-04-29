//データ
const List = [
    {name: "ドラパルト", baseSpeed: 142},
    {name: "ガブリアス", baseSpeed: 102},
    {name: "イダイトウ♂", baseSpeed: 78},
    {name: "オオニューラ", baseSpeed: 120}
];
//計算関数
const iv = 31;      //個体値
const LEVEL = 50;   //レベル

function calcFastest(base){
    const ev = 252;     //努力値
    const nature = 1.1; //性格補正
    //最速
    return Math.floor(
        (Math.floor((base * 2 + iv + ev / 4) * LEVEL / 100 + 5)) * nature
    );
}

function calcSemifastest(base){
    const ev = 252;
    const nature = 1;
    //準速
    return Math.floor(
        (Math.floor((base * 2 + iv + ev / 4) * LEVEL / 100 + 5)) * nature
    )
}

function calcOriginally(base){
    const ev = 0;
    const nature = 1;
    //無振り
    return Math.floor(
        (Math.floor((base * 2 + iv + ev / 4) * LEVEL / 100 + 5)) * nature
    )
}

function calcSlowest(base){
    const ev = 0;
    const nature = 0.9;
    //最遅
    return Math.floor(
        (Math.floor((base * 2 + iv + ev / 4) * LEVEL / 100 + 5)) * nature
    );
}

//表示方法　<td>${calcFastest(p.baseSpeed)}</td>

//表示
function display(list){
    const tbody = document.getElementById("table-body");
    tbody.innerHTML = " ";

    list.forEach()
}
//ソート
function sortSpeed(){
    List.sort((a,b) =>
        calcFastest(b.baseSpeed) - calcFastest(a.baseSpeed)
    );
    display(List);
}

//初期表示
display(List);