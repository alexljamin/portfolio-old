## alljamin.github.io/portfolio
Check out the [live demo](https://alljamin.github.io/portfolio). Feel free to use .psd mockup as an example for creating your own website. Do not forget to mention the author when using it in your projects.

### Getting started
1. Clone or [download](https://github.com/alljamin/alljamin.github.io/archive/master.zip) this repository.
2. Get [Node.js](https://nodejs.org/).
3. In the terminal go to the directory with project and type `npm install` ([fix permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions), so you don't have to type `sudo` every time). Installing Node can take some time as the latest version installs dependencies in "flat style", see [Stackoverflow discussion](http://stackoverflow.com/questions/33794319/too-many-npm-modules-are-installed-after-execute-npm-install) on the reason behind this. 
4. If you do not have [Gulp](http://gulpjs.com/) installed, install it globally: `npm install -g gulp`.
5. To initiate the project type `gulp` in terminal pointing to the project directory.

*NOTES:*
- In my `gulpfile.js` config Browsersync runs on port 8080, if this port is occupied by another application on your system change it accordingly, for example to 8888.
- Instead of folder named `dist` I have `docs` folder. The main reason behind this is that GitHub pages are only able to recognise content inside the folder explicitly named `docs`. If you're not planning to use GitHub pages then feel free to create your own folder structure in the forked repo. When renaming the folder structure don't forget to update your `gulpfile.js` with a relevant naming.

### Links you might find helpful
- [Gulp for beginners on CSS-Tricks](https://css-tricks.com/gulp-for-beginners/)

### References
- I have used these [great snippets](http://tobiasahlin.com/blog/css-trick-animating-link-underlines/) when creating `a:hover` animations
- Social media icons are provided by [Flaticon](http://www.flaticon.com/): [LinkedIn icon](http://www.flaticon.com/free-icon/linkedin-logo_34227#term=linkedin&page=1&position=6), [Medium icon](https://medium.design/logos-and-brand-guidelines-f1a01a733592#.6mfd5kto4), [GitHub icon](http://www.flaticon.com/free-icon/github-logo_25231#term=github&page=1&position=2), [Twitter icon](http://www.flaticon.com/free-icon/twitter_23931#term=twitter&page=1&position=14), [Behance icon](http://www.flaticon.com/free-icon/behance-logo_34364#term=behance&page=1&position=6) and [Dribbble icon](https://dribbble.com/branding) 
