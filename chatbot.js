function sendMessage(){

  let input =
  document.getElementById("userInput");

  let chatbox =
  document.getElementById("chatbox");

  let userText =
  input.value;

  if(userText === ""){
    return;
  }

  // USER

  chatbox.innerHTML += `

  <div class="user">
    ${userText}
  </div>

  `;

  input.value = "";

  // BOT TYPING

  let typing =
  document.createElement("div");

  typing.className = "bot";

  typing.innerHTML = "Typing...";

  chatbox.appendChild(typing);

  setTimeout(()=>{

    typing.remove();

    let botReply =
    "Practice regularly for interviews.";

    if(userText.toLowerCase().includes("hr")){

      botReply =
      "HR interviews check communication and confidence.";

    }

    else if(userText.toLowerCase().includes("technical")){

      botReply =
      "Practice coding and core concepts.";

    }

    else if(userText.toLowerCase().includes("resume")){

      botReply =
      "Keep your resume short and professional.";

    }

    chatbox.innerHTML += `

    <div class="bot">
      ${botReply}
    </div>

    `;

    chatbox.scrollTop =
    chatbox.scrollHeight;

  },1500);

}