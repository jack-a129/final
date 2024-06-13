let logsave = (log) =>{
    let logs = localStorage.getItem('logs');
    if(logs===null){
        let loglist = [];
        loglist.push(log);
        localStorage.setItem("logs",JSON.stringify(loglist));
    }else{
        let loglist = Array.from(JSON.parse(logs));
        loglist.push(log);
        localStorage.setItem("logs",JSON.stringify(loglist));
    }
}

let logshow = (log) =>{
    let area = document.getElementById("list");
    let logcard = document.createElement("div");
    logcard.className = "card";
    logcard.innerHTML = `<div class="card-body">${log}</div>`
    area.prepend(logcard)
}

let add = () =>{
    let text = document.getElementById("logarea");
    let logs = text.value;
    text.value = "";
    let d = new Date();
    let logtext = `<span class="times">${d.getFullYear()}/${d.getMonth()}/${d.getDate()}</span> ${logs}`
    logshow(logtext);
    logsave(logtext);
}

let logs = localStorage.getItem('logs');
if(logs!=null){
    let loglist = Array.from(JSON.parse(logs));
    loglist.forEach(e => {
        logshow(e);
    });
}