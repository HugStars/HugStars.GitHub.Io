window.addEventListener('load', function () {
	let { connectEnd, connectStart, domContentLoadedEventEnd, domInteractive, domLoading, domainLookupEnd, domainLookupStart, fetchStart, loadEventStart, requestStart, responseEnd, responseStart } = window.performance.timing;
	let style1 = 'color:white;background:#fb8b05;font-weight:900;padding:2px 10px;border-radius: 5px 0 0 5px;';
	let style2 = 'color:white;background:#41CF7D;font-weight:900;padding:2px 10px;border-radius: 0 5px 5px 0;';

	let obj = {
		"DNS解析": domainLookupEnd - domainLookupStart,
		"TCP连接": connectEnd - connectStart,
		"网络请求(TTFB)": responseStart - requestStart,
		"数据传输": responseEnd - responseStart,
		"DOM解析": domInteractive - responseEnd,
		"资源加载": loadEventStart - domContentLoadedEventEnd,
		"首包时间": responseStart - domainLookupStart,
		"首次渲染时间/白屏时间": domLoading - fetchStart,
		"首次可交互时间": domInteractive - fetchStart,
		"DOM Ready时间": domContentLoadedEventEnd - fetchStart,
		"首次可交互时间": domInteractive - fetchStart,
		"页面完全加载时间": loadEventStart - fetchStart
	}

	for (const key in obj) {
		console.log(`%c${key}%c${obj[key]} ms`, style1, style2)
	}

	if (location.protocol != 'file:') {
		navigator.serviceWorker.register('./javascript/serviceWorker.js');
	}
})