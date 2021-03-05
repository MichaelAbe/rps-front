
const poems = [];

function main() {
    return document.getElementById("main");
} 

function titleInput() {
    return document.getElementById('title')
}

function poemInput() {
    return document.getElementById('poem')
}

function form() {
    return document.getElementById('form')
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
                <label for="poem">Poem</label> <br>
                <textarea name="poem" id="poem" cols="30" rows="10"></textarea>
            </div>
            <input type="submit" value="Contribute your poem">
        </form>
    `;
}

function thePoems() {
    return `
    <h3>Poems</h3>
    <div id="poems">
        <div> 
            <h4>Title</h4>
            <p>Poem goes here</p>
        </div>
    </div>
    `
}

function poemListTemplate(poem) {
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let poemsDiv = document.getElementById('poems')
    h4.innerText = poem.title;
    p.innerText = poem.poem;

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
}

function submitPoemForm(e) {
    e.preventDefault();
    alert('Your Poem has been added');

    poems.push({
        title: titleInput().value,
        content: poemInput().value
    });
    resetPoemInput();
}



document.addEventListener("DOMContentLoaded", function() {
    //renderTemp();
    renderPoems();
})