let Discography = {
    first: {
        name: "Nowhere",
        year: 2015,
        numSongs: 14,
    },
    second: {
        name: "I'M UUGLY",
        year: 2016,
        numSongs: 10,
    },
    third: {
        name: "An XTRA UUGLY Mixtape",
        year: 2017,
        numSongs: 13,
    },
    fourth: {
        name: "THE FALLING MAN",
        year: 2019,
        numSongs: 8,
    },
    fifth: {
        name: "SuperGood",
        year: 2020,
        numSongs: 16,
    },
    sixth: {
        name: "SG8*",
        year: 2021,
        numSongs: 8,
    }
}

//included the express module / package
let express = require("express");

//created an obhect app from express
let app = express();

app.use('/', express.static('public'));

app.get('/albums', (req, res) => {
    console.log(req.query.album);

    let albumQuery = req.query.album;
    for (albumName in Discography) {
        if (albumName == albumQuery) {
            res.json(Discography[albumName]);
            console.log("query found");
        }
    }
    // res.json(Discography);
});

app.listen(8000, () => {
    console.log("listening at localhost 8000");
});