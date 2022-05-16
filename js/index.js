// title body
let show=document.querySelector("#result");

let blogs=[]

function save(event){
    event.preventDefault();
    console.log(event.target.title.value);
    console.log(event.target.comments.value);
    let blog={
        title:event.target.title.value,
        comments:event.target.comments.value
    }
    if(blog.title==='' || blog.comments===''){
        alert("title and comments is required");
        return ;
    }
    event.target.reset();
    blogs.push(blog);
    alert("detail saved");
    shows();
}


function shows(){
    if(blogs.length===0){
        show.innerHTML=`<tr>
            <td colspan=4>no data found</td>
        </tr>`
    }
    show.innerHTML="";
    blogs.forEach(function(element,index,staticCopy){
        show.innerHTML+=`
            <tr>
                <td>${index+1}</td>
                <td>${element.title}</td>
                <td>${element.comments}</td>
                <td>edit/delete</td>
            </tr>
        `
    })
}

shows()
