const myLibrary = [];
const addButton = document.getElementById("addButton");
const submitButton = document.getElementById("submit-btn");
const author = document.getElementById("author")
const title = document.getElementById("title")
const pages = document.getElementById("pages")
const read = document.getElementById("read")

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
addBooktoLibrary("B","smith",25,false)
addBooktoLibrary("C","matt",75,false)
addBooktoLibrary("D","yo",25,true)

myLibrary.forEach(Book => console.log(Book));

addButton.addEventListener('click', function() {
    form.style.display = 'flex'; 
    });

function stopDefault(event){
    event.preventDefault();
    addBooktoLibrary(author.value,title.value,pages.value,read.value);
    console.log(myLibrary);
} 

submitButton.addEventListener('click', stopDefault, false);


    


   















 /*this.info = function(){
        return title + "by " + author +", " + pages + " pages " + read_status;
    }
    */