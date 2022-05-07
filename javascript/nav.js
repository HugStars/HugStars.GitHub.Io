var list = [
	{ content: '&#xe001;', color: '#06A7FF', title: '百度网盘', href: 'https://pan.baidu.com' },
	{ content: '&#xe000;', color: '#446DFF', title: '阿里云盘', href: 'https://www.aliyundrive.com/drive' },
	{ content: '&#xe027;', color: '#7AC573', title: 'A H K', href: 'https://www.autoahk.com' },
	{ content: '&#xe003;', color: '#4395FF', title: '翻译', href: 'https://fanyi.baidu.com' },
	{ content: '&#xe004;', color: '#6543FF', title: '图标库', href: 'https://www.iconfont.cn' },
	{ content: '&#xe005;', color: '#009A61', title: '在线工具', href: 'https://tool.lu' },
	{ content: '&#xe006;', color: '#96B97D', title: '菜鸟教程', href: 'https://www.runoob.com' },
	{ content: '&#xe007;', color: '#000000', title: 'GitHub', href: 'https://github.com/HugStars' },
	{ content: '&#xe008;', color: '#1A8AFF', title: 'I7素材', href: 'https://www.17sucai.com' },
	{ content: '&#xe009;', color: '#C71D23', title: 'Gitee', href: 'https://gitee.com/hugstars' },
	{ content: '&#xe00a;', color: '#FB7299', title: 'bilibili', href: 'https://www.bilibili.com' },
	{ content: '&#xe025;', color: '#F94880', title: '网站收藏', href: 'https://fuun.fun' },
	{ content: '&#xe02c;', color: '#41AEF0', title: 'MikuTools', href: 'https://tools.miku.ac' },
	{ content: '&#xe002;', color: '#FF767D', title: '设计师导航', href: 'http://www.mfchange.cn' },
	{ content: '&#xe01a;', color: '#41B883', title: 'Vue3+Ts', href: 'https://24kcs.github.io/vue3_study' },
	{ content: '&#xe02c;', color: '#000000', title: 'MDN|Web开发', href: 'https://developer.mozilla.org/zh-CN/docs/Web' },
	{ content: '&#xe00b;', color: '#2ecc71', title: '前端笔记', href: 'https://jiusi.xyz' },
	{ content: '&#xe01b;', color: '#2ecc71', title: '工具', href: 'https://tool.jiusi.xyz' },
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
	'这江湖没什么好的&emsp;也就酒还行',
	'梦坠天花三万字&emsp;到底不将忱心改',
	'一身诗意千寻瀑&emsp;万古人间四月天',
	'剑锋有雪雁回望&emsp;桃花别处起长歌',
	'恰逢暮雪亦白头&emsp;此生共我饮长风',
	'朝忆梨花暮忆雪&emsp;安得雪魂慰相思',
	'玉骨冰心白无垢&emsp;尽惹浮生几多愁',
	'应君江湖不相忘&emsp;携来飞花去流年',
	'又以诗意拂梦去&emsp;一处风雪两白头',
	'余生有幸识故人&emsp;可有春雪送江风',
];
var oldPoem = ''


if (!localStorage.getItem('navTitle')) {
	localStorage.setItem('navTitle', JSON.stringify(poems));
}
else {
	poems = JSON.parse(localStorage.getItem('navTitle'))
}

var colors = ['#ee3f4d', '#7e1671', '#2f90b9', '#41CF7D', '#fb8b05'];
var oldColor = '';

var searchArr = ["https://www.baidu.com/s?ie=UTF-8&wd=", "https://global.bing.com/search?q="]
var sel = document.querySelector('.select')

if (!localStorage.getItem('search')) {
	localStorage.setItem('search', 0);
}
else {
	if (localStorage.getItem('search') == 0) {
		sel.innerHTML = '百度'
	} else {
		sel.innerHTML = '必应'
	}
}

var pEl = document.querySelector('.title');
var ipt = document.querySelector('input');
var btn = document.querySelector('button');
var main = document.querySelector('main');

sel.addEventListener('click', function () {
	if (sel.innerHTML == '百度') {
		sel.innerHTML = '必应'
		localStorage.setItem('search', 1)
	} else {
		sel.innerHTML = '百度'
		localStorage.setItem('search', 0)
	}
})

function change() {
	var poem = poems[Math.floor(Math.random() * poems.length)];
	var color = colors[Math.floor(Math.random() * colors.length)];
	if (oldPoem == poem || oldColor == color) return change();
	[oldPoem, oldColor] = [poem, color];

	pEl.innerHTML = poem;
	document.documentElement.style.setProperty('--color', color);
}

document.querySelector('form').onsubmit = function () {
	return search()
}

function search() {
	var iptVal = ipt.value;
	if (iptVal != '') location.href = searchArr[localStorage.getItem('search')] + iptVal;
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



document.querySelector('.slider').onclick = () => {
	top.location = './edit.html';
}

document.querySelector('.editText').onclick = () => {
	top.location = './editText.html'
}

document.querySelector('.editIcon').onclick = () => {
	top.location = './editIcon.html'
	// alert('开发中。。。')
}

document.querySelector('.reset').onclick = () => {
	if (confirm('确认要重置文本和书签吗?')) {
		localStorage.clear()
		top.location = top.location;
	}
}
