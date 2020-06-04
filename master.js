/*let coco = document.querySelector(".child");

let imges = [  "1.jpg,2.jpg,3.jpg,4.jpg,5.jpg,6.jpg,7.jpg,"];

setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imges.length ) ;

coco.style.backgroundImage = 'url("1.jpg/'  + imges[randomNumber] + '" )' ;

coco.style.transition = '0.5s all' ;

} , 2500);*/
/*
var myElement = document.getElementById('myImg'),
myImgs =
[
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg'   
];
  function changeImage(myElement , myImgs) {
    'use strict';
    setInterval (function()  {
       var myRandomNum = math.floor(math.random() * myImgs.length);
        console.log(myRandomNum);
        myElement.src = myImgs[myRandomNum];
    }, 1000);
}
changimage(myElement, myImgs);
*/
var start=1;
function set_time()
{
setInterval(image_show,4000);    
}
function image_show()
{
var myImg;
if(start==1)
{
myImg='images/1.jpg'
}
else if (start==2)
{
myImg='images/2.jpg'
}
else if (start==3)
{
myImg='images/3.jpg'
}
else if (start==4)
{
myImg='images/4.jpg'
}
/*else if (start==5)
{
myImg='images/5.jpg'
}
else if (start==6)
{
myImg='images/6.jpg'
}
else if (start==7)
{
myImg='images/7.jpg'
}*/
else
{
start=1;
}
document.getElementById("data").src=""+myImg;
start++;

}


/*
const name = document.getElementById('name')
const name = document.getElementById('passowrd')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
form.addEventListener('submit',(e) =>
{
  last messages =[]
  if (testname.value === '' || name.value == null)
{
messages.push('Name is reuired')    
}
  
  if (passowrd.length <=7 || passowrd.length >=9)
{
messages.push('passowrd must be equal 8 sharacters')    
}
  
  if (passowrd.value === 'passowrd')
{
   messages.push('passowrd cannot be passowrd')  
}
  
  
  if (messages.length > 0)
{
    e.preventdefault()
    errorElement.innertext = messages.join(',')
}
})
*/
/*
function chpass(str)
{

     var r = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_,-,#,&,*]).{8}$/;
     return r.test(str);
}



 function valid(form)
 {

     if (form.first-name.value == "" || form.last-name.value == "")
{
         alert("Please type your First and Last name");
         form.first-name.focus();
         return false;
}

     r = /^\w+$/;

     if (!r.test(form.first-name.value))
{
         alert("First name must contain letters & numbers & underscores only");
         form.first-name.focus();
         return false;
}

     if (form.password.value != "" && form.password.value == form.password.value)
{
         if (!chpass(form.password.value))
{
             alert("password must consist of 8 characters including capital and small case and digits only");
             form.password.focus();
             return false;
}
}


     else
     {
         alert("Error: Please check your password..!!");
         form.password.focus();
         return false;
     }
     return alert("welcome to our page");
 }
*/

 function valid() { 
      var res; 
      var str = 
        document.getElementById("password").value;

      if (str.match(/[a-z]/g) && str.match( 
          /[A-Z]/g) && str.match( 
          /[0-9]/g) && str.match( 
          /[^a-zA-Z\d]/g) && str.length >= 8) 
        return "TRUE" ; 
      else
     {
         alert("Error: Please check your password..!!");
         //form.password.focus();
         return false;
     }
      document.getElementById("password").value = res; 

} 
/*
 function valid() { 
      var res; 
      var str = 
        document.getElementById("passowrd").value; 
      if (str.match(/[a-z]/g) && str.match( 
          /[A-Z]/g) && str.match( 
          /[0-9]/g) && str.match( 
          /[^a-zA-Z\d]/g) && str.length >= 8) 
         return alert("welcome to our page");
      else 
         res = "FALSE"; 
      document.getElementById("passowrd").value = res; 

}

*/





























