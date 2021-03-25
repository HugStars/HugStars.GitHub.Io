let asideXhr = new XMLHttpRequest();
// asideXhr.open('get','../data/aside.json');
asideXhr.open('get', 'https://hugstars.github.io/data/aside.json');
asideXhr.send();
asideXhr.onreadystatechange = function () {
    if (asideXhr.readyState == 4 && asideXhr.status == 200) {
        callBackAsideData(JSON.parse(asideXhr.responseText));
    }
}

function callBackAsideData(data) {
    let asideMain = document.querySelector('.aside-main');
    let asideStr = '';
    for (let i = 0; i < data.length; i++) {
        asideStr += `<div class="aside-item">
        <a href="${data[i].href}" target="_blank">${data[i].a}</a>`
        if(data[i].cont){
            asideStr += `<p class="cont">${data[i].cont}</p> <p class="foot">`
        }else{
            asideStr += `<p class="foot">`
        }
        for (let j in data[i].tag) {
            asideStr += `<span class="${j}">${data[i].tag[j]}</span>`
        }
        asideStr += `</p></div>`
    }
    asideMain.innerHTML = asideStr;
    rec();
    let delAside = document.querySelector('.delAside');
    if(delAside) delAside.remove();
}