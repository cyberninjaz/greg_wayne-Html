function speak(text) {
    alert(text);
    let utter = new SpeechSynthesisUtterance (text);
    window.speechSynthesis.speak(utter);
}

function appear(index) {
    let mains = document.querySelectorAll("main");
    mains[0].classList.remove("appear");
    mains[1].classList.remove("appear");
    mains[index].classList.add("appear");
}