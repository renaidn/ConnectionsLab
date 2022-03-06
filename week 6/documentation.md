# Node-Express App | DUCKWRTH Discography

For this homework assignment I have decided to make a page that would display full discography of one of my most favorite artists - Duckwrth. My webpage will be displaying a bunch of album covers, on click of which the user will get the album information (album name, year of release, number of songs). I have made my own list with keys and values, which I have added to the `index.js` file. You can see a snipet of it below:
```
first: {
        name: "Nowhere",
        year: 2015,
        numSongs: 14,
    },
```
I have initially used album name as the `key`. However, as I was working on adding `onclick function` I have realized that it's not practical and just added unnecessary complications for me. For this reason I have switched to using the number of the album as the key. My webpage uses `query` to display the information of requested album number.
```
let albumQuery = req.query.albumNumber;
    for (albumNum in Discography) {
        if (albumNum == albumQuery) {
            res.json(Discography[albumNum]);
        }
    }
```
In order to display relevant information on click I have used `e.target.id`, which returns the id of the element that triggered the event (was clicked on). Having album number instead of album name as a key was useful here.
```
document.addEventListener("click", (e) => {
    fetch("/albums?albumNumber"+e.target.id)
    .then((response) => response.json())
    .then((data) => {
        // show the album information
        document.getElementById("album__information").innerHTML = (
            `<p>Album Name: <b>${data.name}</b></p>
            <p>Released in: <b>${data.year}</b></p>
            <p>Number of songs: <b>${data.numSongs}</b></p>`
            );
    })
});
```
At this point, when an album cover was clicked, my page looked like this:

![image](https://user-images.githubusercontent.com/83557500/156945651-b28ca6fb-cb07-4a1d-bc3d-c906d56702ed.png)

As you can see from this picture, it's impossible to tell which album cover does this information belong to. In order to add a visual clue for the user, I have decided to add a line that would appear on click together with text information. Figuring out the math for the correct line placement was quite challenging. It would make sense to multiply some number in this calculation by the index of the album cover, however it was written as a string and not a number. For this reason, I have added another class (that would correspond to the index of the album) to each one of the images in the html. You can see an example below: 
```
<img class="1 container__album-cover" id="first" src="/images/nowhere.jpg">
```
I have then used this number in my calculations (as well as `width` and `margin` values of image container from css). It ended up looking like this on code:
```
// show the line
document.querySelector(".line").style.display = "block";
// change the placement of the line
let x = e.target.className;
let lineNum = parseInt(x[0]) - 1;
document.querySelector(".line").style.left = `calc(${lineNum} * (100vw / 7.5) + 3.15% * ${lineNum} + 2.1%)`;
```
Finally, I have got a webpage that looked like this when loaded:

![image](https://user-images.githubusercontent.com/83557500/156944602-c9cb48f9-2c9a-4843-9c01-b2172016923a.png)

And like this when user clicks on one of the album covers:

![image](https://user-images.githubusercontent.com/83557500/156946174-c3e717e6-4bed-44ad-88a2-f525a50f6cec.png)

Overall, I am happy with how this webpage turned out (even though there amount of information displayed could have been fuller).
