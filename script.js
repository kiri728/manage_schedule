//入力フォームを出す
function openform(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form-popup").style.display = "block";
console.log("0");
}

function closeform(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("form-popup").style.display = "none";
}

//入力フォーム処理

//予定の保存
const schedules = [];

function addschedule(){
    document.getElementById("schedule-body");
console.log("1");
    //imputデータ入手
    const date = document.getElementById("date").value;
console.log("2");
    const time = document.getElementById("time").value;
console.log("3");
    const title = document.getElementById("title").value;
console.log("4");
    const color = document.getElementById("color").value;
console.log("5");

    //オブジェクト化
    const newSchedule = {
        date: date,
        time: time,
        title: title,
        color: color
    };
console.log("6");

    //配列へ追加
    schedules.push(newSchedule);
console.log("7");

    //table更新
    renderTable();
console.log("8");

    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("title").value = "";
    document.getElementById("color").value = "#000000";
console.log("9");
}

//Tableへ反映

function renderTable(){
console.log("renderbegin");
    const tbody =
        document.getElementById("schedule-body");
console.log("7-1");

    //空にする
    tbody.innerHTML = "";
console.log("7-2");

    //すべての予定を表示
    schedules.forEach(schedule => {
        tbody.innerHTML += `
            <tr>
                <td>${schedule.date}</td>
                <td>${schedule.time}</td>
                <td>${schedule.title}</td>
                <td style="background-color:${schedule.color}"></td>
            </tr>
        `;
    });
console.log("7-3");
}