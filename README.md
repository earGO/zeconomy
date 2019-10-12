This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


###How to run

1. Install all dependencies using `yarn` in root folder
2. Use `yarn start` script to run application. It will be available on local port 3000

### How to use
1. Choose a json file with the file structure. 
2. The file will be parsed and it's structure will be displayed
3. When file structure will be displayed, you'll also see a search input. Type anything. All files, who's name 
has string typed in input will be highlighted with yellow. 

### On tech stack
* redux storage to be able get what I need where I needed. 
* throttle-debounce to do some delay between user's input and actual highlighting of a filenames. 
* MaterialUI icons to display difference between folders and files. 
* styled-components for a small amount (I'm a fan of a styles-in-JS) of markup just to make things more readable. 

Since I've had really tough week, I've tried to make structure readable without being too hard on a design.

* logger middleware for debugging
* prettier for formatting

There will be warning in console regarding missing `key` prop in OneLevel component. That's I've used fragment syntax 
on a line 55, to get quick result with the markup. Those kinda don't work with a props :)
