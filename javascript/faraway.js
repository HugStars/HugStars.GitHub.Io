function rec() {
    document.querySelector('.moon').onclick = function () {
        document.documentElement.classList.toggle('dark');
    }

    let artItem = document.querySelectorAll('.main .item');
    let asiItem = document.querySelectorAll('.aside-item');
    let artTitle = document.querySelectorAll('.item h3');
    let asiTitle = document.querySelectorAll('.aside-item a');

    for (let i = 0; i < artItem.length; i++) {
        let ranNum = Math.floor(Math.random() * 5) + 1;
        artItem[i].style.background = 'var(--c' + ranNum + ')';
        artTitle[i].style.color = 'var(--c' + ranNum + 'tc)';
    }
    for (let i = 0; i < asiItem.length; i++) {
        let ranNum = Math.floor(Math.random() * 5) + 1;
        asiItem[i].style.background = 'var(--c' + ranNum + ')';
        asiTitle[i].style.color = 'var(--c' + ranNum + 'tc)';
    }

    let art = document.querySelector('.art');
    art.onclick = function () {
        document.querySelector('article').style.display = 'none';
        document.querySelector('aside').style.display = 'block';
        document.querySelector('aside').style.margin = 'auto';
    }
    let back = document.querySelector('.back');
    back.onclick = function () {
        document.querySelector('aside').style.display = 'none';
        document.querySelector('article').style.display = 'block';
    }

}

let urlArr = [
    // '../data/synth.json',
    // '../data/vueSynth.json',
    'https://hugstars.github.io/data/synth.json',
    'https://hugstars.github.io/data/vueSynth.json'
]

function xhr(url) {
    let synthXhr = new XMLHttpRequest();
    synthXhr.open('get', url)
    synthXhr.send();
    synthXhr.onreadystatechange = function () {
        if (synthXhr.readyState == 4 && synthXhr.status == 200) {
            callBackData(JSON.parse(synthXhr.responseText));
        }
    }
}

function callBackData(data) {
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    let Lstr = '';
    let Rstr = '';
    for (let i = 0; i < data.length; i++) {
        if (i % 2 == 0) {
            Lstr += `
            <div class="item"><h3>${data[i].h3}</h3>
            <p class="cont">${data[i].data}</p>
            <p class="foot">`
            for (let j in data[i].tag) {
                Lstr += `<span class="${j}">${data[i].tag[j]}</span>`
            }
            Lstr += `</p></div>`
        } else {
            Rstr += `
            <div class="item"><h3>${data[i].h3}</h3>
            <p class="cont">${data[i].data}</p>
            <p class="foot">`
            for (let j in data[i].tag) {
                Rstr += `<span class="${j}">${data[i].tag[j]}</span>`
            }
            Rstr += `</p></div>`
        }
    }
    left.innerHTML = Lstr;
    right.innerHTML = Rstr;
    rec();
    let del = document.querySelector('.del');
    if (del) del.remove();
}

xhr(urlArr[0]);

fn = xhr;
arr = urlArr;