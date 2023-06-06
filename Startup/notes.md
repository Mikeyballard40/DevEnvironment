Notes for Midterms and Exams

# General Notes

## README.md
https://github.com/Mikeyballard40/Startup

## Vocabulaty
Algorithm 
    finiteness
        must terminate
    definiteness
        each step is precisely stated
    effective coputability
        each step can be carried out 
    ***
        start with a problem
        decompose each task into few simple subtasks
        continue to decompose subtasks until we get to something the computer can do


resolution operator
    using classes!!

class Vehicle
{
    public: //this allows it to be accessed in the global frame
    void drive() { cout << "Vehicle"; }
};
class Car
{
    public: 
    void drive() { cout << "Car"; }
};
Class BMW : Public Car, Public Vehicle
{}
int main(_____)
{
    BMW bmw;
    bmw.drive();            //Error!
    bmw.Car::drive(); //Drive Car
    bmw.Vehicle::drive(): //Drive Vehicle

}



## document Formating
### Basic writing and formatting syntax
https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

## Pushing and Pulling Files
tools in "source control"(third section on the left) can be used to overide permission issues presented while pushing and pulling in the terminal


## HTML
### External Media
#### Image 
```
<img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />
```
alt describes the image
<img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />

Another Example:
```
<!DOCTYPE html>
<html lang="en">
  <body>
    <main>
      <h1>Hello world</h1>
      <p class="introduction">
        HTML welcomes you to the amazing world of
        <span class="topic">web programming</span>.
      </p>
      <p class="question">What will this mean to you?</p>
      <p class="assignment">Learn more <a href="instruction.html">here</a>.</p>
      <p class="image">
        image of a dog
        <img src="https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=1200:*">
    </main>
  </body>
</html>
```
#### Audio
```
<audio controls src="testAudio.mp3"></audio>
```
controls allows the user to control when the audio starts and stops.

#### Video
```
<video controls width="300" crossorigin="anonymous">
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
</video>
```
note that you can replace controls with autoplay to switch from user control to automatic. 


### Internal Media
```
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="red" style="border: 1px solid #000000">
  <circle cx="150" cy="100" r="50" />
</svg>
```
This creates a canvas type with SVG. 





writing in body

Character	Entity
```
&	&amp;
<	&lt;
>	&gt;
"	&quot;
'	&apos;
😀	&#128512;
```

## creating an HTTPS secure network

1. start by creating your http://DomainName.com
2. ssh -i [key pair file] ubuntu@[yourdomainnamehere]
3. sudo vi Caddyfile
4. replace :80 and yourdommainname with your domain name
5. save and exit (esc and :wq)
6. restart with comand >sudo service caddy restart

# CSS

## Associating CSS with HTML

use the HTML link element to create a hyperlink reference to an external file containing CSS rules. The link element must appear in the head element of the document.
```
<link rel="stylesheet" href="styles.css" />
<a href="https://example.com">x</a>
```

## box model
When you apply styles, you are applying them to a region of the display that is a rectangular box. Within an element's box there are several internal boxes. The innermost box holds the element's content. This is where things like the text or image of an element is displayed. Next comes the padding. The padding will inherit things like the background color. After padding is the border, which has properties like color, thickness and line style. The final box is the margin. The margin is considered external to the actual styling of the box and therefore only represents whitespace.

<img alt="boxes" src=https://github.com/webprogramming260/.github/raw/main/profile/css/introduction/cssBoxModel.jpg />

## Selectors
Take this sparce HTML code which provides a simple layout for a physics and chem class:
```
 <body>
  <h1>Departments</h1>
  <p>welcome message</p>
  <section id="physics">
    <h2>Physics</h2>
    <p class="introduction">Introduction</p>
    <p>Text</p>
    <p class="summary">Summary</p>
  </section>
  <section id="chemistry">
    <h2>Chemistry</h2>
    <p class="introduction">Introduction</p>
    <p>Text</p>
    <p class="summary">Summary</p>
  </section>
</body>
```
<img alt="image" src=https://github.com/webprogramming260/.github/raw/main/profile/css/selectors/cssSelectorBase.jpg />
this is the goal:
<img alt="final image" src=https://github.com/webprogramming260/.github/raw/main/profile/css/selectors/cssSelectorFinal.jpg>

