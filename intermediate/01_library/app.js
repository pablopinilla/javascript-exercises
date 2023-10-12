//Empty Books Array
const myLibrary = []

//Book Constructor
function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return(`${title} by ${author} is ${pages} pages long.`)
    }
}

//Book prototype
Book.prototype.readToggle = function () {
    this.read = !this.read    
}

const hobbit = new Book ("The Hobbit", "Tolkien", 256)

//Add to library

function addToLibrary() {
    const title = prompt("Title")
    const author = prompt("Author")
    const pages = prompt("Pages")
    myLibrary.push(new Book (title, author, pages))

}




//Display
function display() {
    const cardContainer = document.querySelector(".cardContainer")
    cardContainer.replaceChildren()
    let l = 0;

    myLibrary.forEach(book => {

        let card = document.createElement("div")
        card.classList.add("bookCard")
        cardContainer.appendChild(card)
        let title = document.createElement("div")
        title.textContent = `"${book.title}"`
        title.style.fontWeight = "bold"
        card.appendChild(title)
        let author = document.createElement("div")
        author.textContent = `${book.author}`
        card.appendChild(author)
        let pages = document.createElement("div")
        card.appendChild(pages)
        pages.textContent = `${book.pages} pages`
        let read = document.createElement("button")
        read.textContent = "Read"
        read.classList.add("cardBtn")
        card.appendChild(read)
        read.addEventListener("click", function(){
            book.readToggle()
            if (!book.read) {
                read.textContent = "Read"
            } else {
                read.textContent = "Not read"
            }
        })
        const deleted = document.createElement("button")
        deleted.textContent = "Remove"
        deleted.classList.add("cardBtn")
        deleted.classList.add("cardClose")
        deleted.dataset.identifier = l;
        card.appendChild(deleted)

        //remove
        deleted.onclick = function () {
            myLibrary.splice(deleted.dataset.identifier, 1)
            console.log("From downtown")
            console.log(myLibrary)
            display()
        }
        l++
        
    });
}
display()

//modal
const newBookBtn = document.querySelector(".newBookBtn")
const popup = document.querySelector("[popup]")
const titleInput = document.querySelector("#title")
const authorInput = document.querySelector("#author")
const pagesInput = document.querySelector("#pages")
newBookBtn.addEventListener("click", () => {
    popup.showModal()
    titleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""
})


//Add
const add = document.querySelector(".add")
add.addEventListener("click",  (event) => {
        event.preventDefault()
        const title = document.querySelector("#title")
        const author = document.querySelector("#author")
        const pages = document.querySelector("#pages")
        popup.close()
        myLibrary.push(new Book (title.value, author.value, pages.value))
        display()
})

