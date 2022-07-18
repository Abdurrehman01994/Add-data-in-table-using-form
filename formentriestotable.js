var button = document.getElementById("submit");
button.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var classes = document.getElementById("class").value;
  var grade = document.getElementById("grade").value;

  if (!name || !age || !grade) {
    alert("Please fill all the boxes");
    return;
  }
  var display = document.getElementById("display");
  var newRow = display.insertRow(row);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  cell1.innerHTML = name;
  cell2.innerHTML = age;
  cell3.innerHTML = classes;
  cell4.innerHTML = grade;
  event.preventDefault();
}
