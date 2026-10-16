//入力フォームを出す
function openForm(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form-popup").style.display = "block";
}

function closeForm(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("form-popup").style.display = "none";
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
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
const endInput = document.getElementById("end");
const colorInput = document.getElementById("color");

function addschedule(){
    document.getElementById("schedule-body");

    //inputデータ入手
    const title = titleInput.value;
    const date = dateInput.value; 
    const end = endInput.value;
    const color = colorInput.value;

    //オブジェクト化
    const newSchedule = {
        id: editingId ?? crypto.randomUUID(),
        title: title,
        date: date,
        end: end,
        color: color
    };
    //console.log(newSchedule);

    //配列へ追加
    // 新規追加か編集かを判定
    if (editingId === null) {
        // 新しい課題を追加
        schedules.push(newSchedule);
    } else {
        // 編集対象の課題を探す
        const index = schedules.findIndex(
            schedule => schedule.id === editingId
        );

        // 見つかった課題を更新
        if (index !== -1) {
            schedules[index] = newSchedule;
        }
    }

    // 編集状態を解除
    editingId = null;

    //table更新
    renderTable();
}

//Tableへ反映

function renderTable(){

    //空にする
    tbody.innerHTML = "";

    //すべての予定を表示
    schedules.forEach(schedule => {
        tbody.innerHTML += `
            <tr data-id="${schedule.id}">
                <td>${schedule.title}</td>
                <td>${schedule.date}</td>
                <td>${schedule.end}</td>
                <td style="background-color:${schedule.color}"></td>
            </tr>
        `;
    });
}

//指定した予定のtbodyを取得
//後から追加される予定行のクリックを監視するために使用
const tbody =
    document.getElementById("schedule-body");

//クリックされた予定を特定
tbody.addEventListener("click",(event) => {
    //クリックされたtd(要素)を取得
    console.log(event.target);
    
    // クリックされたtdから親のtr（予定行）を取得
    const clickedScheduleRow = event.target.closest("tr");
    console.log(clickedScheduleRow);

    if (!clickedScheduleRow) return;

    const id = clickedScheduleRow.dataset.id;

    const targetSchedule =
        schedules.find(schedule => schedule.id === id);

    if (!targetSchedule) return;

    editingId = targetSchedule.id;

    titleInput.value = targetSchedule.title;
    dateInput.value = targetSchedule.date;
    endInput.value = targetSchedule.end;
    colorInput.value = targetSchedule.color;

    openForm();
});


