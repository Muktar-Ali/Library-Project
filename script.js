const myLibrary = [];

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
addBooktoLibrary("E","dude",50,false)

myLibrary.forEach(Book => console.log(Book));














 /*this.info = function(){
        return title + "by " + author +", " + pages + " pages " + read_status;
    }
    */