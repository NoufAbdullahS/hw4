function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill out all required fields.");
    return false;
  }

  return true;
}

function toggleDescription(id) {
  var desc = document.getElementById(id);

  if (desc.style.display === "none") {
    desc.style.display = "block";
  } else {
    desc.style.display = "none";
  }
}

function changeStyleOnHover() {
  var quote = document.querySelector("blockquote");
  quote.style.backgroundColor = "#eaf2ff";
}

function resetStyle() {
  var quote = document.querySelector("blockquote");
  quote.style.backgroundColor = "";
}

window.onload = function() {
  var p = document.createElement("p");
  var text = document.createTextNode("Page loaded on: " + new Date());
  p.appendChild(text);
  document.querySelector("footer").appendChild(p);
};
