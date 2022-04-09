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
	target = e.target
	switch (target.className) {
		case 'title':

			break;
		case 'href':

			break;

		case 'color':
			target.parentNode.querySelector('.content').style.setProperty(['--color'], target.value)
			break;
		default:
			break;
	}
})

let icon = document.querySelector('.icon')

icon.addEventListener('click', function (e) {
	console.log(e.target.nodeName)
	if (chooseIcon) {
		chooseIcon.value = e.target.innerHTML
	}
	this.parentNode.parentNode.style.display = 'none'
})

document.querySelector('.close').addEventListener('click', function () {
	document.querySelector('.dialog').style.display = 'none'
})