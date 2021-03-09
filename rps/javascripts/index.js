
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
  


function main() {
    return document.getElementById("main");
} 

function titleInput() {
    return document.getElementById('title')
}

function poemInput() {
    return document.getElementById('content')
}

function form() {
    return document.getElementById('form')
}

function formLink() {
    return document.getElementById('form-link');
}

function poemsLink() {
    return document.getElementById('poems-link');
}

function getPoems() {
    fetch(baseUrl + '/poems')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        poems = data
        console.log(poems)
        renderPoems()
    })
}

function resetPoemInput() {
    titleInput().innerHTML = "";
    poemInput().innerHTML = "";
}

function resetMain() {
    main().innerHTML = "";
}

function poemTemplate() {
    return `
    <h3>Write a Poem</h3>
        <form id="form">
            <div class="input-field">
                <label for="title">Title</label>
                <input type="text" name="title" id="title">
            </div>
            <div class="input-field">
                <label for="content">Poem</label> <br>
                <textarea name="poem" id="content" cols="30" rows="10"></textarea>
            </div>
            <input type="submit" value="Contribute your poem">
        </form>
    `;
}

function thePoems() {
    return `
    <h3>Poems</h3>
    <div id="poems"></div>
    `
}

function renderPoem(poem) {
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let likesButton = document.createElement('button')
    let poemsDiv = document.getElementById('poems')
    let deleteButtton = document.createElement('button')
    
   deleteButtton.dataset.id = poem.id
   deleteButtton.setAttribute('href', '#')
   deleteButtton.innerText = 'Delete'
   likesButton.dataset.id = poem.id
   likesButton.setAttribute('href', '#')
   likesButton.innerText = `${poem.likes} likes`

   deleteButtton.addEventListener('click', deletePoem)

    h4.innerText = poem.title;
    p.innerText = poem.content;
   
    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(deleteButtton)
    div.appendChild(likesButton);

    poemsDiv.appendChild(div);
}

function deletePoem(e) {
    e.preventDefault();
    let id = e.target.dataset.id
    fetch(baseUrl + '/poems/' + id, {
        method: 'DELETE'
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        poems = poems.filter(function(poem) {
            return poem.id !== data.id;
        })
        renderPoems();
    })
}

function renderTemp() {
    resetMain();
    main().innerHTML = poemTemplate();
    form().addEventListener('submit', submitPoemForm)
}

function renderPoems() {
    resetMain();
    main().innerHTML = thePoems();

    poems.forEach(function (poem) {
        renderPoem(poem)
    })
}


function submitPoemForm(e) {
    e.preventDefault();
    let strongParams = {
        poem: {
            title: titleInput().value, 
            content: poemInput().value
        }
    }
    fetch(baseUrl + '/poems', {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(strongParams),
        method: "POST"
    })
    .then( function(response) {
        return response.json();
    })
    .then( function(poem) {
        poems.push(poem)
        renderPoems();
    })
    alert('Your Poem has been added');

   
}


function likeButtonEvent() {
    document.getElementById()
}


function formLinkEvent() {
    formLink().addEventListener('click', function(e) {
        e.preventDefault();
        renderTemp();
    })
}

function poemsLinkEvent() {
    poemsLink().addEventListener('click', function(e) {
        e.preventDefault();
        renderPoems();
    })
}


document.addEventListener("DOMContentLoaded", function() {
    //renderTemp();
    getPoems();
    formLinkEvent();
    poemsLinkEvent();
})