### element type
```
body {
  font-family: sans-serif;
}
```
```
h1 {
  border-bottom: thin black solid;
}

section {
  background: #eeeeee;
  padding: 0.25em;
  margin-bottom: 0.5em;
}
```
### combinators
```
section h2 {
  color: #004400;
}
```
note that for any section (h1 or h2) it will change the style of every h2 header!
```
h2 ~ p {
  padding-left: 0.5em;
}
```
this adds white space to the left of the text 
### class selector
```
.summary {
  font-weight: bold;
}
```
any paragraph with the class='summary' will now be bolded!

### ID selector
```
#physics {
  border-left: solid 1em purple;
}
```
sections with an ID='physics' will now have a left purple boarder

### pseudo selectors
```
section:hover {
  border-left: solid 1em purple;
}
```
left boarder turns purple when I hover my mouse over it. 

## CS Declarations


| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis 

### units

You can use a variety of units when defining the size of a CSS property. For example, a the width of an element can be defined using absolute units such as the number of pixels (px) or inches (in). You can also use relative units such as a percentage of the parent element (50%), a percentage of a minimum viewport dimension (25vmin), or a multiplier of the size of the letter m (1.5rem) as defined by the root element.

| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

### color

| Method       | Example                   | Description                                                                                                                                                                                                       |
| ------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword      | `red`                     | A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)                                                                                                                                            |
| RGB hex      | `#00FFAA22` or `#0FA2`    | Red, green, and blue as a hexadecimal number, with an optional alpha opacity                                                                                                                                      |
| RGB function | `rbg(50%, 255, 128, 0.5)` | Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage                                                                                                       |
| HSL          | `hsl(180, 30%, 90%, 0.5)` | Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is. |

### Fonts

There are four major families of fonts: Serif, san-serif, fixed, and symbol. A serif is a small stroke attached to the ends of a character's major strokes. Serif fonts have the extra strokes, san-serif fonts do not. Fixed fonts characters all are the same size. This is useful for lining up text when doing things like coding or display tabular data. Symbol fonts represent non-language characters such as arrows or emojis.

Other important font info:
```
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.woff2');
}

p {
  font-family: Quicksand;
}
```
used to import additional fonts
```
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```
used to host other fonts from a website

### Animation

We have a paragraph of centered text and we want it to zoom in until its size is 20% of the view height in 3 seconds.
```
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}
```
animation-name must be included for the keyframe reference as seen below:
```
@keyframes demo {
  from {
    font-size: 0vh;
  }

  to {
    font-size: 20vh;
  }
}
```
we can add to this reference above by having it bounce out at us link so:
```
@keyframes demo {
  from {
    font-size: 0vh;
  }
  95%{
    font-size: 21vh;
  }
  to {
    font-size: 20vh;
  }
}
```

## Responsive design

change your display based on the size of the window.

| Value  | Meaning                                                                                                                      |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| none   | Don't display this element. The element still exists, but the browser will not render it.                                    |
| block  | Display this element with a width that fills its parent element. A `p` or `div` element has block display by default.        |
| inline | Display this element with a width that is only as big as its content. A `b` or `span` element has inline display by default. |
| flex   | Display this element's children in a flexible orientation.                                                                   |
| grid   | Display this element's children in a grid orientation.                                                                       |

one option and example:

``` 
html
<div class="none">None</div>
<div class="block">Block</div>
<div class="inline">Inline1</div>
<div class="inline">Inline2</div>
<div class="flex">
  <div>FlexA</div>
  <div>FlexB</div>
  <div>FlexC</div>
  <div>FlexD</div>
</div>
<div class="grid">
  <div>GridA</div>
  <div>GridB</div>
  <div>GridC</div>
  <div>GridD</div>
</div>
```
![CSS default div display](cssDisplayDefault.jpg)

another option is as follows:
```
css
.none {
  display: none;
}

.block {
  display: block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
  flex-direction: row;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```
