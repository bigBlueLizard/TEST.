let speech=new SpeechSynthesisUtterance();

let voices=[];

let voiceSelector = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    for(i in voices){
        voiceSelector.options[i]=new Option(voices[i].name,i);
    }
}

document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);    
})
voiceSelector.addEventListener("change",()=>{
    speech.voice=voices[voiceSelector.value];
})