
function getPoems() {
    fetch(baseUrl + '/poems')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        poems = data
       
        Poem.createFromCollection(data)
        console.log(poems)
        Poem.renderPoems()
    })
}

function resetPoemInput() {
    titleInput().innerHTML = "";
    poemInput().innerHTML = "";
}

function resetMain() {
    main().innerHTML = "";
}

function getCategory() {
    document.getElementById
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
        Poem.all = Poem.all.filter(function(poem) {
            return poem.id !== data.id;
        })
        Poem.renderPoems();
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
        Poem.renderPoems()
    })
}

function likeButtonEvent() {
    document.getElementById()
}


function formLinkEvent() {
    formLink().addEventListener('click', function(e) {
        e.preventDefault();
        Poem.renderTemp();
    })
}

function poemsLinkEvent() {
    poemsLink().addEventListener('click', function(e) {
        e.preventDefault();
        Poem.renderPoems();
    })
}

function freeVerseClick() {
    document.getElementById('free verse').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Free Verse"
    })
}

function epicClick() {
    document.getElementById('epic').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Epic"
    })
}

function haikuClick() {
    document.getElementById('haiku').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Haiku"
    })
}

function narrativeClick() {
    document.getElementById('narrative').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Narrative"
    })
}

function pastoralClick() {
    document.getElementById('pastoral').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Pastoral"
    })
}
function sonnetClick() {
    document.getElementById('sonnet').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Sonnet"
    })
}

function odeClick() {
    document.getElementById('ode').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Ode"
    })
}

function limerickClick() {
    document.getElementById('limerick').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Limerick"
    })
}

function balladClick() {
    document.getElementById('ballad').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Ballad"
    })
}

function soliloquyClick() {
    document.getElementById('soliloquy').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("dropdownMenuButton").innerHTML = "Soliloquy"
    })
}

function villanelleClick() {
    document.getElementById('villanelle').addEventListener('click', function(e) {
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