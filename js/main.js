siteNameInput=document.getElementById("siteName");
siteUrlInput=document.getElementById("siteUrl");
buttonshow=document.querySelector('.showbtn')

 var sitesContainer=[];
 if (localStorage.getItem('sites')!=null){
     sitesContainer=JSON.parse(localStorage.getItem('sites'));
     displaysite();
 }
 function addsite(){
    var site={
        name:siteNameInput.value,
        url:siteUrlInput.value
    }
    sitesContainer.push(site)
    localStorage.setItem('sites',JSON.stringify(sitesContainer))
  
    console.log(sitesContainer)
    clearform();
    displaysite()

}
function clearform(){
    siteNameInput.value=""
    siteUrlInput.value=""
}
function displaysite(){
    var cartona=``
    for(i=0; i<sitesContainer.length ;i++){
        cartona+=` <tr>
        <td class="text-white">${i}</td>
        <td class="fw-bold  text-white">${sitesContainer[i].name}</td>
        <td><button onclick="visitsite(${i})" class=" btn btn-outline-warning"> <a  class="text-decoration-none text-warning" href="${sitesContainer[i].url}">Visit</a></button></td>
        <td><button onclick="deletesite(${i})" class=" btn btn-outline-danger">Delete</button></td>
      </tr>`

    }
    document.getElementById("tableBody").innerHTML=cartona;
  
}
function deletesite(index){
    sitesContainer.splice(index,1);
    localStorage.setItem('sites',JSON.stringify(sitesContainer));
    displaysite(); 
}

