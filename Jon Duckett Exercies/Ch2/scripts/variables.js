var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '$'+total;


var username, note;
username = 'Chandan Thakur';
note = 'Learning JS';

var elName = document.getElementById('name');
elName.textContent = username;
var elNote = document.getElementById('note');
elNote.textContent = note;



var title = "Lives in Greensboro";
var message = '<a href=\"sale.html\">25% off! </a>';

var elTitle = document.getElementById('title');
elTitle.innerHTML = title;
var elMsg = document.getElementById('message');
elMsg.innerHTML = message;


var inStock, shipping;
inStock = true;
shipping = false;

var elStock = document.getElementById('stock');
elStock.className = inStock;
var elShip = document.getElementById('shipping');
elShip.className = shipping;
