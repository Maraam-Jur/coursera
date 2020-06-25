

function sign(){
      var error="";
      var email=document.getElementById("email").value;
      var password=document.getElementById("password").value;
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email==""){
        error="<p>You must input your email</p>";
      }
      else if(!email.match(mailformat))
      {
        error="Your email format in unvalid";
      }
       if (password==""){
        error+="<p>You must enter a password</p>";
      }
      if(error!=""){
        document.getElementById("error").style.display="block";
        document.getElementById("error").innerHTML=error;
      }else{
        window.location.href = "homePage.html";
      }
    };
    function Sub(){
      var error="";
      var emailClient=document.getElementById("emailClient").value;
      var phone=document.getElementById("phone").value;
      var firstName=document.getElementById("firstName").value;
      var lastName=document.getElementById("lastName").value;
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (emailClient==""){
        error="<p>You must input your email</p>";
      }
      else if(!emailClient.match(mailformat))
      {
        error="Your email format in unvalid";
      }
       if (phone==""){
        error+="<p>You must enter a phone</p>";
      }
      if (firstName==""){
        error+="<p>You must enter a first name</p>";
      }
      if (lastName==""){
        error+="<p>You must enter a last name</p>";
      }
      if( $('#Position').val() === '' ){
        error+="<p>You must input a Job Position</p>";
      }
      if($('#Years').val()===''){
        error+="<p>You must input experience years</p>";
      }
      if(error!=""){
        document.getElementById("errorForm").style.display="block";
        document.getElementById("errorForm").innerHTML=error;
      }else{
        document.getElementById("errorForm").style.display="none";
        document.getElementById("success").style.display="block";
        document.getElementById("success").innerHTML="Request sent";
      }
    };
    function logOut(){
         var con=confirm("Are you sure you wanna leave this page ?");
         if (con == true) {
             window.location.href = "Index.html";
          }
      };
      function goBack(){
        window.location.href="homePage.html";
      };
  function date(){
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    document.getElementById("date").innerHTML=time;
  }