document.addEventListener("click", (e) => {
    fetch("/albums?album="+e.target.id)
    .then((response) => response.json())
    .then((data) => {
        // show the line
        document.querySelector(".line").style.display = "block";
        // change the placement of the line
        let x = e.target.className;
        let lineNum = parseInt(x[0]) - 1;
        document.querySelector(".line").style.left = `calc(${lineNum} * (100vw / 7.5) + 3.15% * ${lineNum} + 2.1%)`;
        // show the album information
        document.getElementById("album__information").innerHTML = (
            `<p>Album Name: <b>${data.name}</b></p>
            <p>Released in: <b>${data.year}</b></p>
            <p>Number of songs: <b>${data.numSongs}</b></p>`
            );
    })
});
