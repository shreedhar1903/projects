


function seterror(id, error){
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;

}


function validateForm(){
 var data=true;

    
    var name=document.forms["myForm"]["fname"].value;

    if(name.length<4){
        seterror("name","enter name is too short");
        data=false;
    }
     var email=document.forms["myForm"]["femail"].value;

     if(email.length<10){
         seterror("email","enter email is too short");
        data=false;
     }
    var phone=document.forms["myForm"]["fphone"].value;

     if(phone.length<9){
         seterror("phone","enter phone is too short");
         data=false;
 }
 

  
    
    if (phone.length>=11);
    {
     seterror("phone","enter phone is too long");
     data=false;
    }
    


return data;
}

