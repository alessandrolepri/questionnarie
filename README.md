# UI Questionnarie


## DESIGN

* The design for the task is provided in Figma format (.fig) that can be accessed via the Figma web app or Figma desktop app.


## BUILD & LOGIC

* Please use the prototype provided to build a simple questionnaire application. In addition to all of the questionnaire steps, a responsive design has been provided for the splash screen as a guide. Please use your best judgement to build the rest of the step pages in a mobile responsive manner. Feel free to make design assumptions for the mobile version.
The app should take the user through a series of questions and present 1 out of 3 possible options -- the values table below has the score data -- culminating in a user’s wellness score. This value should then be multiplied by their age factor for a final wellness score and their resulting wellness status, ie **“Needs Help”**, **“Doing Well”**, or **“Champion”**.


## TECH REQUIREMENTS

- Please commit your code to a git repository and share with us a public link.A short readme with directions should be included.

- Please use a bundle/task runner like webpack/gulp/grunt to build your project.

- Please use a CSS preprocessor like SCSS/LESS.


## How to run

- Clone the repo on your local
- Install all dependencies **npm i**
- Build the file **npm run build**
- Launch the App on localhost:8000 **npm run serve**



## Approach

- Based on the Figma design I've started by creating all the pages required to complete the Questionnarie journey trying to be as possible as I could with the CSS propety provided by the Designer in the file.

- Once all the mark-up was done, I've started by implementing the style and testing on a 13" and 21" screen to double check how it will looks like.

- After completing the style I moved into the logic to make the questionnarie works based on the requirement given.



### Future Implementation

* The logic itself is fully working but I would like to refactor the functionlity to make it more clean and readable. I would probably implement the mobile responsive by refactor the entire HTML template.
All the images are screenshot at the moment, would be great to replace them with all the vectors.



### Command Line

- **dev**: "watch 'npm run build' src to look at all changes without run the build every time. After saved it will automatically compiled and create a new bundle.js. Refresh the page to see all changes

- **start**: "node index.js" to initialised server on localhost:4000 in this case
build to compile the file and create 'dist' folder to host bundle.js

- **nodemon**: " "nodemon node --trace-warnings ... index.js" " to initialised server on localhost:4000. This will also allow you to install any future packages and start using them without restarting the server every time

- **test** to check any error in the code while compiling

- **serve** to lanch the page on localhost:8000 and check all changing without running the build every saving