![CSS display](cssDisplay.jpg)
### VIEWPORT META TAG ******
When smart mobile devices started gaining popularity they began to be used to view websites. However, the websites were optimized for desktop displays and not little tiny mobile screens. To solve this mobile browsers automatically started scaling the website so that it looked better on a small screen. Unfortunately, as web applications started being responsive to the screen size, the mobile browser's scaling got in the way. The solution is to include a meta tag in the head element of all your HTML pages. This tells the browser to not scale the page.
```
<meta name="viewport" content="width=device-width,initial-scale=1" />
```
### Float
to have text adjust to the size of your screen:
HTML: you must include this before your text.
```
<body>
  <aside>Aside</aside>
  <p>text</p>
</body>
```
and in CSS you must include this - specified to your unique parameters:
```
aside{
  padding: 3em;
  margin: 0.5em;
  border: black solid thin;
  float: right;
}
```
### Media Queries
This selector dynamically detects the size and orientation of the device and applies CSS rules to represent the structure of the HTML in a way that accommodates the change.

A media query takes one or more predicates separated by boolean operators. In our case we simply want to know if the screen is oriented in portrait mode (short side on top) or not. 
```
@media (orientation: portrait) {
  div {
    transform: rotate(270deg);
  }
}
```

![CSS Media orientation](cssMediaOrientation.gif)

You can also use media queries to make entire pieces of your application disappear, or move to a different location. For example, if we had an aside that was helpful when the screen is wide, but took up too much room when the screen got narrow, we could use the following media query to make it disappear.
```
@media (orientation: portrait) {
  aside {
    display: none;
  }
}
```

![CSS Media orientation](cssMediaDisappear.gif)


## CSS Grid

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout
https://gridbyexample.com/

We start with a container element that has a bunch of child elements.

```
<div class="container">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>
```

this is the code which adapts the container to the size of window

```
.container {
  display: grid; //all children of this element will be in grid flow
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); //specifies the layout of the grid colomns
  // 300px is the minimum width for each box, 1fr means fractional unit. splits boxes and puts max boxes in window.
  grid-auto-rows: 300px; // all boxes 300px high
  grid-gap: 1em; // 1em space between all boxes
}
```

https://codepen.io/leesjensen/pen/GRGXoWP


## CSS Flex

