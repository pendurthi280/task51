 

 function enterdetails() 
 {
  document.getElementById('iframediv').style.display = 'block';
  document.getElementById('details').style.display = 'none';
 }


function addDetails()
{
  //var dataenter=retiveData();
  //var  setData=readdata( dataenter);
  //insert(setData);
  //storeData() ;

  var username = document.getElementById("Name");
   var useremail = document.getElementById("Email");
   var mailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
   var  phone = document.getElementById("Phone");
   var phonematch=/^[91][0-9]{11}$/;
   var landline=document.getElementById("Landline");
   var website=document.getElementById("WebSite");
   var address=document.getElementById("Address");

   if(username.value=="")
    {
      alert("enter the name");
    }
   if(useremail .value=="")
    {
      alert("enter the emailid");
    }
   else 
   {
     if( useremail.value.match(mailformat))
       {
         alert("gmail match");
       }
       else
       {
        alert("gmail notmatch");
       } 

   }

   if(phone.value=="")
   {
    alert("enter the phone number");
   }
   else
   {
     if( phone.value.match(phonematch))
      {
        alert("phonenumber match");
      }
      else
      {
         alert("phonenumber notmatch enter '91' at starting enter 10 numbers of phone number  ");
      } 
   }
    
   if(website.value=="")
   {
     alert("enter the websit");
   }
   if(address.value=="")
   {
     alert("enter the address");
   }
  if(username.value!=""  && phone.value!="" && website.value!=""  && address.value!="" &&  useremail.value!="" &&  useremail.value.match(mailformat) && phone.value.match(phonematch))
  {

   let newName = document.getElementById('Name').value;
    let newEmail = document.getElementById('Email').value;
    let newPhone = document.getElementById('Phone').value;
    let newLandline = document.getElementById('Landline').value;
    let newWebsite = document.getElementById('WebSite').value;
    let newAddress = document.getElementById('Address').value;
    
    const storedData = JSON.parse(localStorage.getItem('userData')) || [];
    storedData.push({newName,newEmail, newPhone,newLandline, newWebsite, newAddress  });
    localStorage.setItem('userData', JSON.stringify(storedData));

     displayUserData() ;
    
  }
}



/*function retiveData()
{
  let newName = document.getElementById('Name').value;
  let newEmail = document.getElementById('Email').value;
  let newPhone = document.getElementById('Phone').value;
  let newLandline = document.getElementById('Landline').value;
  let newWebsite = document.getElementById('WebSite').value;
  let newAddress = document.getElementById('Address').value;
  var array1=[newName,newEmail,newPhone,newLandline,newWebsite,newAddress];
  return array1;

}

function readdata( dataenter)
{
  var rname=localStorage.setItem("name",dataenter[0]);
    var remail=localStorage.setItem("email",dataenter[1]);
    var rphone=localStorage.setItem("phone",dataenter[2]);
    var rlandline=localStorage.setItem("landline",dataenter[3]);
    var rwedsite=localStorage.setItem("wedsite",dataenter[4]);
    var raddress=localStorage.setItem("address",dataenter[5]);
    var  array2=[rname,remail,rphone,rlandline,rwedsite,raddress];
    
    return array2;
}

function   insert(readdata1)
{ 
  var myDiv = document.createElement("div");
  myDiv.style.width = "200px";
  myDiv.style.height = "150px";
  myDiv.style.border= "1px solid black";
  myDiv.style.padding = "25px";
  //myDiv.style.margin= "25px";
  var heading = document.createElement("h1");
   heading.textContent = localStorage.getItem("name",readdata1[0]);

   var paragraph1 = document.createElement("p");
   paragraph1.textContent =localStorage.getItem("email",readdata1[1]);

   var paragraph2 = document.createElement("p");
   paragraph2.textContent = localStorage.getItem("phone",readdata1[2]);

   var anchore = document.createElement("a");
   myDiv.appendChild(anchore);
   myDiv.appendChild(heading);
   myDiv.appendChild(paragraph1);
   myDiv.appendChild(paragraph2);
   document.body.appendChild(myDiv);
   document.getElementById('formData').reset();
   document.getElementById('iframediv').style.display = 'none';
}*/
 
/*function storeData() {
  
  let newName = document.getElementById('Name').value;
  let newEmail = document.getElementById('Email').value;
  let newPhone = document.getElementById('Phone').value;
  let newLandline = document.getElementById('Landline').value;
  let newWebsite = document.getElementById('WebSite').value;
  let newAddress = document.getElementById('Address').value;
  
  const storedData = JSON.parse(localStorage.getItem('userData')) || [];
  storedData.push({newName,newEmail, newPhone,newLandline, newWebsite, newAddress  });
  localStorage.setItem('userData', JSON.stringify(storedData));
 document.getElementById('formData').reset();


 displayUserData();
}

function displayUserData() {
  
  const storedData = JSON.parse(localStorage.getItem('userData'));
  if (storedData && storedData.length > 0)
    {
      storedData.forEach(user => 
        {
          var myDiv = document.createElement("div");
          myDiv.style.width = "200px";
          myDiv.style.height = "150px";
          myDiv.style.border= "1px solid black";
          myDiv.style.padding = "25px";
          //myDiv.style.margin= "25px";
          var heading = document.createElement("h1");
           heading.textContent = user. newName ;

           var paragraph1 = document.createElement("p");
           paragraph1.textContent =user.newEmail ;

           var paragraph2 = document.createElement("p");
           paragraph2.textContent =user.newPhone ;

           myDiv.appendChild(heading);
           myDiv.appendChild(paragraph1);
           myDiv.appendChild(paragraph2);
           document.body.appendChild(myDiv);
      
    });
  } 
}*/





