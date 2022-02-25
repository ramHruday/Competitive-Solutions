function insertLi() {
  let number = document.getElementById("input").value;

  if (number.trim() !== "") {
    document.getElementById("input").value = "";
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let i = document.getElementById("list").childNodes.length;
    li.style.color = i % 3 ? "#000000" : "#FF0000";
    li.appendChild(document.createTextNode(number));

    ul.appendChild(li);
  } else {
    alert("Please provide the valid input");
  }
}
