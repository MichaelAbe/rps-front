
const poems = [
    // {title: 'Poem 1', poem: 'This is poem 1'},
    // {title: 'Poem 2', poem: 'This is poem 2'},
    // {title: 'Poem 3', poem: 'This is poem 3'},
    // {title: 'Poem 4', poem: 'This is poem 4'},
    // {title: 'Poem 5', poem: 'This is poem 5'},
    // {title: 'Poem 6', poem: 'This is poem 6'},
    // {title: 'Poem 7', poem: 'This is poem 7'},
];

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
    let poemsDiv = document.getElementById('poems')
    h4.innerText = poem.title;
    p.innerText = poem.content;

    div.appendChild(h4);
    div.appendChild(p);  

    poemsDiv.appendChild(div);
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
    alert('Your Poem has been added');

    poems.push({
        title: titleInput().value,
        content: poemInput().value
    });
    renderPoems();
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
    formLinkEvent();
    poemsLinkEvent();
})