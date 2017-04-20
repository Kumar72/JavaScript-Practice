var colors = ['white', 'black', 'custom'];

//OR

/*
	var color = new Array (
		'white',
		'black',
		'custom'
	)
*/		//not prefered as much, but we can still do this

var elArray = document.getElementById('colors');
elArray.textContent = colors[1];
