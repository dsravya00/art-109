
//Clicking this image will make all the images appear
document.querySelector("#image1").addEventListener("click", function(){
   document.querySelector("#image1").style.visibility = "visible"; 
   document.querySelector("#image2").style.visibility = "visible"; 
   document.querySelector("#image3").style.visibility = "visible"; 
   document.querySelector("#image4").style.visibility = "visible"; 
   document.querySelector("#image5").style.visibility = "visible"; 
   document.querySelector("#image6").style.visibility = "visible"; 
   alert("bark bark bark");

})


document.querySelector("#image2").addEventListener("click", function(){
    document.querySelector("#image2").style.visibility = "hidden"; 
 })

 document.querySelector("#image3").addEventListener("click", function(){
    document.querySelector("#image3").style.visibility = "hidden"; 
 })
 
 document.querySelector("#image4").addEventListener("click", function(){
    document.querySelector("#image4").style.visibility = "hidden"; 
 })
 
 document.querySelector("#image5").addEventListener("click", function(){
    document.querySelector("#image5").style.visibility = "hidden"; 
 })
 
 document.querySelector("#image6").addEventListener("click", function(){
    document.querySelector("#image6").style.visibility = "hidden";
 })
 