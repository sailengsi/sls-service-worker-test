console.log('this is sw.js');
self.addEventListener('fetch', function(event) {
  	console.log(event);
});