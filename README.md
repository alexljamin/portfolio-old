##alljamin.github.io/portfolio
Check out the [live demo](https://alljamin.github.io/portfolio).
Feel free to use .psd mockup as an exmaple for creating your own website. Don't forget to mention the author when using it in your projects.

### Getting started
1. Clone or [download](https://github.com/alljamin/alljamin.github.io/archive/master.zip) this repository
2. Get [Node.js](https://nodejs.org/)
3. In the temrinal go to the directory with project and type ```npm install``` ([fix permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions), so you don't have to type ```sudo``` every time). This can take some time as the latest version of node installs dependencies in "flat style", see [Stackoverflow discussion](http://stackoverflow.com/questions/33794319/too-many-npm-modules-are-installed-after-execute-npm-install) on the reason behind this. 
4. Globally install [Gulp](http://gulpjs.com/) `npm install -g gulp` 
5. To initiate the project type `gulp` in terminal pointing to the project directory. 

*NOTES:*
- In my config Browsersync runs on the port 8080, if this port is occupied by another application on your system change it accordingly for example to 8888.
- Instead of folder named `dist` I have `docs` folder. The main reason behind this is that GitHub pages are only able to recognise content inside the folder explicitly named `docs`. If you're not planning to use GitHub pages then feel free to create your own folder structure in the forked repo. When renaming the folder structure don't forget to update your `gulpfile.js` with a relevant naming.

### Links you might find helpful
- [Gulp for beginners on CSS-Tricks](https://css-tricks.com/gulp-for-beginners/)

### References
- I've used this [great guide](http://tobiasahlin.com/blog/css-trick-animating-link-underlines/) when creating `:hover` animations
- Social icons: [LinkedIn](http://www.flaticon.com/free-icon/linkedin-logo_34227#term=linkedin&page=1&position=6), [Medium](https://medium.design/logos-and-brand-guidelines-f1a01a733592#.6mfd5kto4), [GitHub](http://www.flaticon.com/free-icon/github-logo_25231#term=github&page=1&position=2), [Twitter](http://www.flaticon.com/free-icon/twitter_23931#term=twitter&page=1&position=14), [Behance](http://www.flaticon.com/free-icon/behance-logo_34364#term=behance&page=1&position=6) and [Dribbble](https://dribbble.com/branding) 
