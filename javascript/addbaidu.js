let site = window.location.href;
site = site.split(/git/i)[1].split('/')[0].toLowerCase();
// console.log(site);
let addBaiduXhr = new XMLHttpRequest();
// xhr.open("GET", `https://hugstars.git${site}.io/data/baidu.json`);
addBaiduXhr.open("GET", `../data/baidu.json`);
addBaiduXhr.send();
addBaiduXhr.onreadystatechange = function () {
    if (addBaiduXhr.readyState == 4 && addBaiduXhr.status == 200) {
        callBack(JSON.parse(addBaiduXhr.responseText));
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
    document.querySelector('.addbaidu').remove();
}
