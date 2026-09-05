let speech = new SpeechSynthesisUtterance();

document.querySelector('#speak-button').addEventListener('click', () => {
    let textToSpeak = document.querySelector('#text-input').value;
    speech.text = textToSpeak;
    window.speechSynthesis.speak(speech);
});

let voices = [];
let voiceSelect = document.querySelector('#voice-select');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, index) => (voiceSelect.options[index] = new Option(voice.name, index)));
};

voiceSelect.addEventListener('change', () => {
    let selectedVoiceIndex = voiceSelect.value;
    speech.voice = voices[selectedVoiceIndex];
});