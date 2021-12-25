document.getElementById('button1').addEventListener('click', showBook)
document.getElementById('button2').addEventListener('click', showBooks)

function showBook(e){
    const xhr = new XMLHttpRequest()
    xhr.open('Get', 'book.json', true)
    xhr.onload = function(){
        if (this.status === 200) {
           const book = JSON.parse(this.responseText)
           const output = 
           `
           <ul>
           <li>${book.id}
           <li>${book.name}
           <li>${book.topic}
           </ul>
           `
           document.getElementById('book').innerHTML = output
        }
    }
    xhr.send()
}

function showBooks(e){
    const xhr = new XMLHttpRequest()
    xhr.open('Get', 'books.json', true)
    xhr.onload = function(){
        if (this.status === 200) {
           const books = JSON.parse(this.responseText)

           let output = '';

        books.forEach(function(book){
           output += `
           <ul>
           <li>${book.id}
           <li>${book.name}
           <li>${book.topic}
           </ul>
           `;
           })

           document.getElementById('books').innerHTML = output
        }
    }
    xhr.send()
}