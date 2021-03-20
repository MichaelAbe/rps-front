//Global varialbles

let poems = [
    // {title: 'Poem 1', poem: 'This is poem 1'},
    // {title: 'Poem 2', poem: 'This is poem 2'},
    // {title: 'Poem 3', poem: 'This is poem 3'},
    // {title: 'Poem 4', poem: 'This is poem 4'},
    // {title: 'Poem 5', poem: 'This is poem 5'},
    // {title: 'Poem 6', poem: 'This is poem 6'},
    // {title: 'Poem 7', poem: 'This is poem 7'},
];

const baseUrl = 'http://localhost:3000'


let heartStates = {
    "♡": "♥",
    "♥": "♡"
  };
  
  let colorStates = {
    "red" : "",
    "": "red"
  };
  
//    Getters

let main = () => document.getElementById("main");

let titleInput = () => document.getElementById('title');

let poemInput = () => document.getElementById('content');

let form = () => document.getElementById('form')

let formLink = () => document.getElementById('form-link');

let poemsLink = () => document.getElementById('poems-link');


// function categoryInput() {
//     return document.getElementById()
// }