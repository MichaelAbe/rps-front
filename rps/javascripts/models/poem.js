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

}

