function rec(){
 document.querySelector('.moon').onclick = function () {
        document.documentElement.classList.toggle('dark');
    }
    
    let artItem = document.querySelectorAll('.main .item');
    let asiItem = document.querySelectorAll('.aside-item');
    let artTitle = document.querySelectorAll('.item h3');
    let asiTitle = document.querySelectorAll('.aside-item a');
    
    for (let i = 0; i < artItem.length; i++) {
        let ranNum = Math.floor(Math.random() * 5) + 1;
        artItem[i].style.background = 'var(--c' + ranNum + ')';
        artTitle[i].style.color = 'var(--c' + ranNum + 'tc)';
    }
    for (let i = 0; i < asiItem.length; i++) {
        let ranNum = Math.floor(Math.random() * 5) + 1;
        asiItem[i].style.background = 'var(--c' + ranNum + ')';
        asiTitle[i].style.color = 'var(--c' + ranNum + 'tc)';
    }
    
    let art = document.querySelector('.art');
    art.onclick = function () {
        document.querySelector('article').style.display = 'none';
        document.querySelector('aside').style.display = 'block';
        document.querySelector('aside').style.margin = 'auto';
    }
    let back = document.querySelector('.back');
    back.onclick = function () {
        document.querySelector('aside').style.display = 'none';
        document.querySelector('article').style.display = 'block';
    }

}
