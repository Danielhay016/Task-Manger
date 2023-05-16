function newElement() {
    // Create a new list item (li element)
    var li = document.createElement("li");
  
    // Make the list item draggable
    li.draggable = true;
  
    // Get the value from the taskInput element
    var inputValue = document.getElementById("taskInput").value;
  
    // Create a text node with the input value
    var t = document.createTextNode(inputValue);
  
    // Append the text node to the list item
    li.appendChild(t);
  
    // Check if the input value is empty
    if (inputValue === '') {
      alert("You must write something!");
    }
    // Check if the input value exceeds 30 characters
    else if (inputValue.length > 30) {
      alert("Pay attention: max 30 characters!");
    } else {
      // Append the list item to the taskList element
      document.getElementById("taskList").appendChild(li);
    }
  
    // Clear the taskInput value
    document.getElementById("taskInput").value = "";
  
    // Create a close button (span element)
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7"); // Unicode for "x" character
    span.className = "close";
    span.appendChild(txt);
  
    // Append the close button to the list item
    li.appendChild(span);
  
    // Create an up button (span element)
    var up = document.createElement("SPAN");
    var upTxt = document.createTextNode("\u25B2"); // Unicode for "up arrow" character
    up.className = "up";
    up.appendChild(upTxt);
  
    // Append the up button to the list item
    li.appendChild(up);
  
    // Create a down button (span element)
    var down = document.createElement("SPAN");
    var downTxt = document.createTextNode("\u25BC"); // Unicode for "down arrow" character
    down.className = "down";
    down.appendChild(downTxt);
  
    // Append the down button to the list item
    li.appendChild(down);
  
    // Add click event handlers to the close, up and down buttons
    var close = document.getElementsByClassName("close");
    var up = document.getElementsByClassName("up");
    var down = document.getElementsByClassName("down");
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
      up[i].onclick = function() {
        var li = this.parentElement;
        var prevLi = li.previousElementSibling;
        if (prevLi) {
          li.parentNode.insertBefore(li, prevLi);
        }
      }
      down[i].onclick = function() {
        var li = this.parentElement;
        var nextLi = li.nextElementSibling;
        if (nextLi) {
          li.parentNode.insertBefore(nextLi, li);
        }
      }
    }
  }
  