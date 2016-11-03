var drawBackground = function(){
	var width = q.width = document.body.clientWidth;
	var height = q.height = document.body.scrollHeight;
	var letters = Array(256).join(1).split('');
	q.getContext('2d').fillStyle = 'rgba(0,0,0,1)';
	q.getContext('2d').fillRect(0, 0, width, height);
	var draw = function() {
		q.getContext('2d').fillStyle = 'rgba(0,0,0,.05)';
		q.getContext('2d').fillRect(0, 0, width, height);
		q.getContext('2d').fillStyle = '#006633';
		letters.map(function(y_pos, index) {
			text = String.fromCharCode(3e4 + Math.random() * 300); //汉字效果
			//	text = String.fromCharCode(65+Math.random()*26);//字母效果
			//	text = Math.floor(Math.random()*2);//01效果
			x_pos = index * 20;
			q.getContext('2d').fillText(text, x_pos, y_pos);
			letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 15;
		});
	};
	backgroundSetInterval = setInterval(draw, 23);
}
window.onload=function(){
	drawBackground();
}
$(window).resize(function() {
	clearTimeout(backgroundSetInterval);
	drawBackground();
});
