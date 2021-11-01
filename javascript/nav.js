var list = [
    { content: '&#xe601;', color: '#06A7FF', title: '百度网盘', href: 'https://pan.baidu.com' },
    { content: '&#xe600;', color: '#446DFF', title: '阿里云盘', href: 'https://www.aliyundrive.com/drive' },
    { content: '&#xe6d1;', color: '#7AC573', title: 'A H K', href: 'https://www.autoahk.com' },
    { content: '&#xe6ba;', color: '#4395FF', title: '翻译', href: 'https://fanyi.baidu.com' },
    { content: '&#xe68a;', color: '#6543FF', title: '图标库', href: 'https://www.iconfont.cn' },
    { content: '&#xe605;', color: '#009A61', title: '在线工具', href: 'https://tool.lu' },
    { content: '&#xe63c;', color: '#96B97D', title: '菜鸟教程', href: 'https://www.runoob.com' },
    { content: '&#xe76f;', color: '#000000', title: 'GitHub', href: 'https://github.com/HugStars/HugStars.GitHub.Io' },
    { content: '&#xe635;', color: '#1A8AFF', title: 'I7素材', href: 'https://www.17sucai.com' },
    { content: '&#xe719;', color: '#C71D23', title: 'Gitee', href: 'https://gitee.com/hugstars/hugstars' },
    { content: '&#xe628;', color: '#FB7299', title: 'bilibili', href: 'https://www.bilibili.com' },
    { content: '&#xe6cf;', color: '#F94880', title: '网站收藏', href: 'https://fuun.fun' },
    { content: '&#xe6d6;', color: '#41AEF0', title: 'MikuTools', href: 'https://tools.miku.ac' },
    { content: '&#xe602;', color: '#FF767D', title: '设计师导航', href: 'http://www.mfchange.cn' },
];


if (!localStorage.getItem('navItem')) {
    localStorage.setItem('navItem', JSON.stringify(list))
}
else {
    list = JSON.parse(localStorage.getItem('navItem'));
}

var poems = [
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
];

var colors = ['#ee3f4d', '#7e1671', '#2f90b9', '#41CF7D', '#fb8b05'];
var oldColor = '';

var pEl = document.querySelector('span');
var ipt = document.querySelector('input');
var btn = document.querySelector('button');
var main = document.querySelector('main');

function change() {
    pEl.innerHTML = poems[Math.floor(Math.random() * poems.length)];
    var color = colors[Math.floor(Math.random() * colors.length)];
    if (oldColor == color) return change();

    oldColor = color;
    document.documentElement.style.setProperty('--color', color)
}

function search() {
    var iptVal = ipt.value;
    if (iptVal != '') location.href = "https://www.baidu.com/s?ie=UTF-8&wd=" + iptVal;
    return false;
}
btn.addEventListener('click', search);

change();
pEl.addEventListener('click', change);

var resultArray = list.sort((param1, param2) => {
    return param1.title.localeCompare(param2.title, "zh");
}
);

var ele = '';
for (const iterator of resultArray) {
    ele += `<a class="item" style="--color:${iterator.color}" title="${iterator.title}" onclick="top.location='${iterator.href}'">${iterator.content}</a>`
}
main.innerHTML = ele;