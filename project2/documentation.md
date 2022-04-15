# Project 2 - NotParkour

Team members: Shyngys Karishev, Adina Maratkyzy

## <b>Links</b>
<a href="https://handy-young-chopper.glitch.me/">Click here to visit project page!</a>

## <b>Project Proposal</b>

For this project the two of us teamed up to make a game inspired by many collaborative games we have played together (It Takes Two, A Way Out, Pico Park). The game we are looking to make is a two player game, where players will need to work as a team to complete a level. The purpose of the game is teaching team work and collaborative skills in an entertaining format. Levels will be structured in such way that players won't be able to complete the level on their own. Players can either create the room or join one, where they will be assigned a character at random. Each of the characters have their own special ability: one can move chair boxes, while the other one can jump for a longer distance. Jumping from a yellow block onto the chair allows for the chair to act as a trampoline and enhance the jump of a player. Players must collect a key in order to open the door to the next level. There are four levels in total. First three levels are easy and are serving the function of a tutorial level to make the players get comfortable with the game. Fourth level is comprised of everything that the players have encountered in the first three levels, making it the most challenging one to complete. Players are free to use either arrow keys or WASD keys. Additionally, spacebar key may be used for jumping if that's what the player prefers. 

## <b>Process</b>

### <i>Game Logic</i>

<b>Initial steps and preparing for the user testing</b>

We have started from building a basic grid (map) to store the information about the placement of the game blocks. We then added a square (the player character), which moved with WASD and spacebar, added the gravity, and some collision functions. Collisions were a bit tricky to handle. It took a bunch of for loops and if statements. For some reason, lower boundary of the game blocks did not work and the user would go through them whenever they jumped below a block. This is what it looks like at the moment:

//video

<video width="320" height="240" controls>
  <source src="first.mp4" type="video/mp4">
</video>

<b>User testing: feedback, new thoughts and ideas</b>

Though we thought that what we have at the moment is not sufficient to get some meaningful feedback from the users, it proved itself to be wrong. There were quite a few takeaways from the testing and we ended up coming up with a list of things to implement. You can see the list in the image below:

![image](https://user-images.githubusercontent.com/83557500/163580914-9a979fcb-b05d-44ba-8072-df4c61088248.png)

<b>Adding more functionality</b>

After user testing we have decided to work on the game more intensely, as we are left with less than a week before the project presentation. Shyngys has resolved the issues with the lower boundaries of the game blocks by changing the value that of the reference point. Adina has added a moving block, which players can move horizontally by pushing from the side and use as a step. Collision functions similar to the other ones already implemented were adopted and adapted for the purposes of the moving block. We have thought of adding a block with locked X-position variable that would move vertically within some range, to act as an elevator. However, we have realized that it doesn't really contribute much to the collaborative aspect of the game. Perhaps, if we would add a button/switch somewhere within a map, which would activate the elevator if the player interacts with it. Since we are limited on time, we have dropped this idea and came up with something that would be easier to implement. You can take a look at the video attached below to see view our progress at this stage.

//video

<video width="320" height="240" controls>
  <source src="third.mp4" type="video/mp4">
</video>

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
    
