function setQuit() {
  var x = document.getElementById("fs_order_order_num");
  var y = document.getElementById("quit");
  var z = document.getElementById("Scomit");
  var order_num = x.value;
  if (order_num.length == 0 || !order_num.trim()) {
    y.style.display = 'inline';
  } else {
    y.style.display = 'none';
    }
  if (order_num.length == 7) {
    z.style.display = 'inline';
  } else {
    z.style.display = 'none';
    }
}

function showOrders() {
  //this is set to the XMLHttpRequest object that fired the event
  var y = document.getElementById("refresh");
  var z = document.getElementById("message");
  var repos = JSON.parse(this.responseText);
  if (repos.length == 0) {
    y.style.display = 'none';
    z.innerHTML = 'There are no outstanding orders at this time.';
  } else {
    y.style.display = 'inline';
    z.innerHTML = 'There are outstanding orders. Click the refresh button below to process new orders.';
  }
}

function getOrders() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showOrders);
  // req.open('GET', 'http://fsorders.dartagnan.com/api/v1/fs_orders/api.json');
  req.open('GET', 'http://fsorders.dartagnan.com/api/v1/fs_orders/api.json');
  req.send();
}