- [MDN Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [CSS Tricks Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy](https://flexboxfroggy.com/)

The flex display layout is useful when you want to partition your application into areas that responsively move around as the window resizes or the orientation changes. In order to demonstrate the power of flex we will build an application that has a header, footer, and a main content area that is split into two sections, with controls of the left and content on the right.

HTML format for a website with a header, controls, content, and footer.
```
<body>
  <header>
    <h1>CSS flex &amp; media query</h1>
  </header>
  <main>
    <section>
      <h2>Controls</h2>
    </section>
    <section>
      <h2>Content</h2>
    </section>
  </main>
  <footer>
    <h2>Footer</h2>
  </footer>
</body>
```

```
body {
  display: flex; //all children of this element will be in flex
  flex-direction: column; // the direction of this flex is vertical movement ** Note flex-direction of main{} //ontop
  margin: 0; // no margins, no spaces between boxes, no white space
  height: 100vh;
}
```
To get the division of space for the flexbox children correct we add the following flex properties to each of the children.

- header - flex: 0 80px - Zero means it will not grow and 80px means it has a starting basis height of 80 pixels. This creates a fixed size box.
- footer - flex: 0 30px - Like the header it will not grow and has a height of 30 pixels.
- main - flex: 1 - One means it will get one fractional unit of growth, and since it is the only child with a non-zero growth value, it will get all the remaining space. Main also gets some additional properties because with want it to also be a flexbox container for the controls and content area. So we set its display to be flex and specify the flex-direction to be row so that the children are oriented side by side.

```
header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
}

footer {
  flex: 0 30px;
  background: hsl(180, 10%, 10%);
}

main {
  flex: 1;
  display: flex;
  flex-direction: row; //side by side
}
```

Now we just need to add CSS to the control and content areas represented by the two child section elements. We want the controls to have 25% of the space and the content to have the remaining. So we set the flex property value to 1 and 3 respectively. That means that the controls get one unit of space and the content gets three units of space. No matter how we resize things this ratio will responsively remain.

```
section:nth-child(1) {
  flex: 1;
  background-color: hsl(180, 10%, 80%);
}
section:nth-child(2) {
  flex: 3;
  background-color: white;
}
```

### media query

use similar code to accomidate for portrait mode on phones. 

```
@media (orientation: portrait) { // the two side by side boxeswill now go on top of eachother.
  main {
    flex-direction: column;
  }
}

@media (max-height: 700px) { // once the height is below 700px it will remove the header and footer
  header {
    display: none;
  }
  footer {
    display: none;
  }
}
```

[CSS flex](cssFlex.gif)

### Notes from assignments

here is some code for a basic format:
```
<header>
     <div>home</div>
      <div>play</div>
     <div>about</div>
  </header>
  <main>
    <div>Login</div>
    <div>Password</div>
  </main>
  <footer>
    <div>GitHub</div>
  </footer>
  ```
the line div{} allows you to manipulate all elements found within div.
```
div {
  padding: 0 0.5em;
}
```
this code separates all elements in the same group defined by div.

* you must include "display: flex;" in each group
* flex: #; will set it to a certain proportion of the page
  * flex: 1; flex: 5; flex: 1; - this will set the first to 1/7 of the page, the second to 5/7 of the page, and the third to 1/7 of the page
* insead of ^^^ you can also set it to no flex 
  * flex 0 #px. 
* align-items: means virtical alignment
  * start, center, end
* justify-content: means horizontal alignment
  * start, center, end
[Example](https://codepen.io/leesjensen/pen/abamMqL)

# CSS Framework

## Bootstrap

[Getting started with Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

to include Bootstrap you must have this code:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" //if using java include jv instead of css
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    ...
  </body>
</html>
```
### Examples of using Bootstrap

* button:
```
<button type="button" class="btn btn-primary">Bootstrap</button>
```
* Great example of bootstram in HTML [here](https://codepen.io/leesjensen/pen/JjZavjW)


# Java notes
## functions
```
function join(a, b) {
  return a + ' ' + b;
}

console.log(join('Hello', 'world'));
// OUTPUT: Hello world
```

* Log
The basic usage of the console object is to output a log message.
```
console.log('hello');
// OUTPUT: hello
```
You can create formatted messages in the log parameter.
```
console.log('hello %s', 'world');
// OUTPUT: hello world
```
You can even specify CSS declarations in order to style the log output.
```
console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
// OUTPUT: JavaScript Demo //in large green text
```

* Timers
If you are trying to see how long a piece of code is running you can wrap it with time and timeEnd calls and it will output the duration between the time and timeEnd calls.
```
console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
Count
```
To see how many times a block of code is called you can use the count function.
```
console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1
```
## Java and HTML
ou can insert JavaScript into HTML either by directly including it in the HTML within the content of a <script> element, or using by the src attribute of the script element to reference an external JavaScript file.

index.js
```
function sayHello() {
  console.log('hello');
}
```
index.html
```
<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
```
## Java conditionals
Getting unexpected results is especially common when dealing with the equality operator.
```
1 == '1';
// OUTPUT: true
null == undefined;
// OUTPUT: true
'' == false;
// OUTPUT: true
```
⚠ The unexpected results happen in JavaScript because it uses complex rules for defining equality that depend upon the conversion of a type to a boolean value. You will sometimes hear this referred to as falsy and truthy evaluations. To remove this confusion, JavaScript introduced the strict equality (===) and inequality (!==) operators. The strict operators skip the type conversion when computing equality. This results in the following.
```
1 === '1';
// OUTPUT: false
null === undefined;
// OUTPUT: false
'' === false;
// OUTPUT: false
```
Other conditional***
```
if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
```
You can also use the ternary operator. This provides a compact if else representation.
```
a === 1 ? console.log(1) : console.log('not 1');
```
You can use boolean operations in the expression to create complex predicates. Common boolean operators include && (and), || (or), and ! (not).
```
if (true && (!false || true)) {
  //...
}
```
## Java looping
```
for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1
```
```
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
```
```
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
```
```
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
```
```
const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1
```
```
let i = 0;
while (true) {
  console.log(i);
  if (i === 0) {
    i++;
    continue;
  } else {
    break;
  }
}
// OUTPUT: 0 1
```

## Java Strings
```
'quoted text'; // " also works

const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text
```
```
const s = 'Example:조선글';

console.log(s.length);
// OUTPUT: 11
console.log(s.indexOf('조선글'));
// OUTPUT: 8
console.log(s.split(':'));
// OUTPUT: ['Example', '조선글']
console.log(s.startsWith('Ex'));
// OUTPUT: true
console.log(s.endsWith('조선글'));
// OUTPUT: true
console.log(s.toLowerCase());
// OUTPUT: example:조선글
```

## Java Functionality
```
function hello(who) {
  who.count++;
  console.log('hello ' + who.name);
}

hello({ name: 'world', count: 0 });
// OUTPUT: hello world
```
```
function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish
```
Anonymous functions
```
// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
```
* ARROW FUNCTION

This syntax replaces the need for the function keyword with the symbols => placed after the parameter declaration. The enclosing curly braces are also optional.

This is a function in arrow syntax that takes no parameters and always returns 3.
```
() => 3;
```
The following two invocations of sort are equivalent.
```
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
```
NOTE
```
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
```

## JAVA regular expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

Regular expression support is built right into JavaScript. If you are not familiar with regular expressions, you can think of them as textual pattern matchers. You use a regular expression to find text in a string so that you can replace it, or simply to know that it exists.

You can create a regular expression using the class constructor or a regular expression literal.
```
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```
The string class has several functions that accept regular expressions. This includes match, replace, search, and split. For a quick test to see if there is a match you can use the regular expression object's test function.
```
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
```

## JAVA Deconstructors
```
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
```
```
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
```
Note that all of the above examples created new constant variables, but you can also use destructuring to reassign existing variables.
```
let a = 22;

[a] = [1, 2, 3];

console.log(a);
// OUTPUT: 1
```

## Java Objects
```
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
```
```
const obj = new Object();

obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
```
other uses such as self reference and variable definition
```
function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```
## JAVA Classes and class inheritance
```
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```
```
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer
```


## This

Global - When this is referenced outside a function or object it refers to the globalThis object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
Function - When this is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running is JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
Object - When this is referenced in a object it refers to the object.
```
'use strict';

// global scope
console.log('global:', this);
console.log('globalThis:', globalThis);

// function scope for a global function
function globalFunc() {
  console.log('globalFunctionThis:', this);
}
globalFunc();

// object scope
class ScopeTest {
  constructor() {
    console.log('objectThis:', this);
  }

  // function scope for an object function
  objectFunc() {
    console.log('objectFunctionThis:', this);
  }
}
```
new ScopeTest().objectFunc();
Running the above code in a browser results in the following.
```
global: Window
globalThis: Window
globalFunctionThis: undefined
objectThis: ScopeTest
objectFunctionThis: ScopeTest
```

* Global and closure
```
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: function () {
    console.log(this.x);
  },
};

obj.f();
// OUTPUT: object
```

## modules
```
alert.js

export function alertDisplay(msg) {
  alert(msg);
}
```
You can import the module's exported function into another module using the import keyword.
```
main.js

import { alertDisplay } from './alert.js';

alertDisplay('called from main.js');
```
```
<script type="module">
  import { alertDisplay } from './alert.js';
  alertDisplay('module loaded');
</script>\
```
If we want to use a module in the global scope that our HTML or other non-module JavaScript is executing in, then we must leak it into the global scope by either attaching an event handler, or explicitly adding a function, to the global window object. In the example below, we expose the alertDisplay imported module function by attaching it to the global JavaScript window object so that it can then be called from the button onclick handler. We also expose the module function by attaching a keypress event.

index.html
```
<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;

      document.body.addEventListener('keypress', function (event) {
        alertDisplay('Key pressed');
      });
    </script>
    <button onclick="btnClick('button clicked')">Press me</button>
  </body>
</html>
```

* Modifying the DOM

The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.
```
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```
To delete elements call the removeChild function on the parent element.
```
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
```
* Injecting HTML
The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first div element in the DOM and replaces all the HTML it contains.
```
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
```
However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, monitor activity, and steal credentials. The example below shows how the img element can be used to launch an attack as soon as the page is loaded.
```
<img src="bogus.png" onerror="console.log('All your base are belong to us')" />
```
If you are injecting HTML, make sure that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using innerHTML.

## Promise functions - running multiple line 
 the standard JavaScript setTimeout function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired.
```
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
```

* rejected vs accepted:
```
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```
If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the pending state.
```
console.log(coinToss);
// OUTPUT: Promise {<pending>}
```
If you then wait ten seconds and the log the coinToss promise object again, the state will either show as fulfilled or rejected depending upon the way the coin landed.
```
console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
```
* then, catch, final
 The then function is called if the promise is fulfilled, catch is called if the promise is rejected, and finally is always called after all the processing is completed.

 this code makes it so that 10% of the time the coin falls off of the table. 
 ```
 const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
```
```
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```

## await and async

take this code
```
const coinToss = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
      } else {
        reject('fell off table');
      }
    }, 1000);
  });
};
```
option 1: then catch finally
```
coinToss()
  .then((result) => console.log(`Toss result ${result}`))
  .catch((err) => console.error(`Error: ${err}`))
  .finally(() => console.log(`Toss completed`));
