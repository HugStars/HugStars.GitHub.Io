window.onload = () => {
    let { connectEnd, connectStart, domComplete, domContentLoadedEventEnd, domContentLoadedEventSta, domInteractive, domLoading, domainLookupEnd, domainLookupStart, fetchStart, loadEventEnd, loadEventStart, navigationStart, redirectEnd, redirectStart, requestStart, responseEnd, responseStart, secureConnectionStart, unloadEventEnd, unloadEventStart } = window.performance.timing;
    let style = 'color:green;font-weight:900';
    console.log("%c DNS解析耗时:", style, domainLookupEnd - domainLookupStart);
    console.log("%c TCP连接耗时:", style, connectEnd - connectStart);
    console.log("%c 网络请求耗时(TTFB):", style, responseStart - requestStart);
    console.log("%c 数据传输耗时:", style, responseEnd - responseStart);
    console.log("%c DOM解析耗时:", style, domInteractive - responseEnd);
    console.log("%c 资源加载耗时:", style, loadEventStart - domContentLoadedEventEnd);
    console.log("%c 首包时间:", style, responseStart - domainLookupStart);
    console.log("%c 首次渲染时间/白屏时间:", style, domLoading - fetchStart);
    console.log("%c 首次可交互时间:", style, domInteractive - fetchStart);
    console.log("%c DOM Ready时间:", style, domContentLoadedEventEnd - fetchStart);
    console.log("%c 页面完全加载时间:", style, loadEventStart - fetchStart)
}