# Project 1 - CrayolaDraw
## <b>Project proposal:</b>
<p>For this project I am going to make a website that would utilize a json file with existing crayola colors to create a wholesome online drawing experience for its users. I am imagining my target audience to be people, who don't have the device capacity to use special professional drawing programs but want to see what digital drawing is. Middle school me would have been happy to find a program of this kind, because my laptop wasn't powerful enough to support graphic softwares, but I had a deep interest in digital art. Even though online drawing websites frequently have a rather limited functionality, it was a great starting point for me to pursue my interest and familiarize myself with a tricky drawing-with-your-mouse experience.</p>
	<br>As I don't feel too confident about my JavaScript language and p5 library knowledge at the moment, I am planning my website functionality accordingly. I expect my website to have:</p>
<ul>
  <li>a palette, which would feature crayola colors fetched from a json file;</li>
  <li>an artboard, on which the users will be able to draw;</li>
  <li>a set of tools like: eraser, pen, brush (different textures).</li>
</ul>
<br>
<p>It would also be cool to add features like sharing the drawing on social media, option to save the drawing to the computer, and perhaps add more flexibility in brush properties.</p>
<br>
<p><b>Quick wireframe sketch</b></p>

![image](https://user-images.githubusercontent.com/83557500/153825255-f0e32623-ce43-4204-8dc6-75fbbcff1b35.png)

<p>After making a wireframe I have realized that there are some more cool features that could be added to this project, such as:
  <ul>
    <li>making several version of palette organization (by name, by color hue);</li>
    <li>make the artboard resizeable (4*4, 16*9, 4*3, landscape, portrait)</li>
  </ul>
</p>

## <b>Process</b>

### <i>Fetching Data and Creating a Basic Structure of the Website (Json & HTML)</i>

<b>What I did</b><br>
I have started building my project from fetching the data from json file to the body of my website, which was not challenging because it was done under the supervision of the professor during one of the lab sessions.I gave some basic display settings to my list of Crayola colors and tried recreating the layout shown in my wireframe. In order to see if I correctly implemented 'section' and 'div' elements in my HTML I gave them different 'background-color' settings in CSS. 

<b>New additions to the page / Fresh decisions</b> 
<ul>
	<li><i>Expansion in page functionality</i> - I needed to find space for artboard resizing tool, artboard orientation adjusting tool, saving tool, artboard clearing tool, and brush size changing tool. I have thought of adding these tools as I was recreating the layout shown in my wireframe in HTML and CSS. I have realized that having only brush tool options would not provide the user with a holistic experience that I am aiming for. I believe that adding tools mentioned above would definitely be helpful in achieving that.</li>
	<li><i>Making space for new tools (changes in layout)</i> - As a consequence of previous point, I need to think of a new way of arranging tools on my page. I have categorized my tools into two groups and distributed them over two tool bars instead of one. Top horizontal tool bar included: artboard resizing tool, artboard orientation adjusting tool, saving tool, and artboard clearing tool. Bottom horizontal tool bar included: brush options tool, and brush size changing tool. This categorization is based on the object of manipulation. Top bar tools affect the artboard, while bottom bar tools affect the brush specs. I decided that tools that affect the artboard must be on the top bar because that's where they typically are in graphics manipulation softwares. Consequently, that seems to be the only reasonable place for me to put them at. As for the brush specs affecting tools, I ended up choosing bottom bar, because it beautifully mirrors the top bar.</li>
	<li><i>Displaying brush sizing tool as a slider</i> - I came to that decision because I felt like a more graphical and fun way of displaying this information, as in comparison to number based input. I also had a bunch of free space on the tool bar that it was meant to be placed at, so I felt like it is also a great way of taking up the empty space.	</li>
</ul>

This is what it looks like at this stage (see picture below).

![image](https://user-images.githubusercontent.com/83557500/155863599-a4d9c526-3280-4651-861b-f33fd0bd30a6.png)


### <i>Adding functionality (JavaScript and p5)</i>

<b>What I did</b><br>
At this stage I decided to finish most of the javascript related stuff in one go, which took me two days.

<b>List of functions added:</b>
- <i>Artboard resize tool</i> - The button for this tool has a dropdown menu with three items in it. Initially, I was going to add options, such as: 1 by 1, 16 by 9, 4 by 3, 3 by 2, 5 by 3, A4 ratio, A5 ratio. However, I have realized that most of these ratios are rarely used by general public (and my page is not for professionals and field experts, but rather begginer level users) it would make more sense to use only the popular ratios, which are: 1 by 1 (instagram posts), 16 by 9 (instagram stories), A4, A5. I didn't really notice that before by A5 and A4 ratios are really close to one another, so the change from option to another is barely noticeable, which is why I decided to leave just the A4 option. So, I was left with only three options in this dropdown menu button. I have assigned size value to each of the items in HTML ("540" for "square", and "287.5" for "instagram stories", "374.2" for "A4"). On click of the dropdown menu item respective value is passed to the function, which has an if / else statement. Function compares its new argument to the values given in the statement and in case of match uses <b>resizeCanvas(sizeValue, 540, true)</b> p5 function to give it new width parameter, after which it updates its background to clear the canvas. Maximum size value for any size of canvas is 540. 
```
// RESIZE AND CLEAN CANVAS ON BUTTON CLICK
function artboardSizeAdjust(sizeValue) {
    // FOR SQUARE PROPORTIONS
    if (sizeValue == 540) {
        resizeCanvas(sizeValue, 540, true);
        background(255);
    }
    // FOR 16:9 PROPORTIONS
    else if (sizeValue == 287.5) {
        resizeCanvas(sizeValue, 540, true);
        background(255);
    }
    // FOR A4 PROPORTIONS
    else if (sizeValue == 374.2) {
        resizeCanvas(sizeValue, 540, true);
        background(255);
    };
    // UPDATE SIZE VALUE FOR artboardOrientAdjust FUNCTION
    sizeValueOrient = sizeValue;
}
```
- <i>Artboard orientation adjusting tool</i> - The button for this tool has a dropdown menu with two items in it. I have assigned number values to each of the items ("1" for Portrait, and "2" for Landscape). On click of the dropdown menu item respective value is passed to the function, which has an if / else statement. Function compares its new argument to the values given in the statement and in case of match uses <b>resizeCanvas()</b> p5 function to give it new width and height parameters, after which it updates its background to clear the canvas.
```
// IMITATE CHANGE OF CANVAS ORIENTATION BY RESIZING AND CLEANING CANVAS ON BUTTON CLICK
function artboardOrientAdjust(orientValue) {
    // FOR PORTRAIT ORIENTATION
    if (orientValue == 1) {
        resizeCanvas(sizeValueOrient, 540, true);
        background(255);
    }
    // FOR LANDSCAPE ORIENTATION
    else if (orientValue == 2) {
        resizeCanvas(540, sizeValueOrient, true);
        background(255);
    };
}
```
- <i>Artboard save</i> - I have used <b>saveCanvas(canvas, 'myCrayolaDrawing', 'jpg')</b> p5 function on icon click.
```
// SAVE ARTBOARD ON BUTTON CLICK
function saveUserArtboard() {
    saveCanvas(canvas, 'myCrayolaDrawing', 'jpg');
}
```
- <i>Artboard clear</i> - I have just updated background by coloring it the color of the canvas on icon click. 
```
// CLEAR ARTBOARD ON BUTTON CLICK
function clearArtboard() {
    background(255);
}
```
- <i>Eyedropper tool imitation & current color display</i> - in order to make it possible to choose colors from the Crayola color palette, I have added an on click function, which is placed inside of a <b>for loop</b> that iterates through palette items. This <b>for loop</b> is a part of page load function that fetches data from json file, which is made for the convinience. A variable that stores current color hex is updated, and this variable is used as a <b>stroke</b> value by the active brush option. To give a visual cue to the user that the color is chosen, border setting of the color item is update. In case if the color is chosen, it's border is made to be thick, and matching to the color of the palette body, to make the color item look smaller than all of the other color items. I came up with this decision because due to the variety of colors represented on the palette, I couldn't find a color which would look definitively contrast to all of the Crayola colors from the palette. This means that instead of manipulating color, I needed to manipulate the size. However, I couldn't make the color item actually smaller or bigger either because it shifted the whole palette. So, as an alternative, I set the <b>box-sizing</b> property of the color items to <b>border-box</b>, which allowed me to get this visual effect of size change. To also display some other color related information (color name and hex), I have updated respective <b>innerHTML</b> values in the same <b>for loop</b>.
```
for (let i = 0; i < listitems.length; i++) {
                // SET ON CLICK FUNCTION FOR PALETTE ITEM
                listitems[i].addEventListener("click", () => {
                    colorNow = allColors[i].hex;
                    // CHANGE THE BORDER SETTINGS FOR THE ITEM CLICKED (SO THAT IT LOOKS SMALLER)
                    listitems[i].style.border = "0.5vw solid whitesmoke";
                    listitems[i].style.boxSizing = "border-box";
                    // FOR UNCLICKED PALETTE ITEMS -> SET BORDER TO NONE (SO THAT THEY DON'T LOOK LIKE ACTIVE)
                    for (let k = 0; k < listitems.length; k++) {
                        if (k != i) {
                            listitems[k].style.border = "none";
                        }
                    }
                    // DISPLAY COLOR NAME AND HEX ON THE PAGE
                    document.getElementById("color__name").innerHTML = `color: ${allColors[i].color}`
                    document.getElementById("color__hex").innerHTML = `hex: ${allColors[i].hex}`
                })
            }
```
- <i>Copy hex number tool</i> - on button click, user can copy the hex of the color using the <b>navigator.clipboard.writeText()</b> method. To visually signal the success of the copying, alert window is displayed to the user. Both method and the function use <b>string slice</b> method to not copy the "hex:" part of the text that goes together with the hex value.
```
// COPY HEX NUMBER ON BUTTON CLICK
function copyHex() {
    // GET THE HEX NUMBER FIELD
    let copyHex = document.getElementById("color__hex");
    // COPY HEX NUMBER INSIDE THE TEXT FIELD
    navigator.clipboard.writeText(copyHex.innerHTML.slice(4, 12));
    // DISPLAY ALERT WINDOW TO USER TO SIGNIFY SUCCESS
    alert("Copied color hex: " + copyHex.innerHTML.slice(4, 12));
}
```
- <i>Brush size slider</i> - I have made a slider using <b>input</b> element of type <b>range</b> with maximum value of 50 and default value of 10. This piece took me quite some time to figure out. Somehow, the function that I have expected to run perfectly, didn't run at all. After some experimenting I have realized that something in the my original script file was writing over my code, which resulted in error. I have solved it by creating another script element, which only contains slider related code. Default slider value is displayed in the span and used by brushes to define brush size. Slider value is updated oninput.
```
// CREATE VARIABLES FOR slider__range AND slider__value 
let brushSizeSlider = document.getElementById("slider__range");
let sliderValue = document.getElementById("slider__value");
// DISPLAY DEFAULT SLIDER VALUE IF USER DIDN'T INTERACT WITH SLIDER
sliderValue.innerHTML = brushSizeSlider.defaultValue;
// UPDATE SLIDER VALUE DISPLAYED ON USER INTERACTION
brushSizeSlider.oninput = function () {
    sliderValue.innerHTML = this.value;
}
```
- <i>Brush option</i> - for the brush option I have got the inspiration from <a href="https://library.superhi.com/posts/how-to-paint-with-code-creating-paintbrushes" this link </a>. It provided a great insight on how to think of digital brushes from the mathematical stand (something I lack in). I ended up adapting three brush options: crayon, marker, and spray paint. Adding these brush option made sense to me logically, as those are some of the products that Crayola company sells (and I believe that crayons is something they are well known for). Making these brushes and getting their logic was one of the most challenging parts of this projects. Functions for these brushes depend a lot on the <b>lerp()</b> p5 function and <b>for loops</b>. The lerp function is used to create points in between the two given points, which in response creates this grainy texture. For loops were used to make simulate the brush density (not adjustable by user). Functions for crayon and spray paint options are very similar. What makes the difference is the amount of time that <b>for loop</b> goes on for (less in spray paint -> less dense & more scatered point), and the accountance of <b>mouse speed</b> value (spray paint does take it into account, which makes the width of brush differ depending on the mouse speed). Marker, unlike other two options, draws tilted lines in its <b>for loop</b>, which creates a shape distinctive to markers. For the eraser, which I also categorize as a brush type, I decided to run a code that differs from the code for the crayon brush option only by the brush color (constant, that matching to the canvas color), and the brush density (eraser is significantly has significantly more densely placed points in comparison to crayon). 
```
// CRAYON BRUSH FUNCTION
function brushCrayon() {
    // UPDATE BRUSH SIZE ACCORDING TO THE SLIDER VALUE
    let sliderValueOutput = document.getElementById("slider__value");
    let sliderValue = sliderValueOutput.innerHTML;
    // DECLARE brushRadius VARIABLE WHICH WILL HOLD THE BRUSH SIZE FROM SLIDER VALUE
    let brushRadius;
    // UPDATE COLOR OF THE BRUSH
    stroke(colorNow);
    // DEFINE BRUSH DENSITY VALUE
    let brushDensity = 95;
    // SET THE NUMBER OF TIMES WE FIND THE LINEAR INTERPOLATION IN THE FOR LOOP (AFFECTS THE DENSITY OF THE BRUSH)
    let lerps = 10;

    // IF STATEMENT TO SET BRUSH SIZE
    // IF SLIDER WAS NOT TOUCHED BY THE USER -> MAKE THE BRUSH OF A DEFAULT SIZE (10)
    if (sliderValue == "") {
        // DEFAULT BRUSH SIZE
        brushRadius = 10;
    }
    // IF SLIDER WAS TOUCHED -> UPDATE BRUSH RADIUS VARIABLE
    else {
        brushRadius = sliderValue;
    };

    // SQUARE THE BRUSH RADIUS VALUE TO MAKE THE CHANGE IN BRUSH SIZE MORE IMPACTFUL
    let radiusSquared = brushRadius * brushRadius;

    // MAKE THE CRAYON HAVE A GRAINY TEXTURE
    // DRAW A FILLED IN CIRCLE MADE OUT OF A BUNCH OF POINTS BUILD AROUND THE POINT OF MOUSE CLICK
    for (let i = 0; i < lerps; i++) {
        // FIND THE LERPed X AND Y COORDINATES
        const lerpX = lerp(mouseX, pmouseX, i / lerps);
        const lerpY = lerp(mouseY, pmouseY, i / lerps);

        // DRAW RANDOMIZED POINTS WITHIN A CIRCLE
        for (let j = 0; j < brushDensity; j++) {
            //PICK RANDOM POSITION
            const randX = random(-brushRadius, brushRadius);
            const randY = random(-1, 1) * sqrt(radiusSquared - randX * randX);
            //DRAW THE POINT
            point(lerpX + randX, lerpY + randY);
        }
    }
}

// MARKER BRUSH FUNCTION
function brushMarker() {
    // UPDATE BRUSH SIZE ACCORDING TO THE SLIDER VALUE
    let sliderValueOutput = document.getElementById("slider__value");
    let sliderValue = sliderValueOutput.innerHTML;
    // DECLARE brushWidth VARIABLE WHICH WILL HOLD THE BRUSH SIZE FROM SLIDER VALUE
    let brushWidth;
    // UPDATE COLOR OF THE BRUSH
    stroke(colorNow);
    // SET THE NUMBER OF TIMES WE FIND THE LINEAR INTERPOLATION IN THE FOR LOOP (AFFECTS THE DENSITY OF THE BRUSH)
    let lerps = 20;

    // IF STATEMENT TO SET BRUSH SIZE
    // IF SLIDER WAS NOT TOUCHED BY THE USER -> MAKE THE BRUSH OF A DEFAULT SIZE (10)
    if (sliderValue == "") {
        // DEFAULT BRUSH SIZE
        brushWidth = 10;
    }
    // IF SLIDER WAS TOUCHED -> UPDATE BRUSH WIDTH VARIABLE
    else {
        brushWidth = parseInt(sliderValue);
    };

    // IMITATE MARKER BRUSH SHAPE
    // USE FOR LOOP AND LERP TO REPEAT THE BRUSH LINE
    for (let i = 0; i <= lerps - 1; i++) {
        // FIND THE LERPed X AND Y COORDINATES
        const x = lerp(mouseX, pmouseX, i / lerps);
        const y = lerp(mouseY, pmouseY, i / lerps);
        // DRAW A LINE
        console.log(x - brushWidth, y - brushWidth, x + brushWidth, y + brushWidth)
        line(x - brushWidth, y - brushWidth, x + brushWidth, y + brushWidth);
    }
}

// SPRAY PAINT BRUSH FUNCTION
function brushSpray() {
    // UPDATE BRUSH SIZE ACCORDING TO THE SLIDER VALUE
    let sliderValueOutput = document.getElementById("slider__value");
    let sliderValue = sliderValueOutput.innerHTML;
    // DECLARE brushRadius VARIABLE WHICH WILL HOLD THE BRUSH SIZE FROM SLIDER VALUE
    let brushRadius;
    // UPDATE COLOR OF THE BRUSH
    stroke(colorNow);
    // DEFINE BRUSH DENSITY VALUE
    let brushDensity = 80;
    // SET THE NUMBER OF TIMES WE FIND THE LINEAR INTERPOLATION IN THE FOR LOOP (AFFECTS THE DENSITY OF THE BRUSH)
    let lerps = 5;

    // FIND THE SPEED OF MOUSE MOVEMENT
    let mouseSpeed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY);

    // IF STATEMENT TO SET BRUSH SIZE
    // IF SLIDER WAS NOT TOUCHED BY THE USER -> MAKE THE BRUSH OF A DEFAULT SIZE (10)
    if (sliderValue == "") {
        // DEFAULT BRUSH SIZE
        brushRadius = 10;
    }
    // IF SLIDER WAS TOUCHED -> UPDATE BRUSH RADIUS VARIABLE
    else {
        brushRadius = parseInt(sliderValue);
    };

    // MAKE A NEW VARIABLE THAT ACCOUNTS BOTH brushRadius AND mouseSpeed VARIABLES
    // THE FASTER YOU MOVE THE MOUSE -> THE BIGGER THE BRUSH RADIUS
    let radiusDynamic = mouseSpeed + brushRadius;
    // SQUARE THE BRUSH RADIUS VALUE TO MAKE THE CHANGE IN BRUSH SIZE MORE IMPACTFUL
    let radiusSquared = radiusDynamic * radiusDynamic;

    // MAKE THE SPRAY PAINT HAVE A SPRAY TEXTURE
    // DRAW A FILLED IN CIRCLE MADE OUT OF A BUNCH OF POINTS BUILD AROUND THE POINT OF MOUSE CLICK
    for (let i = 0; i < lerps; i++) {
        // FIND THE LERPed X AND Y COORDINATES
        const lerpX = lerp(mouseX, pmouseX, i / lerps);
        const lerpY = lerp(mouseY, pmouseY, i / lerps);

        // DRAW RANDOMIZED POINTS WITHIN A CIRCLE
        for (let j = 0; j < brushDensity; j++) {
            //PICK RANDOM POSITION
            const randX = random(-radiusDynamic, radiusDynamic);
            const randY = random(-1, 1) * sqrt(radiusSquared - randX * randX);
            //DRAW THE POINT
            point(lerpX + randX, lerpY + randY);
        }
    }
}

// ERASER BRUSH FUNCTION
function brushEraser() {
    // UPDATE BRUSH SIZE ACCORDING TO THE SLIDER VALUE
    let sliderValueOutput = document.getElementById("slider__value");
    let sliderValue = sliderValueOutput.innerHTML;
    // DECLARE brushRadius VARIABLE WHICH WILL HOLD THE BRUSH SIZE FROM SLIDER VALUE
    let brushRadius;
    // COLOR BRUSH BLACK
    stroke(255);
    // DEFINE BRUSH DENSITY VALUE
    let brushDensity = 100;
    // SET THE NUMBER OF TIMES WE FIND THE LINEAR INTERPOLATION IN THE FOR LOOP (AFFECTS THE DENSITY OF THE BRUSH)
    let lerps = 100;

    // IF STATEMENT TO SET BRUSH SIZE
    // IF SLIDER WAS NOT TOUCHED BY THE USER -> MAKE THE BRUSH OF A DEFAULT SIZE (10)
    if (sliderValue == "") {
        // DEFAULT BRUSH SIZE
        brushRadius = 10
    }
    // IF SLIDER WAS TOUCHED -> UPDATE BRUSH RADIUS VARIABLE
    else {
        brushRadius = sliderValue;
    };

    // SQUARE THE BRUSH RADIUS VALUE TO MAKE THE CHANGE IN BRUSH SIZE MORE IMPACTFUL
    let radiusSquared = brushRadius * brushRadius;

    // MAKE THE ERASER HAVE GRAINY TEXTURE
    // DRAW A FILLED IN CIRCLE MADE OUT OF A BUNCH OF POINTS BUILD AROUND THE POINT OF MOUSE CLICK
    for (let i = 0; i < lerps; i++) {
        // FIND THE LERPed X AND Y COORDINATES
        const lerpX = lerp(mouseX, pmouseX, i / lerps)
        const lerpY = lerp(mouseY, pmouseY, i / lerps)
        // DRAW RANDOMIZED POINTS WITHIN A CIRCLE
        for (let j = 0; j < brushDensity; j++) {
            //PICK RANDOM POSITION
            const randX = random(-brushRadius, brushRadius)
            const randY = random(-1, 1) * sqrt(radiusSquared - randX * randX)
            //DRAW THE POINT
            point(lerpX + randX, lerpY + randY)
        }
    }
}
```
- <i>Brush selector</i> - in order for the user to only be able to use one brush at a time, I have setup a simple brush selector. This function is called in <b>draw()</b> whenever the mouse is pressed. Each of the brushes is given a value from 1 to 4. This value is passed as an argument to the selector function, which uses if / else statements calling the respective brush function. At the end of the function, local brush value variable is updated (for the use in draw function). 
```
// CHANGE CURRENT BRUSH ON CLICK
function brushSelector(brushNum) {
    // FOR CRAYON TOOL
    if (brushNum == 1) {
        brushCrayon()
    }
    // FOR MARKER TOOL
    else if (brushNum == 2) {
        brushMarker()
    }
    // FOR SPRAY PAINT TOOL
    else if (brushNum == 3) {
        brushSpray()
    }
    // FOR ERASER TOOL
    else if (brushNum == 4) {
        brushEraser()
    };
    // UPDATE CURRENT BRUSH VALUE FOR draw FUNCTION
    brush = brushNum;
}
```

At this point of the project making process my page looks something like this (see picture below).

![image](https://user-images.githubusercontent.com/83557500/155866547-1185c1eb-5fb2-4a7b-bebd-0a0aae9f238e.png)

### <i>Working on layout and overall aesthetics (CSS)</i>
<b>What I did</b><br>
This is the last stage of my process. Now that I have most of my functionality, I need to make some final visual decision. Making those decisions took me about 2 days. I have attempted following the wireframe, however, I did so to a smaller extent as I found other visual solutions which worked for this project better as I was working on it.

<b>List of new design decisions made:</b>
- <i>Moving the palette to the right side of the page</i> - perhaps because I am right handed, but I felt like palette is far more accessible when its on the right side of the page. When it was on the left side of the page, it felt as if the page didn't have an organic flow to it.
- <i>Reduction of the palette size</i> - I was planning to have my palette take 50% of the page. However, it ended up looking gigantic and clumsy. Even though the artboard doesn't require more width, extra empty space was much needed as full palette and tool bars from two sides made it look suffocatingly full. Decreasing the width and changing the number of columns to 5 solved this issue. 
- <i>Getting rid of extra text</i> - in the wireframe it was noted that color names and hex will be displayed under each of the individual color items. In addition to this I was thinking of writing button names right next to their respective icons. However, as I have mentioned earlier, there is already lots of necessary visual details on the page. Extra text was not appreciated. As a solution, I have decided getting rid of the text on the buttons (except for dropdown menu items) because the icons chosen for them are rather self-explanatory and easy to interpret. To display the color information more efficiently, I have used the free space on the right side of the top tool bar, which was just enough for two short lines of text.
- <i>Degroupping brush options</i> - I was thinking that since there are already two buttons with dropdown menu, it would make sense to make brush options button into one with dropdown menu as well. However, I had just enough space for the four options of brushes. Besides, now that it's not grouped under one button, it is more accessible and aesthetically pleasing as the minimalistic icons look good. 
- <i>Color choices</i> - my wireframe was a really quick sketch, which is why it doesn't have details like color style for the page thought through. I have decided to use calm and close-to-grey-but-not-too-close colors, because I didn't want to interfere with user's creative process, but also didn't want it to look bland and not motivating for artsy activities. I ended up having this beautiful palette of tuned down grey / blue / purple colors. In order to be consistent with them through the page, I have declared these 6 specific shades as variables in the <b>root</b> element of CSS.
```
/* CUSTOM COLORS */
:root {
    --white-shade: whitesmoke;
    --darkest-purple: rgb(99, 99, 141);
    --lightest-purple: rgb(213, 213, 233);
    --light-transitional-purple: rgb(199, 199, 218);
    --dark-transitional-purple: rgb(159, 149, 182);
    --black-shade: rgb(28, 20, 36);
}
```

This is the what my page looks like as a result (see picture below).

![image](https://user-images.githubusercontent.com/83557500/155867757-e04ffc1d-9a57-4ce2-ae1d-8147cf7d0e03.png)

### <b>Project Conclusions</b>

My final product ended up having more functions that I expected it to. This is a list of functionality it has:
- Drawing on canvas
- Changing canvas orientation
- Changing canvas size
- Saving canvas as jpg
- Clearing canvas
- Copying hex of the current color
- Choosing brush
- Choosing brush size
- Choosing color from the palette given (eyedropper tool imitation)

<p>I am happy with how it turned out. I think it ended up being a nice mix of functionality and aesthetics. However, as always, there are some things to work on and possibly add in the future, such as:</p>

- Naming things properly from the start - cleaning the code was a painful process and took me another 2 days.
- Adding more brush options - thinking of adding shapes and watercolor brush sometime in the future.
- Perhaps creating a guessing game with the colors - Crayola color shade names are fun, which I have discovered quite late into the process. I could make a guessing game in addition to this website, where user would be challenged with connecting the color name to the color, which is a great way to engage user with the brand.
- Responsiveness of the page - I have got caught into every other thing that I found incredibly important for the page, so I completely put away my thoughts on making it responsive. Though, most of the sizes on the page are in vw/vh, which is a good starting point.
- Zooming in / out of canvas - as of right now, some of my canvas sizes are rather small on the screen (16 by 9, for example). It would be nice if user could zoom in and out of the canvas to draw more comfortably.
- Active brush visual cue - for now, when the tool is selected it is highlighted in another color, however the moment user touches the canvas, the tool is no longer visually active. I should think of a function to make the active brush tool to stay visually different from the other tools.
- Maybe some other type of visualization for successful color code copy - alert windows are somewhat not aesthetically pleasing.

<p>Even though there is a plenty of space for development, I am proud of the work I have done and feel joyful about it. Looking forward to the next project!</p>




