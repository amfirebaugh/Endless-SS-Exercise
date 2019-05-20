## Endless

A single-page app built with React, a third-party API, and custom CSS. [Check it Out](https://amfirebaugh.github.io/Endless-SS-Exercise/)

### Requirements

For development you will need Node.js and NPM installed on your local environment. You should be able to run the following commands to verify you've done this:

````
$ node --version
v8.12.0

$ npm --version
6.4.1
````

### Installation

Find a location on your local environment to run the following:

````
$ git clone https://github.com/amfirebaugh/Endless-SS-Exercise.git
$ cd Endless-SS-Exercise/
$ npm install
````
Double check the axios package got properly installed by viewing it in the node modules directory.

### Configuration

If you are going to build and publish this, make sure to update the package.json "homepage" URL.

### Start

In development run the following to test and view changes locally:

````
$ npm start
````

### Building and Deploying

First: Make sure to double check the package.json "homepage" URL is accurate. Double check that you have the gh-pages package installed as well.

1. Start with an empty repository on your GitHub account. Completely empty.

2. Navigate to your local directory/project and run:

 ```` $ git init
 ````
 
3. Connect your remote GitHub repo with your local project by running:

 ```` $ git remote add origin https://github.com/gitname/REMOTEREPONAME.git
 ````

 Note: the link used in the line above should be the same URL you put in your package.json as your "homepage." This way GitHub knows where to publish your application.

4. Build and deploy your app to GitHub pages.

 ```` $ npm run deploy
 ````

 Note: This is all that's needed to deploy since there are already added scripts inside the package.json to also run an npm build.

5. Lastly, go into the settings of your repo/project in GitHub and make sure the "Source" your page is being built from is the gh-pages branch.

 (Optional) Go in and change the scripts so that it publishes to your master branch instead.
