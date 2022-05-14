# Project 2 - NotParkour

Team members: Shyngys Karishev, Adina Maratkyzy

### Project 3 Note

To get to the documentation for project 3 click [here](#updated-links)!

## <b>Links</b>
<a href="https://handy-young-chopper.glitch.me/">Click here to visit project page!</a>

## <b>Project Proposal</b>

For this project the two of us teamed up to make a game inspired by many collaborative games we have played together (It Takes Two, A Way Out, Pico Park). The game we are looking to make is a two player game, where players will need to work as a team to complete a level. The purpose of the game is teaching team work and collaborative skills in an entertaining format. Levels will be structured in such way that players won't be able to complete the level on their own. Players can either create the room or join one, where they will be assigned a character at random. Each of the characters have their own special ability: one can move chair boxes, while the other one can jump for a longer distance. Jumping from a yellow block onto the chair allows for the chair to act as a trampoline and enhance the jump of a player. Players must collect a key in order to open the door to the next level. There are four levels in total. First three levels are easy and are serving the function of a tutorial level to make the players get comfortable with the game. Fourth level is comprised of everything that the players have encountered in the first three levels, making it the most challenging one to complete. Players are free to use either arrow keys or WASD keys. Additionally, spacebar key may be used for jumping if that's what the player prefers. 

## <b>Process</b>

### <i>Game Logic</i>

<b>Initial steps and preparing for the user testing</b>

We have started from building a basic grid (map) to store the information about the placement of the game blocks. We then added a square (the player character), which moved with WASD and spacebar, added the gravity, and some collision functions. Collisions were a bit tricky to handle. It took a bunch of for loops and if statements. For some reason, lower boundary of the game blocks did not work and the user would go through them whenever they jumped below a block. This is what it looks like at the moment [click here](https://github.com/renaidn/ConnectionsLab/blob/main/project2/first.mp4).

<b>User testing: feedback, new thoughts and ideas</b>

Though we thought that what we have at the moment is not sufficient to get some meaningful feedback from the users, it proved itself to be wrong. There were quite a few takeaways from the testing and we ended up coming up with a list of things to implement. You can see the list in the image below:

![image](https://user-images.githubusercontent.com/83557500/163580914-9a979fcb-b05d-44ba-8072-df4c61088248.png)

<b>Adding more functionality</b>

After user testing we have decided to work on the game more intensely, as we are left with less than a week before the project presentation. Shyngys has resolved the issues with the lower boundaries of the game blocks by changing the value that of the reference point. Adina has added a moving block, which players can move horizontally by pushing from the side and use as a step. Collision functions similar to the other ones already implemented were adopted and adapted for the purposes of the moving block. We have thought of adding a block with locked X-position variable that would move vertically within some range, to act as an elevator. However, we have realized that it doesn't really contribute much to the collaborative aspect of the game. Perhaps, if we would add a button/switch somewhere within a map, which would activate the elevator if the player interacts with it. Since we are limited on time, we have dropped this idea and came up with something that would be easier to implement. You can take a look at [the video](https://github.com/renaidn/ConnectionsLab/blob/main/project2/third.mp4) to see view our progress at this stage.

During the user testing we were suggested to add power ups. We gave it some thought and decided that for the purpose of the game it would be more beneficial if we make each character possess a skill unique to them to kind of reinforce the idea that team work is a combination of each member's strong sides that would, in sum, make up for their limitations. Consequently, we came up with two powers:

- better jumps (bigger horizontal and vertical displacements)
- stronger push (only of the two players will be able to move the boxes)

The reason for which we chose these two powers is probably mainly because they are easy to implement. Coincidentally, they also fit it within the traditional combo of characters, a strong guy + an agile girl. Though, our characters are not gendered, they are just blobs with hats on (this is a spoiler, at this stage they were just hatless boxes).

Our game was meant to consist of one level only. Adina came up with the map of the first level. They implemented it together, but Shyngys was in charge of troubleshooting whenever unexpected errors would appear. In the process, Shyngys also came up with an interesting feature, which essentially mimics the function of a trampoline. The gist of this feature is that when the players reaches an elevated block that is distant from the next block (too far away for the players to reach), the players may use a moving box left on the ground as a trampoline. So it would kind of require some planning. With this feature plus the difficult control (Adina, as a non gamer struggled with controls while Shyngys didn't) plus the team work coordination, the level was too difficult for a new player to navigate and complete. Shyngys has suggested to add 3 simple levels before introducing the difficult level. They divided the levels between each other (first two for Adina to implement, second two for Shyngys). Though there is a division of responsibilities, they still made contributions in each other's parts. 

The process of making simpler levels was much like the process of making the difficult, which  is described above. We were thinking of making the last level timed. So the players are practicing for three levels, and when they reach the "boss" level the time within which they complete it is recorded and added to the scoreboard. We didn't get the chance to implement this function because we were short on time.

Last thing we did was adding sockets and making it work over two computers, which was the hardest part of the project. We mistakenly assumed that this part won't be too difficult, and left it for the very last munite, which was a huge mistake. Though we have covered sockets during the class, it still is a part of the project that we had the least experience working with. There are some weird glitches within the game which weren't too noticeable or critical. When we added sockets those glitches completely froze the game. It felt like they multiplied for some reason. We have tried handling those small loopholes, which costed us the beauty of the code (it is an organized mess). Eventually, we needed to solve one last issue before the class, which was the fact that the game didn't start. Somehow, Shyngys managed to fix it just in time. Apparently, the issue was that none of the packages were installed (express, sockets). It is a magic that the game somehow worked before.

### <i>Game Design</i>

For the design, at first we thought to stay with the grid style. It looked nice, but just geometry pieces and grid made it look like a geometry game, where even the characters looked like squares with different colors.

![image](https://user-images.githubusercontent.com/83557500/163622307-fbc6f614-446d-4621-8705-be2a17d8686f.png)

After that, we decided to make the characters unique and Adina designed both of the characters. Since they had different abilities, they looked alike, but had their own features (different hats, colors). Unlike the Coolors website, this time it took Adina hours before she settled on the soft but bright color palette. She will probably change it if they will continue working on this game for project 3, because though this color palette gives kind, nice, and not distracting vibes (which are much needed in stressful team-working situations), it doesn't express the frustrating part of the game (patience is difficult). Frankly speaking, she wanted to go for all pink palette, which Shyngys didn't subject against, but Adina was hesistant that it may mistakenly look like an exclusively girly game (which it's not). Adina was designing instructions window, and main menu, which was quite quick.

Shyngys was working on the menu icons (restart, instructions) and the additional objects design (stool, door). He struggled a bit because he doesn't have much of experience with Illustrator. The manual icon was the most tricky. It took him some time to figure out the pen tool. Below is what we ended up having and presenting to the class:

![image](https://user-images.githubusercontent.com/83557500/163622865-158608f4-f399-4f6c-907f-e7da9ef48ed5.png)

P.S. Their names are "One" and "Two" in Kazakh language :)

### <i>Division of Responsibilities</i>

When dividing the responsibilities, we took into account both the our strengths and the necessity of the equal division in the design and coding aspects. This is the list of responsibilities we came up with:

Adina -
<ul>
  <li>Coding
    <ul>
      <li>Main page</li>
      <li>Level 1</li>
      <li>Level 2</li>
    </ul>
  </li>
  <li>Design
    <ul>
      <li>Characters</li>
      <li>Main page</li>
      <li>Insructions</li>
    </ul>
  </li>
</ul>
  
  Shyngys -
<ul>
  <li>Coding
    <ul>
      <li>Game logic</li>
      <li>Level 3</li>
      <li>Level 4</li>
    </ul>
  </li>
  <li>Design
    <ul>
      <li>Game page</li>
      <li>Menu icons</li>
      <li>Additional objects</li>
    </ul>
  </li>
</ul>

### <i></i>

## <b>Thoughts, Conclusions, Reflections</b>

Shyngys Learnings -
<ul> 
  <li> How to work with p5 and create collision between two rectangular objects </li>
  <li> Using Illustrator, namely the pen tool</li>
  <li> Working with sockets, creating rooms and sending object's positions to each other</li>
</ul>

Adina Learnings - 
<ul>
  <li>Handling object collisions</li>
  <li>Using basic math and physics to create a coherent game logic</li>
  <li>Handling sockets and using glitch for projects with loopholes in the code</li>
</ul>

In the future, if given a chance, we would love to add the scoreboard, a list of existing rooms that are available for users to join, adding more levels, allowing more than two players to participate, adding a window in case of loss / win.
    
# Project 3 - Not Parkour 2.0

### Updated Links
<a href="https://not-parkour.herokuapp.com/">Here is a new link to play the game!</a> It kept crashing on glitch so we switched to Heroku.</a>
To see the code click [here](https://github.com/karishev/notParkouring)!

## Planning
Here is what we are planning to do for updated version of our game:

<b>To update:</b>
- Collision functions
- Physics of jump
- Sizes of the blocks
- Sending information to the users
- Color palette

<b>To add:</b>
- New levels
- Waiting area
- List of servers
- Pause menu
- Sound effects and background music
- Win window

## Process
### Game Logic

<b>User Testing: Feedback</b>

This time around we did user testing 3 times: 1 time before we changed the physics, 1 time after we have just changed the physics, and 1 time 2 days before the presentation. The feedback that we got was generally concerned with similar things, which are the ease of user control and the completeness of the experience. 

For the first test, we have presented our testers with the same version of the game that we submitted as a final version of project 2. We did so in order to refresh it in our minds what kind of fixes do we need to start from, so that in case if we will be running late on implementing everything we have in mind, we will at least have the most important things done. The feedback that we have got as primarily concerned with controls. Most of the testers did not know how to jump and were struggling with moving the chair because it was lagging. Because of the faulty information sending methods users were experinecing lags and delays that interfered with their ability to progress with the game. None of them moved past level 1 in 7 minutes. From this, we have concluded that revising the way we handle sockets should be our first priority. 

For the second test, our backend code was fully revised and updated, along with game physics and collision handling. We have user tested our progress right away. The experience was definitely more smooth and little to no bugs popped up. At this point, we were considering different types of movement as well as revising our characters' special abilities. We thought that e can make jumps more customizable and perhaps get rid of the moving boxes alltogether because they were crashing almost all the time. Our testers thought that perhaps more customizable jumps will be seen as more complex by the users and suggested that we may replace the ability to move objects with something equally as engaging to not lose the collaborative aspect of the game. We were also suggested to add some more textures to the game so that it'd look less flat.

For the last test, we had the game logic ready, however were not yet done with level designs and aesthetical touches, so our feedback was primarily concerned with that. We were suggested adding sound effects and background music, which we planned to do but left for the very last minutes.  

<b>Sending Information to the Users</b>

For the collisions, last time, it was sometimes not checking it correctly and would have passed through the blocks sometimes. Now, we decided to not disable the movements of the players, but to teleport the player right at the collision point. Before, because we disabled the movement to the direction of the collision, it was impossible to jump and go right, now it works and users were please for this change, since this was what they were expecting before. However, we decided to change the possibility to change the direction and move in midair. Before, after the jump you could have moved to left and right however you wanted, but now you can't do that, since in our opinion, it would be logically incorrect. Now, you can only jump into the direction that you were pressing the direction button.

<b>Collisions and Jumps</b>

For the user communication we decided to make the whole game logic on the backend so that it won't be lagging as much as it was. In Project 2, we had game classes in the frontend and sent to the backend the position of the player that was then sent to the second player and so on. This was a lot of work and communication between the server and the client which made the game lagging.
 
To get rid of the lags, we decided to create the game class in the backend and it will start running as soon as one of the players creates the room. Therefore, now the clients only send to the backend the key pressed and then the backend changes the position of the players based on the keys. In addition, every second/60 frames, using `setInterval` the backend sends to the users the players' positions and all the other necessary logic.
 
![image](https://user-images.githubusercontent.com/83557500/168444540-fa3bfdb0-f905-4e6f-a48f-c1a8c65ee1b6.png)
 
The frontend now consists only of graphics and how to display the information from the users. Since in Node.js, in the backend there is no p5.js, I had to recreate some of the functions myself.


function createVector(x, y) {
  return {
    x: x,
    y: y,
  };
}


function map(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

### Game Design
<b>Changing the Art Style</b>

Ever since we presented project 2, we were bothered by the flatness of the game. Adina was also not the biggest fan of the color combination. Since we have essentially rewrote the whole game logic, we thought that it would only make sense if we redesigned the game as well. Since the user screen is a grid, we wanted to design stackable blocks that would connect with nearby blocks seamlessly. This is something that can be easily achieved with arcade art style (Minecraft type of blocks).

This part of the design was done by Adina mostly since Shyngys is not as experience with Illustrator. It took a few days as we kept having more things to make special designs for. It was actually not too challenging, but quite time-consuming. It was done using 16 by 16 grid and rectangle tools. To list some things that needed to be done in Illustrator:
- game blocks
- player 1
- player 2
- key
- door closed
- door open
- background for main menu (made of game blocks)
- background for game (made of game blocks)
- background for pause menu
- background for game completion
- icon for closing game instructions
- icon for music controls
- icon for pause
- icon for return (after game completion)
- game instructions

![image](https://user-images.githubusercontent.com/83557500/168443056-8a6532d0-b99d-479b-9588-ae702a392a1d.png)

![image](https://user-images.githubusercontent.com/83557500/168443104-1b872e29-e614-46ee-8d17-2a9ef7d8b89c.png)

![image](https://user-images.githubusercontent.com/83557500/168443137-dad3554d-a58c-4b5f-80a2-2fae0aa5f673.png)

<b>Adding Sound</b>

To make the experience more complete we decided to add sounds and music with a similar arcade 8-bit style. We have found a few copyright free background songs on youtube. As for the sound effects, we searched them in Russian because it is almost always free of copyright and price (and doesn't require you to make an account), so basically big for pirating.

Links to music and sounds used:
- [background music](https://www.youtube.com/watch?v=cLX0cyh6_Ro)
- [sound effects](https://zvukipro.com/games/)

Sounds and music that we added:
- background music
- player 1 jumping sound
- player 2 jumping sound
- key pick up / door unlocking sound
- button click sound
- win fanfares sound

For the background music to start on the main menu we have made the instructions image visible by default and hence covering all the buttons, which prompts the user to close the window to start the experience. And as a symbolic indication of it, the background music starts playing on the click of the 'close' icon.

<b>Adding More Windows</b>

We added more windows! For even more complete user experience! To list them:
- game completion window - previously we had a popup alert, which was very underwhelming for the occasion.

![image](https://user-images.githubusercontent.com/83557500/168444020-4b250476-e35b-40c2-9565-59b0f1d93985.png)

- pause menu - we didn't plan to add a whole separate pause popup window, however we realized that there may be a number of things that users may want to do while playing the game, such as: pausing, restarting the level, going back to main menu, view instructions again. We decided to leave the music control outside of the pause window for it to be more of a quick fix for the user.

![image](https://user-images.githubusercontent.com/83557500/168443972-696fb705-a787-4c6c-8ab2-5284fddbe144.png)

- waiting area - for the users to see which character will they be playing with and wait for the other player to join we have made a waiting area. 

![image](https://user-images.githubusercontent.com/83557500/168444040-2dfce729-22d4-4505-866e-14047bdf51df.png)

## Thoughts, Conclusions, Reflections

Shyngys' learnings:
- Creating a better socket interactions and sending informaiton with intervals
- Working with p5 audio library
- Creating levels using the grid format

Adina's learnings:
- Moving game logic from frontend to backend
- Making sizes more responsible 
- Working with sockets and handling collisions

Some things that we'd do differently:
- return moving objects as they are more engaging and allow for more interesting level designs
- add more levels because there is never enough
- make the control instructions more visible to the users (kind of blends in with the background)

Overall, it's a project that we are really proud of! And we are happy with how much we have learned in process!
