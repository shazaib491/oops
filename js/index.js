// title body
let show=document.querySelector("#result");
let updatedtitle=document.querySelector("#title");
let comments=document.querySelector("#comments");
let message=document.querySelector("#message");
message.style.display="none";
let blogs=[]
let mode='insert';
let index;

const  save=(event)=>{
    event.preventDefault();
    let title=event.target.title.value;
    let comments=event.target.comments.value;
    let blog={title, comments}
    
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


const shows=()=>{
    if(blogs.length===0){
        show.innerHTML=`<tr>
            <td colspan=4>no data found</td>
        </tr>`
    }
    show.innerHTML="";
    blogs.forEach((element,index,staticCopy)=>{
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



const removeRecord=(title)=>{
    blogs=blogs.filter((element)=>element.title!=title)
    shows();
}


const  edit=(title)=>{
    index=blogs.findIndex((element)=>element.title==title)
    updatedtitle.value=blogs[index].title;
    comments.value=blogs[index].comments;
    mode="edit";

}