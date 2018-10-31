Exercises: HTML and CSS Overview, HTML Structure 
==================================

### 1.  My First Page
* Create a Web Page like the following:

![img](https://raw.githubusercontent.com/MBrato/HTML-CSS-JavaScript/master/Web%20Fundamentals/03.HTML%20Structure/images/my_first_page.png)
* Constraints:
  * \<h1\> tag for heading
  * \<p\> tag for paragraph

### 2.  Definition Lists
* Create a Web Page like the following:

![img](https://raw.githubusercontent.com/MBrato/HTML-CSS-JavaScript/master/Web%20Fundamentals/03.HTML%20Structure/images/definition_lists.png)
* Constraints
  * \<h2\> tag for heading
  * \<dl\> tag for definition list


### 3.  Reversed Lists
* Create a Web Page like the following:

![img](https://raw.githubusercontent.com/MBrato/HTML-CSS-JavaScript/master/Web%20Fundamentals/03.HTML%20Structure/images/reversed_list.png)
* Constraints:
  * \<div\> with id=wrapper as a container
    * Background color: #dddddd;
    * Text color: #95191a;
    * Width container: 300px;
    * Border: 1px solid #000000;

### 4.  The Runners Home
* Create a Web Page like the following:

![img](https://raw.githubusercontent.com/MBrato/HTML-CSS-JavaScript/master/Web%20Fundamentals/03.HTML%20Structure/images/the_runners_home.png)
* Constraints:
  * \<div\> with id=wrapper as a container
    * Width container: 400px;
    * Background color: #dddddd;
    * Border: 1px solid #000000;
    * Margin Left: 20px;
    * Padding: 10px;
  * \<p\> tag for paragraph + font-size: 18px;
  * \<em\> tag for italic text

### 5.  Simple Navigation Bar
* Create a Web Page like the following:

![img](https://raw.githubusercontent.com/MBrato/HTML-CSS-JavaScript/master/Web%20Fundamentals/03.HTML%20Structure/images/simple_nav_bar_1.png)

![img](https://raw.githubusercontent.com/MBrato/HTML-CSS-JavaScript/master/Web%20Fundamentals/03.HTML%20Structure/images/simple_nav_bar_2.png)
* Constraints:
  * \<body\>
    * font-family: "Lato", sans-serif;
  * \<nav\> tag as container
  * Use unordered list in the navigation section
    * Padding: 0;
    * Heigth: 40px;
    * Line Heigth: 30px;
    * Background Color: #84b3ad;
  * \<li\> tag for list item
    * Width: 100px;
    * Margin: 0 5px;
    * Padding: 5px 0;
    * Cursor: pointer;
    * Text color: #ffffff;
    * Center the text
  * \<li\> on hover
    * Background Color: #135e3e;
    * Padding: 5px 0;
  * Put a hyperlink in each list item in the navigation bar.
  * Remove the text decoration and fix its color:
    * Put “text-decoration: none;” for the “li a” CSS selector.
    * Change the color for the “li a” CSS selector.

* Your HTML file might look like this:
```html 
<!DOCTYPE html>
<html>
<head>
    <title>Simple Navigation Bar</title>
    <link rel="stylesheet" href="simple-nav-bar.css">
</head>
<body>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <--TODO: put the rest of list item here -->
    </ul>
  </nav>
</body>
</html>

```
* Your CSS file might look like this:
```css 
@font-face … (include the code from https://fonts.googleapis.com/css?family=Lato:300,400,900)
body { // TODO }
ul { // TODO }
li { // TODO }
li a { // TODO }
li:hover { // TODO }
```
### 6.  Simple Article 
* Create a Web Page like the screenshot below:

![img](https://raw.githubusercontent.com/MBrato/HTML-CSS-JavaScript/master/Web%20Fundamentals/03.HTML%20Structure/images/simple_article.png)
* Constraints:
  * \<body\>
    * font-family:"Lato", sans-serif;
    * "https://fonts.googleapis.com/css?family=Lato:300,400,900"
  * Content
    * Width: 550px;
    * Border radius: 15px;
    * Center the content
    * Padding: 25px;
    * Background color: #fafafa;
    * box-shadow: 10px 11px 35px -14px rgba(0,0,0,0.54);
  * \<h1\> tag for heading
    * Margin bottom: 0;
    * Padding: 10px;
    * Text center
    * Letter spacing: 5px;
  * Image
    * Width: 200px;
    * Border radius: 50%;
    * Margin: 15px;
    * Border: 5px dotted #8b603d;
    * Use “left floating” for the image: https://css-tricks.com/almanac/properties/f/float/
  * Paragraphs
    * Text size: 14px;
    * Use “text-align: justify” to align the text left and right (learn more at http://www.w3schools.com/css/css_text.asp).

### 7.  Table 
* Create a Web Page like the following:

![img](https://raw.githubusercontent.com/MBrato/HTML-CSS-JavaScript/master/Web%20Fundamentals/03.HTML%20Structure/images/table.png)
* Constraints:
  * Font-family: "Lato", sans-serif;
  * Table
    * Text color: #333333;
    * Border spacing: none;
    * Center the table
  * Table headings
    * Text color: #ffffff;
    * Background color: #90b4d6;
    * Center the text
    * Letter spacing: 2px;
  * Table heading for bold text
    * Padding: 5px 30px 5px 10px;
    * Text size: 18px;
    * Margin: 0;
    * Text align: left;
    * Background color: #84b3ad;
  * Table data
    * Padding: 5px 30px 5px 10px;
    * Text size: 18px;
    * Margin: 0;
    * Text align left
    * Background color: #84b3ad;
    * Width: 150px;
