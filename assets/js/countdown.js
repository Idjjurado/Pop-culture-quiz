var counter = {
    square: txt => {
    let cell = document.createElement("div");
    cell.className = `cell ${txt}`;
    cell.innerHTML = `<div class="digits">0</div>
    <div class="text">${txt}</div>`;
    return cell;
    },
    
    attach: instance => {
    instance.target.className = "countdown";
    if (instance.remain >= 60) {
    instance.target.appendChild(counter.square("mins"));
    instance.mins = instance.target.querySelector(".mins .digits");
    }
    instance.target.appendChild(counter.square("secs"));
    instance.secs = instance.target.querySelector(".secs .digits");
    
    instance.timer = setInterval(() => {counter.ticker(instance);}, 1000);
    },
    
    ticker: instance => {
    instance.remain--;
    if (instance.remain <= 0) { clearInterval(instance.timer); instance.remain=0; if (typeof instance.after=="function" ) {instance.after();} } let secs=instance.remain; let days=Math.floor(secs / 86400); secs -=days * 86400; let hours=Math.floor(secs / 3600); secs -=hours * 3600; let mins=Math.floor(secs / 60); secs -=mins * 60; instance.secs.innerHTML=secs; if (instance.mins !==undefined) {instance.mins.innerHTML=mins;} if (instance.hours !==undefined) {instance.hours.innerHTML=hours;} if (instance.days !==undefined) {instance.days.innerHTML=days;} }, toSecs: till=> {
        till = Math.floor(till / 1000);
        let remain = till - Math.floor(Date.now() / 1000);
        return remain < 0 ? 0 : remain; } }; window.onload=()=> {
            counter.attach({
            target: document.getElementById("demo"),
            remain: 86500,
            after: () => {alert("TIMER HAS ENDED!");} });
    
            };