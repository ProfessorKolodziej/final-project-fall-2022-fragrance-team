# Final Project (Fragrance Team)

# Demo
https://user-images.githubusercontent.com/113561009/206866610-589e1258-1be3-4221-8202-19e55bfabd76.mp4

# ISSUE with the project link
If you open the link in this github page, you would notice that some parts of our website is not working.
And it's because after our work is being compiled by this webpack using "npm run deploy", we lose part of our code in our js file. The following video and description will show how I try to reproduce and troubleshoot the issue (but failed, since the root cause is the webpack configuration)

https://user-images.githubusercontent.com/113561009/206866617-20199896-f942-48c2-af8e-aeb4e808a9d2.mp4



I understand all the projects in this class are using webpack to help deploy directly on github for instructors to view. 
However, I do find some problems, especially for beginner like us:
1. Using the same webpack configuation don't seem to be an optimal solution for all different projects in this class.
2. The class covers basic knowledge of javascript and it is hard for us beginngers to debug, using this webpack configuration. Under this configuation, webpack links all the html page to just one JS file (scripts.js) directly. Ideally, each html page should have a different js file linked to it. Having all the programs for all different html pages in one file makes it hard to maintain for different features. It does not make sense to have all the functions for different html pages in just one JS file and using if conditions to separate them. However, this webpack configuation makes it hard to add or link js files in each html. 
3. When we use "npm run start" to run our project, there is no easy way to debug any errors in javascript. If you open developer tools, the JS file does not show up in Source. We have to open the html page directly from our file explorer to see relevant js files in developer tools to put break points and debug.
4. Most importantly, after trying to work around with this webpack (since we don't have enough knowledge to change the configuration), when we finally see everything working when running "npm run start" (as shown in the Demo above), the project link that is associated with "npm run deploy" does not have the right content of our work. To troubleshoot this issue, I opened developer tools, and as you can see in the video, npm somehow converted our "scripts.js" file into another js file "main.e6bc0eb515edc49db11b.js", and in the converted version, all the defined functions are missing, only the lines of code that can be directly executed (those associated with html elements) once the page is loaded are there.

Its just sad to see my working prototye failed in the npm deployed link because of the webpack configuration, of which I have no knowledge of how to change. 

TLDR: Please pull our repo, and try using "npm run start" on your local terminal to see how it works. Some part of our project fails to work inside the link because of the way webpack compiled our project. 

## Description

Please add a brief description of your final project here.

## Project Documentation

- [CM523 Final Project Guidelines &amp; Schedule](https://docs.google.com/document/d/1gvG9_1XYfp5-BVUgCDL9JDaZ3Acm6hHP7lDF3MqXPzY/edit#heading=h.61wsleacz62i)
- **Final code demo:** [Update this to show your Github Pages URL](https://professorkolodziej.github.io/cm523-final-project/). The URL will be `https://professorkolodziej.github.io/YOUR-REPOSITORY-NAME/`.
- Add any links to wireframes, mockups, your presentation, etc. here in a list so it is easy for you to find later.

## How to Use This Repository

Make sure you've [set up your development environment](https://docs.google.com/document/d/14usTx6c1L1MwSjRvwtk4spz40EDgHV50_53kKAiHzcM/edit?usp=sharing). Then, use the following commands to get up and running!

| Command | Description |
| --- | --- |
| **`npm install`** | Installs dependencies |
| **`npm run start`** | Start development. Edit your code in the `src` folder. |
| **`npm run lint`** | Checks all code for formatting and validation errors. |
| **`npm run fix`** | Checks all code for formatting and validation errors and attempts to automatically fix them. |
| **`npm run test`** | Runs autograding, which will check for linting, formatting, and that you have updated all placeholder content. |
| **`npm run build`** | Create a production-ready build of your code to the `dist` folder. |
| **`npm run deploy`** | Builds and deploys your code to Github Pages. |

## Development Cheat Sheet

| What you want to do | Steps to take | When to do it |
| --- | --- | --- |
| **Set up the project** | <ol><li><a href="https://docs.google.com/document/d/14usTx6c1L1MwSjRvwtk4spz40EDgHV50_53kKAiHzcM/edit#heading=h.5klsj6ujitbt">Clone this repository</a></li><li>Open Terminal, `cd` to your project folder, and run `npm install`</li><li>Run `npm run start` to test things out!</li></ol> | Just once, when you start the project |
| **Write new code** | <ol><li>Decide what you want to add to the code. For example, you might want to add styles for a map. Try to keep it focused!</li><li><a href="https://docs.google.com/document/d/14usTx6c1L1MwSjRvwtk4spz40EDgHV50_53kKAiHzcM/edit#heading=h.d45w7bwabc7e">Create a branch</a> to help keep this code separate from team members' code.</li><li>Navigate to your project in terminal and run `npm run start` to start coding!</li><li><a href="https://docs.google.com/document/d/14usTx6c1L1MwSjRvwtk4spz40EDgHV50_53kKAiHzcM/edit#heading=h.wbv8m5wypm86">Commit your changes</a> frequently. Multiple commits are encouraged!</li></ol> | Each time you want to add a new feature |
| **Share your code or get feedback** | <ol><li>Make sure you've <a href="https://docs.google.com/document/d/14usTx6c1L1MwSjRvwtk4spz40EDgHV50_53kKAiHzcM/edit#heading=h.wbv8m5wypm86">committed your changes</a>.</li><li>Make sure you've created a branch! If you didn't, don't worry - <a href="https://docs.google.com/document/d/14usTx6c1L1MwSjRvwtk4spz40EDgHV50_53kKAiHzcM/edit#heading=h.6f5isvs2javn">that's fixable too</a>.</li><li><a href="https://docs.google.com/document/d/14usTx6c1L1MwSjRvwtk4spz40EDgHV50_53kKAiHzcM/edit#heading=h.3lyvv3ixplo8">Push your branch</a> up to Github.</li><li><a href="https://docs.google.com/document/d/14usTx6c1L1MwSjRvwtk4spz40EDgHV50_53kKAiHzcM/edit#heading=h.nhy8yvaw9s6l">Open a pull request</a>. Don't forget to assign yourself, and request a review from your team members in your Slack channel. If it's in progress, you can <a href="https://github.blog/2019-02-14-introducing-draft-pull-requests/">mark it as a draft</a>.</li></ol> | As soon as you're ready for feedback! Earlier is better. |
| **Merge your code** | <ol><li>Make sure you've <a href="https://docs.google.com/document/d/14usTx6c1L1MwSjRvwtk4spz40EDgHV50_53kKAiHzcM/edit#heading=h.nhy8yvaw9s6l">opened a pull request</a> and asked for a code review from someone on your team.</li><li>Once it's approved, you're ready to merge! <a href="https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request#merging-a-pull-request-on-github">Hit the big green button</a>.</li><li>Delete your branch on Github. Don't worry, you can always get it back!</li><li>Delete your local branch in Tower if you like. This helps keeps things clean.</li></ol> | When it's feeling good and stable! |
| **Deploy your code (make it live)!** | <ol><li>Make sure you've merged your code!</li><li>Switch to the main branch in Tower.</li><li>Make sure to pull in updates so you have the latest code.</li><li>Navigate to your project in terminal, and then run `npm run deploy`.</li><li>In 15 minutes or so, you should see an update on Github Pages! The URL will be `https://professorkolodziej.github.io/YOUR-REPOSITORY-NAME/` (you might want to edit this to show your link so this is easy for you to find later). Sometimes, it takes less time.</li></ol> | When you're ready to show your work to the world, or for a class check in! |

## Credits

This project is based on the [Student Site Boilerplate Template](https://professorkolodziej.github.io/student-site-boilerplate/). Check out the [documentation](https://github.com/ProfessorKolodziej/student-site-boilerplate/#student-site-boilerplate) for more information on prerequisites for using this repository.

## Browser Support

* Chrome _\(latest\)_
* Edge _\(latest\)_
* Firefox _\(latest\)_
* Internet Explorer Edge
* Opera _\(latest\)_
* Safari _\(latest\)_
