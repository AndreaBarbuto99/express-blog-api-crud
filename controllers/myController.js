
const postsList = require("./../data/posts");

// index
function index(req, res) {
    res.json(postsList)
}

// show 
function show(req, res) {
    const myId = parseInt(req.params.id);
    const filteredPostList = postsList.find(e => e.id === myId)

    if (!filteredPostList) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "This page does not exist"
        })
    }




    res.json(filteredPostList)
}


// store

function store(req, res) {
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