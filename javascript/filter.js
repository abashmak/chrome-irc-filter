var display_style = (filter_enabled) ? "none" : "";
var rows = document.getElementsByTagName('tr');
var len = rows.length
var count = 0;
for (var i = 0; i < len; i++) {
  var td = rows[i].getElementsByTagName('td');
  if (td.length != 2) {
    continue;
  }
  if (td[0].innerHTML.includes("has quit")) {
    rows[i].style.display = display_style;
    count++;
  }
  if (td[0].innerHTML.includes("has joined")) {
    rows[i].style.display = display_style;
    count++;
  }
}
if (filter_enabled) {
  console.log("Filtered " + count + "/" + len + " rows");
}
else {
  console.log("Showing all " + len + " rows");
}
