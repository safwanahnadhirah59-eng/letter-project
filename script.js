const message = `I know we've been through ups and downs,but my feelings for you have never faded.\n\ I still love you deeply,and the thought of losing you completely hurts me.\n\n You means so much to me and i don't want to let go of what we had i want to fight for us because you're worth it.\n\nI always love you my mizi ,Sayang and my big baby\n\nPls forgive me sayng i'm not tryna to force you but i can't help myself and i will do anything for us .`;

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

