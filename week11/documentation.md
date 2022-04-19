# Your page is refreshing...

For this homework I have decided to try working with three.js. It ended up being as complicated as I have expected it to be.

Initially, I wanted to make a pulsating heart (symbolic heart, not biological). I have realized that it may make people think that the heart can interact with them in some way, which is misleading because the whole page is just a big canvas with palpitating heart. In order not to set this expectation, I have changed my mind from heart to diamond. I thought that it'd be cool to make a diamond rotate as if it's on the display. However, I didn't do a diamond either because without the light refraction and blinking it wouldn't really be a diamond. The level of acquaintance at which I am with three.js is not sufficient for me to add texture and work out the refractive properties of a diamond. So, I decided that I need to do something that wouldn't be misleading and wouldn't require realisitic rendering. So, I present you my 'refreshing' page. 

![image](https://user-images.githubusercontent.com/83557500/163898350-9f1f3c7b-ab83-49a4-8269-5dcb93a7a393.png)

I think this page can be used for websites that require page refreshment (or when a page is refreshing for too long). Like a waiting area. So this page would be refreshing... quite literally.

I have tried making the soda cup shape in the script initially but have quickly realized that there must be an easier way for people to do all these cool models. I was right, you can export the model from any program in obj format. In order to handle and read this format, I have added an additional file named obj (handles the model) and mtl (handles the materials) dot js in the js folder (along with the three.js). I have then followed the tutorials from the documentation, youtube, and found answers to my questions on stackoverflow. I did the model on the online 3D modelling tool - [Vectary](https://www.vectary.com/). I have tried adding a transparancy to the lid, but it looked different when I imported it vs when I modified it. I wasn't sure of easy ways to fix this issue so I just made it opaque.

![image](https://user-images.githubusercontent.com/83557500/163899626-ec34fb39-0dbc-428d-a6a0-627aab7985fd.png)

Overall that was a fun experience! I most certainly will not use it for the project 3 but maybe will attempt learning more about it later.

