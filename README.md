# Space Pirates : Destroyer

A 3D first-person shooter written in JavaScript by [Aaron Greenspan](https://github.com/afg419) and [Brant Wellman](https://github.com/brantwellman).
- Graphics rendered with a handwritten 3D engine.  

Play the game live: [Space Pirates : Destroyer](http://afg419.github.io/battlezone)

### Overview
  * See Help menu for keyboard controls
  * Tutorial for basic practice
    * Run into or shoot yellow "wealth" cubes for points
    * Run into purple "message" cubes for basic instructions to navigate through level
  * Level 1 for more advanced flight practice
    * Red cubes are mines! Don't hit them
    * White cube at the end of the level shoots back! Shoot it before it shoots you
  * Level 2 to test your flight skills
    * Multiple white "turret" cubes attack you while you collect all the wealth cubes
  * Level 3 introduces blue "attack" cubes
    * Collect all of the wealth boxes and shoot the attack cubes before they take you out

## Level 1
![](http://i.imgur.com/2JlyecP.png)  

## Level 2
![](http://recordit.co/ZZaU99zS7r.gif)

## Tools
  * JavaScript / ES6
  * [p5 JS library](https://p5js.org/) - for sketching custom 3D graphics
  * Mocha / Chai for testing

## To install and setup locally

Install dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/index.html` to run the application.  

* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.
