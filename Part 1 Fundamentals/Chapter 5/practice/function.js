function forEach(arr,func) {	//making a function
	for(var i=0; i < arr.length; i++) {
		func(arr[i], i, arr); //what we are passing in
	}
};

var nums =[100,101,102,103,104,105,106,107,108,109,110];

forEach(nums, function(val, idx, arr) {	//anonymous function
		console.log("val: " + val + ", idx: "+idx+ ", array : " + arr);
});

var callback = function(val, idx, arr) {
		console.log("val: " + val + ", idx: "+idx+ ", array : " + arr);
};

 forEach(nums, callback); //use when you wanna seperate the above function

forEach(nums, function(x){
	console.log(x*x);
})
