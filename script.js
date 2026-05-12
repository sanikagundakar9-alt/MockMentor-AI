// THEME

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", ()=>{

  document.body.classList.toggle("light-mode");

});

// LOADER

function showLoader(){

  document.getElementById("loader").style.display =
  "flex";

}

function hideLoader(){

  document.getElementById("loader").style.display =
  "none";

}

// RESUME UPLOAD

function uploadResume(){

  let file =
  document.getElementById("resumeFile").files[0];

  let status =
  document.getElementById("resumeStatus");

  if(file){

    status.innerHTML =
    `Uploaded: ${file.name}`;

  }else{

    status.innerHTML =
    "Please select a file.";

  }

}