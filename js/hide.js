var ico = document.querySelector('link[rel="icon"]');
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		ico.href = 'https://ci.phncdn.com/www-static/favicon.ico?cache=2020081801';
		document.title = 'Free Porn Videos &amp; Sex Movies - Porno, XXX, Porn Tube and Pussy Porn';
		clearTimeout(titleTime);
	} else {
		ico.href = 'https://jkgblog.com/wp-content/uploads/2019/06/image01fefa-150x150.jpg';
		document.title = OriginTitile;
		titleTime = setTimeout(function() {
			document.title = OriginTitile;
		}, 2000);
	}
});
