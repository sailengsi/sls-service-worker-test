console.log('this is sw.js');
self.addEventListener('fetch', function(event) {
	fetch('/sls-service-worker-test/test.js').then(res => {
		console.log(res);
		return res.text();
	});
	console.log(self.alert);
	// console.log(event);
	// console.log(self.localStorage);
	// console.log(self.location);
	// window.localStorage.setItem('cur_page', window.location.href);
});