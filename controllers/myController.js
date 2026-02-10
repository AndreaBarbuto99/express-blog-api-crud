
const postsList = require("./../data/posts");



// index

function index(req, res) {

    let filteredPost = postsList;

    if (req.query.tags) {
        let filterTag = req.query.tags;
        filteredPost = postsList.filter(e => e.tags.includes(filterTag))
        return res.json(filteredPost)
    }

    res.json(postsList)

}

// show 

function show(req, res) {
    const myId = parseInt(req.params.id);
    const filteredPost = postsList.find(e => e.id === myId)

    if (!filteredPost) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "This page does not exist"
        })
    }




    res.json(filteredPost)
}


// store

function store(req, res) {
    console.log(req.body)
    res.send("Crea un nuovo post")
}

// update

function update(req, res) {
    res.send("Modifica integrale del post numero " + req.params.id)
}

// modify 

function modify(req, res) {
    res.send("Modifica parziale del post numero " + req.params.id)
}

// destroy

function destroy(req, res) {
    const myId = parseInt(req.params.id);

    const filteredDeletePost = postsList.find(e => e.id === myId)

    if (!filteredDeletePost) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "This page does not exist"
        })
    }

    postsList.splice(postsList.indexOf(filteredDeletePost), 1)

    console.log(postsList);


    res.sendStatus(204);

}

module.exports = { index, show, store, update, modify, destroy };