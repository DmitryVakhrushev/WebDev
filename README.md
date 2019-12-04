
<style>
    :not(h1){
        font-family: Consolas;
        font-size: 14px
    }
</style>    

# Head First HTML and CSS

Element = Opening Tag + Content + Closing Tag (p.25)

### Add style using `<style>` tag
```html
    <head>
        <style type="text/css">
            body {background-color: #eaf3da;}
        </style>
    </head>
```
Paragraph: 
`<p>This is a simple paragraph</p>`

Image:
`<img src="images/myPic.png" alt="pictureAbout">`

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

Nested lists
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