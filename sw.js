console.log('this is sw.js');
self.addEventListener('fetch', function(event) {
	fetch('https://cdn.bootcss.com/jquery/3.2.1/core.js');
	console.log(self.alert);
	// console.log(event);
	// console.log(self.localStorage);
	// console.log(self.location);
	// window.localStorage.setItem('cur_page', window.location.href);
});