## Build process for alljamin.github.io

---

### System preparation
1. Clone or [download](https://github.com/alljamin/alljamin.github.io/archive/master.zip) this repository
2. Get [Node.js](https://nodejs.org/)
3. In the temrinal go to the directory with project and type ```npm install``` ([fix permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions), so you don't have to type ```sudo``` every time). This can take some time as the latest version of node installs dependencies in "flat style", see [Stackoverflow discussion](http://stackoverflow.com/questions/33794319/too-many-npm-modules-are-installed-after-execute-npm-install) on the reason behind this. 
4. Globally install [Gulp](http://gulpjs.com/) `npm install -g gulp` 
5. To initiate the project type `gulp` in terminal pointing to the project directory. 

*NOTE:*
In my config Browsersync runs on the port 8080, if this port is occupied by another application on your system change it accordingly for example to 8888.

### Links you might find helpful
- [Gulp for beginners on CSS-Tricks](https://css-tricks.com/gulp-for-beginners/)

### References
- I've used this [great guide](http://tobiasahlin.com/blog/css-trick-animating-link-underlines/) when creating `:hover` animations