function  displayUserData() 
{
     
     
    var ul= document.getElementById("unorder");
    var name= document.getElementById("Name");
    var email= document.getElementById("Email");
    var phone= document.getElementById("Phone");
    var li=document.createElement("li");

   

    var heading = document.createElement("h1");

    heading.style.padding = "0px";
    heading.style.margin= "0px";
    heading.setAttribute('nameli',name.value);
    heading.appendChild(document.createTextNode(name.value));
    
    var paragraph1= document.createElement("p");
    paragraph1.style.padding = "0px";
    paragraph1.style.margin= "0px";
    paragraph1.setAttribute('emailli',email.value);
    paragraph1.appendChild(document.createTextNode(email.value));

    var paragraph2= document.createElement("p");
    paragraph2.style.padding = "0px";
    paragraph2.style.margin= "0px";
    paragraph2.setAttribute('phoneli',phone.value);
    paragraph2.appendChild(document.createTextNode(phone.value));

    var anchore= document.createElement("a");
    anchore.href = '#';
    anchore.onclick = function() 
    {
      document.getElementById('details').style.display = 'block';

      var retrievedName= heading .getAttribute('nameli');
      console.log(retrievedName);
      var targetName = document.getElementById("nameshead");
      targetName.textContent = retrievedName ;


      display(retrievedName);
      
     }
    
  
  
    anchore.appendChild(heading);
    anchore.appendChild( paragraph1);
    anchore.appendChild( paragraph2);

    li.appendChild(anchore);
    ul.appendChild(li);
   
    document.body.appendChild(ul);
    document.getElementById('formData').reset();
    document.getElementById('iframediv').style.display = 'none';

    

  
  }

  
 










function display(namex)
{

  document.getElementById('iframediv').style.display = 'none';
  const storedData = JSON.parse(localStorage.getItem('userData'));
  
 
  if (storedData && storedData.length > 0)
    {
      storedData.forEach(user => 
        {
          if( namex==user.newName)
          {
            var useremail=user.newEmail;
            var userphone=user.newPhone;
            var userlandline=user.newLandline;
            var userwedsite=user.newWebsite;
            var useraddress=user.newAddress;
            console.log(namex);
            console.log(useremail);
            console.log(userphone);
            console.log( userlandline);
            console.log(userwedsite);
            console.log(useraddress);
            var  useremailx=document.getElementsByClassName("userdetails");

            useremailx[0].getElementsByClassName("NAME")[0].innerText =user .newName ;
            useremailx[0].getElementsByClassName("EMAIL")[0].innerText = user .newEmail;
            useremailx[0].getElementsByClassName("MOBILE")[0].innerText = user .newPhone;
            useremailx[0].getElementsByClassName("LANDLINE")[0].innerText = user .newLandline;
            useremailx[0].getElementsByClassName("WEDSITE")[0].innerText = user .newWebsite;
            useremailx[0].getElementsByClassName("ADDRESS")[0].innerText = user .newAddress;
          //  useremailx.innerHTML = useremail ;
             //useremailx.getElementById("demail").innerHTML=`${user.newEmail}`;
            // useremailx.getElementById("dphone").innerHTML=`${user.newphone}`;
            // useremailx.getElementById("dlandline").innerHTML=`${user.newLandline}`;
            // useremailx.getElementById("dwedsote").innerHTML=`${user.newWebsite}`;
            // useremailx.getElementById("daddress").innerHTML=`${user.newAddress}`;
          }
        });
    }
}




 function deleteDetails()
 {
    /*let existingData = JSON.parse(localStorage.getItem('userData'))||[];
    var chandana=document.getElementById("nameshead").value;
    let indexToDelete = existingData.findIndex(item => item.newName === chandana);
    if (indexToDelete == -1)
    {
         existingData.splice(indexToDelete, 1);
         localStorage.setItem('userData', JSON.stringify(existingData));
         var  useremailx=document.getElementsByClassName("userdetails");
         useremailx[0].getElementsByClassName("NAME")[0].innerText ="";
         useremailx[0].getElementsByClassName("EMAIL")[0].innerText ="";
         useremailx[0].getElementsByClassName("MOBILE")[0].innerText = "";
         useremailx[0].getElementsByClassName("LANDLINE")[0].innerText ="";
         useremailx[0].getElementsByClassName("WEDSITE")[0].innerText = "";
         useremailx[0].getElementsByClassName("ADDRESS")[0].innerText = "";
    }
      console.log(indexToDelete);*/
    var ul =document.getElementById("unorder");
    var candidate=document.getElementById("");
    var item =document.getElementById(candidate.value);
    ul.removeChild(item);
 }




  

  



 


  
  


  
  
  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 