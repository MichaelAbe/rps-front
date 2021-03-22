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
    }

    static create(attributes) {
        let poem = new Poem(attributes);
        poem.save();
        return poem
    }

    save() {
        Poem.all.push(this)
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

    static renderPoems() {
        resetMain();
        main().innerHTML = Poem.thePoems();
    
        Poem.all.forEach(function (poem) {
            renderPoem(poem)
        })
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



