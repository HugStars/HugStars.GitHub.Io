let site = window.location.href;
site = site.split(/git/i)[1].split('/')[0].toLowerCase();

let xhr = new XMLHttpRequest();
xhr.open("GET", `https://hugstars.git${site}.io/data/baidu.json`);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        callBack(JSON.parse(xhr.responseText));
    }
}

function callBack(data) {
    if (site == 'hub') {
        site = data.github;
    } else {
        site = data.gitee;
    }
    (function () {
        var hm = document.createElement("script");
        hm.src = site;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();

}