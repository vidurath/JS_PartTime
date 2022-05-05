function insertRow() {
  let sampleTable = document.getElementById("sampleTable");
  let row = sampleTable.insertRow(0);
  let colone = row.insertCell(0);
  let coltwo = row.insertCell(1);
  colone.innerHTML = "one";
  coltwo.innerHTML = "two";
}

// 2nd option
function insertRow2() {
  let table = document.getElementById("sampleTable");
  let row = document.createElement("tr");
  let cell1 = document.createElement("td");
  let cell2 = document.createElement("td");
  cell1.textContent = "cell1";
  cell2.textContent = "cell2";
  row.appendChild(cell1);
  row.appendChild(cell2);

  table.appendChild(row);
}
