console.log('this is sw.js');
self.addEventListener('fetch', function(event) {
	console.log(self.alert);
	// console.log(event);
	// console.log(self.localStorage);
	// console.log(self.location);
	// window.localStorage.setItem('cur_page', window.location.href);
});