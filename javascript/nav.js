let website = [{
    name: 'bilibili',
    http: 'https://www.bilibili.com',
}, {
    name: 'music',
    http: 'https://music.163.com',
}, {
    name: '3000',
    http: 'http://127.0.0.1:3000'
}, {
    name: 'API',
    http: 'http://api.btstu.cn'
}, {
    name: 'FeiShu',
    http: 'https://mvm4pg9wny.feishu.cn/drive/home'
}, {
    name: 'topbook',
    http: 'https://topbook.cc/overview'
}, {
    name: 'GitHub',
    http: 'https://github.com/HugStars/HugStars.GitHub.Io'
}, {
    name: 'GitEE',
    http: 'https://gitee.com'
}, {
    name: 'Hug-Hub',
    http: 'https://hugstars.github.io/home.html'
}, {
    name: "Hug-EE",
    http: 'https://hugstars.gitee.io/home.html'
}, {
    name: 'Nicholaz',
    http: 'https://www.cnblogs.com/Nicholaz',
}, {
    name: 'navigation',
    http: 'https://www.zhansousou.com/user_nav/chengxuyuan',
}, {
    name: 'runoob',
    http: 'https://www.runoob.com',
}, {
    name: 'butterfly',
    http: 'https://www.jc2182.com'
}, {
    name: 'html',
    http: 'https://www.html.cn',
}, {
    name: 'html.nav',
    http: 'https://www.html.cn/nav',
}, {
    name: 'fontawesome',
    http: 'https://fontawesome.dashgame.com/#top',
}, {
    name: 'iconfont',
    http: 'https://www.iconfont.cn',
}, {
    name: 'animate',
    http: 'https://animate.style'
}, {
    name: 'ChinaColor',
    http: 'http://zhongguose.com',
}, {
    name: 'webcolor',
    http: 'http://tool.c7sky.com/webcolor'
}, {
    name: 'oschina',
    http: 'https://tool.oschina.net/encode?type=3',
}, {
    name: 'tool',
    http: 'https://tool.lu',
}, {
    name: 'idcd',
    http: 'https://www.idcd.com',
}, {
    name: 'I7SuCai',
    http: 'https://www.17sucai.com',
}, {
    name: 'NewNiTai',
    http: 'https://yousiqiexing.com/softui'
}, {
    name: 'JSONEditor',
    http: 'file:///E:/%E5%89%8D%E7%AB%AF/%E7%BB%83%E4%B9%A0/-24(JSONEditor).html'
}, {
    name: 'fanyi',
    http: 'https://fanyi.baidu.com'
}]

let poems = [
    '人生路远&emsp;山河坦荡',
    '仙人抚我顶&emsp;结发授长生',
    '人间烟火气&emsp;最抚凡人心',
    '青山行天地气&emsp;江涯藏浩然风',
    '任他凡事清浊&emsp;疯疯疯癫如我',
    '这江湖没什么好的&emsp;也就酒还行',
    '梦坠天花三万字&emsp;到底不将忱心改',
    '一身诗意千寻瀑&emsp;万古人间四月天',
    '剑锋有雪雁回望&emsp;桃花别处起长歌',
    '恰逢暮雪亦白头&emsp;此生共我饮长风',
    '朝忆梨花暮忆雪&emsp;安得雪魂慰相思',
    '玉骨冰心白无垢&emsp;尽惹浮生几多愁',
    '应君江湖不相忘&emsp;携来飞花去流年',
    '桂堂东畔画西楼&emsp;长剑风流知己酬',
    '又以诗意拂梦去&emsp;一处风雪两白头',
    '余生有幸识故人&emsp;可有春雪送江风',
]

let pEl = document.querySelector('span');
pEl.innerHTML = poems[Math.floor(Math.random() * poems.length)];

let main = document.querySelector('main');
for (let i = 0; i < website.length; i++) {
    let ele = document.createElement('a');
    main.appendChild(ele);
    ele.innerText = website[i].name;
    ele.href = website[i].http;
}

pEl.onclick = function () {
    window.location.href = window.location.href
}

document.querySelector('.jsSearch').remove();
document.querySelector('.jsNav').remove();
