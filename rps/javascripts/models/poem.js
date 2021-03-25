class Poem {
    static all = []

    constructor(attributes) {
        this.id = attributes.id
        this.title = attributes.title
        this.content = attributes.content 
        this.likes = attributes.likes
        this.category = {
            name: attributes.category.name
        }
        this.created_at = attributes.created_at
    }

    render() {
        //debugger
        let div = document.createElement('div');
        let br = document.createElement('br')
        let h4 = document.createElement('h4');
        let byCategory = document.createElement('h5')
        let p = document.createElement('p');
        let likesButton = document.createElement('button')
        let poemsDiv = document.getElementById('poems')
        let deleteButtton = document.createElement('button')
        
       deleteButtton.dataset.id = this.id
       deleteButtton.setAttribute('href', '#')
       deleteButtton.innerText = 'Delete'
       likesButton.dataset.id = this.id
       likesButton.setAttribute('href', '#')
       likesButton.innerText = `${this.likes} likes`
    
        likesButton.addEventListener('click', addLike)
        deleteButtton.addEventListener('click', deletePoem)
    
       
        h4.innerText = this.title;
        p.innerText = this.content;
        byCategory.innerText = `Category: ${this.category.name}`
       
        
        div.appendChild(h4);
        div.appendChild(byCategory)
        div.appendChild(p);
        div.appendChild(deleteButtton);
        div.appendChild(likesButton);
        
    
        poemsDiv.appendChild(div);
    }

    save() {
        Poem.all.push(this)
    }

    static create(attributes) {
        
        let poem = new Poem(attributes);
        poem.save();
        return poem
    }


    static createFromCollection(collection) {
        collection.forEach(data => Poem.create(data))
    }

    static thePoems() {
        return `
        <h3>Poems</h3>
        <div id="poems"></div>
        `
    }

// ** TEMPLATES **

    static poemTemplate() {
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

    static renderTemp() {
        resetMain();
        main().innerHTML = Poem.poemTemplate();
        freeVerseClick();
        epicClick();
        haikuClick();
        narrativeClick();
        pastoralClick();
        sonnetClick();
        odeClick();
        limerickClick();
        balladClick();
        soliloquyClick();
        villanelleClick();
        form().addEventListener('submit', Poem.submitPoemForm)
    
    }

    static renderPoems() {
        resetMain();
        main().innerHTML = Poem.thePoems();
    
        Poem.all.forEach(poem => poem.render());
    }

// ** EVENT HANDELERS **

    static submitPoemForm(e) {
        e.preventDefault();
        let strongParams = {
            poem: {
                title: titleInput().value, 
                content: poemInput().value,
                category_name: document.getElementById("dropdownMenuButton").innerHTML.toLowerCase()
                
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
            Poem.create(poem)
            Poem.renderPoems();
        })
        alert('Your Poem has been added');
    }

    // function deletePoem(e) {
    //     e.preventDefault();
    //     let id = e.target.dataset.id
    //     fetch(baseUrl + '/poems/' + id, {
    //         method: 'DELETE'
    //     })
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(data) {
    //         poems = poems.filter(function(poem) {
    //             return poem.id !== data.id;
    //         })
    //         Poem.renderPoems();
    //     })
    // }
    

}



