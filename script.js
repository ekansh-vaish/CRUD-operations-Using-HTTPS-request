let title1 = document.querySelector(".title1");
let title2 = document.querySelector(".title2");
let title3 = document.querySelector(".title3");
let title4 = document.querySelector(".title4");


let para1 = document.querySelector(".body1");
let para2 = document.querySelector(".body2");
let para3 = document.querySelector(".body3");
let para4 = document.querySelector(".body4");


let Getbtn = document.querySelector(".Getbtn1");
let Postbtn = document.querySelector(".Postbtn1");
let Editbtn = document.querySelector(".Editbtn1");

let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");

let postbtn1 = document.querySelector(".Postbtn1");
let form1 = document.querySelector(".form1");
let CreateBox = document.querySelector(".box4");





let url = "https://jsonplaceholder.typicode.com/posts";

async function apiResponse()
{
try{
const response = await fetch(url);
const posts = await response.json();
console.log(response.headers);

console.log(posts)
title1.innerHTML = posts[0].title;
title2.innerHTML = posts[1].title;
title3.innerHTML = posts[2].title;

para1.innerHTML = posts[0].body;
para2.innerHTML = posts[1].body;
para3.innerHTML = posts[2].body;
return posts;

}catch(err) 
{
console.log(err);
}
}

async function CreatePost(newPost) {
try {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(newPost)
    });
    console.log(response.headers);
    
    console.log(response.status);
    
    const post = await response.json();
    console.log(post);
    return post;
} catch (err) {
    console.log(err);
}
}

async function updatePost(updatePost, id) {
try {
    const response = await fetch(`${url}/${id}`, {
        method: 'PUT',          
        headers: {
            'Content-Type': 'application/json'
        },  

        body: JSON.stringify(updatePost)
    });

    const post = await response.json();
    console.log(post);
    return post;


} catch (err) {
    console.log(err);
}
}


async function deletePost(id) {
try {   
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE'    
    });
    if (response.status != 200) {   

       console.log(`Something went wrong, Status Code: ${response.status}`);
       return;
    }
    const post = await response.json();

    console.log(post);
    return post;
} catch (err) {
    console.log(err);
}   
}


postbtn1.addEventListener("click", () => {
form1.style.display = "block";
});



form1.addEventListener("submit", async (e) => {
e.preventDefault(); 
let title = document.querySelector(".titleForm").value;
let content = document.querySelector(".content1").value;
let newPost = {
    title: title,
    body: content
};
console.log(newPost);
let post = await CreatePost(newPost);
console.log(post);
CreateBox.style.display = "block";
title4.innerHTML = post.title;
para4.innerHTML = post.body;
form1.style.display = "none";
box4.style.display = "block";
alert("new post is created")

});


document.querySelector(".updatebtn1").addEventListener("click", () => {
let UpdateForm = document.querySelector(".updateForm1");
UpdateForm.style.display = "block";
 document.querySelector(".Updatetitle").value = title1.innerHTML;
  document.querySelector(".UpdateContent").value = para1.innerHTML;


});

document.querySelector(".updateForm1").addEventListener("submit", async(e) => {
e.preventDefault();
let title = document.querySelector(".Updatetitle").value;
let content = document.querySelector(".UpdateContent").value;

let newPost = {
    title: title,
    body: content
};

let post = await updatePost(newPost,1);
console.log(post);
    title1.innerHTML = post.title;
    para1.innerHTML = post.body;
    document.querySelector(".updateForm1").style.display = "none";

});



document.querySelector(".updatebtn2").addEventListener("click", () => {
let UpdateForm = document.querySelector(".updateForm2");
UpdateForm.style.display = "block";

 document.querySelector(".Updatetitle2").value = title2.innerHTML;
 document.querySelector(".UpdateContent2").value = para2.innerHTML;

});

document.querySelector(".updateForm2").addEventListener("submit",async (e) => {
e.preventDefault();
let title = document.querySelector(".Updatetitle2").value;
let content = document.querySelector(".UpdateContent2").value;
let newPost = {
    title: title,
    body: content
};

let post = await updatePost(newPost,2);
console.log(post);
    title2.innerHTML = post.title;
    para2.innerHTML = post.body;
    document.querySelector(".updateForm2").style.display = "none";

});




document.querySelector(".updatebtn3").addEventListener("click", () => {
let UpdateForm = document.querySelector(".updateForm3");
UpdateForm.style.display = "block";

 document.querySelector(".Updatetitle3").value = title3.innerHTML;
 document.querySelector(".UpdateContent3").value = para3.innerHTML;

});

document.querySelector(".updateForm3").addEventListener("submit",async (e) => {
e.preventDefault();
let title = document.querySelector(".Updatetitle3").value;
let content = document.querySelector(".UpdateContent3").value;
let newPost = {
    title: title,
    body: content
};
let post = await updatePost(newPost,3);
console.log(post);
    title3.innerHTML = post.title;
    para3.innerHTML = post.body;
    document.querySelector(".updateForm3 ").style.display = "none";

});




document.querySelector(".updatebtn4").addEventListener("click", () => {
let UpdateForm = document.querySelector(".updateForm4");
UpdateForm.style.display = "block";

 document.querySelector(".Updatetitle4").value = title4.innerHTML;
document.querySelector(".UpdateContent4").value = para4.innerHTML;

});

document.querySelector(".updateForm4").addEventListener("submit",async (e) => {
e.preventDefault();
let title = document.querySelector(".Updatetitle4").value;
let content = document.querySelector(".UpdateContent4").value;
let newPost = {
    title: title,
    body: content
};

 
    title4.innerHTML = newPost.title;
    para4.innerHTML = newPost.body;
    document.querySelector(".updateForm4").style.display = "none";

});




async function DeleteButton1() {
 
    alert("Are you sure you want to delete this post");
    let deleteB = await deletePost(1)
    console.log(deleteB);

    box1.style.display = "none";
   document.querySelector(".updateForm1").style.display = "none";

}   


async function DeleteButton2() {
    
    alert("Are you sure you want to delete this post");
 let deleteB = await deletePost(2)
    console.log(deleteB);
    box2.style.display = "none";
    document.querySelector(".updateForm2").style.display = "none";

}   

async function DeleteButton3() {
    
    alert("Are you sure you want to delete this post");
 let deleteB = await deletePost(3)
    console.log(deleteB);
    box3.style.display = "none";
    document.querySelector(".updateForm3").style.display = "none";
  
}   

async function DeleteButton4() {
    
    alert("Are you sure you want to delete this post");
 let deleteB = await deletePost(101)
    console.log(deleteB);
    box4.style.display = "none";
        document.querySelector(".updateForm4").style.display = "none";

}   



apiResponse();




