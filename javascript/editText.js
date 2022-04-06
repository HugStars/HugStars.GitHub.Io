let navTitle = JSON.parse(localStorage.getItem('navTitle'));
if (navTitle.length >= 20) navTitle = navTitle.splice(0, 20)
let str = ``;
let main = document.querySelector('.main')

for (const iterator of navTitle) {
	var div = document.createElement('div');
	div.innerHTML = `<div class='ipt'><input type="text" value="${iterator}"></div><div class='btn'><button class="del">删除</button></div>`;
	div.className = 'item';
	main.append(div);
}

document.querySelector('main').addEventListener('click', e => {
	switch (e.target.className) {
		case 'add':
			if (document.querySelectorAll('input').length >= 20) {
				return alert('最多添加20个')
			}
			var div = document.createElement('div');
			div.innerHTML = `<div class='ipt'><input type="text" value=""></div><div class='btn'><button class="del">删除</button></div>`;
			div.className = 'item';
			main.append(div);
			break;
		case 'del':
			document.querySelector('.main').removeChild(e.target.parentNode.parentNode);
			break;
		case 'save':
			var ipts = document.querySelectorAll('input');
			if (ipts.length < 2) return alert('至少需要两条文本。')
			if (ipts.length >= 20) return alert('最多添加20条文本。')

			var set = new Set();
			for (const iterator of ipts) {
				if (iterator.value === '') return alert('文本不能为空')
				set.add(iterator.value)
			}
			console.log(ipts.length, set.size)
			if (ipts.length !== set.size) return alert('检测到重复文本，请移除。')


			localStorage.setItem('navTitle', JSON.stringify([...set]));

			if (confirm('保存成功，是否返回主页？')) {
				history.back();
			}
			break;
		case 'back':
			history.back();
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