let navItem = JSON.parse(localStorage.getItem('navItem'))

console.log(navItem)

let str = ''

for (const iterator of navItem) {
	str +=
		`<div class="item">
		<input class="title" type="text" value="${iterator.title}">
		<input class="href" type="text" value="${iterator.href}">
		<input class="content" type="button" value="${iterator.content}" style="--color:${iterator.color}">
		<input class="color" type="color" value="${iterator.color}">
		<div class="del">删除</div>
	</div>`
}

let main = document.querySelector('.main')
main.innerHTML = str

let chooseIcon = null

main.addEventListener('click', function (e) {
	switch (e.target.className) {
		case 'content':
			chooseIcon = e.target
			icon.parentNode.parentNode.style.display = 'block'
			break;
		case 'del':
			main.removeChild(e.target.parentNode);
			break;
		default:
			break;
	}
})

main.addEventListener('change', function (e) {
	if (e.target.className == 'color')
		e.target.parentNode.querySelector('.content').style.setProperty(['--color'], e.target.value)
})

document.querySelector('.save').addEventListener('click', function () {
	let arr = []
	let items = main.querySelectorAll('.item')
	for (const iterator of items) {
		let values = iterator.querySelectorAll('input')
		arr.push({
			"content": values[2].value,
			"color": values[3].value,
			"title": values[0].value,
			"href": values[1].value
		})
	}
	localStorage.setItem('navItem', JSON.stringify(arr))
	if (confirm('保存成功，是否返回主页？')) {
		document.querySelector('.back').click()
	}
})

document.querySelector('.add').addEventListener('click', function () {
	let div = document.createElement('div')
	div.className = 'item'
	div.innerHTML = `
		<input class="title" type="text" value="">
		<input class="href" type="text" value="">
		<input class="content" type="button" value="">
		<input class="color" type="color" value="">
		<div class="del">删除</div>`
	main.appendChild(div)
})

document.querySelector('.back').addEventListener('click', function () {
	let arr = location.href.split('/')
	if (arr[0] != 'https:') arr[arr.length - 1] = 'index.html'
	else arr.length = arr.length - 1
	top.location = arr.join('/')
})

let icon = document.querySelector('.icon')

icon.addEventListener('click', function (e) {
	if (chooseIcon && e.target.nodeName == 'SPAN') {
		chooseIcon.value = e.target.innerHTML
		this.parentNode.parentNode.style.display = 'none'
	}
})

document.querySelector('.close').addEventListener('click', function () {
	document.querySelector('.dialog').style.display = 'none'
})