```
option 2: try, catch 
```
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```
*** Understanding async ***
```
function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: moo
```
```
async function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: Promise {<fulfilled>: 'moo'}
```
```
async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}
console.log(cow());
// OUTPUT: Promise {<pending>}
```
These three options are great. they are useless without the await function. here is how it is used.
```
console.log(cow());
// OUTPUT: Promise {<pending>}
```
compared to the following
```
console.log(await cow());
// OUTPUT: moo
```
We can demonstrate await in action with the cow promise from above. If we log the output from invoking cow then we see that the return value is a promise. However, if we prefix the call to the function with the await keyword, execution will stop until the promise has resolved, at which point the result of the promise is returned instead of the actual promise object.



## Midterm Review Notes

* DNS subdomain:
  In the Domain Name System (DNS) hierarchy, a subdomain is a domain that is a part of another (main) domain. For example, if a domain offered an online store as part of their website example.com , it might use the subdomain shop.example.com
  to point to another DNS record use CNAME

* DOM textContent property:
  Sets the child text for an element

* div creates a division element

* chmod +x deploy.sh is a console command that makes a script executable

* reg expressions:
  .../i makes it the regex case-INSENSITIVE

* you can use @import url('url.com') to lead fonts from google

* const f = y => ++y; console.log(f(3)) will return 4
* const f = y => y++; console.log(f(3)) will return 3

* CSS box model outside going in: margine, border, padding, content

* look at this code:
```
let a = [1, 2, 3];
let e = a.map(number => {
  return ('a' + number)
});
console.log(e);
// OUTPUT: ['a1', 'a2', 'a3']
```

* HTML tags:
  ```
  <p> HTML Text Tags - Paragraph
  <h1> HTML Text Tags - Heading 1 - 6
  <strong> HTML Text Tags - Strong
  <em> HTML Text Tags - Emphasis
  <abbr>HTML Text Tags - Abbreviation
  <address> HTML Text Tags - Contact Information
  <bdo> HTML Text Tags - Override The Current Text Direction
  <blockquote> HTML Text Tags - Content From Another Source
  <cite> HTML Text Tags - Title Of The Work, Book, Website
  <q> HTML Text Tags - Inline Quotation
  <code> HTML Text Tags - Display A Part Of Programming Code
  <ins> HTML Text Tags - Text Inserted
  <del> HTML Text Tags - Text Deleted From The Document
  <dfn> HTML Text Tags - Term Defined Within A Sentence/Phrase
  <kbd> HTML Text Tags - Keyboard Input
  <pre> HTML Text Tags - Preformatted Text
  <samp> HTML Text Tags - Sample Output Of A Computer Program
  <var> HTML Text Tags - Variable Name Used In Mathematical Or Programming Context
  <br> HTML Text Tags - Single Line Break
  <div> HTML Text Tags - Division
  <a> HTML Link Tags - Anchor Tag For A Line
  <base> HTML Link Tags - Base Url For All Relative Url Within The Document
  <img> HTML Image And Object Tags - Image
  <area> HTML Image And Object Tags - Area Of An Image Map
  <map> HTML Image And Object Tags - Image Map
  <param> HTML Image And Object Tags - Parameter For An <Object> Element
  <object> HTML Image And Object Tags - Embed An Object
  <ul> HTML List Tags - Unordered List
  <ol> HTML List Tags - Ordered List
  <li> HTML List Tags - List
  <dl> HTML List Tags - Description List
  <dt> HTML List Tags - Term In Description List
  <dd> HTML List Tags - Definition/Description Of A Term In Description List
  ```

* selecting HTML elements using ID, Class, and attribute selectors in css
  ```
  <html>
    <head>
    </head>
    <body>
      <header id="header" class="content-width">
      ...
      </header>
      <main id="content">
      ...
      </main>
    </body>
  </html>
  ```
  ```
  #header,
  #content{}

  .content-width{}
  ```

* JSON functions:
 { "x":3}

