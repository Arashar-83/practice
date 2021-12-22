document.getElementById('button').addEventListener('click', loadP)

function loadP(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);
    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
        if(this.status === 404){
            alert('file does not found')
        }
    }
    xhr.send()
}