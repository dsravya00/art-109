

// $(document).ready(function(){
//     $('#btn').click(function(){
//         var text = $(this).text(); 
//         alert(text); 
        
//     }); 
// });


const btn = document.getElementById('theButton');
const myText = document.getElementById('theDiv');

btn.addEventListener('click', function(){
  const myInsertText = 'Hello World !';
myText.innerHTML = myInsertText;

});




// <h1 id="header"></h1>

// <body>
// <p>

// <input type="button" id="theButton" value="Red Click!" onclick="document.getElementById('theDiv').innerHTML('This is new.')">

// </p>

// <h3><div id="theDiv"></div></h3>
