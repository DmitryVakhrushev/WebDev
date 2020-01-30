
<style>
    :not(h1) {
        font-family: Consolas;
        font-size: 14px
    }

    h2 {
        font-family: Verdana;
        font-size: 14px;
        text-transform: uppercase;
        color:#c00000;
    }

</style>    

# Head First HTML and CSS (BOOK)

Element = Opening Tag + Content + Closing Tag (p.25)

## Add style using `<style>` tag
```html
    <head>
        <style type="text/css">
            body {background-color: #eaf3da;}
        </style>
    </head>
```
## Paragraph: 
`<p>This is a simple paragraph</p>`

---------------------------------------
## Image:
`<img src="images/myPic.png" alt="pictureAbout">`

- Images are stored on the Web servers, so every image on the Web has its own URL.
- Provide "alt" attribute if the image is not found
- Define width and height properties, so a broweser knows how to structure the page

http://www.starbuzzcoffee.com/images/corporate/ceo.jpg


* JPEG - use .jpg for photos and complex graphics (up to 16 million colors). Compress the file with losses.
* GIF - use .gif for images with solid colors, logos, and geometric shapes (up to 256 colors). Compression without losses. Allows the background to be transparent. Lines, logos, small text, solid colors.
* PNG - it can support both JPEG and GIF styles of images. It has also more advanced transparency features. It's a newer and better format.

---------------------------------------
## Links
Use the `<a>` element to create a hypertext Link to another page:

>`<a href="myPage.html">MyLinkLabel</a>`

`<br>` is a void element (no content by design). In those elements you need to use just an opening tag. Void comes from the Computer Science and means "No Value"

```html
<blockquote></blockquote>
<br>
<q></q>
<ol>
    <li></li>
    <li></li>
</ol>

<ul>
    <li></li>
    <li></li>
</ul>

## Nested lists
<ol>
    <li>Charge Segway</li>
    <li>Pack fro trip
        <ul>
            <li>cell phone</li>
            <li>iPod</li>
        </ul>
    </li>
    <li>Call mom</li>

</ol>

```

</br>

> ### EXAMPLES
---------------------------------------
```html
    <style type="text/css">
        body{
            background-color: #d2b48c;
            margin-left: 20%; /* Sets the left margin to take up to 20% of the page */ 
            margin-right: 20%;/* Sets the right margin to take up to 20% of the page */
            border: 1px dotted gray;
            padding: 10px 10px 10px 10px; /* Padding around around the body of the page*/
            font-family: sans-serif;
        }
    </style>
```


```html
    <style>

p, h4, #myList{
    color:#4800FF;
}

p {
    font-family: Verdana;
    font-size: 14px;
    text-indent: 30px; /* Красная строка*/
    /*line-height: 20px;*/ /* we can use a specified number of pixels*/
    line-height: 1.5; /*we can also use a multiplier for the current font size*/
    word-spacing: 12px; /* will be ignored if text-align: justify; */
}

h2{
    letter-spacing: 10px;
}

h3{
    text-transform: uppercase;
}

#header{
  color:#c32017;
  text-align: center;
}


.new{
    color:#6be5c3;
    font: italic bold 16px Tahoma;
}

.new2{
    font-style: italic;
}

.new3{
    font-weight: bold;
    text-decoration: line-through; /* underline | overline | line-through*/
}

.new4{
    text-align: justify; /* alignment by both left and right sides*/
}

a{
    text-decoration: none; /* to exclude underlining from all links*/
}

    </style>
```