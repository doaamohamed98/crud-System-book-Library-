//regular expression
var regExName = /^[a-zA-Z_ ]*$/;
 var regExEmail =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

 //page one
 var PageOne = document.getElementsByClassName("pageOne")[0];
 var button1 = document.getElementsByClassName("button1")[0]; 
 var inputNumberBook = document.getElementById("inputnumbook");
 var ErrorMassagenumBook = document.getElementById("ErrorMassagenumBook"); 
 var table = document.getElementsByClassName("hidden")[0]

 // Page Two 
var PageTwo = document.getElementsByClassName("pageTwo")[0];
var BtnTwo = document.getElementsByClassName("BtnTwo")[0]; 

//Error Massages 
var massageNameBook = document.getElementById("Error Massage name");
var massagePrice = document.getElementById("Error Massage Price");
var massageAuthor = document.getElementById("Error Massage Author");
var massageEmail = document.getElementById("Error Massage email");

console.log(massageNameBook,massagePrice,massageAuthor,massageEmail)

//Inputs 
var inputBookName = document.getElementById("Bookname")
var inputPrice= document.getElementById("price")
var inputAuthorName = document.getElementById("AuthorName")
var inputAuthorEmail = document.getElementById("AuthorE-mail")
console.log(inputBookName,inputPrice,inputAuthorName,inputAuthorEmail);

var addBooks = [] // storag object data

var tbody = document.getElementById("tbody")

// creat function constructor
function AddProudctbook(Name,Price,AuthorName,Email){
    this.bookName = Name;
    this.priceBook = Price ;
    this.AuthorName = AuthorName ;
    this.AuthorEmail= Email ;
}
//=======================================================================================


//validtion input number book 
button1.addEventListener("click",function(e){
if(isNaN(inputNumberBook.value)){
    ErrorMassagenumBook.innerHTML="Do Not Enter characters" 
} else if (inputNumberBook.value===""){
    ErrorMassagenumBook.innerHTML=" Place Enter Number of Books"
} else if (inputNumberBook.value<=0){
    ErrorMassagenumBook.innerHTML=" Do Not Enter zero "

}else{
     ErrorMassagenumBook.innerText=" ";
     PageOne.classList.add("hidden");
    PageTwo.classList.toggle("hidden");
    }

});

//function AddProudct when click button Add
BtnTwo.addEventListener("click",function(){
        vaildition();  
        display();
        clear();
})

// functoin validtion inputs 
 function vaildition(){
  
    var Nambook= false;
    var priBook= false;
    var AuName= false;
    var AuEmail = false;
 //validtion input Name Book
//  function validtionNameBook(){
    if (inputBookName.value===""|| inputBookName.value<=0){
        inputBookName.focus()
        massageNameBook.innerText="this field is required";
         } else if (isFinite(inputBookName.value)){
            inputBookName.focus()
            massageNameBook.innerText="Place Enter characters";
         }
         else{
          massageNameBook.innerText=""
          Nambook= true;
         } 
        //  validtionNameBook()

 //validtion input price Book
    //  function validtionpriceBook(){
        if (inputPrice.value==="" ||inputBookName.value<=0){
            massagePrice.innerText="this field is required";
            inputPrice.focus();
          }else if( isNaN(inputPrice.value)){
            massagePrice.innerText="Place Enter price Number";
            inputPrice.focus();
          }else{
             massagePrice.innerText="";
             priBook= true;
          
          }

    //  }validtionpriceBook()
  
      
 //validtion input  Author Name
//  function validtionAuthorName(){
    if (inputAuthorName.value==="" || inputAuthorName.value<=0){
        massageAuthor.innerText="this field is required";
        inputAuthorName.focus()
      } else if (!(regExName.test(inputAuthorName.value))){
        massageAuthor.innerText = "Place Enter characters Only";
        inputAuthorName.focus()
    
      }
      else{
        massageAuthor.innerText="";
        AuName= true;
      }
//  }validtionAuthorName()
   

//validtion input Author E-mail
// function validtionAuthorEmail(){
    if(inputAuthorEmail.value==="" || inputAuthorEmail.value<=0){
        massageEmail.innerText="this field is required";
    
        }else if(!(regExEmail.test(inputAuthorEmail.value))){
            massageEmail.innerText="Error Email";
        }else{
            massageEmail.innerText="";
            AuEmail=true
        }

// }validtionAuthorEmail()

if((Nambook===true&&priBook===true&&AuName===true&&AuEmail===true)){
    var objectproudct = new AddProudctbook(inputBookName.value,inputPrice.value,inputAuthorName.value,inputAuthorEmail.value)
  addBooks.push(objectproudct)
   console.log(addBooks);
   }




  
}


// functoin display data
function display(){
    var table = "" // to concat
        for(var i = 0 ; i<addBooks.length ; i++){
            table += ` 
            <tr>
            <td>${i+1}</td>
            <td>${addBooks[i].bookName}</td>
            <td>${addBooks[i].priceBook}</td>
            <td>${addBooks[i].AuthorName}</td>
            <td>${addBooks[i].AuthorEmail}</td>
            <td>
                <button class="btn btn-danger" onclick="delet(${i})">Delete</button>
            </td>
    
            <td>
                <button class="btn btn-warning" onclick="UpDate(${i})">UpDate</button>
    
            </td>
            <td>
                <button class="btn btn-primary" onclick="UpDate(${i})">Search</button>
    
            </td>
            </tr>
            `
         
        }
    
        tbody .innerHTML = table  


}

// functoin Clear Data
function clear(){
    inputBookName.value=""
    inputPrice.value=""
    inputAuthorName.value=""
    inputAuthorEmail.value=""
}

// functoin display data
function delet(Index){
    addBooks.splice(Index,1);
    display()
}
delet()

function UpDate(Index){
    inputBookName.value = addBooks[Index].bookName;
    inputPrice.value = addBooks[Index].priceBook;
    inputAuthorName.value = addBooks[Index].AuthorName;
    inputAuthorEmail.value = addBooks[Index].AuthorEmail;
    BtnTwo.innerHTML = "Up Date" ;
}
UpDate()
