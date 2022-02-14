let allColors;
window.addEventListener("load", () => {
    console.log("page is loaded");

    fetch("./sample.json")
    .then(response => response.json())
    .then((data) => {
        console.log(data); //seeing the data
        allColors = data.colors;

        //create html elements that are of the colors in the array
        for(let i=0; i<allColors.length; i++) {
            console.log(allColors[i].hex);

            //create an li for each color and give it the class "list"
            let listItem=document.createElement('li');
            listItem.classList.add("list__item");
            //add style backgroundColor to each item
            listItem.style.backgroundColor = allColors[i].hex;

            //get the list element using the id "list"
            let list = document.getElementById("list");

            //append the li to the ul
            list.appendChild(listItem);
        }
    })
})