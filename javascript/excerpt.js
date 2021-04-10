let xhr1 = new XMLHttpRequest();
xhr1.open('GET', '../data/excerpt.json');
// xhr1.open('GET', 'https://hugstars.github.io/data/excerpt.json');
xhr1.send();
xhr1.onreadystatechange = function () {
    if (xhr1.readyState == 4 && xhr1.status == 200) {
        callBackData(JSON.parse(xhr1.responseText));
    }
}

function callBackData(data) {
    let nav = document.querySelector('nav');
    nav.innerHTML += `<h2>${data[0].h2}</h2><section>${data[0].section}</section>`
    let main = document.querySelector('main');
    let str = '';
    for (let i = 1; i < data.length; i++) {
        let title = data[i].a.title;
        let href = data[i].a.href;
        let content = data[i].data;
        let tag = data[i].tag;
        if (href == undefined) {
            str += `<div class="main-item"><a>${title}</a><input type="checkbox"></input><i></i><section>${content}</section><p>`
        }
        else {
            str += `<div class="main-item"><a href="${href}">${title}</a><section>${content}</section><p>`
        }
        for (let j in tag) {
            str += `<span class="${j}">${tag[j].toUpperCase()}</span>`
        }
        str += `</p></div>`
    }
    main.innerHTML += str;

    let input = document.querySelectorAll('main input');
    for (let l = 0; l < input.length; l++) {
        let flag = true;
        let hg, parhg;
        let num = 0;
        input[l].onclick = function () {
            if (flag) {
                if (num == 0) {
                    hg = this.parentNode.querySelector('section').offsetHeight;
                    parhg = this.parentNode.offsetHeight;
                    num++;
                }
                this.parentNode.style.height = parhg + hg + 'px';
                flag = false;
            }
            else {
                this.parentNode.style.height = parhg + 'px';
                flag = true;
            }
        }
    }
}
