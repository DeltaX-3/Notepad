const addNote = document.querySelector('.addNote');
const titleR = document.getElementById('title');
const noteR = document.getElementById('note');
const container = document.querySelector(".notes-container");
let notes = [];
let del = "";

addNote.addEventListener("mousedown", () => {
    addNote.setAttribute("style","background: linear-gradient(41deg, rgba(200,0,0,1) 0%, rgba(200,0,72,1) 41%, rgba(182,0,200,1) 100%)");

})

addNote.addEventListener("mouseenter", () => {
    addNote.setAttribute("style","box-shadow: 0px 0px 18px #ffe600a9;");

})

addNote.addEventListener("mouseleave", () => {
    addNote.setAttribute("style","background: linear-gradient(41deg, rgba(255,0,0,1) 0%, rgba(255,0,127,1) 41%, rgba(237,0,255,1) 100%)");
    addNote.setAttribute("style","box-shadow: 0px 0px 0px #000000;");

})


addNote.addEventListener("mouseup", () => {
    addNote.setAttribute("style","background: linear-gradient(41deg, rgba(255,0,0,1) 0%, rgba(255,0,127,1) 41%, rgba(237,0,255,1) 100%)");

    const titleT = titleR.value.trim();
    const noteT = noteR.value.trim();

    if (titleT && noteT) {
        

        const addingNote = {titleT,noteT};
      
        notes.push(addingNote);
    
        console.log(notes);

        noteR.value = '';
        titleR.value = '';

        refreshNotes();
    }
    
    function refreshNotes() {
        
        container.innerHTML= "";
        notes.forEach((note, index) => {
            const notebox = document.createElement("div");
            notebox.className = "note";

            const noteboxtitle = document.createElement("h3");
            noteboxtitle.textContent = note.titleT;

            const noteboxnote = document.createElement("p");
            noteboxnote.textContent = note.noteT;

            const noteboxdelete = document.createElement("button");
            noteboxdelete.className = "delete";
            
            const image = document.createElement("img");
            image.setAttribute("src","./delete_FILL0_wght400_GRAD0_opsz24.png")
            noteboxdelete.appendChild(image);

            noteboxdelete.addEventListener("click", () => {
                    del = prompt("Are you sure you want to delete this note? (y/n)");
                    console.log(del.toUpperCase());
                    if (del.toUpperCase() == "Y") {
                        notes.splice(index, 1);
                        
                    };
                    refreshNotes();
            });

            notebox.appendChild(noteboxtitle);
            notebox.appendChild(noteboxnote);
            notebox.appendChild(noteboxdelete);

            container.appendChild(notebox);
        });
    }
    
    
});

