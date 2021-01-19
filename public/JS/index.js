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
        html += ` <div class="my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete</button>
        </div>
        </div>`;
    });
    let notesElem = document.getElementById('notes');
    if (notes.length != 0) {
        notesElem.innerHTML = html;
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