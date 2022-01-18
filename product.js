//let http=new XMLHttpRequest();
//http.open('get','Mobile-details.json',true);
//http.send();
//http.onload=function(){
  
fetch("https://sangeetha.npkn.net/tabledata/").then
( res=>{
    res.json().then(
        data=>{
          const products=data.data;  
        
        
        let output="";
        for(let item of products){
          output +=`
           
           <li> <a href="#"><img src="images.png" alt="${item.image}"></img>
           <p class="name">Name:${item.name}</p>
            <p class="age">Age:${item.age}</p>
            <p class="department"><span>Department:${item.department}</span></p>
            <p class="skills">Skills:${item.skills}</p></a></li>
           `;
       }
       document.getElementById('myUL').innerHTML=output;
     
      
     
}
)})
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}