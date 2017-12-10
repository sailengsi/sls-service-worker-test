console.log('this is sw.js');
self.addEventListener('fetch', function(event) {
  	console.log(event);
  	console.log(window.localStorage, self.localStorage);
  	console.log(window.location, self.location);
  	// window.localStorage.setItem('cur_page', window.location.href);
});