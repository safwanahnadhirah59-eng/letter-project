const message = `I know we've been through ups and down,but my feelings for you never faded.I still love you deeply, and the thought of losing you completely hurts me.\nYou mean so much to me,and i don't want to let go what we had i want to fight for us because you're worth it.\n\nI realize my actions and words might have affected you i'm very sorry sayang i hope you can forgive me i learn my lesson sorry baby\n\nI know that u don't trust me because what i have done but i'm here wiling to change just for u \n\.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
