var bookMarkName=document.getElementById('siteName');
var webSiteUrl=document.getElementById('siteUrl');

var bookContainer=[]
if(localStorage.getItem('books')!=null){
    bookContainer=JSON.parse(localStorage.getItem('books'));
    display(bookContainer);
}
function add(){
var bookObj={
    name:bookMarkName.value,
    url:webSiteUrl.value
}
bookContainer.push(bookObj);
localStorage.setItem('books',JSON.stringify(bookContainer));
display(bookContainer);
clear();
}


function display(arr){
    var cartona=""
    for(var i=0;i<bookContainer.length;i++){
        cartona+=`
        <tr class="d-flex justify-content-around">
        <td><h4 class="mt-1 w-25">${bookContainer[i].name}</h4></td>
        <td><a class="btn btn-primary w-40 text-center" href="http://${bookContainer[i].url}" target="_blank">visit</a></td>
        <td><button class="btn btn-danger" onclick="deletebook(${i})">Delete</button></td>
        </tr>`
    }
    document.getElementById('demo').innerHTML=(cartona)
}


function deletebook(index){
    bookContainer.splice(index,1);
    localStorage.setItem('books',JSON.stringify(bookContainer));
    display(bookContainer);
}
function clear(){
    var bookMarkName=document.getElementById('siteName').value='';
    var webSiteUrl=document.getElementById('siteUrl').value='';
    }