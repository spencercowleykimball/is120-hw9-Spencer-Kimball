# is120-hw9-Spencer-Kimball
Repo for HW 9

**Walk me through how you thought about this assignment. What aspects did you handle or accomplish first, and what did you leave for last?**

Getting the initial input to output to the console log was a lot harder than I was expecting. I was only using a querySelector function at first, but finally figured out (thanks to chat) that I needed the addEventListener function as well.

I also was trying to console.log out specific variables at the end of the script.js, but not having it inside of a function, and it took me a minute to realize that it was outputting what the variable was at the beginning of the document which was nothing.

I was really just trying to get the values and make sure I knew where they were and where they were going. And then after that I worried about the display and what values were showing up and when. There were some initial inconsistencies about the display showing some decimals and then not having the 0 at the beginning of the decimal when different radio buttons were selected, so just trying to make everything be consistent as the user selected the different options.

Then it was fun choosing the colors and making it look pretty with the CSS at the end.

**What was the most difficult problem of this assignment and how did you work through it?**

I think it was hard to understand that I could change the inner html without having to return something inside of a function. I feel like the other functions that I have worked with generally don't affect the global variables unless they return a value that is then saved at the function call. It was a game changer once w3 schools taught me how to save a variable that is the id of an element in the html, and then change its innerHTML property.

**What features would you like to add to this tip calculator in the future to make it more robust?**

I would not want to show the final price until after the tip percentage radio button has been selected. Currently if someone types in a value for the initial price, then it shows that value as the final price, which isn't true.

Hilarious to realize that what I had just said was actually the first bullet point on the assignment and I didn't read it until just now. Glad I was able to add a necessary feature to this assignment to make it "more robust".

I currently have the width as fixed values, so if the screen was really small then the calculator would be going off the side of the page. So if I wanted to make it more robust then I could throw in some media queries to decrease the size of the calculator for an iPhone SE. Currently on the iPhone SE screen it is off centered which doesn't look super professional.

For maintenance purposes, my variable names are currently pretty bad. Updating those to make more sense to the next developer would probably be pretty useful. I tried to throw in as many comments as I could to the js file to try and combat that.
