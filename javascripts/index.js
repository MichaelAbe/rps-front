


function main() {
    return document.getElementById("main");
} 

function titleInput() {
    return document.getElementById('title')
}

function poemInput() {
    return document.getElementById('poem')
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


function renderTemp() {
    resetMain();
    main().innerHTML = poemTemplate();
}

document.addEventListener("DOMContentLoaded", function() {
    renderTemp();
})