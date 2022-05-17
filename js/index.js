// title body
let show=document.querySelector("#result");
let updatedtitle=document.querySelector("#title");
let comments=document.querySelector("#comments");
let message=document.querySelector("#message");
message.style.display="none";
let blogs=[]
let mode='insert';
let index;

function save(event){
    event.preventDefault();
    console.log(event.target.title.value);
    console.log(event.target.comments.value);
    let blog={
        title:event.target.title.value,
        comments:event.target.comments.value
    }
    if(blog.title==='' || blog.comments===''){
        message.style.display="block";
        message.innerHTML+="Title and Comments is Required";
        return ;
    }
    event.target.reset();
    if(mode=='insert'){
        blogs.push(blog);
        alert("detail saved");
    }else{
        blogs[index].title=blog.title;
        blogs[index].comments=blog.comments;
        mode="insert";
    }
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
                <td>
                <button class="btn btn-info" onclick=edit("${element.title}") ><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn btn-danger" onclick=removeRecord("${element.title}") ><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `
    })
}

shows()



function removeRecord(title){
    blogs=blogs.filter(function(element){
        if(element.title!=title){
            return element;
        }
    })
    shows();
}


function edit(title){
    index=blogs.findIndex(function(element){
        if(element.title==title){
            return element;
        }
    })
    updatedtitle.value=blogs[index].title;
    comments.value=blogs[index].comments;
    mode="edit";

}