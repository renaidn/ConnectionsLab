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

### <i>Fetching Data and Creating a Basic Structure of the Website</i>

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


### <i>Adding functionality</i>

<b>What I did</b><br>
At this stage I decided to finish most of the javascript related stuff in one go, which took me two days.

<b>List of functions added:</b>
<ul>
	<li>Artboard resize tool</li>
	<li>Artboard orientation adjusting tool</li>
	<li>Artboard save</li>
	<li>Artboard clear ```// CLEAR ARTBOARD ON BUTTON CLICK
function clearArtboard() {
    background(255);
}```</li>
	<li></li>
	<li></li>
	<li></li>
	
</ul>
	


To view what I have so far <a href="https://condescending-davinci-411ef7.netlify.app/">click here</a>.
<br><br>

![image](https://user-images.githubusercontent.com/83557500/153825992-802bda2b-b871-4f9c-8fa8-b8dafc5145a0.png)

<p>So far I have just implemented what I was told during our last lab session. I believe I will face more challenges later on, when implementing the drawing and responsive features.</p>
