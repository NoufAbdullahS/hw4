function validateForm() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");

  if (name.value === "" || email.value === "") {
    alert("Please fill out all required fields.");
    return false;
  } else {
    return true;
  }
}

function toggleDescription(id) {
  var description = document.getElementById(id);

  if (description.style.display === "none") {
    description.style.display = "block";
  } else {
    description.style.display = "none";
  }
}

function setupQuoteEvents() {
  var quote = document.getElementById("quote");

  if (quote) {
    quote.addEventListener("mouseover", function() {
      quote.style.backgroundColor = "red";
    });

    quote.addEventListener("mouseout", function() {
      quote.style.backgroundColor = "";
    });
  }
}

function addLoadMessage() {
  var footer = document.querySelector("footer");
  var paragraph = document.createElement("p");
  var date = new Date();
  var text = document.createTextNode("Page loaded on: " + date);

  paragraph.appendChild(text);
  footer.appendChild(paragraph);
}

window.onload = function() {
  setupQuoteEvents();
  addLoadMessage();
};
