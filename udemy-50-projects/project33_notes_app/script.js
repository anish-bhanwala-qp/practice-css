const addBtn = document.querySelector(".js-add-btn");
const container = document.querySelector(".js-container");

let noteId = 1;

function retrieveSavedNotes() {
  const notesStr = localStorage.getItem("notes");
  if (notesStr) {
    return JSON.parse(notesStr);
  }

  return [];
}

function saveAllNotes() {
  const noteTexareas = document.querySelectorAll(".js-note");
  notes = [];
  noteTexareas.forEach((texarea) => {
    notes.push(texarea.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}

function saveNote(event, noteId) {
  const container = document.querySelector(`#${noteId}`);
  const textarea = container.querySelector(".note-textarea");
  const markdownDisplay = container.querySelector(".note-markdown");
  markdownDisplay.innerHTML = marked(textarea.value);

  // Save all notes
  saveAllNotes();
}

function displaySavedNotes() {
  notes.forEach((note) => {
    addNote(note);
  });
}

function addNote(content = "", editable = false) {
  const div = document.createElement("div");
  const id = `id${noteId++}`;
  div.id = id;
  div.classList.add("note");
  if (editable) {
    div.classList.add("edit");
  } else {
    div.classList.add("markdown");
  }

  div.innerHTML = `
    <header class="note-header">
        <button class="note-btn" onclick="toggleEditNote('${id}')">
        <i class="fa fa-edit"></i>
        </button>
        <button class="note-btn" onclick="deleteNote('${id}')">
        <i class="fa fa-trash"></i>
        </button>
    </header>   
    <textarea onchange="saveNote(event, '${id}')" class="note-content note-textarea js-note">${content}</textarea>
    <div class="note-content note-markdown">${marked(content)}</div>
    `;

  container.appendChild(div);
}

function deleteNote(noteId) {
  const container = document.querySelector(`#${noteId}`);
  container.remove();
  saveAllNotes();
}

function toggleEditNote(noteId) {
  const container = document.querySelector(`#${noteId}`);
  container.classList.toggle("edit");
  container.classList.toggle("markdown");

  if (container.classList.contains("edit")) {
    container.querySelector(".note-textarea").focus();
  }
}

let notes = retrieveSavedNotes();
displaySavedNotes();

addBtn.addEventListener("click", () => {
  addNote("", true);
});
