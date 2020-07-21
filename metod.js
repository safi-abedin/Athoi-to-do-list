// var input = document.getElementById("userInput");
// var enter = document.getElementById("enter");
// var ul = document.querySelector("ul");
// var item = document.getElementsByTagName("li");

// enter.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterPress);

// function inputLength() {
//     return input.value.length;
// }

// function addListAfterClick() {
//     if (inputLength > 0) {
//         createListElement();
//     }
// }

// function createListElement() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = " ";

//     function crossOut() {
//         li.classList.toggle("Done");
//     }
// }
// li.addEventListener("click", crossout);


// function addListAfterPress(event) {
//     if (inputLength > 0 && event.which == 13) {
//         createListElement();
//     }
// }

// function listLength() {
//     return item.length;
// }

// //

// var dBtn = document.createElement("button");
// dBtn.appendChild(document.createTextNode("X"));
// li.appendChild(dBtn);
// dBtn.addEventListener("click", deleteListItem);
// // END ADD DELETE BUTTON


// //ADD CLASS DELETE (DISPLAY: NONE)
// function deleteListItem() {
//     li.classList.add("delete")
// }
// //END ADD CLASS DELETE
// }



var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}