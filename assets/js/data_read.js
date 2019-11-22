// function setup() {
//   createCanvas(400, 200);
//   var buttton = select('#submit');
//   buttton.mousePressed(data1Ask)
// }

// function data1Ask(){
// 	loadJSON('https://api.thingspeak.com/channels/886152/feeds.json?api_key=JDM0TOWAHQDDVW7Z&results=2',gotData);
// }

// function gotData(data){
//   var f = data
// }
// loadJSON('https://api.thingspeak.com/channels/886152/feeds.json?api_key=JDM0TOWAHQDDVW7Z&results=2',gotData);
// //var a  = f.feeds[1].field1
// var output = document.getElementById('output')
// output.innerHTML = f;
// console.log(f)

// fetch("https://api.thingspeak.com/channels/886152/feeds.json?api_key=JDM0TOWAHQDDVW7Z&results=2")
//         .then(function(resp){
// 			return resp.json();
// 		})
// 		.then(function(data){
// 			console.log(data);
// 		});