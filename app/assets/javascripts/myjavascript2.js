function setQuit() {
  var v = document.getElementById("fs_order_reject_reason");
  var w = document.getElementById("reject_lable");
  var x = document.getElementById("fs_order_order_num");
  var y = document.getElementById("quit");
  var z = document.getElementById("Scomit");
  var order_num = x.value;
  if (order_num.length == 0 || !order_num.trim()) {
    y.style.display = 'inline';
    v.style.display = 'inline';
    w.style.display = 'inline';
  } else {
    y.style.display = 'none';
    v.style.display = 'none';
    w.style.display = 'none';
    }
  if (order_num.length == 7) {
    z.style.display = 'inline';
  } else {
    z.style.display = 'none';
    }
}

function setReject() {
  var x = document.getElementById("fs_order_reject_reason");
  var y = document.getElementById("reject");
  var z = document.getElementById("fs_order_order_num");
  var w = document.getElementById("order_lable");
  var reject_reason = x.value;
  if (reject_reason.length == 0 || !reject_reason.trim()) {
    y.style.display = 'none';
    z.style.display = 'inline';
    w.style.display = 'inline';
  } else {
    y.style.display = 'inline';
    z.style.display = 'none';
    w.style.display = 'none';
    }
}

function showOrders() {
  //this is set to the XMLHttpRequest object that fired the event
  var x = document.getElementById("customers");
  var y = document.getElementById("refresh");
  var z = document.getElementById("message");
  var repos = JSON.parse(this.responseText);
  if (y !== null) {
    // this is the empty page
    if (repos.length == 0) {
      y.style.display = 'none';
      z.innerHTML = 'There are no outstanding orders at this time.';
    } else {
      y.style.display = 'inline';
      z.innerHTML = 'There are outstanding orders. Click the refresh button below to process new orders.';
    }
  } else {
    // this is the index page
    // set the appropriate message
    x.style.display = 'inline';
    if (repos.length == 0) {
      z.innerHTML = 'There are no outstanding orders';
      x.style.display = 'none';
    } else if (repos.length == 1){
      z.innerHTML = 'There is one outstanding order';
    } else {
      z.innerHTML = 'There are ' + repos.length + ' outstanding orders';
    }
    // remove the contents of the table tbody
    var node = document.getElementById("orderbody");
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }
    // build new table body contents
    repos.forEach(function(el) {
      var tr = document.createElement("tr");
      for (var o in el) {
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(el[o]))
        tr.appendChild(td);
      }
      node.appendChild(tr);
    })
  }
}

function getOrders() {
  var z = document.getElementById("message");
// if there is no message field don't check for orders
  if (z !== null) {
    const req = new XMLHttpRequest();
    req.addEventListener('load', showOrders);
    // req.open('GET', 'http://localhost:3003/api/v1/fs_orders/api.json');
    req.open('GET', 'http://fsorders.dartagnan.com/api/v1/fs_orders/api.json');
    req.send();
  }
}

setInterval( getOrders, 60000 );
