function setQuit() {
  var x = document.getElementById("fs_order_order_num");
  var y = document.getElementById("quit");
  var order_num = x.value;
  if (order_num.length == 0 || !order_num.trim()) {
    y.style.display = 'inline';
  } else {
    y.style.display = 'none';
    }
}
