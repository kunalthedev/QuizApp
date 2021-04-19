function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    let email = document.forms["welcome_form"]["email"].value;
  
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
  
    location.href = "instruction.html";
  }
  function end(){
    location.href ="index.html";
  }
  function start(){
    // let check = document.getElementById("checkbox").checked
    // if(document.getElementById("checkbox").checked ==true){
    // }
    location.href="quiz.html";
  }