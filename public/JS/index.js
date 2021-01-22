let addBtn = document.getElementById('addBtn');
showNotes();
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    let notesObj = [];
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
});

function inWords(num) {
    var a = ['', 'One', 'Two', 'Three', 'Four', 'five', 'six', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let str = a[num];
    return str;
}

function showNotes() {
    let notes = localStorage.getItem("notes");
    let notesObj = [];
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        let num = inWords(index + 1);
        html += ` <div class="accordion-item">
        <h2 class="accordion-header" id="flush-heading${num}">
          <button class="accordion-button collapsed" style=" background-color:rgb(141, 193, 223); color:black;" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${num}" aria-expanded="false" aria-controls="flush-collapse${num}">
            Note ${index+1}
          </button>
        </h2>
        <div id="flush-collapse${num}" class="accordion-collapse collapse" aria-labelledby="flush-heading${num}" data-bs-parent="#accordionFlushExample" style="">
          <div class="accordion-body">${element}</div>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger dbutton">Delete</button>
        </div>
        
      </div>`;
    });
    let notesElem = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    } else {
        notesElem.innerHTML = `<h4 style="margin-top: 10px; margin-bottom: 20px;">Nothing to show here please add Some Notes</h4>`;
    }
}

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    let notesObj = [];
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}