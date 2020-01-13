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
