//入力フォームを出す
function openform(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form-popup").style.display = "block";
console.log("0");
}

function closeform(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("form-popup").style.display = "none";
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("begin").value = "";
    document.getElementById("end").value = "";
    document.getElementById("color").value = "#000000";
}

//入力フォーム処理

//予定の保存
let schedules = [];

let editingId = null;
// 入力フォーム
const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const beginInput = document.getElementById("begin");
const endInput = document.getElementById("end");
const colorInput = document.getElementById("color");

function addschedule(){
    document.getElementById("schedule-body");
    console.log("1");
    //inputデータ入手
    const title = titleInput.value;
    const date = dateInput.value; 
    //const title = document.getElementById("title").value;
    //const date = document.getElementById("date").value;
    console.log("2");
    const begin = beginInput.value;
    console.log("3");
    const end = endInput.value;
    //const begin = document.getElementById("begin").value;
    //const end = document.getElementById("end").value;
    
    console.log("4");
    const color = colorInput.value;
    //const color = document.getElementById("color").value;
    console.log("5");

    //オブジェクト化
    const newSchedule = {
        id: crypto.randomUUID(),
        title: title,
        date: date,
        begin: begin,
        end: end,
        color: color
    };
    //console.log(newSchedule);
    console.log("6");

    //配列へ追加
    schedules.push(newSchedule);
    console.log("7");

    //table更新
    renderTable();
    console.log("8");

    /*document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("begin").value = "";
    document.getElementById("end").value = "";
    document.getElementById("color").value = "#000000";*/
    console.log("9");
    console.log(editingId);
}

//Tableへ反映

function renderTable(){
console.log("renderbegin");

    //空にする
    tbody.innerHTML = "";
console.log("7-1");

    //すべての予定を表示
    schedules.forEach(schedule => {
        tbody.innerHTML += `
            <tr data-id="${schedule.id}">
                <td>${schedule.title}</td>
                <td>${schedule.date}</td>
                <td>${schedule.begin}</td>
                <td>${schedule.end}</td>
                <td style="background-color:${schedule.color}"></td>
            </tr>
        `;
    });
console.log("7-2");
}

//指定した予定のtbodyを取得
//後から追加される予定行のクリックを監視するために使用
const tbody =
    document.getElementById("schedule-body");

//クリックされた予定を特定
tbody.addEventListener("click",(event) => {
    //クリックされたtd(要素)を取得
    console.log(event.target);
    
    //クリックされたtdからの親のtr(予定行)を取得
    const clickedScheduleRow = event.target.closest("tr");
    console.log(clickedScheduleRow);

    const id = clickedScheduleRow.dataset.id;
    console.log(id);

    const targetSchedule =
        schedules.find(schedule => schedule.id === id);
    
        editingId = targetSchedule.id;

    console.log(targetSchedule);
    console.log(editingId);

    titleInput.value = targetSchedule.title;
    dateInput.value = targetSchedule.date;
    beginInput.value = targetSchedule.begin;
    endInput.value = targetSchedule.end;
    colorInput.value = targetSchedule.color;

    openform();
});

//予定編集

