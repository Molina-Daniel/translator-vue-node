/*
// Connect main.js with server.js on server side
const socket = io();

// DOM elements
let input = document.getElementById("input");
let btn = document.getElementById("translate");
let typedWord = document.getElementById("word");
let output = document.getElementById("translation");

// Use the button with enter
// btn.addEventListener("keyup", event => {
//   if (event.key !== "Enter") return;
//   socket.emit('translateMe', input.value);
//   event.preventDefault();
// });

// Send the word to the server
btn.addEventListener('click', function () {
  socket.emit('translateMe', input.value);
});

// Receive the translation from the server and print it in the DOM
socket.on('translated', function (data) {
  output.innerHTML = '';
  output.innerHTML += `
  <p>
    <strong>${data}</strong>
  </p>
  `
});
*/
var socket = null;

var app = new Vue({
  el: '#app',
  data: {
    textToTranslate: '',
    translation: ''
  },
  computed: {
    // getTranslation() {
    //   socket.on('translated', (data) => data);
    // }
  },
  methods: {
    translateMe() {
      socket.emit('textToTranslate', this.textToTranslate);
      this.textToTranslate = '';
    },
    // getTranslation() {
    //   socket.on('translated', (data) => this.translation = data);
    // }
  },
  created() {
    socket = io();
  },
  mounted() {
    socket.on('translated', (data) => this.translation = data);
  }
})