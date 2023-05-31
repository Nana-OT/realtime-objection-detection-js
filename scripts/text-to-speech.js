// a simple script to convert text to speech in browser
if ('speechSynthesis' in window) {
  const speechSynthesis = window.speechSynthesis;

  // Create an instance of SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance();

  // Set the text to be spoken
  utterance.text = 'Hello, world!';

  // Speak the text
  speechSynthesis.speak(utterance);
} else {
  console.log('Text-to-speech is not supported in this browser.');
}