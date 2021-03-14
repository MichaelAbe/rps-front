

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

// function categoryInput() {
//     return document.getElementById()
// }

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
            
            
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select a category
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" id="free verse" href="#">Free Verse</a>
            <a class="dropdown-item" id="epic" href="#">Epic</a>
            <a class="dropdown-item" id="haiku" href="#">Haiku</a>
            <a class="dropdown-item" id="narrative" href="#">Narrative</a>
            <a class="dropdown-item" id="pastoral" href="#">Pastoral</a>
            <a class="dropdown-item" id="sonnet" href="#">Sonnet</a>
            <a class="dropdown-item" id="ode" href="#">Ode</a>
            <a class="dropdown-item" id="limerick" href="#">Limerick</a>
            <a class="dropdown-item" id="ballad" href="#">Ballad</a>
            <a class="dropdown-item" id="soliloquy" href="#">Soliloquy</a>
            <a class="dropdown-item" id="villanelle" href="#">Villanelle</a>

            </div>
            
             
            <input type="submit" value="Contribute your poem">
            </div>
            

        </form>
    `;
}

function thePoems() {
    return `
    <h3>Poems</h3>
    <div id="poems"></div>
    `
}

function getCategory() {
    document.getElementById
}

function renderPoem(poem) {
    //debugger
    let div = document.createElement('div');
    let br = document.createElement('br')
    let h4 = document.createElement('h4');
    let byCategory = document.createElement('h5')
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

    likesButton.addEventListener('click', addLike)
    deleteButtton.addEventListener('click', deletePoem)

   
    h4.innerText = poem.title;
    p.innerText = poem.content;
    byCategory.innerText = `Category: ${poem.category.name}`
   
    
    div.appendChild(h4);
    div.appendChild(byCategory)
    div.appendChild(p);
    div.appendChild(deleteButtton);
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

function addLike(e) {
    e.preventDefault();

    let button = e.target
    let id = e.target.dataset.id
    
    let likes = parseInt(e.target.innerText.split(" ")[0]) 
    // let currentPoem = document.getElementById()
    //let likes = 
    fetch(baseUrl + '/poems/' + id, {
        method: 'PATCH', 
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({likes: likes += 1 })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        //debugger
        button.innerText = data.likes + " likes"
    }) 
}


function getThisPoem() {
    fetch(baseUrl + '/poems')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        poems = data
        //console.log(poems)
        renderPoems()
    })
}


function renderTemp() {
    resetMain();
    main().innerHTML = poemTemplate();
    freeVerseClick();
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
            content: poemInput().value,
            // category: categoryInput().value   
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

function freeVerseClick() {
    document.getElementById('free verse').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Free Verse"
    })
}

function epicClick() {
    document.getElementById('free verse').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Epic"
    })
}

function haikuClick() {
    document.getElementById('free verse').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Haiku"
    })
}

function narrativeClick() {
    document.getElementById('free verse').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Narrative"
    })
}

function pastoralClick() {
    document.getElementById('free verse').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Pastoral"
    })
}
function sonnetClick() {
    document.getElementById('free verse').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Sonnet"
    })
}

function odeClick() {
    document.getElementById('free verse').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Ode"
    })
}

function limerickClick() {
    document.getElementById('free verse').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Limerick"
    })
}

function balladClick() {
    document.getElementById('free verse').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Ballad"
    })
}

function soliloquyClick() {
    document.getElementById('free verse').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Soliloquy"
    })
}

function villanelleClick() {
    document.getElementById('free verse').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Villanele"
    })
}


















document.addEventListener("DOMContentLoaded", function() {
    //renderTemp();
    getPoems();
    formLinkEvent();
    poemsLinkEvent();
})