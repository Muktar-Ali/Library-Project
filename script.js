const myLibrary = [];
const addButton = document.getElementById("addButton");
const submitButton = document.getElementById("submit-btn");
const author = document.getElementById("author")
const title = document.getElementById("title")
const pages = document.getElementById("pages")
const read = document.getElementById("read")
const container = document.querySelector(".card-container");
const content = document.createElement("div");
const deleteButton = document.createElement("button");
const seenButton = document.createElement("button");

seenButton.textContent = "Have Read";
deleteButton.textContent = "Delete";
deleteButton.classList.add("delete_button");
deleteButton.style.marginTop = "10px";


const form = document.getElementById("myForm")
form.style.display="none";

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
   
}
function addBooktoLibrary(title,author,pages,read){
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);

}
addBooktoLibrary("A","joe",25,true)




myLibrary.forEach(Book => {
    const container = document.querySelector(".card-container");
    const content = document.createElement("div");
    content.classList.add("card")
    content.textContent = "Title:" + Book.title + "\n" + " Author: " + Book.author + "\n" + Book.pages + " pages "+  "\n" +  "Read: " + Book.read + "\n" ;
    content.style.whiteSpace = "pre-line";
    const deleteButton = document.createElement("button");
    const seenButton = document.createElement("button");
    seenButton.textContent = "Have Read";
    deleteButton.textContent = "Delete";
    content.appendChild(deleteButton);
    content.appendChild(seenButton);
    container.appendChild(content);
    deleteButton.addEventListener("click", () => {
    content.remove();
    });
    seenButton.addEventListener("click", () => {
    Book.read = "True";
    content.textContent = "Title:" + Book.title + "\n" + " Author: " + Book.author + "\n" + Book.pages + " pages "+  "\n" +  "Read: " + Book.read + "\n" ;

  });


});

addButton.addEventListener('click', function() {
    form.style.display = 'flex'; 
    });

function stopDefault(event){
    event.preventDefault();
    addBooktoLibrary(author.value,title.value,pages.value,read.value);
    addCard();

    
} 

submitButton.addEventListener('click', stopDefault, false);

function addCard(){
    const container = document.querySelector(".card-container");
    const content = document.createElement("div");
    content.classList.add("card")
    content.textContent = "Title:" + title.value + "\n" + " Author: " + author.value+ "\n" + pages.value + " pages "+  "\n" +  "Read: " + read.value + "\n";
    content.style.whiteSpace = "pre-line";
    const deleteButton = document.createElement("button");
    const seenButton = document.createElement("button");
    seenButton.textContent = "Have Read";
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete_button");
    content.appendChild(deleteButton);
    content.appendChild(seenButton);
    container.appendChild(content);
    deleteButton.addEventListener("click", () => {
    content.remove();
      });
    seenButton.addEventListener("click", () => {
    read.value = "True";
    content.textContent = "Title:" + title.value + "\n" + " Author: " + author.value+ "\n" + pages.value + " pages "+  "\n" +  "Read: " + read.value + "\n";


  });
}







   












