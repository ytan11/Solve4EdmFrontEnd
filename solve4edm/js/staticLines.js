(function(){
	var select = document.getElementById('line-chart-select');
	var image = document.getElementById('line-chart-image');
	select.onchange = function(e){
		console.log(e);
		console.log(e.target.selectedOptions[0].value);
		var name = e.target.selectedOptions[0].value;
		image.style.backgroundImage = `url('/css/${name}_Prices.png')`
	}
})()