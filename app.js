const posts = [
    {title: 'Post One',body: 'this is post one'},
    {title: 'Post Tow', body: 'this is post two'}
]

function createPost(post, callback){
   setTimeout(function(){
       posts.push(post)
       callback()
   }, 3000)
}

function getPosts(){
    setTimeout(function(){
        let output = ''
    posts.forEach(function(post){
        output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output
    }, 2000)
}

createPost({title:'Post Three', body:'this is post three'}, getPosts)



