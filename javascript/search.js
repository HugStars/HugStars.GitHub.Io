function search() {
    let iptVal = document.querySelector("input").value;
    if (iptVal != '') {
        window.location.href = "https://www.baidu.com/s?ie=UTF-8&wd=" + iptVal;
        iptVal = "";
    }
    return false;
}
document.querySelector('svg').addEventListener('click', search);