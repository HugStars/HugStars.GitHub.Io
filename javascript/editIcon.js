let navTitle = JSON.parse(localStorage.getItem('navTitle'));
let str = ``;
for (const iterator of navTitle) {
    var tr = document.createElement('tr');
    tr.innerHTML = `<td><input type="text" value="${iterator}"></td><td><button class="del">删除</button></td>`;
    tr.className = 'hover';
    document.querySelector('table').append(tr);
}
var tr = document.createElement('tr');
tr.innerHTML = `<td class="add">添加</td><td class="back">返回</td>`;
document.querySelector('table').append(tr);


document.querySelector('table').addEventListener('click', e => {
    switch (e.target.className) {
        case 'add':
            var tr = document.createElement('tr');
            tr.innerHTML = `<td><input type="text" value=""></td><td><button class="del">删除</button></td>`;
            tr.className = 'hover';
            document.querySelector('table').insertBefore(tr, document.querySelector('.add').parentNode)
            break;
        case 'del':
            document.querySelector('table').removeChild(e.target.parentNode.parentNode);
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