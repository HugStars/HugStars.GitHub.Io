let navTitle = JSON.parse(localStorage.getItem('navTitle'));
if (navTitle.length >= 20) navTitle = navTitle.splice(0, 20)
let str = ``;
for (const iterator of navTitle) {
	var tr = document.createElement('tr');
	tr.innerHTML = `<td><input type="text" value="${iterator}"></td><td><button class="del">删除</button></td>`;
	tr.className = 'hover';
	document.querySelector('tbody').append(tr);
}
var tr = document.createElement('tr');
tr.innerHTML = `<td class="add">添加</td><td class="back">返回</td>`;
document.querySelector('tbody').append(tr);


document.querySelector('table').addEventListener('click', e => {
	switch (e.target.className) {
		case 'add':
			if (document.querySelectorAll('tr').length >= 22) {
				return alert('最多添加20个')
			}
			var tr = document.createElement('tr');
			tr.innerHTML = `<td><input type="text" value=""></td><td><button class="del">删除</button></td>`;
			tr.className = 'hover';
			document.querySelector('tbody').insertBefore(tr, document.querySelector('.add').parentNode)
			break;
		case 'del':
			document.querySelector('tbody').removeChild(e.target.parentNode.parentNode);
			break;
		case 'save':
			var ipts = document.querySelectorAll('input');
			if (ipts.length < 2) {
				return alert('至少需要两条文本。')
			}
			var arr = [];
			for (const iterator of ipts) {
				arr.push(iterator.value)
			}
			localStorage.setItem('navTitle', JSON.stringify(arr));
			let isBack = confirm('保存成功，是否返回主页？');
			if (isBack) {
				history.go(-1);
			}
			break;
		case 'back':
			history.go(-1);
		default:
			break;
	}
})


particlesJS("particles-js", {
	particles: {
		number: {
			value: 20,
			density: {
				enable: true,
				value_area: 900
			}
		},
		color: {
			value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
		},
		shape: {
			type: ["circle"],
			stroke: {
				width: 0,
				color: "#fff000"
			},
			polygon: {
				nb_sides: 1
			}
		},
		opacity: {
			value: 1,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 8,
			random: true,
			anim: {
				enable: false,
				speed: 10,
				size_min: 10,
				sync: false
			}
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: "#808080",
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 5,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	retina_detect: true
});
