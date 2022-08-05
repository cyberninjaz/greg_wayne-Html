function speak(text) {
    alert(text);
    let utter = new SpeechSynthesisUtterance (text);
    window.speechSynthesis.speak(utter);
}
